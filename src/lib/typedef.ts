export type MapType = Record<'key1' | 'k2' | 'key3', { name: string }>

interface Lengthwise {
  length: number
  girth: number
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  return arg
}

type Arrayish = { [n: string]: unknown }
type A = keyof Arrayish

type ForEach = <T>(
  array: T[],
  callback: (item: T, index: number) => void
) => void

const forEach: ForEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i)
  }
}

const result = forEach([1, 2, 3], (item, index) => {
  console.log(item, index)
})

console.log(result)

type ActionType<T extends string> = {
  type: T
}

const action = <A extends ActionType<string>>(arg: A) => {
  return arg
}

// Language: typescript - type Tuple

type Rgba = [number, number, number, number?]

const color: Rgba = [255, 255, 255]

// Language: typescript - type Union

type Union = string | number | boolean

const choise: Union = 'string'

//  Language: typescript - type Alias

type alphanumeric = string | number
let input: alphanumeric

//  Language: typescript - type Enum

enum Month {
  January,
  February,
  March,
  April,
}

const feb = Month.February

//  Language: typescript - type inferrence !== type annotation

let counter = 0 // is equivalent to let counter: number = 0 typescript will infer the type to be number

// Language: typescript - type Function

const fn = (b: string, c?: number) => {
  return [b, c]
}

interface Fn {
  readonly ssn: string
  a: string
  b: number
}

let fn2: Fn = {
  ssn: '123',
  a: 'string',
  b: 123,
}

// Language: typescript - type Guards
// methods like typeof and instanceof are guards

// Language: typescript - type casting
// type casting is a way to explicitly cast a value to a type , we use the keyword as
// followed by the type we want to cast to and then the value we want to cast
// we can also use operators like instanceof and typeof

// A type assertion brings out the concrete type underlying the interface,
// while type conversions change the way you can use a variable between two concrete types that have the same data structure

// Language: typescript - Generics
// Generics are a way to create a type that is a placeholder for a type that is yet to be determined
// we can use the <> to define a generic type

// Language: typescript - Generic constraints
// Generic constraints are a way to define a generic type that is constrained to a certain type
// we can use the extends keyword to define a generic constraint

function merge<U extends object, V extends object>(obj1: U, obj2: V) {}

interface Collection<T, U> {
  add(item: T): U
}

// Language: typescript - Mapped types
// Mapped types allow us to create new types from existing types
// we can use the keyof operator to create a mapped type

type ExistingType = { a: string; b: number }
let keys: keyof ExistingType

interface EType {
  a: string
  b: number
}

// as const is a keyword that allows us to create a mapped type from an existing type
export const payGrades = {
  low: '1',
  average: '2',
  high: 3,
} as const

type t = typeof payGrades
type payGradesType = keyof t // payGradesType is a keyof typeof payGrades
type payGradesVal = t[payGradesType] // payGradesVal is a typeof payGrades[payGradesType]

// create a mapped type
type MappedTypeName = { [K in keyof EType]: string | number }

// There is an infer keyword that can be used within a condition in a conditional type to put the inferred type into a variable.
// That inferred variable can then be used within the conditional branches.

// infer the whole type T into Another Type U
type InferSomething<T> = T extends infer U ? U : never
type Infered = InferSomething<'hello world'>

// Grab the return type of a function

type GetFnReturnType<T> = T extends (...args: (infer A)[]) => infer Return
  ? Return
  : A
type ReType = GetFnReturnType<() => never>

// typescript - conditional types
type ConditionType<T, U, V> = T extends U ? V : T

const condition: ConditionType<string, number, boolean> = ''

// if and else condition inside conditionnal types

// T extends U means that T is a subtype of U or T is assignable to U
type ConditionType2<T, U, V> = T extends U ? V : V extends U ? T : V

const condition2: ConditionType2<string, number, boolean> = true

// Language: typescript - Utility types
// Utility types are types that are used to help us define our types
// we can use the | operator to create a union type

// Exclude<T, U> - excludes all the types that are assignable to U from T
type Exclude<T, U> = T extends U ? never : T

// Extract<T, U> - extracts all the types that are assignable to U from T
type Extract<T, U> = T extends U ? T : never

// NonNullable<T> - excludes null and undefined from T
type NonNullable<T> = Exclude<T, null | undefined>

// ReturnType<T> - returns the return type of a function
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any

// InstanceType<T> - returns the type of a class instance
type InstanceType<T> = T extends new (...args: any[]) => infer R ? R : any

// ConstructorType<T> - returns the type of a constructor function
type ConstructorType<T> = new (...args: any[]) => T

// Omit<T, K> - omits the properties of K from T
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

// Pick<T, K> - picks the properties of K from T
type Pick<T, K extends keyof T> = { [P in K]: T[P] }
