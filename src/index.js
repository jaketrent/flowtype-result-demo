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

type Ok = [true, number]
type Err = [false, Error]
type Result = Ok | Err

const calcResult = (): Result => {
  try {
    const n = rand()
    if (isOk(n)) return [true, n]
    else throw new Error('Not above 0.5')
  } catch (err) {
    return [false, err]
  }
}

const printResult = (result: Result) =>
  result[0] ? console.log('above 0.5', result[1]) : console.log(result[1])

const main = _ => {
  console.log('starting...')

  printMaybeNull(calcMaybeNull())

  printResult(calcResult())

  console.log('done.')
}

main()
