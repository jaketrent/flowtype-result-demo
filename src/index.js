// @flow

const rand = _ => Math.random()
const isOk = num => num > 0.5

// NULLABLE example

const calcMaybeNull = (): ?number => {
  const n = rand()
  return isOk(n) ? n : null
}

const printMaybeNull = (num: ?number) =>
  num ? console.log('above 0.5', num) : console.log('was null')

// RESULT example

type Ok<T> = {| ok: true, value: T |}
type Err = {| ok: false, error: Error |}
type Result<T> = Ok<T> | Err

const calcResult = (): Result<number> => {
  try {
    const n = rand()
    if (isOk(n)) return { ok: true, value: n }
    else throw new Error('Not above 0.5')
  } catch (error) {
    return { ok: false, error }
  }
}

const printResult = (result: Result<number>) =>
  result.ok ? console.log('above 0.5', result.value) : console.log(result.error)

const main = _ => {
  console.log('starting...')

  printMaybeNull(calcMaybeNull())

  printResult(calcResult())

  console.log('done.')
}

main()
