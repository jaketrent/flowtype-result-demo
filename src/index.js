// @flow

const rand = _ => Math.random()
const isOk = num => num > 0.5

const calcMaybeNull = (): ?number => {
  const n = rand()
  return isOk(n) ? n : null
}

const printMaybeNull = (num: ?number) =>
  num ? console.log('above 0.5', num) : console.log('was null')

const main = _ => {
  console.log('starting...')

  printMaybeNull(calcMaybeNull())

  console.log('done.')
}

main()
