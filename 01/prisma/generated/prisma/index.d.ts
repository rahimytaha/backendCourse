
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model user_role
 * 
 */
export type user_role = $Result.DefaultSelection<Prisma.$user_rolePayload>
/**
 * Model role
 * 
 */
export type role = $Result.DefaultSelection<Prisma.$rolePayload>
/**
 * Model login_transaction
 * 
 */
export type login_transaction = $Result.DefaultSelection<Prisma.$login_transactionPayload>
/**
 * Model course
 * 
 */
export type course = $Result.DefaultSelection<Prisma.$coursePayload>
/**
 * Model course_rate
 * 
 */
export type course_rate = $Result.DefaultSelection<Prisma.$course_ratePayload>
/**
 * Model course_favorite
 * 
 */
export type course_favorite = $Result.DefaultSelection<Prisma.$course_favoritePayload>
/**
 * Model course_comment
 * 
 */
export type course_comment = $Result.DefaultSelection<Prisma.$course_commentPayload>
/**
 * Model course_session
 * 
 */
export type course_session = $Result.DefaultSelection<Prisma.$course_sessionPayload>
/**
 * Model course_type
 * 
 */
export type course_type = $Result.DefaultSelection<Prisma.$course_typePayload>
/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model course_category
 * 
 */
export type course_category = $Result.DefaultSelection<Prisma.$course_categoryPayload>
/**
 * Model order
 * 
 */
export type order = $Result.DefaultSelection<Prisma.$orderPayload>
/**
 * Model course_order
 * 
 */
export type course_order = $Result.DefaultSelection<Prisma.$course_orderPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_role`: Exposes CRUD operations for the **user_role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_roles
    * const user_roles = await prisma.user_role.findMany()
    * ```
    */
  get user_role(): Prisma.user_roleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.roleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.login_transaction`: Exposes CRUD operations for the **login_transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Login_transactions
    * const login_transactions = await prisma.login_transaction.findMany()
    * ```
    */
  get login_transaction(): Prisma.login_transactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.courseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course_rate`: Exposes CRUD operations for the **course_rate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Course_rates
    * const course_rates = await prisma.course_rate.findMany()
    * ```
    */
  get course_rate(): Prisma.course_rateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course_favorite`: Exposes CRUD operations for the **course_favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Course_favorites
    * const course_favorites = await prisma.course_favorite.findMany()
    * ```
    */
  get course_favorite(): Prisma.course_favoriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course_comment`: Exposes CRUD operations for the **course_comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Course_comments
    * const course_comments = await prisma.course_comment.findMany()
    * ```
    */
  get course_comment(): Prisma.course_commentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course_session`: Exposes CRUD operations for the **course_session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Course_sessions
    * const course_sessions = await prisma.course_session.findMany()
    * ```
    */
  get course_session(): Prisma.course_sessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course_type`: Exposes CRUD operations for the **course_type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Course_types
    * const course_types = await prisma.course_type.findMany()
    * ```
    */
  get course_type(): Prisma.course_typeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course_category`: Exposes CRUD operations for the **course_category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Course_categories
    * const course_categories = await prisma.course_category.findMany()
    * ```
    */
  get course_category(): Prisma.course_categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.orderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course_order`: Exposes CRUD operations for the **course_order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Course_orders
    * const course_orders = await prisma.course_order.findMany()
    * ```
    */
  get course_order(): Prisma.course_orderDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    user_role: 'user_role',
    role: 'role',
    login_transaction: 'login_transaction',
    course: 'course',
    course_rate: 'course_rate',
    course_favorite: 'course_favorite',
    course_comment: 'course_comment',
    course_session: 'course_session',
    course_type: 'course_type',
    category: 'category',
    course_category: 'course_category',
    order: 'order',
    course_order: 'course_order'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "user_role" | "role" | "login_transaction" | "course" | "course_rate" | "course_favorite" | "course_comment" | "course_session" | "course_type" | "category" | "course_category" | "order" | "course_order"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      user_role: {
        payload: Prisma.$user_rolePayload<ExtArgs>
        fields: Prisma.user_roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_roleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_roleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          findFirst: {
            args: Prisma.user_roleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_roleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          findMany: {
            args: Prisma.user_roleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>[]
          }
          create: {
            args: Prisma.user_roleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          createMany: {
            args: Prisma.user_roleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_roleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>[]
          }
          delete: {
            args: Prisma.user_roleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          update: {
            args: Prisma.user_roleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          deleteMany: {
            args: Prisma.user_roleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_roleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_roleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>[]
          }
          upsert: {
            args: Prisma.user_roleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          aggregate: {
            args: Prisma.User_roleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_role>
          }
          groupBy: {
            args: Prisma.user_roleGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_roleGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_roleCountArgs<ExtArgs>
            result: $Utils.Optional<User_roleCountAggregateOutputType> | number
          }
        }
      }
      role: {
        payload: Prisma.$rolePayload<ExtArgs>
        fields: Prisma.roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findFirst: {
            args: Prisma.roleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findMany: {
            args: Prisma.roleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          create: {
            args: Prisma.roleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          createMany: {
            args: Prisma.roleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.roleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          delete: {
            args: Prisma.roleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          update: {
            args: Prisma.roleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          deleteMany: {
            args: Prisma.roleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.roleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.roleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          upsert: {
            args: Prisma.roleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.roleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.roleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      login_transaction: {
        payload: Prisma.$login_transactionPayload<ExtArgs>
        fields: Prisma.login_transactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.login_transactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$login_transactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.login_transactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$login_transactionPayload>
          }
          findFirst: {
            args: Prisma.login_transactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$login_transactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.login_transactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$login_transactionPayload>
          }
          findMany: {
            args: Prisma.login_transactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$login_transactionPayload>[]
          }
          create: {
            args: Prisma.login_transactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$login_transactionPayload>
          }
          createMany: {
            args: Prisma.login_transactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.login_transactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$login_transactionPayload>[]
          }
          delete: {
            args: Prisma.login_transactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$login_transactionPayload>
          }
          update: {
            args: Prisma.login_transactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$login_transactionPayload>
          }
          deleteMany: {
            args: Prisma.login_transactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.login_transactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.login_transactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$login_transactionPayload>[]
          }
          upsert: {
            args: Prisma.login_transactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$login_transactionPayload>
          }
          aggregate: {
            args: Prisma.Login_transactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogin_transaction>
          }
          groupBy: {
            args: Prisma.login_transactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Login_transactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.login_transactionCountArgs<ExtArgs>
            result: $Utils.Optional<Login_transactionCountAggregateOutputType> | number
          }
        }
      }
      course: {
        payload: Prisma.$coursePayload<ExtArgs>
        fields: Prisma.courseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.courseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.courseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          findFirst: {
            args: Prisma.courseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.courseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          findMany: {
            args: Prisma.courseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>[]
          }
          create: {
            args: Prisma.courseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          createMany: {
            args: Prisma.courseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.courseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>[]
          }
          delete: {
            args: Prisma.courseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          update: {
            args: Prisma.courseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          deleteMany: {
            args: Prisma.courseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.courseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.courseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>[]
          }
          upsert: {
            args: Prisma.courseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.courseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.courseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      course_rate: {
        payload: Prisma.$course_ratePayload<ExtArgs>
        fields: Prisma.course_rateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.course_rateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_ratePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.course_rateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_ratePayload>
          }
          findFirst: {
            args: Prisma.course_rateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_ratePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.course_rateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_ratePayload>
          }
          findMany: {
            args: Prisma.course_rateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_ratePayload>[]
          }
          create: {
            args: Prisma.course_rateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_ratePayload>
          }
          createMany: {
            args: Prisma.course_rateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.course_rateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_ratePayload>[]
          }
          delete: {
            args: Prisma.course_rateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_ratePayload>
          }
          update: {
            args: Prisma.course_rateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_ratePayload>
          }
          deleteMany: {
            args: Prisma.course_rateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.course_rateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.course_rateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_ratePayload>[]
          }
          upsert: {
            args: Prisma.course_rateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_ratePayload>
          }
          aggregate: {
            args: Prisma.Course_rateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse_rate>
          }
          groupBy: {
            args: Prisma.course_rateGroupByArgs<ExtArgs>
            result: $Utils.Optional<Course_rateGroupByOutputType>[]
          }
          count: {
            args: Prisma.course_rateCountArgs<ExtArgs>
            result: $Utils.Optional<Course_rateCountAggregateOutputType> | number
          }
        }
      }
      course_favorite: {
        payload: Prisma.$course_favoritePayload<ExtArgs>
        fields: Prisma.course_favoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.course_favoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_favoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.course_favoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_favoritePayload>
          }
          findFirst: {
            args: Prisma.course_favoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_favoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.course_favoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_favoritePayload>
          }
          findMany: {
            args: Prisma.course_favoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_favoritePayload>[]
          }
          create: {
            args: Prisma.course_favoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_favoritePayload>
          }
          createMany: {
            args: Prisma.course_favoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.course_favoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_favoritePayload>[]
          }
          delete: {
            args: Prisma.course_favoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_favoritePayload>
          }
          update: {
            args: Prisma.course_favoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_favoritePayload>
          }
          deleteMany: {
            args: Prisma.course_favoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.course_favoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.course_favoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_favoritePayload>[]
          }
          upsert: {
            args: Prisma.course_favoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_favoritePayload>
          }
          aggregate: {
            args: Prisma.Course_favoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse_favorite>
          }
          groupBy: {
            args: Prisma.course_favoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<Course_favoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.course_favoriteCountArgs<ExtArgs>
            result: $Utils.Optional<Course_favoriteCountAggregateOutputType> | number
          }
        }
      }
      course_comment: {
        payload: Prisma.$course_commentPayload<ExtArgs>
        fields: Prisma.course_commentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.course_commentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_commentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.course_commentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_commentPayload>
          }
          findFirst: {
            args: Prisma.course_commentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_commentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.course_commentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_commentPayload>
          }
          findMany: {
            args: Prisma.course_commentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_commentPayload>[]
          }
          create: {
            args: Prisma.course_commentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_commentPayload>
          }
          createMany: {
            args: Prisma.course_commentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.course_commentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_commentPayload>[]
          }
          delete: {
            args: Prisma.course_commentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_commentPayload>
          }
          update: {
            args: Prisma.course_commentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_commentPayload>
          }
          deleteMany: {
            args: Prisma.course_commentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.course_commentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.course_commentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_commentPayload>[]
          }
          upsert: {
            args: Prisma.course_commentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_commentPayload>
          }
          aggregate: {
            args: Prisma.Course_commentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse_comment>
          }
          groupBy: {
            args: Prisma.course_commentGroupByArgs<ExtArgs>
            result: $Utils.Optional<Course_commentGroupByOutputType>[]
          }
          count: {
            args: Prisma.course_commentCountArgs<ExtArgs>
            result: $Utils.Optional<Course_commentCountAggregateOutputType> | number
          }
        }
      }
      course_session: {
        payload: Prisma.$course_sessionPayload<ExtArgs>
        fields: Prisma.course_sessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.course_sessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_sessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.course_sessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_sessionPayload>
          }
          findFirst: {
            args: Prisma.course_sessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_sessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.course_sessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_sessionPayload>
          }
          findMany: {
            args: Prisma.course_sessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_sessionPayload>[]
          }
          create: {
            args: Prisma.course_sessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_sessionPayload>
          }
          createMany: {
            args: Prisma.course_sessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.course_sessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_sessionPayload>[]
          }
          delete: {
            args: Prisma.course_sessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_sessionPayload>
          }
          update: {
            args: Prisma.course_sessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_sessionPayload>
          }
          deleteMany: {
            args: Prisma.course_sessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.course_sessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.course_sessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_sessionPayload>[]
          }
          upsert: {
            args: Prisma.course_sessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_sessionPayload>
          }
          aggregate: {
            args: Prisma.Course_sessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse_session>
          }
          groupBy: {
            args: Prisma.course_sessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Course_sessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.course_sessionCountArgs<ExtArgs>
            result: $Utils.Optional<Course_sessionCountAggregateOutputType> | number
          }
        }
      }
      course_type: {
        payload: Prisma.$course_typePayload<ExtArgs>
        fields: Prisma.course_typeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.course_typeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_typePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.course_typeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_typePayload>
          }
          findFirst: {
            args: Prisma.course_typeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_typePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.course_typeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_typePayload>
          }
          findMany: {
            args: Prisma.course_typeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_typePayload>[]
          }
          create: {
            args: Prisma.course_typeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_typePayload>
          }
          createMany: {
            args: Prisma.course_typeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.course_typeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_typePayload>[]
          }
          delete: {
            args: Prisma.course_typeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_typePayload>
          }
          update: {
            args: Prisma.course_typeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_typePayload>
          }
          deleteMany: {
            args: Prisma.course_typeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.course_typeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.course_typeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_typePayload>[]
          }
          upsert: {
            args: Prisma.course_typeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_typePayload>
          }
          aggregate: {
            args: Prisma.Course_typeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse_type>
          }
          groupBy: {
            args: Prisma.course_typeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Course_typeGroupByOutputType>[]
          }
          count: {
            args: Prisma.course_typeCountArgs<ExtArgs>
            result: $Utils.Optional<Course_typeCountAggregateOutputType> | number
          }
        }
      }
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      course_category: {
        payload: Prisma.$course_categoryPayload<ExtArgs>
        fields: Prisma.course_categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.course_categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.course_categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_categoryPayload>
          }
          findFirst: {
            args: Prisma.course_categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.course_categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_categoryPayload>
          }
          findMany: {
            args: Prisma.course_categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_categoryPayload>[]
          }
          create: {
            args: Prisma.course_categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_categoryPayload>
          }
          createMany: {
            args: Prisma.course_categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.course_categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_categoryPayload>[]
          }
          delete: {
            args: Prisma.course_categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_categoryPayload>
          }
          update: {
            args: Prisma.course_categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_categoryPayload>
          }
          deleteMany: {
            args: Prisma.course_categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.course_categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.course_categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_categoryPayload>[]
          }
          upsert: {
            args: Prisma.course_categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_categoryPayload>
          }
          aggregate: {
            args: Prisma.Course_categoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse_category>
          }
          groupBy: {
            args: Prisma.course_categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Course_categoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.course_categoryCountArgs<ExtArgs>
            result: $Utils.Optional<Course_categoryCountAggregateOutputType> | number
          }
        }
      }
      order: {
        payload: Prisma.$orderPayload<ExtArgs>
        fields: Prisma.orderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findFirst: {
            args: Prisma.orderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findMany: {
            args: Prisma.orderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          create: {
            args: Prisma.orderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          createMany: {
            args: Prisma.orderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.orderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          delete: {
            args: Prisma.orderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          update: {
            args: Prisma.orderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          deleteMany: {
            args: Prisma.orderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.orderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.orderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          upsert: {
            args: Prisma.orderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.orderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.orderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      course_order: {
        payload: Prisma.$course_orderPayload<ExtArgs>
        fields: Prisma.course_orderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.course_orderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_orderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.course_orderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_orderPayload>
          }
          findFirst: {
            args: Prisma.course_orderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_orderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.course_orderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_orderPayload>
          }
          findMany: {
            args: Prisma.course_orderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_orderPayload>[]
          }
          create: {
            args: Prisma.course_orderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_orderPayload>
          }
          createMany: {
            args: Prisma.course_orderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.course_orderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_orderPayload>[]
          }
          delete: {
            args: Prisma.course_orderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_orderPayload>
          }
          update: {
            args: Prisma.course_orderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_orderPayload>
          }
          deleteMany: {
            args: Prisma.course_orderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.course_orderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.course_orderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_orderPayload>[]
          }
          upsert: {
            args: Prisma.course_orderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_orderPayload>
          }
          aggregate: {
            args: Prisma.Course_orderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse_order>
          }
          groupBy: {
            args: Prisma.course_orderGroupByArgs<ExtArgs>
            result: $Utils.Optional<Course_orderGroupByOutputType>[]
          }
          count: {
            args: Prisma.course_orderCountArgs<ExtArgs>
            result: $Utils.Optional<Course_orderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    user_role?: user_roleOmit
    role?: roleOmit
    login_transaction?: login_transactionOmit
    course?: courseOmit
    course_rate?: course_rateOmit
    course_favorite?: course_favoriteOmit
    course_comment?: course_commentOmit
    course_session?: course_sessionOmit
    course_type?: course_typeOmit
    category?: categoryOmit
    course_category?: course_categoryOmit
    order?: orderOmit
    course_order?: course_orderOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userRoles: number
    loginTransactions: number
    courses: number
    courseRates: number
    courseFavorites: number
    courseComments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRoles?: boolean | UserCountOutputTypeCountUserRolesArgs
    loginTransactions?: boolean | UserCountOutputTypeCountLoginTransactionsArgs
    courses?: boolean | UserCountOutputTypeCountCoursesArgs
    courseRates?: boolean | UserCountOutputTypeCountCourseRatesArgs
    courseFavorites?: boolean | UserCountOutputTypeCountCourseFavoritesArgs
    courseComments?: boolean | UserCountOutputTypeCountCourseCommentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_roleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLoginTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: login_transactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCourseRatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: course_rateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCourseFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: course_favoriteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCourseCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: course_commentWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    userRoles: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRoles?: boolean | RoleCountOutputTypeCountUserRolesArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_roleWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    courseRates: number
    courseFavorites: number
    courseSessions: number
    courseCategories: number
    courseComments: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseRates?: boolean | CourseCountOutputTypeCountCourseRatesArgs
    courseFavorites?: boolean | CourseCountOutputTypeCountCourseFavoritesArgs
    courseSessions?: boolean | CourseCountOutputTypeCountCourseSessionsArgs
    courseCategories?: boolean | CourseCountOutputTypeCountCourseCategoriesArgs
    courseComments?: boolean | CourseCountOutputTypeCountCourseCommentsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCourseRatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: course_rateWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCourseFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: course_favoriteWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCourseSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: course_sessionWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCourseCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: course_categoryWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCourseCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: course_commentWhereInput
  }


  /**
   * Count Type Course_commentCountOutputType
   */

  export type Course_commentCountOutputType = {
    courseComments: number
  }

  export type Course_commentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseComments?: boolean | Course_commentCountOutputTypeCountCourseCommentsArgs
  }

  // Custom InputTypes
  /**
   * Course_commentCountOutputType without action
   */
  export type Course_commentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course_commentCountOutputType
     */
    select?: Course_commentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Course_commentCountOutputType without action
   */
  export type Course_commentCountOutputTypeCountCourseCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: course_commentWhereInput
  }


  /**
   * Count Type Course_typeCountOutputType
   */

  export type Course_typeCountOutputType = {
    courses: number
  }

  export type Course_typeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | Course_typeCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * Course_typeCountOutputType without action
   */
  export type Course_typeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course_typeCountOutputType
     */
    select?: Course_typeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Course_typeCountOutputType without action
   */
  export type Course_typeCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courseWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    courseCategories: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseCategories?: boolean | CategoryCountOutputTypeCountCourseCategoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountCourseCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: course_categoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phone_number: string | null
    national_code: string | null
    location: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phone_number: string | null
    national_code: string | null
    location: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phone_number: number
    national_code: number
    location: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone_number?: true
    national_code?: true
    location?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone_number?: true
    national_code?: true
    location?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone_number?: true
    national_code?: true
    location?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    phone_number: string
    national_code: string | null
    location: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    national_code?: boolean
    location?: boolean
    userRoles?: boolean | user$userRolesArgs<ExtArgs>
    loginTransactions?: boolean | user$loginTransactionsArgs<ExtArgs>
    courses?: boolean | user$coursesArgs<ExtArgs>
    courseRates?: boolean | user$courseRatesArgs<ExtArgs>
    courseFavorites?: boolean | user$courseFavoritesArgs<ExtArgs>
    courseComments?: boolean | user$courseCommentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    national_code?: boolean
    location?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    national_code?: boolean
    location?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    national_code?: boolean
    location?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "phone_number" | "national_code" | "location", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRoles?: boolean | user$userRolesArgs<ExtArgs>
    loginTransactions?: boolean | user$loginTransactionsArgs<ExtArgs>
    courses?: boolean | user$coursesArgs<ExtArgs>
    courseRates?: boolean | user$courseRatesArgs<ExtArgs>
    courseFavorites?: boolean | user$courseFavoritesArgs<ExtArgs>
    courseComments?: boolean | user$courseCommentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      userRoles: Prisma.$user_rolePayload<ExtArgs>[]
      loginTransactions: Prisma.$login_transactionPayload<ExtArgs>[]
      courses: Prisma.$coursePayload<ExtArgs>[]
      courseRates: Prisma.$course_ratePayload<ExtArgs>[]
      courseFavorites: Prisma.$course_favoritePayload<ExtArgs>[]
      courseComments: Prisma.$course_commentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      phone_number: string
      national_code: string | null
      location: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userRoles<T extends user$userRolesArgs<ExtArgs> = {}>(args?: Subset<T, user$userRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    loginTransactions<T extends user$loginTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, user$loginTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$login_transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courses<T extends user$coursesArgs<ExtArgs> = {}>(args?: Subset<T, user$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courseRates<T extends user$courseRatesArgs<ExtArgs> = {}>(args?: Subset<T, user$courseRatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_ratePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courseFavorites<T extends user$courseFavoritesArgs<ExtArgs> = {}>(args?: Subset<T, user$courseFavoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_favoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courseComments<T extends user$courseCommentsArgs<ExtArgs> = {}>(args?: Subset<T, user$courseCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_commentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly phone_number: FieldRef<"user", 'String'>
    readonly national_code: FieldRef<"user", 'String'>
    readonly location: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.userRoles
   */
  export type user$userRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    where?: user_roleWhereInput
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    cursor?: user_roleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[]
  }

  /**
   * user.loginTransactions
   */
  export type user$loginTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login_transaction
     */
    select?: login_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login_transaction
     */
    omit?: login_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: login_transactionInclude<ExtArgs> | null
    where?: login_transactionWhereInput
    orderBy?: login_transactionOrderByWithRelationInput | login_transactionOrderByWithRelationInput[]
    cursor?: login_transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Login_transactionScalarFieldEnum | Login_transactionScalarFieldEnum[]
  }

  /**
   * user.courses
   */
  export type user$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    where?: courseWhereInput
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    cursor?: courseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * user.courseRates
   */
  export type user$courseRatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_rate
     */
    select?: course_rateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_rate
     */
    omit?: course_rateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_rateInclude<ExtArgs> | null
    where?: course_rateWhereInput
    orderBy?: course_rateOrderByWithRelationInput | course_rateOrderByWithRelationInput[]
    cursor?: course_rateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Course_rateScalarFieldEnum | Course_rateScalarFieldEnum[]
  }

  /**
   * user.courseFavorites
   */
  export type user$courseFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_favorite
     */
    select?: course_favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_favorite
     */
    omit?: course_favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_favoriteInclude<ExtArgs> | null
    where?: course_favoriteWhereInput
    orderBy?: course_favoriteOrderByWithRelationInput | course_favoriteOrderByWithRelationInput[]
    cursor?: course_favoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Course_favoriteScalarFieldEnum | Course_favoriteScalarFieldEnum[]
  }

  /**
   * user.courseComments
   */
  export type user$courseCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_comment
     */
    select?: course_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_comment
     */
    omit?: course_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_commentInclude<ExtArgs> | null
    where?: course_commentWhereInput
    orderBy?: course_commentOrderByWithRelationInput | course_commentOrderByWithRelationInput[]
    cursor?: course_commentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Course_commentScalarFieldEnum | Course_commentScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model user_role
   */

  export type AggregateUser_role = {
    _count: User_roleCountAggregateOutputType | null
    _min: User_roleMinAggregateOutputType | null
    _max: User_roleMaxAggregateOutputType | null
  }

  export type User_roleMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    role_id: string | null
    isActive: boolean | null
    created_at: Date | null
  }

  export type User_roleMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    role_id: string | null
    isActive: boolean | null
    created_at: Date | null
  }

  export type User_roleCountAggregateOutputType = {
    id: number
    user_id: number
    role_id: number
    isActive: number
    created_at: number
    _all: number
  }


  export type User_roleMinAggregateInputType = {
    id?: true
    user_id?: true
    role_id?: true
    isActive?: true
    created_at?: true
  }

  export type User_roleMaxAggregateInputType = {
    id?: true
    user_id?: true
    role_id?: true
    isActive?: true
    created_at?: true
  }

  export type User_roleCountAggregateInputType = {
    id?: true
    user_id?: true
    role_id?: true
    isActive?: true
    created_at?: true
    _all?: true
  }

  export type User_roleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_role to aggregate.
     */
    where?: user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_roles
    **/
    _count?: true | User_roleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_roleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_roleMaxAggregateInputType
  }

  export type GetUser_roleAggregateType<T extends User_roleAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_role[P]>
      : GetScalarType<T[P], AggregateUser_role[P]>
  }




  export type user_roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_roleWhereInput
    orderBy?: user_roleOrderByWithAggregationInput | user_roleOrderByWithAggregationInput[]
    by: User_roleScalarFieldEnum[] | User_roleScalarFieldEnum
    having?: user_roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_roleCountAggregateInputType | true
    _min?: User_roleMinAggregateInputType
    _max?: User_roleMaxAggregateInputType
  }

  export type User_roleGroupByOutputType = {
    id: string
    user_id: string
    role_id: string
    isActive: boolean
    created_at: Date
    _count: User_roleCountAggregateOutputType | null
    _min: User_roleMinAggregateOutputType | null
    _max: User_roleMaxAggregateOutputType | null
  }

  type GetUser_roleGroupByPayload<T extends user_roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_roleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_roleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_roleGroupByOutputType[P]>
            : GetScalarType<T[P], User_roleGroupByOutputType[P]>
        }
      >
    >


  export type user_roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    role_id?: boolean
    isActive?: boolean
    created_at?: boolean
    role?: boolean | roleDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_role"]>

  export type user_roleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    role_id?: boolean
    isActive?: boolean
    created_at?: boolean
    role?: boolean | roleDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_role"]>

  export type user_roleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    role_id?: boolean
    isActive?: boolean
    created_at?: boolean
    role?: boolean | roleDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_role"]>

  export type user_roleSelectScalar = {
    id?: boolean
    user_id?: boolean
    role_id?: boolean
    isActive?: boolean
    created_at?: boolean
  }

  export type user_roleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "role_id" | "isActive" | "created_at", ExtArgs["result"]["user_role"]>
  export type user_roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | roleDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type user_roleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | roleDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type user_roleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | roleDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $user_rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_role"
    objects: {
      role: Prisma.$rolePayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      role_id: string
      isActive: boolean
      created_at: Date
    }, ExtArgs["result"]["user_role"]>
    composites: {}
  }

  type user_roleGetPayload<S extends boolean | null | undefined | user_roleDefaultArgs> = $Result.GetResult<Prisma.$user_rolePayload, S>

  type user_roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_roleCountAggregateInputType | true
    }

  export interface user_roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_role'], meta: { name: 'user_role' } }
    /**
     * Find zero or one User_role that matches the filter.
     * @param {user_roleFindUniqueArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_roleFindUniqueArgs>(args: SelectSubset<T, user_roleFindUniqueArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_roleFindUniqueOrThrowArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_roleFindUniqueOrThrowArgs>(args: SelectSubset<T, user_roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleFindFirstArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_roleFindFirstArgs>(args?: SelectSubset<T, user_roleFindFirstArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleFindFirstOrThrowArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_roleFindFirstOrThrowArgs>(args?: SelectSubset<T, user_roleFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_roles
     * const user_roles = await prisma.user_role.findMany()
     * 
     * // Get first 10 User_roles
     * const user_roles = await prisma.user_role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_roleWithIdOnly = await prisma.user_role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_roleFindManyArgs>(args?: SelectSubset<T, user_roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_role.
     * @param {user_roleCreateArgs} args - Arguments to create a User_role.
     * @example
     * // Create one User_role
     * const User_role = await prisma.user_role.create({
     *   data: {
     *     // ... data to create a User_role
     *   }
     * })
     * 
     */
    create<T extends user_roleCreateArgs>(args: SelectSubset<T, user_roleCreateArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_roles.
     * @param {user_roleCreateManyArgs} args - Arguments to create many User_roles.
     * @example
     * // Create many User_roles
     * const user_role = await prisma.user_role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_roleCreateManyArgs>(args?: SelectSubset<T, user_roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_roles and returns the data saved in the database.
     * @param {user_roleCreateManyAndReturnArgs} args - Arguments to create many User_roles.
     * @example
     * // Create many User_roles
     * const user_role = await prisma.user_role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_roles and only return the `id`
     * const user_roleWithIdOnly = await prisma.user_role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_roleCreateManyAndReturnArgs>(args?: SelectSubset<T, user_roleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_role.
     * @param {user_roleDeleteArgs} args - Arguments to delete one User_role.
     * @example
     * // Delete one User_role
     * const User_role = await prisma.user_role.delete({
     *   where: {
     *     // ... filter to delete one User_role
     *   }
     * })
     * 
     */
    delete<T extends user_roleDeleteArgs>(args: SelectSubset<T, user_roleDeleteArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_role.
     * @param {user_roleUpdateArgs} args - Arguments to update one User_role.
     * @example
     * // Update one User_role
     * const user_role = await prisma.user_role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_roleUpdateArgs>(args: SelectSubset<T, user_roleUpdateArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_roles.
     * @param {user_roleDeleteManyArgs} args - Arguments to filter User_roles to delete.
     * @example
     * // Delete a few User_roles
     * const { count } = await prisma.user_role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_roleDeleteManyArgs>(args?: SelectSubset<T, user_roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_roles
     * const user_role = await prisma.user_role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_roleUpdateManyArgs>(args: SelectSubset<T, user_roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_roles and returns the data updated in the database.
     * @param {user_roleUpdateManyAndReturnArgs} args - Arguments to update many User_roles.
     * @example
     * // Update many User_roles
     * const user_role = await prisma.user_role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_roles and only return the `id`
     * const user_roleWithIdOnly = await prisma.user_role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_roleUpdateManyAndReturnArgs>(args: SelectSubset<T, user_roleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_role.
     * @param {user_roleUpsertArgs} args - Arguments to update or create a User_role.
     * @example
     * // Update or create a User_role
     * const user_role = await prisma.user_role.upsert({
     *   create: {
     *     // ... data to create a User_role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_role we want to update
     *   }
     * })
     */
    upsert<T extends user_roleUpsertArgs>(args: SelectSubset<T, user_roleUpsertArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleCountArgs} args - Arguments to filter User_roles to count.
     * @example
     * // Count the number of User_roles
     * const count = await prisma.user_role.count({
     *   where: {
     *     // ... the filter for the User_roles we want to count
     *   }
     * })
    **/
    count<T extends user_roleCountArgs>(
      args?: Subset<T, user_roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_roleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_roleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_roleAggregateArgs>(args: Subset<T, User_roleAggregateArgs>): Prisma.PrismaPromise<GetUser_roleAggregateType<T>>

    /**
     * Group by User_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_roleGroupByArgs['orderBy'] }
        : { orderBy?: user_roleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_roleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_role model
   */
  readonly fields: user_roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends roleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, roleDefaultArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_role model
   */
  interface user_roleFieldRefs {
    readonly id: FieldRef<"user_role", 'String'>
    readonly user_id: FieldRef<"user_role", 'String'>
    readonly role_id: FieldRef<"user_role", 'String'>
    readonly isActive: FieldRef<"user_role", 'Boolean'>
    readonly created_at: FieldRef<"user_role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_role findUnique
   */
  export type user_roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_role to fetch.
     */
    where: user_roleWhereUniqueInput
  }

  /**
   * user_role findUniqueOrThrow
   */
  export type user_roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_role to fetch.
     */
    where: user_roleWhereUniqueInput
  }

  /**
   * user_role findFirst
   */
  export type user_roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_role to fetch.
     */
    where?: user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_roles.
     */
    cursor?: user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[]
  }

  /**
   * user_role findFirstOrThrow
   */
  export type user_roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_role to fetch.
     */
    where?: user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_roles.
     */
    cursor?: user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[]
  }

  /**
   * user_role findMany
   */
  export type user_roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_roles to fetch.
     */
    where?: user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_roles.
     */
    cursor?: user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[]
  }

  /**
   * user_role create
   */
  export type user_roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * The data needed to create a user_role.
     */
    data: XOR<user_roleCreateInput, user_roleUncheckedCreateInput>
  }

  /**
   * user_role createMany
   */
  export type user_roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_roles.
     */
    data: user_roleCreateManyInput | user_roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_role createManyAndReturn
   */
  export type user_roleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * The data used to create many user_roles.
     */
    data: user_roleCreateManyInput | user_roleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_role update
   */
  export type user_roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * The data needed to update a user_role.
     */
    data: XOR<user_roleUpdateInput, user_roleUncheckedUpdateInput>
    /**
     * Choose, which user_role to update.
     */
    where: user_roleWhereUniqueInput
  }

  /**
   * user_role updateMany
   */
  export type user_roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_roles.
     */
    data: XOR<user_roleUpdateManyMutationInput, user_roleUncheckedUpdateManyInput>
    /**
     * Filter which user_roles to update
     */
    where?: user_roleWhereInput
    /**
     * Limit how many user_roles to update.
     */
    limit?: number
  }

  /**
   * user_role updateManyAndReturn
   */
  export type user_roleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * The data used to update user_roles.
     */
    data: XOR<user_roleUpdateManyMutationInput, user_roleUncheckedUpdateManyInput>
    /**
     * Filter which user_roles to update
     */
    where?: user_roleWhereInput
    /**
     * Limit how many user_roles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_role upsert
   */
  export type user_roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * The filter to search for the user_role to update in case it exists.
     */
    where: user_roleWhereUniqueInput
    /**
     * In case the user_role found by the `where` argument doesn't exist, create a new user_role with this data.
     */
    create: XOR<user_roleCreateInput, user_roleUncheckedCreateInput>
    /**
     * In case the user_role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_roleUpdateInput, user_roleUncheckedUpdateInput>
  }

  /**
   * user_role delete
   */
  export type user_roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter which user_role to delete.
     */
    where: user_roleWhereUniqueInput
  }

  /**
   * user_role deleteMany
   */
  export type user_roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_roles to delete
     */
    where?: user_roleWhereInput
    /**
     * Limit how many user_roles to delete.
     */
    limit?: number
  }

  /**
   * user_role without action
   */
  export type user_roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
  }


  /**
   * Model role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role to aggregate.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roleWhereInput
    orderBy?: roleOrderByWithAggregationInput | roleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userRoles?: boolean | role$userRolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type roleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type roleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type roleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type roleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["role"]>
  export type roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRoles?: boolean | role$userRolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type roleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type roleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "role"
    objects: {
      userRoles: Prisma.$user_rolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type roleGetPayload<S extends boolean | null | undefined | roleDefaultArgs> = $Result.GetResult<Prisma.$rolePayload, S>

  type roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['role'], meta: { name: 'role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {roleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends roleFindUniqueArgs>(args: SelectSubset<T, roleFindUniqueArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {roleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends roleFindUniqueOrThrowArgs>(args: SelectSubset<T, roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends roleFindFirstArgs>(args?: SelectSubset<T, roleFindFirstArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends roleFindFirstOrThrowArgs>(args?: SelectSubset<T, roleFindFirstOrThrowArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends roleFindManyArgs>(args?: SelectSubset<T, roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {roleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends roleCreateArgs>(args: SelectSubset<T, roleCreateArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {roleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends roleCreateManyArgs>(args?: SelectSubset<T, roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {roleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends roleCreateManyAndReturnArgs>(args?: SelectSubset<T, roleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {roleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends roleDeleteArgs>(args: SelectSubset<T, roleDeleteArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {roleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends roleUpdateArgs>(args: SelectSubset<T, roleUpdateArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {roleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends roleDeleteManyArgs>(args?: SelectSubset<T, roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends roleUpdateManyArgs>(args: SelectSubset<T, roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {roleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends roleUpdateManyAndReturnArgs>(args: SelectSubset<T, roleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {roleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends roleUpsertArgs>(args: SelectSubset<T, roleUpsertArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends roleCountArgs>(
      args?: Subset<T, roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roleGroupByArgs['orderBy'] }
        : { orderBy?: roleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the role model
   */
  readonly fields: roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userRoles<T extends role$userRolesArgs<ExtArgs> = {}>(args?: Subset<T, role$userRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the role model
   */
  interface roleFieldRefs {
    readonly id: FieldRef<"role", 'String'>
    readonly name: FieldRef<"role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * role findUnique
   */
  export type roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findUniqueOrThrow
   */
  export type roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findFirst
   */
  export type roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findFirstOrThrow
   */
  export type roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findMany
   */
  export type roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role create
   */
  export type roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The data needed to create a role.
     */
    data: XOR<roleCreateInput, roleUncheckedCreateInput>
  }

  /**
   * role createMany
   */
  export type roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: roleCreateManyInput | roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * role createManyAndReturn
   */
  export type roleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * The data used to create many roles.
     */
    data: roleCreateManyInput | roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * role update
   */
  export type roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The data needed to update a role.
     */
    data: XOR<roleUpdateInput, roleUncheckedUpdateInput>
    /**
     * Choose, which role to update.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role updateMany
   */
  export type roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * role updateManyAndReturn
   */
  export type roleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * The data used to update roles.
     */
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * role upsert
   */
  export type roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The filter to search for the role to update in case it exists.
     */
    where: roleWhereUniqueInput
    /**
     * In case the role found by the `where` argument doesn't exist, create a new role with this data.
     */
    create: XOR<roleCreateInput, roleUncheckedCreateInput>
    /**
     * In case the role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roleUpdateInput, roleUncheckedUpdateInput>
  }

  /**
   * role delete
   */
  export type roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter which role to delete.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role deleteMany
   */
  export type roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to delete.
     */
    limit?: number
  }

  /**
   * role.userRoles
   */
  export type role$userRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    where?: user_roleWhereInput
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    cursor?: user_roleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[]
  }

  /**
   * role without action
   */
  export type roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
  }


  /**
   * Model login_transaction
   */

  export type AggregateLogin_transaction = {
    _count: Login_transactionCountAggregateOutputType | null
    _min: Login_transactionMinAggregateOutputType | null
    _max: Login_transactionMaxAggregateOutputType | null
  }

  export type Login_transactionMinAggregateOutputType = {
    id: string | null
    ip: string | null
    login_date: Date | null
    user_id: string | null
  }

  export type Login_transactionMaxAggregateOutputType = {
    id: string | null
    ip: string | null
    login_date: Date | null
    user_id: string | null
  }

  export type Login_transactionCountAggregateOutputType = {
    id: number
    ip: number
    login_date: number
    user_id: number
    _all: number
  }


  export type Login_transactionMinAggregateInputType = {
    id?: true
    ip?: true
    login_date?: true
    user_id?: true
  }

  export type Login_transactionMaxAggregateInputType = {
    id?: true
    ip?: true
    login_date?: true
    user_id?: true
  }

  export type Login_transactionCountAggregateInputType = {
    id?: true
    ip?: true
    login_date?: true
    user_id?: true
    _all?: true
  }

  export type Login_transactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which login_transaction to aggregate.
     */
    where?: login_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of login_transactions to fetch.
     */
    orderBy?: login_transactionOrderByWithRelationInput | login_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: login_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` login_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` login_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned login_transactions
    **/
    _count?: true | Login_transactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Login_transactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Login_transactionMaxAggregateInputType
  }

  export type GetLogin_transactionAggregateType<T extends Login_transactionAggregateArgs> = {
        [P in keyof T & keyof AggregateLogin_transaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogin_transaction[P]>
      : GetScalarType<T[P], AggregateLogin_transaction[P]>
  }




  export type login_transactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: login_transactionWhereInput
    orderBy?: login_transactionOrderByWithAggregationInput | login_transactionOrderByWithAggregationInput[]
    by: Login_transactionScalarFieldEnum[] | Login_transactionScalarFieldEnum
    having?: login_transactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Login_transactionCountAggregateInputType | true
    _min?: Login_transactionMinAggregateInputType
    _max?: Login_transactionMaxAggregateInputType
  }

  export type Login_transactionGroupByOutputType = {
    id: string
    ip: string
    login_date: Date
    user_id: string
    _count: Login_transactionCountAggregateOutputType | null
    _min: Login_transactionMinAggregateOutputType | null
    _max: Login_transactionMaxAggregateOutputType | null
  }

  type GetLogin_transactionGroupByPayload<T extends login_transactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Login_transactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Login_transactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Login_transactionGroupByOutputType[P]>
            : GetScalarType<T[P], Login_transactionGroupByOutputType[P]>
        }
      >
    >


  export type login_transactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    login_date?: boolean
    user_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["login_transaction"]>

  export type login_transactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    login_date?: boolean
    user_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["login_transaction"]>

  export type login_transactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    login_date?: boolean
    user_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["login_transaction"]>

  export type login_transactionSelectScalar = {
    id?: boolean
    ip?: boolean
    login_date?: boolean
    user_id?: boolean
  }

  export type login_transactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ip" | "login_date" | "user_id", ExtArgs["result"]["login_transaction"]>
  export type login_transactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type login_transactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type login_transactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $login_transactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "login_transaction"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ip: string
      login_date: Date
      user_id: string
    }, ExtArgs["result"]["login_transaction"]>
    composites: {}
  }

  type login_transactionGetPayload<S extends boolean | null | undefined | login_transactionDefaultArgs> = $Result.GetResult<Prisma.$login_transactionPayload, S>

  type login_transactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<login_transactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Login_transactionCountAggregateInputType | true
    }

  export interface login_transactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['login_transaction'], meta: { name: 'login_transaction' } }
    /**
     * Find zero or one Login_transaction that matches the filter.
     * @param {login_transactionFindUniqueArgs} args - Arguments to find a Login_transaction
     * @example
     * // Get one Login_transaction
     * const login_transaction = await prisma.login_transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends login_transactionFindUniqueArgs>(args: SelectSubset<T, login_transactionFindUniqueArgs<ExtArgs>>): Prisma__login_transactionClient<$Result.GetResult<Prisma.$login_transactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Login_transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {login_transactionFindUniqueOrThrowArgs} args - Arguments to find a Login_transaction
     * @example
     * // Get one Login_transaction
     * const login_transaction = await prisma.login_transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends login_transactionFindUniqueOrThrowArgs>(args: SelectSubset<T, login_transactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__login_transactionClient<$Result.GetResult<Prisma.$login_transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Login_transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {login_transactionFindFirstArgs} args - Arguments to find a Login_transaction
     * @example
     * // Get one Login_transaction
     * const login_transaction = await prisma.login_transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends login_transactionFindFirstArgs>(args?: SelectSubset<T, login_transactionFindFirstArgs<ExtArgs>>): Prisma__login_transactionClient<$Result.GetResult<Prisma.$login_transactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Login_transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {login_transactionFindFirstOrThrowArgs} args - Arguments to find a Login_transaction
     * @example
     * // Get one Login_transaction
     * const login_transaction = await prisma.login_transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends login_transactionFindFirstOrThrowArgs>(args?: SelectSubset<T, login_transactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__login_transactionClient<$Result.GetResult<Prisma.$login_transactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Login_transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {login_transactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Login_transactions
     * const login_transactions = await prisma.login_transaction.findMany()
     * 
     * // Get first 10 Login_transactions
     * const login_transactions = await prisma.login_transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const login_transactionWithIdOnly = await prisma.login_transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends login_transactionFindManyArgs>(args?: SelectSubset<T, login_transactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$login_transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Login_transaction.
     * @param {login_transactionCreateArgs} args - Arguments to create a Login_transaction.
     * @example
     * // Create one Login_transaction
     * const Login_transaction = await prisma.login_transaction.create({
     *   data: {
     *     // ... data to create a Login_transaction
     *   }
     * })
     * 
     */
    create<T extends login_transactionCreateArgs>(args: SelectSubset<T, login_transactionCreateArgs<ExtArgs>>): Prisma__login_transactionClient<$Result.GetResult<Prisma.$login_transactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Login_transactions.
     * @param {login_transactionCreateManyArgs} args - Arguments to create many Login_transactions.
     * @example
     * // Create many Login_transactions
     * const login_transaction = await prisma.login_transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends login_transactionCreateManyArgs>(args?: SelectSubset<T, login_transactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Login_transactions and returns the data saved in the database.
     * @param {login_transactionCreateManyAndReturnArgs} args - Arguments to create many Login_transactions.
     * @example
     * // Create many Login_transactions
     * const login_transaction = await prisma.login_transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Login_transactions and only return the `id`
     * const login_transactionWithIdOnly = await prisma.login_transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends login_transactionCreateManyAndReturnArgs>(args?: SelectSubset<T, login_transactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$login_transactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Login_transaction.
     * @param {login_transactionDeleteArgs} args - Arguments to delete one Login_transaction.
     * @example
     * // Delete one Login_transaction
     * const Login_transaction = await prisma.login_transaction.delete({
     *   where: {
     *     // ... filter to delete one Login_transaction
     *   }
     * })
     * 
     */
    delete<T extends login_transactionDeleteArgs>(args: SelectSubset<T, login_transactionDeleteArgs<ExtArgs>>): Prisma__login_transactionClient<$Result.GetResult<Prisma.$login_transactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Login_transaction.
     * @param {login_transactionUpdateArgs} args - Arguments to update one Login_transaction.
     * @example
     * // Update one Login_transaction
     * const login_transaction = await prisma.login_transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends login_transactionUpdateArgs>(args: SelectSubset<T, login_transactionUpdateArgs<ExtArgs>>): Prisma__login_transactionClient<$Result.GetResult<Prisma.$login_transactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Login_transactions.
     * @param {login_transactionDeleteManyArgs} args - Arguments to filter Login_transactions to delete.
     * @example
     * // Delete a few Login_transactions
     * const { count } = await prisma.login_transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends login_transactionDeleteManyArgs>(args?: SelectSubset<T, login_transactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Login_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {login_transactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Login_transactions
     * const login_transaction = await prisma.login_transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends login_transactionUpdateManyArgs>(args: SelectSubset<T, login_transactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Login_transactions and returns the data updated in the database.
     * @param {login_transactionUpdateManyAndReturnArgs} args - Arguments to update many Login_transactions.
     * @example
     * // Update many Login_transactions
     * const login_transaction = await prisma.login_transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Login_transactions and only return the `id`
     * const login_transactionWithIdOnly = await prisma.login_transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends login_transactionUpdateManyAndReturnArgs>(args: SelectSubset<T, login_transactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$login_transactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Login_transaction.
     * @param {login_transactionUpsertArgs} args - Arguments to update or create a Login_transaction.
     * @example
     * // Update or create a Login_transaction
     * const login_transaction = await prisma.login_transaction.upsert({
     *   create: {
     *     // ... data to create a Login_transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Login_transaction we want to update
     *   }
     * })
     */
    upsert<T extends login_transactionUpsertArgs>(args: SelectSubset<T, login_transactionUpsertArgs<ExtArgs>>): Prisma__login_transactionClient<$Result.GetResult<Prisma.$login_transactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Login_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {login_transactionCountArgs} args - Arguments to filter Login_transactions to count.
     * @example
     * // Count the number of Login_transactions
     * const count = await prisma.login_transaction.count({
     *   where: {
     *     // ... the filter for the Login_transactions we want to count
     *   }
     * })
    **/
    count<T extends login_transactionCountArgs>(
      args?: Subset<T, login_transactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Login_transactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Login_transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Login_transactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Login_transactionAggregateArgs>(args: Subset<T, Login_transactionAggregateArgs>): Prisma.PrismaPromise<GetLogin_transactionAggregateType<T>>

    /**
     * Group by Login_transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {login_transactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends login_transactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: login_transactionGroupByArgs['orderBy'] }
        : { orderBy?: login_transactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, login_transactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogin_transactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the login_transaction model
   */
  readonly fields: login_transactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for login_transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__login_transactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the login_transaction model
   */
  interface login_transactionFieldRefs {
    readonly id: FieldRef<"login_transaction", 'String'>
    readonly ip: FieldRef<"login_transaction", 'String'>
    readonly login_date: FieldRef<"login_transaction", 'DateTime'>
    readonly user_id: FieldRef<"login_transaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * login_transaction findUnique
   */
  export type login_transactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login_transaction
     */
    select?: login_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login_transaction
     */
    omit?: login_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: login_transactionInclude<ExtArgs> | null
    /**
     * Filter, which login_transaction to fetch.
     */
    where: login_transactionWhereUniqueInput
  }

  /**
   * login_transaction findUniqueOrThrow
   */
  export type login_transactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login_transaction
     */
    select?: login_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login_transaction
     */
    omit?: login_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: login_transactionInclude<ExtArgs> | null
    /**
     * Filter, which login_transaction to fetch.
     */
    where: login_transactionWhereUniqueInput
  }

  /**
   * login_transaction findFirst
   */
  export type login_transactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login_transaction
     */
    select?: login_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login_transaction
     */
    omit?: login_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: login_transactionInclude<ExtArgs> | null
    /**
     * Filter, which login_transaction to fetch.
     */
    where?: login_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of login_transactions to fetch.
     */
    orderBy?: login_transactionOrderByWithRelationInput | login_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for login_transactions.
     */
    cursor?: login_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` login_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` login_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of login_transactions.
     */
    distinct?: Login_transactionScalarFieldEnum | Login_transactionScalarFieldEnum[]
  }

  /**
   * login_transaction findFirstOrThrow
   */
  export type login_transactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login_transaction
     */
    select?: login_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login_transaction
     */
    omit?: login_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: login_transactionInclude<ExtArgs> | null
    /**
     * Filter, which login_transaction to fetch.
     */
    where?: login_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of login_transactions to fetch.
     */
    orderBy?: login_transactionOrderByWithRelationInput | login_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for login_transactions.
     */
    cursor?: login_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` login_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` login_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of login_transactions.
     */
    distinct?: Login_transactionScalarFieldEnum | Login_transactionScalarFieldEnum[]
  }

  /**
   * login_transaction findMany
   */
  export type login_transactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login_transaction
     */
    select?: login_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login_transaction
     */
    omit?: login_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: login_transactionInclude<ExtArgs> | null
    /**
     * Filter, which login_transactions to fetch.
     */
    where?: login_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of login_transactions to fetch.
     */
    orderBy?: login_transactionOrderByWithRelationInput | login_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing login_transactions.
     */
    cursor?: login_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` login_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` login_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of login_transactions.
     */
    distinct?: Login_transactionScalarFieldEnum | Login_transactionScalarFieldEnum[]
  }

  /**
   * login_transaction create
   */
  export type login_transactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login_transaction
     */
    select?: login_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login_transaction
     */
    omit?: login_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: login_transactionInclude<ExtArgs> | null
    /**
     * The data needed to create a login_transaction.
     */
    data: XOR<login_transactionCreateInput, login_transactionUncheckedCreateInput>
  }

  /**
   * login_transaction createMany
   */
  export type login_transactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many login_transactions.
     */
    data: login_transactionCreateManyInput | login_transactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * login_transaction createManyAndReturn
   */
  export type login_transactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login_transaction
     */
    select?: login_transactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the login_transaction
     */
    omit?: login_transactionOmit<ExtArgs> | null
    /**
     * The data used to create many login_transactions.
     */
    data: login_transactionCreateManyInput | login_transactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: login_transactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * login_transaction update
   */
  export type login_transactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login_transaction
     */
    select?: login_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login_transaction
     */
    omit?: login_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: login_transactionInclude<ExtArgs> | null
    /**
     * The data needed to update a login_transaction.
     */
    data: XOR<login_transactionUpdateInput, login_transactionUncheckedUpdateInput>
    /**
     * Choose, which login_transaction to update.
     */
    where: login_transactionWhereUniqueInput
  }

  /**
   * login_transaction updateMany
   */
  export type login_transactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update login_transactions.
     */
    data: XOR<login_transactionUpdateManyMutationInput, login_transactionUncheckedUpdateManyInput>
    /**
     * Filter which login_transactions to update
     */
    where?: login_transactionWhereInput
    /**
     * Limit how many login_transactions to update.
     */
    limit?: number
  }

  /**
   * login_transaction updateManyAndReturn
   */
  export type login_transactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login_transaction
     */
    select?: login_transactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the login_transaction
     */
    omit?: login_transactionOmit<ExtArgs> | null
    /**
     * The data used to update login_transactions.
     */
    data: XOR<login_transactionUpdateManyMutationInput, login_transactionUncheckedUpdateManyInput>
    /**
     * Filter which login_transactions to update
     */
    where?: login_transactionWhereInput
    /**
     * Limit how many login_transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: login_transactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * login_transaction upsert
   */
  export type login_transactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login_transaction
     */
    select?: login_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login_transaction
     */
    omit?: login_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: login_transactionInclude<ExtArgs> | null
    /**
     * The filter to search for the login_transaction to update in case it exists.
     */
    where: login_transactionWhereUniqueInput
    /**
     * In case the login_transaction found by the `where` argument doesn't exist, create a new login_transaction with this data.
     */
    create: XOR<login_transactionCreateInput, login_transactionUncheckedCreateInput>
    /**
     * In case the login_transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<login_transactionUpdateInput, login_transactionUncheckedUpdateInput>
  }

  /**
   * login_transaction delete
   */
  export type login_transactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login_transaction
     */
    select?: login_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login_transaction
     */
    omit?: login_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: login_transactionInclude<ExtArgs> | null
    /**
     * Filter which login_transaction to delete.
     */
    where: login_transactionWhereUniqueInput
  }

  /**
   * login_transaction deleteMany
   */
  export type login_transactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which login_transactions to delete
     */
    where?: login_transactionWhereInput
    /**
     * Limit how many login_transactions to delete.
     */
    limit?: number
  }

  /**
   * login_transaction without action
   */
  export type login_transactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login_transaction
     */
    select?: login_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login_transaction
     */
    omit?: login_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: login_transactionInclude<ExtArgs> | null
  }


  /**
   * Model course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    price: Decimal | null
    discount: Decimal | null
  }

  export type CourseSumAggregateOutputType = {
    price: Decimal | null
    discount: Decimal | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    mini_description: string | null
    isActive: boolean | null
    picture: string | null
    price: Decimal | null
    discount: Decimal | null
    google_title: string | null
    google_description: string | null
    created_by: string | null
    type_id: string | null
    created_at: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    mini_description: string | null
    isActive: boolean | null
    picture: string | null
    price: Decimal | null
    discount: Decimal | null
    google_title: string | null
    google_description: string | null
    created_by: string | null
    type_id: string | null
    created_at: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    title: number
    description: number
    mini_description: number
    isActive: number
    picture: number
    price: number
    discount: number
    google_title: number
    google_description: number
    created_by: number
    type_id: number
    created_at: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    price?: true
    discount?: true
  }

  export type CourseSumAggregateInputType = {
    price?: true
    discount?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    mini_description?: true
    isActive?: true
    picture?: true
    price?: true
    discount?: true
    google_title?: true
    google_description?: true
    created_by?: true
    type_id?: true
    created_at?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    mini_description?: true
    isActive?: true
    picture?: true
    price?: true
    discount?: true
    google_title?: true
    google_description?: true
    created_by?: true
    type_id?: true
    created_at?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    mini_description?: true
    isActive?: true
    picture?: true
    price?: true
    discount?: true
    google_title?: true
    google_description?: true
    created_by?: true
    type_id?: true
    created_at?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course to aggregate.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type courseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courseWhereInput
    orderBy?: courseOrderByWithAggregationInput | courseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: courseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    title: string
    description: string
    mini_description: string
    isActive: boolean
    picture: string
    price: Decimal
    discount: Decimal
    google_title: string
    google_description: string
    created_by: string
    type_id: string
    created_at: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends courseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type courseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    mini_description?: boolean
    isActive?: boolean
    picture?: boolean
    price?: boolean
    discount?: boolean
    google_title?: boolean
    google_description?: boolean
    created_by?: boolean
    type_id?: boolean
    created_at?: boolean
    type?: boolean | course_typeDefaultArgs<ExtArgs>
    teacher?: boolean | userDefaultArgs<ExtArgs>
    courseRates?: boolean | course$courseRatesArgs<ExtArgs>
    courseFavorites?: boolean | course$courseFavoritesArgs<ExtArgs>
    courseSessions?: boolean | course$courseSessionsArgs<ExtArgs>
    courseCategories?: boolean | course$courseCategoriesArgs<ExtArgs>
    courseComments?: boolean | course$courseCommentsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type courseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    mini_description?: boolean
    isActive?: boolean
    picture?: boolean
    price?: boolean
    discount?: boolean
    google_title?: boolean
    google_description?: boolean
    created_by?: boolean
    type_id?: boolean
    created_at?: boolean
    type?: boolean | course_typeDefaultArgs<ExtArgs>
    teacher?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type courseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    mini_description?: boolean
    isActive?: boolean
    picture?: boolean
    price?: boolean
    discount?: boolean
    google_title?: boolean
    google_description?: boolean
    created_by?: boolean
    type_id?: boolean
    created_at?: boolean
    type?: boolean | course_typeDefaultArgs<ExtArgs>
    teacher?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type courseSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    mini_description?: boolean
    isActive?: boolean
    picture?: boolean
    price?: boolean
    discount?: boolean
    google_title?: boolean
    google_description?: boolean
    created_by?: boolean
    type_id?: boolean
    created_at?: boolean
  }

  export type courseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "mini_description" | "isActive" | "picture" | "price" | "discount" | "google_title" | "google_description" | "created_by" | "type_id" | "created_at", ExtArgs["result"]["course"]>
  export type courseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | course_typeDefaultArgs<ExtArgs>
    teacher?: boolean | userDefaultArgs<ExtArgs>
    courseRates?: boolean | course$courseRatesArgs<ExtArgs>
    courseFavorites?: boolean | course$courseFavoritesArgs<ExtArgs>
    courseSessions?: boolean | course$courseSessionsArgs<ExtArgs>
    courseCategories?: boolean | course$courseCategoriesArgs<ExtArgs>
    courseComments?: boolean | course$courseCommentsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type courseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | course_typeDefaultArgs<ExtArgs>
    teacher?: boolean | userDefaultArgs<ExtArgs>
  }
  export type courseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | course_typeDefaultArgs<ExtArgs>
    teacher?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $coursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "course"
    objects: {
      type: Prisma.$course_typePayload<ExtArgs>
      teacher: Prisma.$userPayload<ExtArgs>
      courseRates: Prisma.$course_ratePayload<ExtArgs>[]
      courseFavorites: Prisma.$course_favoritePayload<ExtArgs>[]
      courseSessions: Prisma.$course_sessionPayload<ExtArgs>[]
      courseCategories: Prisma.$course_categoryPayload<ExtArgs>[]
      courseComments: Prisma.$course_commentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      mini_description: string
      isActive: boolean
      picture: string
      price: Prisma.Decimal
      discount: Prisma.Decimal
      google_title: string
      google_description: string
      created_by: string
      type_id: string
      created_at: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type courseGetPayload<S extends boolean | null | undefined | courseDefaultArgs> = $Result.GetResult<Prisma.$coursePayload, S>

  type courseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<courseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface courseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['course'], meta: { name: 'course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {courseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends courseFindUniqueArgs>(args: SelectSubset<T, courseFindUniqueArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {courseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends courseFindUniqueOrThrowArgs>(args: SelectSubset<T, courseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends courseFindFirstArgs>(args?: SelectSubset<T, courseFindFirstArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends courseFindFirstOrThrowArgs>(args?: SelectSubset<T, courseFindFirstOrThrowArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends courseFindManyArgs>(args?: SelectSubset<T, courseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {courseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends courseCreateArgs>(args: SelectSubset<T, courseCreateArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {courseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends courseCreateManyArgs>(args?: SelectSubset<T, courseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {courseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends courseCreateManyAndReturnArgs>(args?: SelectSubset<T, courseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {courseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends courseDeleteArgs>(args: SelectSubset<T, courseDeleteArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {courseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends courseUpdateArgs>(args: SelectSubset<T, courseUpdateArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {courseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends courseDeleteManyArgs>(args?: SelectSubset<T, courseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends courseUpdateManyArgs>(args: SelectSubset<T, courseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {courseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends courseUpdateManyAndReturnArgs>(args: SelectSubset<T, courseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {courseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends courseUpsertArgs>(args: SelectSubset<T, courseUpsertArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends courseCountArgs>(
      args?: Subset<T, courseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends courseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: courseGroupByArgs['orderBy'] }
        : { orderBy?: courseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, courseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the course model
   */
  readonly fields: courseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__courseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends course_typeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, course_typeDefaultArgs<ExtArgs>>): Prisma__course_typeClient<$Result.GetResult<Prisma.$course_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    courseRates<T extends course$courseRatesArgs<ExtArgs> = {}>(args?: Subset<T, course$courseRatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_ratePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courseFavorites<T extends course$courseFavoritesArgs<ExtArgs> = {}>(args?: Subset<T, course$courseFavoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_favoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courseSessions<T extends course$courseSessionsArgs<ExtArgs> = {}>(args?: Subset<T, course$courseSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_sessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courseCategories<T extends course$courseCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, course$courseCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courseComments<T extends course$courseCommentsArgs<ExtArgs> = {}>(args?: Subset<T, course$courseCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_commentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the course model
   */
  interface courseFieldRefs {
    readonly id: FieldRef<"course", 'String'>
    readonly title: FieldRef<"course", 'String'>
    readonly description: FieldRef<"course", 'String'>
    readonly mini_description: FieldRef<"course", 'String'>
    readonly isActive: FieldRef<"course", 'Boolean'>
    readonly picture: FieldRef<"course", 'String'>
    readonly price: FieldRef<"course", 'Decimal'>
    readonly discount: FieldRef<"course", 'Decimal'>
    readonly google_title: FieldRef<"course", 'String'>
    readonly google_description: FieldRef<"course", 'String'>
    readonly created_by: FieldRef<"course", 'String'>
    readonly type_id: FieldRef<"course", 'String'>
    readonly created_at: FieldRef<"course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * course findUnique
   */
  export type courseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course findUniqueOrThrow
   */
  export type courseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course findFirst
   */
  export type courseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course findFirstOrThrow
   */
  export type courseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course findMany
   */
  export type courseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course create
   */
  export type courseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The data needed to create a course.
     */
    data: XOR<courseCreateInput, courseUncheckedCreateInput>
  }

  /**
   * course createMany
   */
  export type courseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many courses.
     */
    data: courseCreateManyInput | courseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * course createManyAndReturn
   */
  export type courseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * The data used to create many courses.
     */
    data: courseCreateManyInput | courseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * course update
   */
  export type courseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The data needed to update a course.
     */
    data: XOR<courseUpdateInput, courseUncheckedUpdateInput>
    /**
     * Choose, which course to update.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course updateMany
   */
  export type courseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update courses.
     */
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyInput>
    /**
     * Filter which courses to update
     */
    where?: courseWhereInput
    /**
     * Limit how many courses to update.
     */
    limit?: number
  }

  /**
   * course updateManyAndReturn
   */
  export type courseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * The data used to update courses.
     */
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyInput>
    /**
     * Filter which courses to update
     */
    where?: courseWhereInput
    /**
     * Limit how many courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * course upsert
   */
  export type courseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The filter to search for the course to update in case it exists.
     */
    where: courseWhereUniqueInput
    /**
     * In case the course found by the `where` argument doesn't exist, create a new course with this data.
     */
    create: XOR<courseCreateInput, courseUncheckedCreateInput>
    /**
     * In case the course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<courseUpdateInput, courseUncheckedUpdateInput>
  }

  /**
   * course delete
   */
  export type courseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter which course to delete.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course deleteMany
   */
  export type courseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courses to delete
     */
    where?: courseWhereInput
    /**
     * Limit how many courses to delete.
     */
    limit?: number
  }

  /**
   * course.courseRates
   */
  export type course$courseRatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_rate
     */
    select?: course_rateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_rate
     */
    omit?: course_rateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_rateInclude<ExtArgs> | null
    where?: course_rateWhereInput
    orderBy?: course_rateOrderByWithRelationInput | course_rateOrderByWithRelationInput[]
    cursor?: course_rateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Course_rateScalarFieldEnum | Course_rateScalarFieldEnum[]
  }

  /**
   * course.courseFavorites
   */
  export type course$courseFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_favorite
     */
    select?: course_favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_favorite
     */
    omit?: course_favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_favoriteInclude<ExtArgs> | null
    where?: course_favoriteWhereInput
    orderBy?: course_favoriteOrderByWithRelationInput | course_favoriteOrderByWithRelationInput[]
    cursor?: course_favoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Course_favoriteScalarFieldEnum | Course_favoriteScalarFieldEnum[]
  }

  /**
   * course.courseSessions
   */
  export type course$courseSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_session
     */
    select?: course_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_session
     */
    omit?: course_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_sessionInclude<ExtArgs> | null
    where?: course_sessionWhereInput
    orderBy?: course_sessionOrderByWithRelationInput | course_sessionOrderByWithRelationInput[]
    cursor?: course_sessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Course_sessionScalarFieldEnum | Course_sessionScalarFieldEnum[]
  }

  /**
   * course.courseCategories
   */
  export type course$courseCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_category
     */
    select?: course_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_category
     */
    omit?: course_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_categoryInclude<ExtArgs> | null
    where?: course_categoryWhereInput
    orderBy?: course_categoryOrderByWithRelationInput | course_categoryOrderByWithRelationInput[]
    cursor?: course_categoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Course_categoryScalarFieldEnum | Course_categoryScalarFieldEnum[]
  }

  /**
   * course.courseComments
   */
  export type course$courseCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_comment
     */
    select?: course_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_comment
     */
    omit?: course_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_commentInclude<ExtArgs> | null
    where?: course_commentWhereInput
    orderBy?: course_commentOrderByWithRelationInput | course_commentOrderByWithRelationInput[]
    cursor?: course_commentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Course_commentScalarFieldEnum | Course_commentScalarFieldEnum[]
  }

  /**
   * course without action
   */
  export type courseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
  }


  /**
   * Model course_rate
   */

  export type AggregateCourse_rate = {
    _count: Course_rateCountAggregateOutputType | null
    _avg: Course_rateAvgAggregateOutputType | null
    _sum: Course_rateSumAggregateOutputType | null
    _min: Course_rateMinAggregateOutputType | null
    _max: Course_rateMaxAggregateOutputType | null
  }

  export type Course_rateAvgAggregateOutputType = {
    rate: number | null
  }

  export type Course_rateSumAggregateOutputType = {
    rate: number | null
  }

  export type Course_rateMinAggregateOutputType = {
    id: string | null
    rate: number | null
    course_id: string | null
    user_id: string | null
  }

  export type Course_rateMaxAggregateOutputType = {
    id: string | null
    rate: number | null
    course_id: string | null
    user_id: string | null
  }

  export type Course_rateCountAggregateOutputType = {
    id: number
    rate: number
    course_id: number
    user_id: number
    _all: number
  }


  export type Course_rateAvgAggregateInputType = {
    rate?: true
  }

  export type Course_rateSumAggregateInputType = {
    rate?: true
  }

  export type Course_rateMinAggregateInputType = {
    id?: true
    rate?: true
    course_id?: true
    user_id?: true
  }

  export type Course_rateMaxAggregateInputType = {
    id?: true
    rate?: true
    course_id?: true
    user_id?: true
  }

  export type Course_rateCountAggregateInputType = {
    id?: true
    rate?: true
    course_id?: true
    user_id?: true
    _all?: true
  }

  export type Course_rateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course_rate to aggregate.
     */
    where?: course_rateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_rates to fetch.
     */
    orderBy?: course_rateOrderByWithRelationInput | course_rateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: course_rateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_rates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned course_rates
    **/
    _count?: true | Course_rateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Course_rateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Course_rateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Course_rateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Course_rateMaxAggregateInputType
  }

  export type GetCourse_rateAggregateType<T extends Course_rateAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse_rate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse_rate[P]>
      : GetScalarType<T[P], AggregateCourse_rate[P]>
  }




  export type course_rateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: course_rateWhereInput
    orderBy?: course_rateOrderByWithAggregationInput | course_rateOrderByWithAggregationInput[]
    by: Course_rateScalarFieldEnum[] | Course_rateScalarFieldEnum
    having?: course_rateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Course_rateCountAggregateInputType | true
    _avg?: Course_rateAvgAggregateInputType
    _sum?: Course_rateSumAggregateInputType
    _min?: Course_rateMinAggregateInputType
    _max?: Course_rateMaxAggregateInputType
  }

  export type Course_rateGroupByOutputType = {
    id: string
    rate: number
    course_id: string
    user_id: string
    _count: Course_rateCountAggregateOutputType | null
    _avg: Course_rateAvgAggregateOutputType | null
    _sum: Course_rateSumAggregateOutputType | null
    _min: Course_rateMinAggregateOutputType | null
    _max: Course_rateMaxAggregateOutputType | null
  }

  type GetCourse_rateGroupByPayload<T extends course_rateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Course_rateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Course_rateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Course_rateGroupByOutputType[P]>
            : GetScalarType<T[P], Course_rateGroupByOutputType[P]>
        }
      >
    >


  export type course_rateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rate?: boolean
    course_id?: boolean
    user_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_rate"]>

  export type course_rateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rate?: boolean
    course_id?: boolean
    user_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_rate"]>

  export type course_rateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rate?: boolean
    course_id?: boolean
    user_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_rate"]>

  export type course_rateSelectScalar = {
    id?: boolean
    rate?: boolean
    course_id?: boolean
    user_id?: boolean
  }

  export type course_rateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rate" | "course_id" | "user_id", ExtArgs["result"]["course_rate"]>
  export type course_rateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }
  export type course_rateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }
  export type course_rateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }

  export type $course_ratePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "course_rate"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      course: Prisma.$coursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rate: number
      course_id: string
      user_id: string
    }, ExtArgs["result"]["course_rate"]>
    composites: {}
  }

  type course_rateGetPayload<S extends boolean | null | undefined | course_rateDefaultArgs> = $Result.GetResult<Prisma.$course_ratePayload, S>

  type course_rateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<course_rateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Course_rateCountAggregateInputType | true
    }

  export interface course_rateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['course_rate'], meta: { name: 'course_rate' } }
    /**
     * Find zero or one Course_rate that matches the filter.
     * @param {course_rateFindUniqueArgs} args - Arguments to find a Course_rate
     * @example
     * // Get one Course_rate
     * const course_rate = await prisma.course_rate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends course_rateFindUniqueArgs>(args: SelectSubset<T, course_rateFindUniqueArgs<ExtArgs>>): Prisma__course_rateClient<$Result.GetResult<Prisma.$course_ratePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course_rate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {course_rateFindUniqueOrThrowArgs} args - Arguments to find a Course_rate
     * @example
     * // Get one Course_rate
     * const course_rate = await prisma.course_rate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends course_rateFindUniqueOrThrowArgs>(args: SelectSubset<T, course_rateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__course_rateClient<$Result.GetResult<Prisma.$course_ratePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course_rate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_rateFindFirstArgs} args - Arguments to find a Course_rate
     * @example
     * // Get one Course_rate
     * const course_rate = await prisma.course_rate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends course_rateFindFirstArgs>(args?: SelectSubset<T, course_rateFindFirstArgs<ExtArgs>>): Prisma__course_rateClient<$Result.GetResult<Prisma.$course_ratePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course_rate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_rateFindFirstOrThrowArgs} args - Arguments to find a Course_rate
     * @example
     * // Get one Course_rate
     * const course_rate = await prisma.course_rate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends course_rateFindFirstOrThrowArgs>(args?: SelectSubset<T, course_rateFindFirstOrThrowArgs<ExtArgs>>): Prisma__course_rateClient<$Result.GetResult<Prisma.$course_ratePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Course_rates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_rateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Course_rates
     * const course_rates = await prisma.course_rate.findMany()
     * 
     * // Get first 10 Course_rates
     * const course_rates = await prisma.course_rate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const course_rateWithIdOnly = await prisma.course_rate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends course_rateFindManyArgs>(args?: SelectSubset<T, course_rateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_ratePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course_rate.
     * @param {course_rateCreateArgs} args - Arguments to create a Course_rate.
     * @example
     * // Create one Course_rate
     * const Course_rate = await prisma.course_rate.create({
     *   data: {
     *     // ... data to create a Course_rate
     *   }
     * })
     * 
     */
    create<T extends course_rateCreateArgs>(args: SelectSubset<T, course_rateCreateArgs<ExtArgs>>): Prisma__course_rateClient<$Result.GetResult<Prisma.$course_ratePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Course_rates.
     * @param {course_rateCreateManyArgs} args - Arguments to create many Course_rates.
     * @example
     * // Create many Course_rates
     * const course_rate = await prisma.course_rate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends course_rateCreateManyArgs>(args?: SelectSubset<T, course_rateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Course_rates and returns the data saved in the database.
     * @param {course_rateCreateManyAndReturnArgs} args - Arguments to create many Course_rates.
     * @example
     * // Create many Course_rates
     * const course_rate = await prisma.course_rate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Course_rates and only return the `id`
     * const course_rateWithIdOnly = await prisma.course_rate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends course_rateCreateManyAndReturnArgs>(args?: SelectSubset<T, course_rateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_ratePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course_rate.
     * @param {course_rateDeleteArgs} args - Arguments to delete one Course_rate.
     * @example
     * // Delete one Course_rate
     * const Course_rate = await prisma.course_rate.delete({
     *   where: {
     *     // ... filter to delete one Course_rate
     *   }
     * })
     * 
     */
    delete<T extends course_rateDeleteArgs>(args: SelectSubset<T, course_rateDeleteArgs<ExtArgs>>): Prisma__course_rateClient<$Result.GetResult<Prisma.$course_ratePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course_rate.
     * @param {course_rateUpdateArgs} args - Arguments to update one Course_rate.
     * @example
     * // Update one Course_rate
     * const course_rate = await prisma.course_rate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends course_rateUpdateArgs>(args: SelectSubset<T, course_rateUpdateArgs<ExtArgs>>): Prisma__course_rateClient<$Result.GetResult<Prisma.$course_ratePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Course_rates.
     * @param {course_rateDeleteManyArgs} args - Arguments to filter Course_rates to delete.
     * @example
     * // Delete a few Course_rates
     * const { count } = await prisma.course_rate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends course_rateDeleteManyArgs>(args?: SelectSubset<T, course_rateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Course_rates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_rateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Course_rates
     * const course_rate = await prisma.course_rate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends course_rateUpdateManyArgs>(args: SelectSubset<T, course_rateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Course_rates and returns the data updated in the database.
     * @param {course_rateUpdateManyAndReturnArgs} args - Arguments to update many Course_rates.
     * @example
     * // Update many Course_rates
     * const course_rate = await prisma.course_rate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Course_rates and only return the `id`
     * const course_rateWithIdOnly = await prisma.course_rate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends course_rateUpdateManyAndReturnArgs>(args: SelectSubset<T, course_rateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_ratePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course_rate.
     * @param {course_rateUpsertArgs} args - Arguments to update or create a Course_rate.
     * @example
     * // Update or create a Course_rate
     * const course_rate = await prisma.course_rate.upsert({
     *   create: {
     *     // ... data to create a Course_rate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course_rate we want to update
     *   }
     * })
     */
    upsert<T extends course_rateUpsertArgs>(args: SelectSubset<T, course_rateUpsertArgs<ExtArgs>>): Prisma__course_rateClient<$Result.GetResult<Prisma.$course_ratePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Course_rates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_rateCountArgs} args - Arguments to filter Course_rates to count.
     * @example
     * // Count the number of Course_rates
     * const count = await prisma.course_rate.count({
     *   where: {
     *     // ... the filter for the Course_rates we want to count
     *   }
     * })
    **/
    count<T extends course_rateCountArgs>(
      args?: Subset<T, course_rateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Course_rateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course_rate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Course_rateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Course_rateAggregateArgs>(args: Subset<T, Course_rateAggregateArgs>): Prisma.PrismaPromise<GetCourse_rateAggregateType<T>>

    /**
     * Group by Course_rate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_rateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends course_rateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: course_rateGroupByArgs['orderBy'] }
        : { orderBy?: course_rateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, course_rateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourse_rateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the course_rate model
   */
  readonly fields: course_rateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for course_rate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__course_rateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends courseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, courseDefaultArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the course_rate model
   */
  interface course_rateFieldRefs {
    readonly id: FieldRef<"course_rate", 'String'>
    readonly rate: FieldRef<"course_rate", 'Float'>
    readonly course_id: FieldRef<"course_rate", 'String'>
    readonly user_id: FieldRef<"course_rate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * course_rate findUnique
   */
  export type course_rateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_rate
     */
    select?: course_rateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_rate
     */
    omit?: course_rateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_rateInclude<ExtArgs> | null
    /**
     * Filter, which course_rate to fetch.
     */
    where: course_rateWhereUniqueInput
  }

  /**
   * course_rate findUniqueOrThrow
   */
  export type course_rateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_rate
     */
    select?: course_rateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_rate
     */
    omit?: course_rateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_rateInclude<ExtArgs> | null
    /**
     * Filter, which course_rate to fetch.
     */
    where: course_rateWhereUniqueInput
  }

  /**
   * course_rate findFirst
   */
  export type course_rateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_rate
     */
    select?: course_rateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_rate
     */
    omit?: course_rateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_rateInclude<ExtArgs> | null
    /**
     * Filter, which course_rate to fetch.
     */
    where?: course_rateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_rates to fetch.
     */
    orderBy?: course_rateOrderByWithRelationInput | course_rateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for course_rates.
     */
    cursor?: course_rateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_rates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of course_rates.
     */
    distinct?: Course_rateScalarFieldEnum | Course_rateScalarFieldEnum[]
  }

  /**
   * course_rate findFirstOrThrow
   */
  export type course_rateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_rate
     */
    select?: course_rateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_rate
     */
    omit?: course_rateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_rateInclude<ExtArgs> | null
    /**
     * Filter, which course_rate to fetch.
     */
    where?: course_rateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_rates to fetch.
     */
    orderBy?: course_rateOrderByWithRelationInput | course_rateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for course_rates.
     */
    cursor?: course_rateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_rates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of course_rates.
     */
    distinct?: Course_rateScalarFieldEnum | Course_rateScalarFieldEnum[]
  }

  /**
   * course_rate findMany
   */
  export type course_rateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_rate
     */
    select?: course_rateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_rate
     */
    omit?: course_rateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_rateInclude<ExtArgs> | null
    /**
     * Filter, which course_rates to fetch.
     */
    where?: course_rateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_rates to fetch.
     */
    orderBy?: course_rateOrderByWithRelationInput | course_rateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing course_rates.
     */
    cursor?: course_rateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_rates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of course_rates.
     */
    distinct?: Course_rateScalarFieldEnum | Course_rateScalarFieldEnum[]
  }

  /**
   * course_rate create
   */
  export type course_rateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_rate
     */
    select?: course_rateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_rate
     */
    omit?: course_rateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_rateInclude<ExtArgs> | null
    /**
     * The data needed to create a course_rate.
     */
    data: XOR<course_rateCreateInput, course_rateUncheckedCreateInput>
  }

  /**
   * course_rate createMany
   */
  export type course_rateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many course_rates.
     */
    data: course_rateCreateManyInput | course_rateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * course_rate createManyAndReturn
   */
  export type course_rateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_rate
     */
    select?: course_rateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course_rate
     */
    omit?: course_rateOmit<ExtArgs> | null
    /**
     * The data used to create many course_rates.
     */
    data: course_rateCreateManyInput | course_rateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_rateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * course_rate update
   */
  export type course_rateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_rate
     */
    select?: course_rateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_rate
     */
    omit?: course_rateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_rateInclude<ExtArgs> | null
    /**
     * The data needed to update a course_rate.
     */
    data: XOR<course_rateUpdateInput, course_rateUncheckedUpdateInput>
    /**
     * Choose, which course_rate to update.
     */
    where: course_rateWhereUniqueInput
  }

  /**
   * course_rate updateMany
   */
  export type course_rateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update course_rates.
     */
    data: XOR<course_rateUpdateManyMutationInput, course_rateUncheckedUpdateManyInput>
    /**
     * Filter which course_rates to update
     */
    where?: course_rateWhereInput
    /**
     * Limit how many course_rates to update.
     */
    limit?: number
  }

  /**
   * course_rate updateManyAndReturn
   */
  export type course_rateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_rate
     */
    select?: course_rateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course_rate
     */
    omit?: course_rateOmit<ExtArgs> | null
    /**
     * The data used to update course_rates.
     */
    data: XOR<course_rateUpdateManyMutationInput, course_rateUncheckedUpdateManyInput>
    /**
     * Filter which course_rates to update
     */
    where?: course_rateWhereInput
    /**
     * Limit how many course_rates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_rateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * course_rate upsert
   */
  export type course_rateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_rate
     */
    select?: course_rateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_rate
     */
    omit?: course_rateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_rateInclude<ExtArgs> | null
    /**
     * The filter to search for the course_rate to update in case it exists.
     */
    where: course_rateWhereUniqueInput
    /**
     * In case the course_rate found by the `where` argument doesn't exist, create a new course_rate with this data.
     */
    create: XOR<course_rateCreateInput, course_rateUncheckedCreateInput>
    /**
     * In case the course_rate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<course_rateUpdateInput, course_rateUncheckedUpdateInput>
  }

  /**
   * course_rate delete
   */
  export type course_rateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_rate
     */
    select?: course_rateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_rate
     */
    omit?: course_rateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_rateInclude<ExtArgs> | null
    /**
     * Filter which course_rate to delete.
     */
    where: course_rateWhereUniqueInput
  }

  /**
   * course_rate deleteMany
   */
  export type course_rateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course_rates to delete
     */
    where?: course_rateWhereInput
    /**
     * Limit how many course_rates to delete.
     */
    limit?: number
  }

  /**
   * course_rate without action
   */
  export type course_rateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_rate
     */
    select?: course_rateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_rate
     */
    omit?: course_rateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_rateInclude<ExtArgs> | null
  }


  /**
   * Model course_favorite
   */

  export type AggregateCourse_favorite = {
    _count: Course_favoriteCountAggregateOutputType | null
    _min: Course_favoriteMinAggregateOutputType | null
    _max: Course_favoriteMaxAggregateOutputType | null
  }

  export type Course_favoriteMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    course_id: string | null
  }

  export type Course_favoriteMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    course_id: string | null
  }

  export type Course_favoriteCountAggregateOutputType = {
    id: number
    user_id: number
    course_id: number
    _all: number
  }


  export type Course_favoriteMinAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
  }

  export type Course_favoriteMaxAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
  }

  export type Course_favoriteCountAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
    _all?: true
  }

  export type Course_favoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course_favorite to aggregate.
     */
    where?: course_favoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_favorites to fetch.
     */
    orderBy?: course_favoriteOrderByWithRelationInput | course_favoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: course_favoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned course_favorites
    **/
    _count?: true | Course_favoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Course_favoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Course_favoriteMaxAggregateInputType
  }

  export type GetCourse_favoriteAggregateType<T extends Course_favoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse_favorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse_favorite[P]>
      : GetScalarType<T[P], AggregateCourse_favorite[P]>
  }




  export type course_favoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: course_favoriteWhereInput
    orderBy?: course_favoriteOrderByWithAggregationInput | course_favoriteOrderByWithAggregationInput[]
    by: Course_favoriteScalarFieldEnum[] | Course_favoriteScalarFieldEnum
    having?: course_favoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Course_favoriteCountAggregateInputType | true
    _min?: Course_favoriteMinAggregateInputType
    _max?: Course_favoriteMaxAggregateInputType
  }

  export type Course_favoriteGroupByOutputType = {
    id: string
    user_id: string
    course_id: string
    _count: Course_favoriteCountAggregateOutputType | null
    _min: Course_favoriteMinAggregateOutputType | null
    _max: Course_favoriteMaxAggregateOutputType | null
  }

  type GetCourse_favoriteGroupByPayload<T extends course_favoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Course_favoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Course_favoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Course_favoriteGroupByOutputType[P]>
            : GetScalarType<T[P], Course_favoriteGroupByOutputType[P]>
        }
      >
    >


  export type course_favoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    course_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_favorite"]>

  export type course_favoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    course_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_favorite"]>

  export type course_favoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    course_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_favorite"]>

  export type course_favoriteSelectScalar = {
    id?: boolean
    user_id?: boolean
    course_id?: boolean
  }

  export type course_favoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "course_id", ExtArgs["result"]["course_favorite"]>
  export type course_favoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }
  export type course_favoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }
  export type course_favoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }

  export type $course_favoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "course_favorite"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      course: Prisma.$coursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      course_id: string
    }, ExtArgs["result"]["course_favorite"]>
    composites: {}
  }

  type course_favoriteGetPayload<S extends boolean | null | undefined | course_favoriteDefaultArgs> = $Result.GetResult<Prisma.$course_favoritePayload, S>

  type course_favoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<course_favoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Course_favoriteCountAggregateInputType | true
    }

  export interface course_favoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['course_favorite'], meta: { name: 'course_favorite' } }
    /**
     * Find zero or one Course_favorite that matches the filter.
     * @param {course_favoriteFindUniqueArgs} args - Arguments to find a Course_favorite
     * @example
     * // Get one Course_favorite
     * const course_favorite = await prisma.course_favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends course_favoriteFindUniqueArgs>(args: SelectSubset<T, course_favoriteFindUniqueArgs<ExtArgs>>): Prisma__course_favoriteClient<$Result.GetResult<Prisma.$course_favoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course_favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {course_favoriteFindUniqueOrThrowArgs} args - Arguments to find a Course_favorite
     * @example
     * // Get one Course_favorite
     * const course_favorite = await prisma.course_favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends course_favoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, course_favoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__course_favoriteClient<$Result.GetResult<Prisma.$course_favoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course_favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_favoriteFindFirstArgs} args - Arguments to find a Course_favorite
     * @example
     * // Get one Course_favorite
     * const course_favorite = await prisma.course_favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends course_favoriteFindFirstArgs>(args?: SelectSubset<T, course_favoriteFindFirstArgs<ExtArgs>>): Prisma__course_favoriteClient<$Result.GetResult<Prisma.$course_favoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course_favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_favoriteFindFirstOrThrowArgs} args - Arguments to find a Course_favorite
     * @example
     * // Get one Course_favorite
     * const course_favorite = await prisma.course_favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends course_favoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, course_favoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__course_favoriteClient<$Result.GetResult<Prisma.$course_favoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Course_favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_favoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Course_favorites
     * const course_favorites = await prisma.course_favorite.findMany()
     * 
     * // Get first 10 Course_favorites
     * const course_favorites = await prisma.course_favorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const course_favoriteWithIdOnly = await prisma.course_favorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends course_favoriteFindManyArgs>(args?: SelectSubset<T, course_favoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_favoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course_favorite.
     * @param {course_favoriteCreateArgs} args - Arguments to create a Course_favorite.
     * @example
     * // Create one Course_favorite
     * const Course_favorite = await prisma.course_favorite.create({
     *   data: {
     *     // ... data to create a Course_favorite
     *   }
     * })
     * 
     */
    create<T extends course_favoriteCreateArgs>(args: SelectSubset<T, course_favoriteCreateArgs<ExtArgs>>): Prisma__course_favoriteClient<$Result.GetResult<Prisma.$course_favoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Course_favorites.
     * @param {course_favoriteCreateManyArgs} args - Arguments to create many Course_favorites.
     * @example
     * // Create many Course_favorites
     * const course_favorite = await prisma.course_favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends course_favoriteCreateManyArgs>(args?: SelectSubset<T, course_favoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Course_favorites and returns the data saved in the database.
     * @param {course_favoriteCreateManyAndReturnArgs} args - Arguments to create many Course_favorites.
     * @example
     * // Create many Course_favorites
     * const course_favorite = await prisma.course_favorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Course_favorites and only return the `id`
     * const course_favoriteWithIdOnly = await prisma.course_favorite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends course_favoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, course_favoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_favoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course_favorite.
     * @param {course_favoriteDeleteArgs} args - Arguments to delete one Course_favorite.
     * @example
     * // Delete one Course_favorite
     * const Course_favorite = await prisma.course_favorite.delete({
     *   where: {
     *     // ... filter to delete one Course_favorite
     *   }
     * })
     * 
     */
    delete<T extends course_favoriteDeleteArgs>(args: SelectSubset<T, course_favoriteDeleteArgs<ExtArgs>>): Prisma__course_favoriteClient<$Result.GetResult<Prisma.$course_favoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course_favorite.
     * @param {course_favoriteUpdateArgs} args - Arguments to update one Course_favorite.
     * @example
     * // Update one Course_favorite
     * const course_favorite = await prisma.course_favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends course_favoriteUpdateArgs>(args: SelectSubset<T, course_favoriteUpdateArgs<ExtArgs>>): Prisma__course_favoriteClient<$Result.GetResult<Prisma.$course_favoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Course_favorites.
     * @param {course_favoriteDeleteManyArgs} args - Arguments to filter Course_favorites to delete.
     * @example
     * // Delete a few Course_favorites
     * const { count } = await prisma.course_favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends course_favoriteDeleteManyArgs>(args?: SelectSubset<T, course_favoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Course_favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_favoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Course_favorites
     * const course_favorite = await prisma.course_favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends course_favoriteUpdateManyArgs>(args: SelectSubset<T, course_favoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Course_favorites and returns the data updated in the database.
     * @param {course_favoriteUpdateManyAndReturnArgs} args - Arguments to update many Course_favorites.
     * @example
     * // Update many Course_favorites
     * const course_favorite = await prisma.course_favorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Course_favorites and only return the `id`
     * const course_favoriteWithIdOnly = await prisma.course_favorite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends course_favoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, course_favoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_favoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course_favorite.
     * @param {course_favoriteUpsertArgs} args - Arguments to update or create a Course_favorite.
     * @example
     * // Update or create a Course_favorite
     * const course_favorite = await prisma.course_favorite.upsert({
     *   create: {
     *     // ... data to create a Course_favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course_favorite we want to update
     *   }
     * })
     */
    upsert<T extends course_favoriteUpsertArgs>(args: SelectSubset<T, course_favoriteUpsertArgs<ExtArgs>>): Prisma__course_favoriteClient<$Result.GetResult<Prisma.$course_favoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Course_favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_favoriteCountArgs} args - Arguments to filter Course_favorites to count.
     * @example
     * // Count the number of Course_favorites
     * const count = await prisma.course_favorite.count({
     *   where: {
     *     // ... the filter for the Course_favorites we want to count
     *   }
     * })
    **/
    count<T extends course_favoriteCountArgs>(
      args?: Subset<T, course_favoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Course_favoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course_favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Course_favoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Course_favoriteAggregateArgs>(args: Subset<T, Course_favoriteAggregateArgs>): Prisma.PrismaPromise<GetCourse_favoriteAggregateType<T>>

    /**
     * Group by Course_favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_favoriteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends course_favoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: course_favoriteGroupByArgs['orderBy'] }
        : { orderBy?: course_favoriteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, course_favoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourse_favoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the course_favorite model
   */
  readonly fields: course_favoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for course_favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__course_favoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends courseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, courseDefaultArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the course_favorite model
   */
  interface course_favoriteFieldRefs {
    readonly id: FieldRef<"course_favorite", 'String'>
    readonly user_id: FieldRef<"course_favorite", 'String'>
    readonly course_id: FieldRef<"course_favorite", 'String'>
  }
    

  // Custom InputTypes
  /**
   * course_favorite findUnique
   */
  export type course_favoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_favorite
     */
    select?: course_favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_favorite
     */
    omit?: course_favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_favoriteInclude<ExtArgs> | null
    /**
     * Filter, which course_favorite to fetch.
     */
    where: course_favoriteWhereUniqueInput
  }

  /**
   * course_favorite findUniqueOrThrow
   */
  export type course_favoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_favorite
     */
    select?: course_favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_favorite
     */
    omit?: course_favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_favoriteInclude<ExtArgs> | null
    /**
     * Filter, which course_favorite to fetch.
     */
    where: course_favoriteWhereUniqueInput
  }

  /**
   * course_favorite findFirst
   */
  export type course_favoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_favorite
     */
    select?: course_favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_favorite
     */
    omit?: course_favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_favoriteInclude<ExtArgs> | null
    /**
     * Filter, which course_favorite to fetch.
     */
    where?: course_favoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_favorites to fetch.
     */
    orderBy?: course_favoriteOrderByWithRelationInput | course_favoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for course_favorites.
     */
    cursor?: course_favoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of course_favorites.
     */
    distinct?: Course_favoriteScalarFieldEnum | Course_favoriteScalarFieldEnum[]
  }

  /**
   * course_favorite findFirstOrThrow
   */
  export type course_favoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_favorite
     */
    select?: course_favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_favorite
     */
    omit?: course_favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_favoriteInclude<ExtArgs> | null
    /**
     * Filter, which course_favorite to fetch.
     */
    where?: course_favoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_favorites to fetch.
     */
    orderBy?: course_favoriteOrderByWithRelationInput | course_favoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for course_favorites.
     */
    cursor?: course_favoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of course_favorites.
     */
    distinct?: Course_favoriteScalarFieldEnum | Course_favoriteScalarFieldEnum[]
  }

  /**
   * course_favorite findMany
   */
  export type course_favoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_favorite
     */
    select?: course_favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_favorite
     */
    omit?: course_favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_favoriteInclude<ExtArgs> | null
    /**
     * Filter, which course_favorites to fetch.
     */
    where?: course_favoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_favorites to fetch.
     */
    orderBy?: course_favoriteOrderByWithRelationInput | course_favoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing course_favorites.
     */
    cursor?: course_favoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of course_favorites.
     */
    distinct?: Course_favoriteScalarFieldEnum | Course_favoriteScalarFieldEnum[]
  }

  /**
   * course_favorite create
   */
  export type course_favoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_favorite
     */
    select?: course_favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_favorite
     */
    omit?: course_favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_favoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a course_favorite.
     */
    data: XOR<course_favoriteCreateInput, course_favoriteUncheckedCreateInput>
  }

  /**
   * course_favorite createMany
   */
  export type course_favoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many course_favorites.
     */
    data: course_favoriteCreateManyInput | course_favoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * course_favorite createManyAndReturn
   */
  export type course_favoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_favorite
     */
    select?: course_favoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course_favorite
     */
    omit?: course_favoriteOmit<ExtArgs> | null
    /**
     * The data used to create many course_favorites.
     */
    data: course_favoriteCreateManyInput | course_favoriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_favoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * course_favorite update
   */
  export type course_favoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_favorite
     */
    select?: course_favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_favorite
     */
    omit?: course_favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_favoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a course_favorite.
     */
    data: XOR<course_favoriteUpdateInput, course_favoriteUncheckedUpdateInput>
    /**
     * Choose, which course_favorite to update.
     */
    where: course_favoriteWhereUniqueInput
  }

  /**
   * course_favorite updateMany
   */
  export type course_favoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update course_favorites.
     */
    data: XOR<course_favoriteUpdateManyMutationInput, course_favoriteUncheckedUpdateManyInput>
    /**
     * Filter which course_favorites to update
     */
    where?: course_favoriteWhereInput
    /**
     * Limit how many course_favorites to update.
     */
    limit?: number
  }

  /**
   * course_favorite updateManyAndReturn
   */
  export type course_favoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_favorite
     */
    select?: course_favoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course_favorite
     */
    omit?: course_favoriteOmit<ExtArgs> | null
    /**
     * The data used to update course_favorites.
     */
    data: XOR<course_favoriteUpdateManyMutationInput, course_favoriteUncheckedUpdateManyInput>
    /**
     * Filter which course_favorites to update
     */
    where?: course_favoriteWhereInput
    /**
     * Limit how many course_favorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_favoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * course_favorite upsert
   */
  export type course_favoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_favorite
     */
    select?: course_favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_favorite
     */
    omit?: course_favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_favoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the course_favorite to update in case it exists.
     */
    where: course_favoriteWhereUniqueInput
    /**
     * In case the course_favorite found by the `where` argument doesn't exist, create a new course_favorite with this data.
     */
    create: XOR<course_favoriteCreateInput, course_favoriteUncheckedCreateInput>
    /**
     * In case the course_favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<course_favoriteUpdateInput, course_favoriteUncheckedUpdateInput>
  }

  /**
   * course_favorite delete
   */
  export type course_favoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_favorite
     */
    select?: course_favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_favorite
     */
    omit?: course_favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_favoriteInclude<ExtArgs> | null
    /**
     * Filter which course_favorite to delete.
     */
    where: course_favoriteWhereUniqueInput
  }

  /**
   * course_favorite deleteMany
   */
  export type course_favoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course_favorites to delete
     */
    where?: course_favoriteWhereInput
    /**
     * Limit how many course_favorites to delete.
     */
    limit?: number
  }

  /**
   * course_favorite without action
   */
  export type course_favoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_favorite
     */
    select?: course_favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_favorite
     */
    omit?: course_favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_favoriteInclude<ExtArgs> | null
  }


  /**
   * Model course_comment
   */

  export type AggregateCourse_comment = {
    _count: Course_commentCountAggregateOutputType | null
    _min: Course_commentMinAggregateOutputType | null
    _max: Course_commentMaxAggregateOutputType | null
  }

  export type Course_commentMinAggregateOutputType = {
    id: string | null
    title: string | null
    text: string | null
    user_id: string | null
    isActive: boolean | null
    parent_id: string | null
    course_id: string | null
  }

  export type Course_commentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    text: string | null
    user_id: string | null
    isActive: boolean | null
    parent_id: string | null
    course_id: string | null
  }

  export type Course_commentCountAggregateOutputType = {
    id: number
    title: number
    text: number
    user_id: number
    isActive: number
    parent_id: number
    course_id: number
    _all: number
  }


  export type Course_commentMinAggregateInputType = {
    id?: true
    title?: true
    text?: true
    user_id?: true
    isActive?: true
    parent_id?: true
    course_id?: true
  }

  export type Course_commentMaxAggregateInputType = {
    id?: true
    title?: true
    text?: true
    user_id?: true
    isActive?: true
    parent_id?: true
    course_id?: true
  }

  export type Course_commentCountAggregateInputType = {
    id?: true
    title?: true
    text?: true
    user_id?: true
    isActive?: true
    parent_id?: true
    course_id?: true
    _all?: true
  }

  export type Course_commentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course_comment to aggregate.
     */
    where?: course_commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_comments to fetch.
     */
    orderBy?: course_commentOrderByWithRelationInput | course_commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: course_commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned course_comments
    **/
    _count?: true | Course_commentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Course_commentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Course_commentMaxAggregateInputType
  }

  export type GetCourse_commentAggregateType<T extends Course_commentAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse_comment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse_comment[P]>
      : GetScalarType<T[P], AggregateCourse_comment[P]>
  }




  export type course_commentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: course_commentWhereInput
    orderBy?: course_commentOrderByWithAggregationInput | course_commentOrderByWithAggregationInput[]
    by: Course_commentScalarFieldEnum[] | Course_commentScalarFieldEnum
    having?: course_commentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Course_commentCountAggregateInputType | true
    _min?: Course_commentMinAggregateInputType
    _max?: Course_commentMaxAggregateInputType
  }

  export type Course_commentGroupByOutputType = {
    id: string
    title: string
    text: string
    user_id: string
    isActive: boolean
    parent_id: string | null
    course_id: string
    _count: Course_commentCountAggregateOutputType | null
    _min: Course_commentMinAggregateOutputType | null
    _max: Course_commentMaxAggregateOutputType | null
  }

  type GetCourse_commentGroupByPayload<T extends course_commentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Course_commentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Course_commentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Course_commentGroupByOutputType[P]>
            : GetScalarType<T[P], Course_commentGroupByOutputType[P]>
        }
      >
    >


  export type course_commentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    text?: boolean
    user_id?: boolean
    isActive?: boolean
    parent_id?: boolean
    course_id?: boolean
    parent?: boolean | course_comment$parentArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    courseComments?: boolean | course_comment$courseCommentsArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
    _count?: boolean | Course_commentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_comment"]>

  export type course_commentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    text?: boolean
    user_id?: boolean
    isActive?: boolean
    parent_id?: boolean
    course_id?: boolean
    parent?: boolean | course_comment$parentArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_comment"]>

  export type course_commentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    text?: boolean
    user_id?: boolean
    isActive?: boolean
    parent_id?: boolean
    course_id?: boolean
    parent?: boolean | course_comment$parentArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_comment"]>

  export type course_commentSelectScalar = {
    id?: boolean
    title?: boolean
    text?: boolean
    user_id?: boolean
    isActive?: boolean
    parent_id?: boolean
    course_id?: boolean
  }

  export type course_commentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "text" | "user_id" | "isActive" | "parent_id" | "course_id", ExtArgs["result"]["course_comment"]>
  export type course_commentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | course_comment$parentArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    courseComments?: boolean | course_comment$courseCommentsArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
    _count?: boolean | Course_commentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type course_commentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | course_comment$parentArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }
  export type course_commentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | course_comment$parentArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }

  export type $course_commentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "course_comment"
    objects: {
      parent: Prisma.$course_commentPayload<ExtArgs> | null
      user: Prisma.$userPayload<ExtArgs>
      courseComments: Prisma.$course_commentPayload<ExtArgs>[]
      course: Prisma.$coursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      text: string
      user_id: string
      isActive: boolean
      parent_id: string | null
      course_id: string
    }, ExtArgs["result"]["course_comment"]>
    composites: {}
  }

  type course_commentGetPayload<S extends boolean | null | undefined | course_commentDefaultArgs> = $Result.GetResult<Prisma.$course_commentPayload, S>

  type course_commentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<course_commentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Course_commentCountAggregateInputType | true
    }

  export interface course_commentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['course_comment'], meta: { name: 'course_comment' } }
    /**
     * Find zero or one Course_comment that matches the filter.
     * @param {course_commentFindUniqueArgs} args - Arguments to find a Course_comment
     * @example
     * // Get one Course_comment
     * const course_comment = await prisma.course_comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends course_commentFindUniqueArgs>(args: SelectSubset<T, course_commentFindUniqueArgs<ExtArgs>>): Prisma__course_commentClient<$Result.GetResult<Prisma.$course_commentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course_comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {course_commentFindUniqueOrThrowArgs} args - Arguments to find a Course_comment
     * @example
     * // Get one Course_comment
     * const course_comment = await prisma.course_comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends course_commentFindUniqueOrThrowArgs>(args: SelectSubset<T, course_commentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__course_commentClient<$Result.GetResult<Prisma.$course_commentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course_comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_commentFindFirstArgs} args - Arguments to find a Course_comment
     * @example
     * // Get one Course_comment
     * const course_comment = await prisma.course_comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends course_commentFindFirstArgs>(args?: SelectSubset<T, course_commentFindFirstArgs<ExtArgs>>): Prisma__course_commentClient<$Result.GetResult<Prisma.$course_commentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course_comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_commentFindFirstOrThrowArgs} args - Arguments to find a Course_comment
     * @example
     * // Get one Course_comment
     * const course_comment = await prisma.course_comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends course_commentFindFirstOrThrowArgs>(args?: SelectSubset<T, course_commentFindFirstOrThrowArgs<ExtArgs>>): Prisma__course_commentClient<$Result.GetResult<Prisma.$course_commentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Course_comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_commentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Course_comments
     * const course_comments = await prisma.course_comment.findMany()
     * 
     * // Get first 10 Course_comments
     * const course_comments = await prisma.course_comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const course_commentWithIdOnly = await prisma.course_comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends course_commentFindManyArgs>(args?: SelectSubset<T, course_commentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_commentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course_comment.
     * @param {course_commentCreateArgs} args - Arguments to create a Course_comment.
     * @example
     * // Create one Course_comment
     * const Course_comment = await prisma.course_comment.create({
     *   data: {
     *     // ... data to create a Course_comment
     *   }
     * })
     * 
     */
    create<T extends course_commentCreateArgs>(args: SelectSubset<T, course_commentCreateArgs<ExtArgs>>): Prisma__course_commentClient<$Result.GetResult<Prisma.$course_commentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Course_comments.
     * @param {course_commentCreateManyArgs} args - Arguments to create many Course_comments.
     * @example
     * // Create many Course_comments
     * const course_comment = await prisma.course_comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends course_commentCreateManyArgs>(args?: SelectSubset<T, course_commentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Course_comments and returns the data saved in the database.
     * @param {course_commentCreateManyAndReturnArgs} args - Arguments to create many Course_comments.
     * @example
     * // Create many Course_comments
     * const course_comment = await prisma.course_comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Course_comments and only return the `id`
     * const course_commentWithIdOnly = await prisma.course_comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends course_commentCreateManyAndReturnArgs>(args?: SelectSubset<T, course_commentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_commentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course_comment.
     * @param {course_commentDeleteArgs} args - Arguments to delete one Course_comment.
     * @example
     * // Delete one Course_comment
     * const Course_comment = await prisma.course_comment.delete({
     *   where: {
     *     // ... filter to delete one Course_comment
     *   }
     * })
     * 
     */
    delete<T extends course_commentDeleteArgs>(args: SelectSubset<T, course_commentDeleteArgs<ExtArgs>>): Prisma__course_commentClient<$Result.GetResult<Prisma.$course_commentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course_comment.
     * @param {course_commentUpdateArgs} args - Arguments to update one Course_comment.
     * @example
     * // Update one Course_comment
     * const course_comment = await prisma.course_comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends course_commentUpdateArgs>(args: SelectSubset<T, course_commentUpdateArgs<ExtArgs>>): Prisma__course_commentClient<$Result.GetResult<Prisma.$course_commentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Course_comments.
     * @param {course_commentDeleteManyArgs} args - Arguments to filter Course_comments to delete.
     * @example
     * // Delete a few Course_comments
     * const { count } = await prisma.course_comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends course_commentDeleteManyArgs>(args?: SelectSubset<T, course_commentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Course_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_commentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Course_comments
     * const course_comment = await prisma.course_comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends course_commentUpdateManyArgs>(args: SelectSubset<T, course_commentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Course_comments and returns the data updated in the database.
     * @param {course_commentUpdateManyAndReturnArgs} args - Arguments to update many Course_comments.
     * @example
     * // Update many Course_comments
     * const course_comment = await prisma.course_comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Course_comments and only return the `id`
     * const course_commentWithIdOnly = await prisma.course_comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends course_commentUpdateManyAndReturnArgs>(args: SelectSubset<T, course_commentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_commentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course_comment.
     * @param {course_commentUpsertArgs} args - Arguments to update or create a Course_comment.
     * @example
     * // Update or create a Course_comment
     * const course_comment = await prisma.course_comment.upsert({
     *   create: {
     *     // ... data to create a Course_comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course_comment we want to update
     *   }
     * })
     */
    upsert<T extends course_commentUpsertArgs>(args: SelectSubset<T, course_commentUpsertArgs<ExtArgs>>): Prisma__course_commentClient<$Result.GetResult<Prisma.$course_commentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Course_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_commentCountArgs} args - Arguments to filter Course_comments to count.
     * @example
     * // Count the number of Course_comments
     * const count = await prisma.course_comment.count({
     *   where: {
     *     // ... the filter for the Course_comments we want to count
     *   }
     * })
    **/
    count<T extends course_commentCountArgs>(
      args?: Subset<T, course_commentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Course_commentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course_comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Course_commentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Course_commentAggregateArgs>(args: Subset<T, Course_commentAggregateArgs>): Prisma.PrismaPromise<GetCourse_commentAggregateType<T>>

    /**
     * Group by Course_comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_commentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends course_commentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: course_commentGroupByArgs['orderBy'] }
        : { orderBy?: course_commentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, course_commentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourse_commentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the course_comment model
   */
  readonly fields: course_commentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for course_comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__course_commentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends course_comment$parentArgs<ExtArgs> = {}>(args?: Subset<T, course_comment$parentArgs<ExtArgs>>): Prisma__course_commentClient<$Result.GetResult<Prisma.$course_commentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    courseComments<T extends course_comment$courseCommentsArgs<ExtArgs> = {}>(args?: Subset<T, course_comment$courseCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_commentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    course<T extends courseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, courseDefaultArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the course_comment model
   */
  interface course_commentFieldRefs {
    readonly id: FieldRef<"course_comment", 'String'>
    readonly title: FieldRef<"course_comment", 'String'>
    readonly text: FieldRef<"course_comment", 'String'>
    readonly user_id: FieldRef<"course_comment", 'String'>
    readonly isActive: FieldRef<"course_comment", 'Boolean'>
    readonly parent_id: FieldRef<"course_comment", 'String'>
    readonly course_id: FieldRef<"course_comment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * course_comment findUnique
   */
  export type course_commentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_comment
     */
    select?: course_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_comment
     */
    omit?: course_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_commentInclude<ExtArgs> | null
    /**
     * Filter, which course_comment to fetch.
     */
    where: course_commentWhereUniqueInput
  }

  /**
   * course_comment findUniqueOrThrow
   */
  export type course_commentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_comment
     */
    select?: course_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_comment
     */
    omit?: course_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_commentInclude<ExtArgs> | null
    /**
     * Filter, which course_comment to fetch.
     */
    where: course_commentWhereUniqueInput
  }

  /**
   * course_comment findFirst
   */
  export type course_commentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_comment
     */
    select?: course_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_comment
     */
    omit?: course_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_commentInclude<ExtArgs> | null
    /**
     * Filter, which course_comment to fetch.
     */
    where?: course_commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_comments to fetch.
     */
    orderBy?: course_commentOrderByWithRelationInput | course_commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for course_comments.
     */
    cursor?: course_commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of course_comments.
     */
    distinct?: Course_commentScalarFieldEnum | Course_commentScalarFieldEnum[]
  }

  /**
   * course_comment findFirstOrThrow
   */
  export type course_commentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_comment
     */
    select?: course_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_comment
     */
    omit?: course_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_commentInclude<ExtArgs> | null
    /**
     * Filter, which course_comment to fetch.
     */
    where?: course_commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_comments to fetch.
     */
    orderBy?: course_commentOrderByWithRelationInput | course_commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for course_comments.
     */
    cursor?: course_commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of course_comments.
     */
    distinct?: Course_commentScalarFieldEnum | Course_commentScalarFieldEnum[]
  }

  /**
   * course_comment findMany
   */
  export type course_commentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_comment
     */
    select?: course_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_comment
     */
    omit?: course_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_commentInclude<ExtArgs> | null
    /**
     * Filter, which course_comments to fetch.
     */
    where?: course_commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_comments to fetch.
     */
    orderBy?: course_commentOrderByWithRelationInput | course_commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing course_comments.
     */
    cursor?: course_commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of course_comments.
     */
    distinct?: Course_commentScalarFieldEnum | Course_commentScalarFieldEnum[]
  }

  /**
   * course_comment create
   */
  export type course_commentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_comment
     */
    select?: course_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_comment
     */
    omit?: course_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_commentInclude<ExtArgs> | null
    /**
     * The data needed to create a course_comment.
     */
    data: XOR<course_commentCreateInput, course_commentUncheckedCreateInput>
  }

  /**
   * course_comment createMany
   */
  export type course_commentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many course_comments.
     */
    data: course_commentCreateManyInput | course_commentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * course_comment createManyAndReturn
   */
  export type course_commentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_comment
     */
    select?: course_commentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course_comment
     */
    omit?: course_commentOmit<ExtArgs> | null
    /**
     * The data used to create many course_comments.
     */
    data: course_commentCreateManyInput | course_commentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_commentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * course_comment update
   */
  export type course_commentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_comment
     */
    select?: course_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_comment
     */
    omit?: course_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_commentInclude<ExtArgs> | null
    /**
     * The data needed to update a course_comment.
     */
    data: XOR<course_commentUpdateInput, course_commentUncheckedUpdateInput>
    /**
     * Choose, which course_comment to update.
     */
    where: course_commentWhereUniqueInput
  }

  /**
   * course_comment updateMany
   */
  export type course_commentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update course_comments.
     */
    data: XOR<course_commentUpdateManyMutationInput, course_commentUncheckedUpdateManyInput>
    /**
     * Filter which course_comments to update
     */
    where?: course_commentWhereInput
    /**
     * Limit how many course_comments to update.
     */
    limit?: number
  }

  /**
   * course_comment updateManyAndReturn
   */
  export type course_commentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_comment
     */
    select?: course_commentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course_comment
     */
    omit?: course_commentOmit<ExtArgs> | null
    /**
     * The data used to update course_comments.
     */
    data: XOR<course_commentUpdateManyMutationInput, course_commentUncheckedUpdateManyInput>
    /**
     * Filter which course_comments to update
     */
    where?: course_commentWhereInput
    /**
     * Limit how many course_comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_commentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * course_comment upsert
   */
  export type course_commentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_comment
     */
    select?: course_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_comment
     */
    omit?: course_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_commentInclude<ExtArgs> | null
    /**
     * The filter to search for the course_comment to update in case it exists.
     */
    where: course_commentWhereUniqueInput
    /**
     * In case the course_comment found by the `where` argument doesn't exist, create a new course_comment with this data.
     */
    create: XOR<course_commentCreateInput, course_commentUncheckedCreateInput>
    /**
     * In case the course_comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<course_commentUpdateInput, course_commentUncheckedUpdateInput>
  }

  /**
   * course_comment delete
   */
  export type course_commentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_comment
     */
    select?: course_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_comment
     */
    omit?: course_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_commentInclude<ExtArgs> | null
    /**
     * Filter which course_comment to delete.
     */
    where: course_commentWhereUniqueInput
  }

  /**
   * course_comment deleteMany
   */
  export type course_commentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course_comments to delete
     */
    where?: course_commentWhereInput
    /**
     * Limit how many course_comments to delete.
     */
    limit?: number
  }

  /**
   * course_comment.parent
   */
  export type course_comment$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_comment
     */
    select?: course_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_comment
     */
    omit?: course_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_commentInclude<ExtArgs> | null
    where?: course_commentWhereInput
  }

  /**
   * course_comment.courseComments
   */
  export type course_comment$courseCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_comment
     */
    select?: course_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_comment
     */
    omit?: course_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_commentInclude<ExtArgs> | null
    where?: course_commentWhereInput
    orderBy?: course_commentOrderByWithRelationInput | course_commentOrderByWithRelationInput[]
    cursor?: course_commentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Course_commentScalarFieldEnum | Course_commentScalarFieldEnum[]
  }

  /**
   * course_comment without action
   */
  export type course_commentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_comment
     */
    select?: course_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_comment
     */
    omit?: course_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_commentInclude<ExtArgs> | null
  }


  /**
   * Model course_session
   */

  export type AggregateCourse_session = {
    _count: Course_sessionCountAggregateOutputType | null
    _min: Course_sessionMinAggregateOutputType | null
    _max: Course_sessionMaxAggregateOutputType | null
  }

  export type Course_sessionMinAggregateOutputType = {
    id: string | null
    title: string | null
    text: string | null
    file: string | null
    course_id: string | null
  }

  export type Course_sessionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    text: string | null
    file: string | null
    course_id: string | null
  }

  export type Course_sessionCountAggregateOutputType = {
    id: number
    title: number
    text: number
    file: number
    course_id: number
    _all: number
  }


  export type Course_sessionMinAggregateInputType = {
    id?: true
    title?: true
    text?: true
    file?: true
    course_id?: true
  }

  export type Course_sessionMaxAggregateInputType = {
    id?: true
    title?: true
    text?: true
    file?: true
    course_id?: true
  }

  export type Course_sessionCountAggregateInputType = {
    id?: true
    title?: true
    text?: true
    file?: true
    course_id?: true
    _all?: true
  }

  export type Course_sessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course_session to aggregate.
     */
    where?: course_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_sessions to fetch.
     */
    orderBy?: course_sessionOrderByWithRelationInput | course_sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: course_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned course_sessions
    **/
    _count?: true | Course_sessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Course_sessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Course_sessionMaxAggregateInputType
  }

  export type GetCourse_sessionAggregateType<T extends Course_sessionAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse_session]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse_session[P]>
      : GetScalarType<T[P], AggregateCourse_session[P]>
  }




  export type course_sessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: course_sessionWhereInput
    orderBy?: course_sessionOrderByWithAggregationInput | course_sessionOrderByWithAggregationInput[]
    by: Course_sessionScalarFieldEnum[] | Course_sessionScalarFieldEnum
    having?: course_sessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Course_sessionCountAggregateInputType | true
    _min?: Course_sessionMinAggregateInputType
    _max?: Course_sessionMaxAggregateInputType
  }

  export type Course_sessionGroupByOutputType = {
    id: string
    title: string
    text: string
    file: string | null
    course_id: string
    _count: Course_sessionCountAggregateOutputType | null
    _min: Course_sessionMinAggregateOutputType | null
    _max: Course_sessionMaxAggregateOutputType | null
  }

  type GetCourse_sessionGroupByPayload<T extends course_sessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Course_sessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Course_sessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Course_sessionGroupByOutputType[P]>
            : GetScalarType<T[P], Course_sessionGroupByOutputType[P]>
        }
      >
    >


  export type course_sessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    text?: boolean
    file?: boolean
    course_id?: boolean
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_session"]>

  export type course_sessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    text?: boolean
    file?: boolean
    course_id?: boolean
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_session"]>

  export type course_sessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    text?: boolean
    file?: boolean
    course_id?: boolean
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_session"]>

  export type course_sessionSelectScalar = {
    id?: boolean
    title?: boolean
    text?: boolean
    file?: boolean
    course_id?: boolean
  }

  export type course_sessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "text" | "file" | "course_id", ExtArgs["result"]["course_session"]>
  export type course_sessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | courseDefaultArgs<ExtArgs>
  }
  export type course_sessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | courseDefaultArgs<ExtArgs>
  }
  export type course_sessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | courseDefaultArgs<ExtArgs>
  }

  export type $course_sessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "course_session"
    objects: {
      course: Prisma.$coursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      text: string
      file: string | null
      course_id: string
    }, ExtArgs["result"]["course_session"]>
    composites: {}
  }

  type course_sessionGetPayload<S extends boolean | null | undefined | course_sessionDefaultArgs> = $Result.GetResult<Prisma.$course_sessionPayload, S>

  type course_sessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<course_sessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Course_sessionCountAggregateInputType | true
    }

  export interface course_sessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['course_session'], meta: { name: 'course_session' } }
    /**
     * Find zero or one Course_session that matches the filter.
     * @param {course_sessionFindUniqueArgs} args - Arguments to find a Course_session
     * @example
     * // Get one Course_session
     * const course_session = await prisma.course_session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends course_sessionFindUniqueArgs>(args: SelectSubset<T, course_sessionFindUniqueArgs<ExtArgs>>): Prisma__course_sessionClient<$Result.GetResult<Prisma.$course_sessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course_session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {course_sessionFindUniqueOrThrowArgs} args - Arguments to find a Course_session
     * @example
     * // Get one Course_session
     * const course_session = await prisma.course_session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends course_sessionFindUniqueOrThrowArgs>(args: SelectSubset<T, course_sessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__course_sessionClient<$Result.GetResult<Prisma.$course_sessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course_session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_sessionFindFirstArgs} args - Arguments to find a Course_session
     * @example
     * // Get one Course_session
     * const course_session = await prisma.course_session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends course_sessionFindFirstArgs>(args?: SelectSubset<T, course_sessionFindFirstArgs<ExtArgs>>): Prisma__course_sessionClient<$Result.GetResult<Prisma.$course_sessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course_session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_sessionFindFirstOrThrowArgs} args - Arguments to find a Course_session
     * @example
     * // Get one Course_session
     * const course_session = await prisma.course_session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends course_sessionFindFirstOrThrowArgs>(args?: SelectSubset<T, course_sessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__course_sessionClient<$Result.GetResult<Prisma.$course_sessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Course_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_sessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Course_sessions
     * const course_sessions = await prisma.course_session.findMany()
     * 
     * // Get first 10 Course_sessions
     * const course_sessions = await prisma.course_session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const course_sessionWithIdOnly = await prisma.course_session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends course_sessionFindManyArgs>(args?: SelectSubset<T, course_sessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_sessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course_session.
     * @param {course_sessionCreateArgs} args - Arguments to create a Course_session.
     * @example
     * // Create one Course_session
     * const Course_session = await prisma.course_session.create({
     *   data: {
     *     // ... data to create a Course_session
     *   }
     * })
     * 
     */
    create<T extends course_sessionCreateArgs>(args: SelectSubset<T, course_sessionCreateArgs<ExtArgs>>): Prisma__course_sessionClient<$Result.GetResult<Prisma.$course_sessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Course_sessions.
     * @param {course_sessionCreateManyArgs} args - Arguments to create many Course_sessions.
     * @example
     * // Create many Course_sessions
     * const course_session = await prisma.course_session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends course_sessionCreateManyArgs>(args?: SelectSubset<T, course_sessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Course_sessions and returns the data saved in the database.
     * @param {course_sessionCreateManyAndReturnArgs} args - Arguments to create many Course_sessions.
     * @example
     * // Create many Course_sessions
     * const course_session = await prisma.course_session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Course_sessions and only return the `id`
     * const course_sessionWithIdOnly = await prisma.course_session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends course_sessionCreateManyAndReturnArgs>(args?: SelectSubset<T, course_sessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_sessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course_session.
     * @param {course_sessionDeleteArgs} args - Arguments to delete one Course_session.
     * @example
     * // Delete one Course_session
     * const Course_session = await prisma.course_session.delete({
     *   where: {
     *     // ... filter to delete one Course_session
     *   }
     * })
     * 
     */
    delete<T extends course_sessionDeleteArgs>(args: SelectSubset<T, course_sessionDeleteArgs<ExtArgs>>): Prisma__course_sessionClient<$Result.GetResult<Prisma.$course_sessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course_session.
     * @param {course_sessionUpdateArgs} args - Arguments to update one Course_session.
     * @example
     * // Update one Course_session
     * const course_session = await prisma.course_session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends course_sessionUpdateArgs>(args: SelectSubset<T, course_sessionUpdateArgs<ExtArgs>>): Prisma__course_sessionClient<$Result.GetResult<Prisma.$course_sessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Course_sessions.
     * @param {course_sessionDeleteManyArgs} args - Arguments to filter Course_sessions to delete.
     * @example
     * // Delete a few Course_sessions
     * const { count } = await prisma.course_session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends course_sessionDeleteManyArgs>(args?: SelectSubset<T, course_sessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Course_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_sessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Course_sessions
     * const course_session = await prisma.course_session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends course_sessionUpdateManyArgs>(args: SelectSubset<T, course_sessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Course_sessions and returns the data updated in the database.
     * @param {course_sessionUpdateManyAndReturnArgs} args - Arguments to update many Course_sessions.
     * @example
     * // Update many Course_sessions
     * const course_session = await prisma.course_session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Course_sessions and only return the `id`
     * const course_sessionWithIdOnly = await prisma.course_session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends course_sessionUpdateManyAndReturnArgs>(args: SelectSubset<T, course_sessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_sessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course_session.
     * @param {course_sessionUpsertArgs} args - Arguments to update or create a Course_session.
     * @example
     * // Update or create a Course_session
     * const course_session = await prisma.course_session.upsert({
     *   create: {
     *     // ... data to create a Course_session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course_session we want to update
     *   }
     * })
     */
    upsert<T extends course_sessionUpsertArgs>(args: SelectSubset<T, course_sessionUpsertArgs<ExtArgs>>): Prisma__course_sessionClient<$Result.GetResult<Prisma.$course_sessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Course_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_sessionCountArgs} args - Arguments to filter Course_sessions to count.
     * @example
     * // Count the number of Course_sessions
     * const count = await prisma.course_session.count({
     *   where: {
     *     // ... the filter for the Course_sessions we want to count
     *   }
     * })
    **/
    count<T extends course_sessionCountArgs>(
      args?: Subset<T, course_sessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Course_sessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course_session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Course_sessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Course_sessionAggregateArgs>(args: Subset<T, Course_sessionAggregateArgs>): Prisma.PrismaPromise<GetCourse_sessionAggregateType<T>>

    /**
     * Group by Course_session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_sessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends course_sessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: course_sessionGroupByArgs['orderBy'] }
        : { orderBy?: course_sessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, course_sessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourse_sessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the course_session model
   */
  readonly fields: course_sessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for course_session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__course_sessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends courseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, courseDefaultArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the course_session model
   */
  interface course_sessionFieldRefs {
    readonly id: FieldRef<"course_session", 'String'>
    readonly title: FieldRef<"course_session", 'String'>
    readonly text: FieldRef<"course_session", 'String'>
    readonly file: FieldRef<"course_session", 'String'>
    readonly course_id: FieldRef<"course_session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * course_session findUnique
   */
  export type course_sessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_session
     */
    select?: course_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_session
     */
    omit?: course_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_sessionInclude<ExtArgs> | null
    /**
     * Filter, which course_session to fetch.
     */
    where: course_sessionWhereUniqueInput
  }

  /**
   * course_session findUniqueOrThrow
   */
  export type course_sessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_session
     */
    select?: course_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_session
     */
    omit?: course_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_sessionInclude<ExtArgs> | null
    /**
     * Filter, which course_session to fetch.
     */
    where: course_sessionWhereUniqueInput
  }

  /**
   * course_session findFirst
   */
  export type course_sessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_session
     */
    select?: course_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_session
     */
    omit?: course_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_sessionInclude<ExtArgs> | null
    /**
     * Filter, which course_session to fetch.
     */
    where?: course_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_sessions to fetch.
     */
    orderBy?: course_sessionOrderByWithRelationInput | course_sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for course_sessions.
     */
    cursor?: course_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of course_sessions.
     */
    distinct?: Course_sessionScalarFieldEnum | Course_sessionScalarFieldEnum[]
  }

  /**
   * course_session findFirstOrThrow
   */
  export type course_sessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_session
     */
    select?: course_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_session
     */
    omit?: course_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_sessionInclude<ExtArgs> | null
    /**
     * Filter, which course_session to fetch.
     */
    where?: course_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_sessions to fetch.
     */
    orderBy?: course_sessionOrderByWithRelationInput | course_sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for course_sessions.
     */
    cursor?: course_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of course_sessions.
     */
    distinct?: Course_sessionScalarFieldEnum | Course_sessionScalarFieldEnum[]
  }

  /**
   * course_session findMany
   */
  export type course_sessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_session
     */
    select?: course_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_session
     */
    omit?: course_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_sessionInclude<ExtArgs> | null
    /**
     * Filter, which course_sessions to fetch.
     */
    where?: course_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_sessions to fetch.
     */
    orderBy?: course_sessionOrderByWithRelationInput | course_sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing course_sessions.
     */
    cursor?: course_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of course_sessions.
     */
    distinct?: Course_sessionScalarFieldEnum | Course_sessionScalarFieldEnum[]
  }

  /**
   * course_session create
   */
  export type course_sessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_session
     */
    select?: course_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_session
     */
    omit?: course_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_sessionInclude<ExtArgs> | null
    /**
     * The data needed to create a course_session.
     */
    data: XOR<course_sessionCreateInput, course_sessionUncheckedCreateInput>
  }

  /**
   * course_session createMany
   */
  export type course_sessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many course_sessions.
     */
    data: course_sessionCreateManyInput | course_sessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * course_session createManyAndReturn
   */
  export type course_sessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_session
     */
    select?: course_sessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course_session
     */
    omit?: course_sessionOmit<ExtArgs> | null
    /**
     * The data used to create many course_sessions.
     */
    data: course_sessionCreateManyInput | course_sessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_sessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * course_session update
   */
  export type course_sessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_session
     */
    select?: course_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_session
     */
    omit?: course_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_sessionInclude<ExtArgs> | null
    /**
     * The data needed to update a course_session.
     */
    data: XOR<course_sessionUpdateInput, course_sessionUncheckedUpdateInput>
    /**
     * Choose, which course_session to update.
     */
    where: course_sessionWhereUniqueInput
  }

  /**
   * course_session updateMany
   */
  export type course_sessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update course_sessions.
     */
    data: XOR<course_sessionUpdateManyMutationInput, course_sessionUncheckedUpdateManyInput>
    /**
     * Filter which course_sessions to update
     */
    where?: course_sessionWhereInput
    /**
     * Limit how many course_sessions to update.
     */
    limit?: number
  }

  /**
   * course_session updateManyAndReturn
   */
  export type course_sessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_session
     */
    select?: course_sessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course_session
     */
    omit?: course_sessionOmit<ExtArgs> | null
    /**
     * The data used to update course_sessions.
     */
    data: XOR<course_sessionUpdateManyMutationInput, course_sessionUncheckedUpdateManyInput>
    /**
     * Filter which course_sessions to update
     */
    where?: course_sessionWhereInput
    /**
     * Limit how many course_sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_sessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * course_session upsert
   */
  export type course_sessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_session
     */
    select?: course_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_session
     */
    omit?: course_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_sessionInclude<ExtArgs> | null
    /**
     * The filter to search for the course_session to update in case it exists.
     */
    where: course_sessionWhereUniqueInput
    /**
     * In case the course_session found by the `where` argument doesn't exist, create a new course_session with this data.
     */
    create: XOR<course_sessionCreateInput, course_sessionUncheckedCreateInput>
    /**
     * In case the course_session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<course_sessionUpdateInput, course_sessionUncheckedUpdateInput>
  }

  /**
   * course_session delete
   */
  export type course_sessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_session
     */
    select?: course_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_session
     */
    omit?: course_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_sessionInclude<ExtArgs> | null
    /**
     * Filter which course_session to delete.
     */
    where: course_sessionWhereUniqueInput
  }

  /**
   * course_session deleteMany
   */
  export type course_sessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course_sessions to delete
     */
    where?: course_sessionWhereInput
    /**
     * Limit how many course_sessions to delete.
     */
    limit?: number
  }

  /**
   * course_session without action
   */
  export type course_sessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_session
     */
    select?: course_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_session
     */
    omit?: course_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_sessionInclude<ExtArgs> | null
  }


  /**
   * Model course_type
   */

  export type AggregateCourse_type = {
    _count: Course_typeCountAggregateOutputType | null
    _min: Course_typeMinAggregateOutputType | null
    _max: Course_typeMaxAggregateOutputType | null
  }

  export type Course_typeMinAggregateOutputType = {
    id: string | null
    title: string | null
    file: string | null
  }

  export type Course_typeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    file: string | null
  }

  export type Course_typeCountAggregateOutputType = {
    id: number
    title: number
    file: number
    _all: number
  }


  export type Course_typeMinAggregateInputType = {
    id?: true
    title?: true
    file?: true
  }

  export type Course_typeMaxAggregateInputType = {
    id?: true
    title?: true
    file?: true
  }

  export type Course_typeCountAggregateInputType = {
    id?: true
    title?: true
    file?: true
    _all?: true
  }

  export type Course_typeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course_type to aggregate.
     */
    where?: course_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_types to fetch.
     */
    orderBy?: course_typeOrderByWithRelationInput | course_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: course_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned course_types
    **/
    _count?: true | Course_typeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Course_typeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Course_typeMaxAggregateInputType
  }

  export type GetCourse_typeAggregateType<T extends Course_typeAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse_type]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse_type[P]>
      : GetScalarType<T[P], AggregateCourse_type[P]>
  }




  export type course_typeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: course_typeWhereInput
    orderBy?: course_typeOrderByWithAggregationInput | course_typeOrderByWithAggregationInput[]
    by: Course_typeScalarFieldEnum[] | Course_typeScalarFieldEnum
    having?: course_typeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Course_typeCountAggregateInputType | true
    _min?: Course_typeMinAggregateInputType
    _max?: Course_typeMaxAggregateInputType
  }

  export type Course_typeGroupByOutputType = {
    id: string
    title: string
    file: string | null
    _count: Course_typeCountAggregateOutputType | null
    _min: Course_typeMinAggregateOutputType | null
    _max: Course_typeMaxAggregateOutputType | null
  }

  type GetCourse_typeGroupByPayload<T extends course_typeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Course_typeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Course_typeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Course_typeGroupByOutputType[P]>
            : GetScalarType<T[P], Course_typeGroupByOutputType[P]>
        }
      >
    >


  export type course_typeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    file?: boolean
    courses?: boolean | course_type$coursesArgs<ExtArgs>
    _count?: boolean | Course_typeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_type"]>

  export type course_typeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    file?: boolean
  }, ExtArgs["result"]["course_type"]>

  export type course_typeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    file?: boolean
  }, ExtArgs["result"]["course_type"]>

  export type course_typeSelectScalar = {
    id?: boolean
    title?: boolean
    file?: boolean
  }

  export type course_typeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "file", ExtArgs["result"]["course_type"]>
  export type course_typeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | course_type$coursesArgs<ExtArgs>
    _count?: boolean | Course_typeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type course_typeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type course_typeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $course_typePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "course_type"
    objects: {
      courses: Prisma.$coursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      file: string | null
    }, ExtArgs["result"]["course_type"]>
    composites: {}
  }

  type course_typeGetPayload<S extends boolean | null | undefined | course_typeDefaultArgs> = $Result.GetResult<Prisma.$course_typePayload, S>

  type course_typeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<course_typeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Course_typeCountAggregateInputType | true
    }

  export interface course_typeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['course_type'], meta: { name: 'course_type' } }
    /**
     * Find zero or one Course_type that matches the filter.
     * @param {course_typeFindUniqueArgs} args - Arguments to find a Course_type
     * @example
     * // Get one Course_type
     * const course_type = await prisma.course_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends course_typeFindUniqueArgs>(args: SelectSubset<T, course_typeFindUniqueArgs<ExtArgs>>): Prisma__course_typeClient<$Result.GetResult<Prisma.$course_typePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course_type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {course_typeFindUniqueOrThrowArgs} args - Arguments to find a Course_type
     * @example
     * // Get one Course_type
     * const course_type = await prisma.course_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends course_typeFindUniqueOrThrowArgs>(args: SelectSubset<T, course_typeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__course_typeClient<$Result.GetResult<Prisma.$course_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_typeFindFirstArgs} args - Arguments to find a Course_type
     * @example
     * // Get one Course_type
     * const course_type = await prisma.course_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends course_typeFindFirstArgs>(args?: SelectSubset<T, course_typeFindFirstArgs<ExtArgs>>): Prisma__course_typeClient<$Result.GetResult<Prisma.$course_typePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course_type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_typeFindFirstOrThrowArgs} args - Arguments to find a Course_type
     * @example
     * // Get one Course_type
     * const course_type = await prisma.course_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends course_typeFindFirstOrThrowArgs>(args?: SelectSubset<T, course_typeFindFirstOrThrowArgs<ExtArgs>>): Prisma__course_typeClient<$Result.GetResult<Prisma.$course_typePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Course_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_typeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Course_types
     * const course_types = await prisma.course_type.findMany()
     * 
     * // Get first 10 Course_types
     * const course_types = await prisma.course_type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const course_typeWithIdOnly = await prisma.course_type.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends course_typeFindManyArgs>(args?: SelectSubset<T, course_typeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_typePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course_type.
     * @param {course_typeCreateArgs} args - Arguments to create a Course_type.
     * @example
     * // Create one Course_type
     * const Course_type = await prisma.course_type.create({
     *   data: {
     *     // ... data to create a Course_type
     *   }
     * })
     * 
     */
    create<T extends course_typeCreateArgs>(args: SelectSubset<T, course_typeCreateArgs<ExtArgs>>): Prisma__course_typeClient<$Result.GetResult<Prisma.$course_typePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Course_types.
     * @param {course_typeCreateManyArgs} args - Arguments to create many Course_types.
     * @example
     * // Create many Course_types
     * const course_type = await prisma.course_type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends course_typeCreateManyArgs>(args?: SelectSubset<T, course_typeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Course_types and returns the data saved in the database.
     * @param {course_typeCreateManyAndReturnArgs} args - Arguments to create many Course_types.
     * @example
     * // Create many Course_types
     * const course_type = await prisma.course_type.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Course_types and only return the `id`
     * const course_typeWithIdOnly = await prisma.course_type.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends course_typeCreateManyAndReturnArgs>(args?: SelectSubset<T, course_typeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_typePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course_type.
     * @param {course_typeDeleteArgs} args - Arguments to delete one Course_type.
     * @example
     * // Delete one Course_type
     * const Course_type = await prisma.course_type.delete({
     *   where: {
     *     // ... filter to delete one Course_type
     *   }
     * })
     * 
     */
    delete<T extends course_typeDeleteArgs>(args: SelectSubset<T, course_typeDeleteArgs<ExtArgs>>): Prisma__course_typeClient<$Result.GetResult<Prisma.$course_typePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course_type.
     * @param {course_typeUpdateArgs} args - Arguments to update one Course_type.
     * @example
     * // Update one Course_type
     * const course_type = await prisma.course_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends course_typeUpdateArgs>(args: SelectSubset<T, course_typeUpdateArgs<ExtArgs>>): Prisma__course_typeClient<$Result.GetResult<Prisma.$course_typePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Course_types.
     * @param {course_typeDeleteManyArgs} args - Arguments to filter Course_types to delete.
     * @example
     * // Delete a few Course_types
     * const { count } = await prisma.course_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends course_typeDeleteManyArgs>(args?: SelectSubset<T, course_typeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Course_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Course_types
     * const course_type = await prisma.course_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends course_typeUpdateManyArgs>(args: SelectSubset<T, course_typeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Course_types and returns the data updated in the database.
     * @param {course_typeUpdateManyAndReturnArgs} args - Arguments to update many Course_types.
     * @example
     * // Update many Course_types
     * const course_type = await prisma.course_type.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Course_types and only return the `id`
     * const course_typeWithIdOnly = await prisma.course_type.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends course_typeUpdateManyAndReturnArgs>(args: SelectSubset<T, course_typeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_typePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course_type.
     * @param {course_typeUpsertArgs} args - Arguments to update or create a Course_type.
     * @example
     * // Update or create a Course_type
     * const course_type = await prisma.course_type.upsert({
     *   create: {
     *     // ... data to create a Course_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course_type we want to update
     *   }
     * })
     */
    upsert<T extends course_typeUpsertArgs>(args: SelectSubset<T, course_typeUpsertArgs<ExtArgs>>): Prisma__course_typeClient<$Result.GetResult<Prisma.$course_typePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Course_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_typeCountArgs} args - Arguments to filter Course_types to count.
     * @example
     * // Count the number of Course_types
     * const count = await prisma.course_type.count({
     *   where: {
     *     // ... the filter for the Course_types we want to count
     *   }
     * })
    **/
    count<T extends course_typeCountArgs>(
      args?: Subset<T, course_typeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Course_typeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Course_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Course_typeAggregateArgs>(args: Subset<T, Course_typeAggregateArgs>): Prisma.PrismaPromise<GetCourse_typeAggregateType<T>>

    /**
     * Group by Course_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_typeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends course_typeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: course_typeGroupByArgs['orderBy'] }
        : { orderBy?: course_typeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, course_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourse_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the course_type model
   */
  readonly fields: course_typeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for course_type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__course_typeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends course_type$coursesArgs<ExtArgs> = {}>(args?: Subset<T, course_type$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the course_type model
   */
  interface course_typeFieldRefs {
    readonly id: FieldRef<"course_type", 'String'>
    readonly title: FieldRef<"course_type", 'String'>
    readonly file: FieldRef<"course_type", 'String'>
  }
    

  // Custom InputTypes
  /**
   * course_type findUnique
   */
  export type course_typeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_type
     */
    select?: course_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_type
     */
    omit?: course_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_typeInclude<ExtArgs> | null
    /**
     * Filter, which course_type to fetch.
     */
    where: course_typeWhereUniqueInput
  }

  /**
   * course_type findUniqueOrThrow
   */
  export type course_typeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_type
     */
    select?: course_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_type
     */
    omit?: course_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_typeInclude<ExtArgs> | null
    /**
     * Filter, which course_type to fetch.
     */
    where: course_typeWhereUniqueInput
  }

  /**
   * course_type findFirst
   */
  export type course_typeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_type
     */
    select?: course_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_type
     */
    omit?: course_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_typeInclude<ExtArgs> | null
    /**
     * Filter, which course_type to fetch.
     */
    where?: course_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_types to fetch.
     */
    orderBy?: course_typeOrderByWithRelationInput | course_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for course_types.
     */
    cursor?: course_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of course_types.
     */
    distinct?: Course_typeScalarFieldEnum | Course_typeScalarFieldEnum[]
  }

  /**
   * course_type findFirstOrThrow
   */
  export type course_typeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_type
     */
    select?: course_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_type
     */
    omit?: course_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_typeInclude<ExtArgs> | null
    /**
     * Filter, which course_type to fetch.
     */
    where?: course_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_types to fetch.
     */
    orderBy?: course_typeOrderByWithRelationInput | course_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for course_types.
     */
    cursor?: course_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of course_types.
     */
    distinct?: Course_typeScalarFieldEnum | Course_typeScalarFieldEnum[]
  }

  /**
   * course_type findMany
   */
  export type course_typeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_type
     */
    select?: course_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_type
     */
    omit?: course_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_typeInclude<ExtArgs> | null
    /**
     * Filter, which course_types to fetch.
     */
    where?: course_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_types to fetch.
     */
    orderBy?: course_typeOrderByWithRelationInput | course_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing course_types.
     */
    cursor?: course_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of course_types.
     */
    distinct?: Course_typeScalarFieldEnum | Course_typeScalarFieldEnum[]
  }

  /**
   * course_type create
   */
  export type course_typeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_type
     */
    select?: course_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_type
     */
    omit?: course_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_typeInclude<ExtArgs> | null
    /**
     * The data needed to create a course_type.
     */
    data: XOR<course_typeCreateInput, course_typeUncheckedCreateInput>
  }

  /**
   * course_type createMany
   */
  export type course_typeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many course_types.
     */
    data: course_typeCreateManyInput | course_typeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * course_type createManyAndReturn
   */
  export type course_typeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_type
     */
    select?: course_typeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course_type
     */
    omit?: course_typeOmit<ExtArgs> | null
    /**
     * The data used to create many course_types.
     */
    data: course_typeCreateManyInput | course_typeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * course_type update
   */
  export type course_typeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_type
     */
    select?: course_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_type
     */
    omit?: course_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_typeInclude<ExtArgs> | null
    /**
     * The data needed to update a course_type.
     */
    data: XOR<course_typeUpdateInput, course_typeUncheckedUpdateInput>
    /**
     * Choose, which course_type to update.
     */
    where: course_typeWhereUniqueInput
  }

  /**
   * course_type updateMany
   */
  export type course_typeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update course_types.
     */
    data: XOR<course_typeUpdateManyMutationInput, course_typeUncheckedUpdateManyInput>
    /**
     * Filter which course_types to update
     */
    where?: course_typeWhereInput
    /**
     * Limit how many course_types to update.
     */
    limit?: number
  }

  /**
   * course_type updateManyAndReturn
   */
  export type course_typeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_type
     */
    select?: course_typeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course_type
     */
    omit?: course_typeOmit<ExtArgs> | null
    /**
     * The data used to update course_types.
     */
    data: XOR<course_typeUpdateManyMutationInput, course_typeUncheckedUpdateManyInput>
    /**
     * Filter which course_types to update
     */
    where?: course_typeWhereInput
    /**
     * Limit how many course_types to update.
     */
    limit?: number
  }

  /**
   * course_type upsert
   */
  export type course_typeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_type
     */
    select?: course_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_type
     */
    omit?: course_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_typeInclude<ExtArgs> | null
    /**
     * The filter to search for the course_type to update in case it exists.
     */
    where: course_typeWhereUniqueInput
    /**
     * In case the course_type found by the `where` argument doesn't exist, create a new course_type with this data.
     */
    create: XOR<course_typeCreateInput, course_typeUncheckedCreateInput>
    /**
     * In case the course_type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<course_typeUpdateInput, course_typeUncheckedUpdateInput>
  }

  /**
   * course_type delete
   */
  export type course_typeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_type
     */
    select?: course_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_type
     */
    omit?: course_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_typeInclude<ExtArgs> | null
    /**
     * Filter which course_type to delete.
     */
    where: course_typeWhereUniqueInput
  }

  /**
   * course_type deleteMany
   */
  export type course_typeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course_types to delete
     */
    where?: course_typeWhereInput
    /**
     * Limit how many course_types to delete.
     */
    limit?: number
  }

  /**
   * course_type.courses
   */
  export type course_type$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    where?: courseWhereInput
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    cursor?: courseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course_type without action
   */
  export type course_typeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_type
     */
    select?: course_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_type
     */
    omit?: course_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_typeInclude<ExtArgs> | null
  }


  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    title: string | null
    file: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    title: string | null
    file: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    title: number
    file: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    title?: true
    file?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    title?: true
    file?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    title?: true
    file?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    title: string
    file: string | null
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    file?: boolean
    courseCategories?: boolean | category$courseCategoriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    file?: boolean
  }, ExtArgs["result"]["category"]>

  export type categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    file?: boolean
  }, ExtArgs["result"]["category"]>

  export type categorySelectScalar = {
    id?: boolean
    title?: boolean
    file?: boolean
  }

  export type categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "file", ExtArgs["result"]["category"]>
  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseCategories?: boolean | category$courseCategoriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {
      courseCategories: Prisma.$course_categoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      file: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoryFindUniqueArgs>(args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoryFindFirstArgs>(args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoryFindManyArgs>(args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends categoryCreateArgs>(args: SelectSubset<T, categoryCreateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoryCreateManyArgs>(args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends categoryDeleteArgs>(args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoryUpdateArgs>(args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoryDeleteManyArgs>(args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoryUpdateManyArgs>(args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends categoryUpsertArgs>(args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courseCategories<T extends category$courseCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, category$courseCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the category model
   */
  interface categoryFieldRefs {
    readonly id: FieldRef<"category", 'String'>
    readonly title: FieldRef<"category", 'String'>
    readonly file: FieldRef<"category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }

  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category createManyAndReturn
   */
  export type categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category updateManyAndReturn
   */
  export type categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }

  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * category.courseCategories
   */
  export type category$courseCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_category
     */
    select?: course_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_category
     */
    omit?: course_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_categoryInclude<ExtArgs> | null
    where?: course_categoryWhereInput
    orderBy?: course_categoryOrderByWithRelationInput | course_categoryOrderByWithRelationInput[]
    cursor?: course_categoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Course_categoryScalarFieldEnum | Course_categoryScalarFieldEnum[]
  }

  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
  }


  /**
   * Model course_category
   */

  export type AggregateCourse_category = {
    _count: Course_categoryCountAggregateOutputType | null
    _min: Course_categoryMinAggregateOutputType | null
    _max: Course_categoryMaxAggregateOutputType | null
  }

  export type Course_categoryMinAggregateOutputType = {
    id: string | null
    course_id: string | null
    category_id: string | null
  }

  export type Course_categoryMaxAggregateOutputType = {
    id: string | null
    course_id: string | null
    category_id: string | null
  }

  export type Course_categoryCountAggregateOutputType = {
    id: number
    course_id: number
    category_id: number
    _all: number
  }


  export type Course_categoryMinAggregateInputType = {
    id?: true
    course_id?: true
    category_id?: true
  }

  export type Course_categoryMaxAggregateInputType = {
    id?: true
    course_id?: true
    category_id?: true
  }

  export type Course_categoryCountAggregateInputType = {
    id?: true
    course_id?: true
    category_id?: true
    _all?: true
  }

  export type Course_categoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course_category to aggregate.
     */
    where?: course_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_categories to fetch.
     */
    orderBy?: course_categoryOrderByWithRelationInput | course_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: course_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned course_categories
    **/
    _count?: true | Course_categoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Course_categoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Course_categoryMaxAggregateInputType
  }

  export type GetCourse_categoryAggregateType<T extends Course_categoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse_category]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse_category[P]>
      : GetScalarType<T[P], AggregateCourse_category[P]>
  }




  export type course_categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: course_categoryWhereInput
    orderBy?: course_categoryOrderByWithAggregationInput | course_categoryOrderByWithAggregationInput[]
    by: Course_categoryScalarFieldEnum[] | Course_categoryScalarFieldEnum
    having?: course_categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Course_categoryCountAggregateInputType | true
    _min?: Course_categoryMinAggregateInputType
    _max?: Course_categoryMaxAggregateInputType
  }

  export type Course_categoryGroupByOutputType = {
    id: string
    course_id: string
    category_id: string
    _count: Course_categoryCountAggregateOutputType | null
    _min: Course_categoryMinAggregateOutputType | null
    _max: Course_categoryMaxAggregateOutputType | null
  }

  type GetCourse_categoryGroupByPayload<T extends course_categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Course_categoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Course_categoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Course_categoryGroupByOutputType[P]>
            : GetScalarType<T[P], Course_categoryGroupByOutputType[P]>
        }
      >
    >


  export type course_categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    course_id?: boolean
    category_id?: boolean
    category?: boolean | categoryDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_category"]>

  export type course_categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    course_id?: boolean
    category_id?: boolean
    category?: boolean | categoryDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_category"]>

  export type course_categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    course_id?: boolean
    category_id?: boolean
    category?: boolean | categoryDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_category"]>

  export type course_categorySelectScalar = {
    id?: boolean
    course_id?: boolean
    category_id?: boolean
  }

  export type course_categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "course_id" | "category_id", ExtArgs["result"]["course_category"]>
  export type course_categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }
  export type course_categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }
  export type course_categoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }

  export type $course_categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "course_category"
    objects: {
      category: Prisma.$categoryPayload<ExtArgs>
      course: Prisma.$coursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      course_id: string
      category_id: string
    }, ExtArgs["result"]["course_category"]>
    composites: {}
  }

  type course_categoryGetPayload<S extends boolean | null | undefined | course_categoryDefaultArgs> = $Result.GetResult<Prisma.$course_categoryPayload, S>

  type course_categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<course_categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Course_categoryCountAggregateInputType | true
    }

  export interface course_categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['course_category'], meta: { name: 'course_category' } }
    /**
     * Find zero or one Course_category that matches the filter.
     * @param {course_categoryFindUniqueArgs} args - Arguments to find a Course_category
     * @example
     * // Get one Course_category
     * const course_category = await prisma.course_category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends course_categoryFindUniqueArgs>(args: SelectSubset<T, course_categoryFindUniqueArgs<ExtArgs>>): Prisma__course_categoryClient<$Result.GetResult<Prisma.$course_categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course_category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {course_categoryFindUniqueOrThrowArgs} args - Arguments to find a Course_category
     * @example
     * // Get one Course_category
     * const course_category = await prisma.course_category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends course_categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, course_categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__course_categoryClient<$Result.GetResult<Prisma.$course_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course_category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_categoryFindFirstArgs} args - Arguments to find a Course_category
     * @example
     * // Get one Course_category
     * const course_category = await prisma.course_category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends course_categoryFindFirstArgs>(args?: SelectSubset<T, course_categoryFindFirstArgs<ExtArgs>>): Prisma__course_categoryClient<$Result.GetResult<Prisma.$course_categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course_category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_categoryFindFirstOrThrowArgs} args - Arguments to find a Course_category
     * @example
     * // Get one Course_category
     * const course_category = await prisma.course_category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends course_categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, course_categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__course_categoryClient<$Result.GetResult<Prisma.$course_categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Course_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Course_categories
     * const course_categories = await prisma.course_category.findMany()
     * 
     * // Get first 10 Course_categories
     * const course_categories = await prisma.course_category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const course_categoryWithIdOnly = await prisma.course_category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends course_categoryFindManyArgs>(args?: SelectSubset<T, course_categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course_category.
     * @param {course_categoryCreateArgs} args - Arguments to create a Course_category.
     * @example
     * // Create one Course_category
     * const Course_category = await prisma.course_category.create({
     *   data: {
     *     // ... data to create a Course_category
     *   }
     * })
     * 
     */
    create<T extends course_categoryCreateArgs>(args: SelectSubset<T, course_categoryCreateArgs<ExtArgs>>): Prisma__course_categoryClient<$Result.GetResult<Prisma.$course_categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Course_categories.
     * @param {course_categoryCreateManyArgs} args - Arguments to create many Course_categories.
     * @example
     * // Create many Course_categories
     * const course_category = await prisma.course_category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends course_categoryCreateManyArgs>(args?: SelectSubset<T, course_categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Course_categories and returns the data saved in the database.
     * @param {course_categoryCreateManyAndReturnArgs} args - Arguments to create many Course_categories.
     * @example
     * // Create many Course_categories
     * const course_category = await prisma.course_category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Course_categories and only return the `id`
     * const course_categoryWithIdOnly = await prisma.course_category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends course_categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, course_categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course_category.
     * @param {course_categoryDeleteArgs} args - Arguments to delete one Course_category.
     * @example
     * // Delete one Course_category
     * const Course_category = await prisma.course_category.delete({
     *   where: {
     *     // ... filter to delete one Course_category
     *   }
     * })
     * 
     */
    delete<T extends course_categoryDeleteArgs>(args: SelectSubset<T, course_categoryDeleteArgs<ExtArgs>>): Prisma__course_categoryClient<$Result.GetResult<Prisma.$course_categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course_category.
     * @param {course_categoryUpdateArgs} args - Arguments to update one Course_category.
     * @example
     * // Update one Course_category
     * const course_category = await prisma.course_category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends course_categoryUpdateArgs>(args: SelectSubset<T, course_categoryUpdateArgs<ExtArgs>>): Prisma__course_categoryClient<$Result.GetResult<Prisma.$course_categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Course_categories.
     * @param {course_categoryDeleteManyArgs} args - Arguments to filter Course_categories to delete.
     * @example
     * // Delete a few Course_categories
     * const { count } = await prisma.course_category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends course_categoryDeleteManyArgs>(args?: SelectSubset<T, course_categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Course_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Course_categories
     * const course_category = await prisma.course_category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends course_categoryUpdateManyArgs>(args: SelectSubset<T, course_categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Course_categories and returns the data updated in the database.
     * @param {course_categoryUpdateManyAndReturnArgs} args - Arguments to update many Course_categories.
     * @example
     * // Update many Course_categories
     * const course_category = await prisma.course_category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Course_categories and only return the `id`
     * const course_categoryWithIdOnly = await prisma.course_category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends course_categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, course_categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course_category.
     * @param {course_categoryUpsertArgs} args - Arguments to update or create a Course_category.
     * @example
     * // Update or create a Course_category
     * const course_category = await prisma.course_category.upsert({
     *   create: {
     *     // ... data to create a Course_category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course_category we want to update
     *   }
     * })
     */
    upsert<T extends course_categoryUpsertArgs>(args: SelectSubset<T, course_categoryUpsertArgs<ExtArgs>>): Prisma__course_categoryClient<$Result.GetResult<Prisma.$course_categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Course_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_categoryCountArgs} args - Arguments to filter Course_categories to count.
     * @example
     * // Count the number of Course_categories
     * const count = await prisma.course_category.count({
     *   where: {
     *     // ... the filter for the Course_categories we want to count
     *   }
     * })
    **/
    count<T extends course_categoryCountArgs>(
      args?: Subset<T, course_categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Course_categoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Course_categoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Course_categoryAggregateArgs>(args: Subset<T, Course_categoryAggregateArgs>): Prisma.PrismaPromise<GetCourse_categoryAggregateType<T>>

    /**
     * Group by Course_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends course_categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: course_categoryGroupByArgs['orderBy'] }
        : { orderBy?: course_categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, course_categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourse_categoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the course_category model
   */
  readonly fields: course_categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for course_category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__course_categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoryDefaultArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends courseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, courseDefaultArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the course_category model
   */
  interface course_categoryFieldRefs {
    readonly id: FieldRef<"course_category", 'String'>
    readonly course_id: FieldRef<"course_category", 'String'>
    readonly category_id: FieldRef<"course_category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * course_category findUnique
   */
  export type course_categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_category
     */
    select?: course_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_category
     */
    omit?: course_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_categoryInclude<ExtArgs> | null
    /**
     * Filter, which course_category to fetch.
     */
    where: course_categoryWhereUniqueInput
  }

  /**
   * course_category findUniqueOrThrow
   */
  export type course_categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_category
     */
    select?: course_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_category
     */
    omit?: course_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_categoryInclude<ExtArgs> | null
    /**
     * Filter, which course_category to fetch.
     */
    where: course_categoryWhereUniqueInput
  }

  /**
   * course_category findFirst
   */
  export type course_categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_category
     */
    select?: course_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_category
     */
    omit?: course_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_categoryInclude<ExtArgs> | null
    /**
     * Filter, which course_category to fetch.
     */
    where?: course_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_categories to fetch.
     */
    orderBy?: course_categoryOrderByWithRelationInput | course_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for course_categories.
     */
    cursor?: course_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of course_categories.
     */
    distinct?: Course_categoryScalarFieldEnum | Course_categoryScalarFieldEnum[]
  }

  /**
   * course_category findFirstOrThrow
   */
  export type course_categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_category
     */
    select?: course_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_category
     */
    omit?: course_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_categoryInclude<ExtArgs> | null
    /**
     * Filter, which course_category to fetch.
     */
    where?: course_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_categories to fetch.
     */
    orderBy?: course_categoryOrderByWithRelationInput | course_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for course_categories.
     */
    cursor?: course_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of course_categories.
     */
    distinct?: Course_categoryScalarFieldEnum | Course_categoryScalarFieldEnum[]
  }

  /**
   * course_category findMany
   */
  export type course_categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_category
     */
    select?: course_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_category
     */
    omit?: course_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_categoryInclude<ExtArgs> | null
    /**
     * Filter, which course_categories to fetch.
     */
    where?: course_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_categories to fetch.
     */
    orderBy?: course_categoryOrderByWithRelationInput | course_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing course_categories.
     */
    cursor?: course_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of course_categories.
     */
    distinct?: Course_categoryScalarFieldEnum | Course_categoryScalarFieldEnum[]
  }

  /**
   * course_category create
   */
  export type course_categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_category
     */
    select?: course_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_category
     */
    omit?: course_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a course_category.
     */
    data: XOR<course_categoryCreateInput, course_categoryUncheckedCreateInput>
  }

  /**
   * course_category createMany
   */
  export type course_categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many course_categories.
     */
    data: course_categoryCreateManyInput | course_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * course_category createManyAndReturn
   */
  export type course_categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_category
     */
    select?: course_categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course_category
     */
    omit?: course_categoryOmit<ExtArgs> | null
    /**
     * The data used to create many course_categories.
     */
    data: course_categoryCreateManyInput | course_categoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_categoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * course_category update
   */
  export type course_categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_category
     */
    select?: course_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_category
     */
    omit?: course_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a course_category.
     */
    data: XOR<course_categoryUpdateInput, course_categoryUncheckedUpdateInput>
    /**
     * Choose, which course_category to update.
     */
    where: course_categoryWhereUniqueInput
  }

  /**
   * course_category updateMany
   */
  export type course_categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update course_categories.
     */
    data: XOR<course_categoryUpdateManyMutationInput, course_categoryUncheckedUpdateManyInput>
    /**
     * Filter which course_categories to update
     */
    where?: course_categoryWhereInput
    /**
     * Limit how many course_categories to update.
     */
    limit?: number
  }

  /**
   * course_category updateManyAndReturn
   */
  export type course_categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_category
     */
    select?: course_categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course_category
     */
    omit?: course_categoryOmit<ExtArgs> | null
    /**
     * The data used to update course_categories.
     */
    data: XOR<course_categoryUpdateManyMutationInput, course_categoryUncheckedUpdateManyInput>
    /**
     * Filter which course_categories to update
     */
    where?: course_categoryWhereInput
    /**
     * Limit how many course_categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_categoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * course_category upsert
   */
  export type course_categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_category
     */
    select?: course_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_category
     */
    omit?: course_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the course_category to update in case it exists.
     */
    where: course_categoryWhereUniqueInput
    /**
     * In case the course_category found by the `where` argument doesn't exist, create a new course_category with this data.
     */
    create: XOR<course_categoryCreateInput, course_categoryUncheckedCreateInput>
    /**
     * In case the course_category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<course_categoryUpdateInput, course_categoryUncheckedUpdateInput>
  }

  /**
   * course_category delete
   */
  export type course_categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_category
     */
    select?: course_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_category
     */
    omit?: course_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_categoryInclude<ExtArgs> | null
    /**
     * Filter which course_category to delete.
     */
    where: course_categoryWhereUniqueInput
  }

  /**
   * course_category deleteMany
   */
  export type course_categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course_categories to delete
     */
    where?: course_categoryWhereInput
    /**
     * Limit how many course_categories to delete.
     */
    limit?: number
  }

  /**
   * course_category without action
   */
  export type course_categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_category
     */
    select?: course_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_category
     */
    omit?: course_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_categoryInclude<ExtArgs> | null
  }


  /**
   * Model order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type OrderMinAggregateInputType = {
    id?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order to aggregate.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type orderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
    orderBy?: orderOrderByWithAggregationInput | orderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: orderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends orderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type orderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["order"]>

  export type orderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["order"]>

  export type orderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["order"]>

  export type orderSelectScalar = {
    id?: boolean
  }

  export type orderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["order"]>

  export type $orderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type orderGetPayload<S extends boolean | null | undefined | orderDefaultArgs> = $Result.GetResult<Prisma.$orderPayload, S>

  type orderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<orderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface orderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order'], meta: { name: 'order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {orderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends orderFindUniqueArgs>(args: SelectSubset<T, orderFindUniqueArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {orderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends orderFindUniqueOrThrowArgs>(args: SelectSubset<T, orderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends orderFindFirstArgs>(args?: SelectSubset<T, orderFindFirstArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends orderFindFirstOrThrowArgs>(args?: SelectSubset<T, orderFindFirstOrThrowArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends orderFindManyArgs>(args?: SelectSubset<T, orderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {orderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends orderCreateArgs>(args: SelectSubset<T, orderCreateArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {orderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends orderCreateManyArgs>(args?: SelectSubset<T, orderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {orderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends orderCreateManyAndReturnArgs>(args?: SelectSubset<T, orderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {orderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends orderDeleteArgs>(args: SelectSubset<T, orderDeleteArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {orderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends orderUpdateArgs>(args: SelectSubset<T, orderUpdateArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {orderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends orderDeleteManyArgs>(args?: SelectSubset<T, orderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends orderUpdateManyArgs>(args: SelectSubset<T, orderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {orderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends orderUpdateManyAndReturnArgs>(args: SelectSubset<T, orderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {orderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends orderUpsertArgs>(args: SelectSubset<T, orderUpsertArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends orderCountArgs>(
      args?: Subset<T, orderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends orderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderGroupByArgs['orderBy'] }
        : { orderBy?: orderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, orderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order model
   */
  readonly fields: orderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the order model
   */
  interface orderFieldRefs {
    readonly id: FieldRef<"order", 'String'>
  }
    

  // Custom InputTypes
  /**
   * order findUnique
   */
  export type orderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findUniqueOrThrow
   */
  export type orderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findFirst
   */
  export type orderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findFirstOrThrow
   */
  export type orderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findMany
   */
  export type orderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order create
   */
  export type orderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * The data needed to create a order.
     */
    data?: XOR<orderCreateInput, orderUncheckedCreateInput>
  }

  /**
   * order createMany
   */
  export type orderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: orderCreateManyInput | orderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order createManyAndReturn
   */
  export type orderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * The data used to create many orders.
     */
    data: orderCreateManyInput | orderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order update
   */
  export type orderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * The data needed to update a order.
     */
    data: XOR<orderUpdateInput, orderUncheckedUpdateInput>
    /**
     * Choose, which order to update.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order updateMany
   */
  export type orderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * order updateManyAndReturn
   */
  export type orderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * The data used to update orders.
     */
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * order upsert
   */
  export type orderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * The filter to search for the order to update in case it exists.
     */
    where: orderWhereUniqueInput
    /**
     * In case the order found by the `where` argument doesn't exist, create a new order with this data.
     */
    create: XOR<orderCreateInput, orderUncheckedCreateInput>
    /**
     * In case the order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderUpdateInput, orderUncheckedUpdateInput>
  }

  /**
   * order delete
   */
  export type orderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Filter which order to delete.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order deleteMany
   */
  export type orderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * order without action
   */
  export type orderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
  }


  /**
   * Model course_order
   */

  export type AggregateCourse_order = {
    _count: Course_orderCountAggregateOutputType | null
    _min: Course_orderMinAggregateOutputType | null
    _max: Course_orderMaxAggregateOutputType | null
  }

  export type Course_orderMinAggregateOutputType = {
    id: string | null
  }

  export type Course_orderMaxAggregateOutputType = {
    id: string | null
  }

  export type Course_orderCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type Course_orderMinAggregateInputType = {
    id?: true
  }

  export type Course_orderMaxAggregateInputType = {
    id?: true
  }

  export type Course_orderCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type Course_orderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course_order to aggregate.
     */
    where?: course_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_orders to fetch.
     */
    orderBy?: course_orderOrderByWithRelationInput | course_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: course_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned course_orders
    **/
    _count?: true | Course_orderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Course_orderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Course_orderMaxAggregateInputType
  }

  export type GetCourse_orderAggregateType<T extends Course_orderAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse_order]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse_order[P]>
      : GetScalarType<T[P], AggregateCourse_order[P]>
  }




  export type course_orderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: course_orderWhereInput
    orderBy?: course_orderOrderByWithAggregationInput | course_orderOrderByWithAggregationInput[]
    by: Course_orderScalarFieldEnum[] | Course_orderScalarFieldEnum
    having?: course_orderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Course_orderCountAggregateInputType | true
    _min?: Course_orderMinAggregateInputType
    _max?: Course_orderMaxAggregateInputType
  }

  export type Course_orderGroupByOutputType = {
    id: string
    _count: Course_orderCountAggregateOutputType | null
    _min: Course_orderMinAggregateOutputType | null
    _max: Course_orderMaxAggregateOutputType | null
  }

  type GetCourse_orderGroupByPayload<T extends course_orderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Course_orderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Course_orderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Course_orderGroupByOutputType[P]>
            : GetScalarType<T[P], Course_orderGroupByOutputType[P]>
        }
      >
    >


  export type course_orderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["course_order"]>

  export type course_orderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["course_order"]>

  export type course_orderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["course_order"]>

  export type course_orderSelectScalar = {
    id?: boolean
  }

  export type course_orderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["course_order"]>

  export type $course_orderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "course_order"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["course_order"]>
    composites: {}
  }

  type course_orderGetPayload<S extends boolean | null | undefined | course_orderDefaultArgs> = $Result.GetResult<Prisma.$course_orderPayload, S>

  type course_orderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<course_orderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Course_orderCountAggregateInputType | true
    }

  export interface course_orderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['course_order'], meta: { name: 'course_order' } }
    /**
     * Find zero or one Course_order that matches the filter.
     * @param {course_orderFindUniqueArgs} args - Arguments to find a Course_order
     * @example
     * // Get one Course_order
     * const course_order = await prisma.course_order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends course_orderFindUniqueArgs>(args: SelectSubset<T, course_orderFindUniqueArgs<ExtArgs>>): Prisma__course_orderClient<$Result.GetResult<Prisma.$course_orderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course_order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {course_orderFindUniqueOrThrowArgs} args - Arguments to find a Course_order
     * @example
     * // Get one Course_order
     * const course_order = await prisma.course_order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends course_orderFindUniqueOrThrowArgs>(args: SelectSubset<T, course_orderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__course_orderClient<$Result.GetResult<Prisma.$course_orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course_order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_orderFindFirstArgs} args - Arguments to find a Course_order
     * @example
     * // Get one Course_order
     * const course_order = await prisma.course_order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends course_orderFindFirstArgs>(args?: SelectSubset<T, course_orderFindFirstArgs<ExtArgs>>): Prisma__course_orderClient<$Result.GetResult<Prisma.$course_orderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course_order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_orderFindFirstOrThrowArgs} args - Arguments to find a Course_order
     * @example
     * // Get one Course_order
     * const course_order = await prisma.course_order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends course_orderFindFirstOrThrowArgs>(args?: SelectSubset<T, course_orderFindFirstOrThrowArgs<ExtArgs>>): Prisma__course_orderClient<$Result.GetResult<Prisma.$course_orderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Course_orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_orderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Course_orders
     * const course_orders = await prisma.course_order.findMany()
     * 
     * // Get first 10 Course_orders
     * const course_orders = await prisma.course_order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const course_orderWithIdOnly = await prisma.course_order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends course_orderFindManyArgs>(args?: SelectSubset<T, course_orderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course_order.
     * @param {course_orderCreateArgs} args - Arguments to create a Course_order.
     * @example
     * // Create one Course_order
     * const Course_order = await prisma.course_order.create({
     *   data: {
     *     // ... data to create a Course_order
     *   }
     * })
     * 
     */
    create<T extends course_orderCreateArgs>(args: SelectSubset<T, course_orderCreateArgs<ExtArgs>>): Prisma__course_orderClient<$Result.GetResult<Prisma.$course_orderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Course_orders.
     * @param {course_orderCreateManyArgs} args - Arguments to create many Course_orders.
     * @example
     * // Create many Course_orders
     * const course_order = await prisma.course_order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends course_orderCreateManyArgs>(args?: SelectSubset<T, course_orderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Course_orders and returns the data saved in the database.
     * @param {course_orderCreateManyAndReturnArgs} args - Arguments to create many Course_orders.
     * @example
     * // Create many Course_orders
     * const course_order = await prisma.course_order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Course_orders and only return the `id`
     * const course_orderWithIdOnly = await prisma.course_order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends course_orderCreateManyAndReturnArgs>(args?: SelectSubset<T, course_orderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_orderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course_order.
     * @param {course_orderDeleteArgs} args - Arguments to delete one Course_order.
     * @example
     * // Delete one Course_order
     * const Course_order = await prisma.course_order.delete({
     *   where: {
     *     // ... filter to delete one Course_order
     *   }
     * })
     * 
     */
    delete<T extends course_orderDeleteArgs>(args: SelectSubset<T, course_orderDeleteArgs<ExtArgs>>): Prisma__course_orderClient<$Result.GetResult<Prisma.$course_orderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course_order.
     * @param {course_orderUpdateArgs} args - Arguments to update one Course_order.
     * @example
     * // Update one Course_order
     * const course_order = await prisma.course_order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends course_orderUpdateArgs>(args: SelectSubset<T, course_orderUpdateArgs<ExtArgs>>): Prisma__course_orderClient<$Result.GetResult<Prisma.$course_orderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Course_orders.
     * @param {course_orderDeleteManyArgs} args - Arguments to filter Course_orders to delete.
     * @example
     * // Delete a few Course_orders
     * const { count } = await prisma.course_order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends course_orderDeleteManyArgs>(args?: SelectSubset<T, course_orderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Course_orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_orderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Course_orders
     * const course_order = await prisma.course_order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends course_orderUpdateManyArgs>(args: SelectSubset<T, course_orderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Course_orders and returns the data updated in the database.
     * @param {course_orderUpdateManyAndReturnArgs} args - Arguments to update many Course_orders.
     * @example
     * // Update many Course_orders
     * const course_order = await prisma.course_order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Course_orders and only return the `id`
     * const course_orderWithIdOnly = await prisma.course_order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends course_orderUpdateManyAndReturnArgs>(args: SelectSubset<T, course_orderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_orderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course_order.
     * @param {course_orderUpsertArgs} args - Arguments to update or create a Course_order.
     * @example
     * // Update or create a Course_order
     * const course_order = await prisma.course_order.upsert({
     *   create: {
     *     // ... data to create a Course_order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course_order we want to update
     *   }
     * })
     */
    upsert<T extends course_orderUpsertArgs>(args: SelectSubset<T, course_orderUpsertArgs<ExtArgs>>): Prisma__course_orderClient<$Result.GetResult<Prisma.$course_orderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Course_orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_orderCountArgs} args - Arguments to filter Course_orders to count.
     * @example
     * // Count the number of Course_orders
     * const count = await prisma.course_order.count({
     *   where: {
     *     // ... the filter for the Course_orders we want to count
     *   }
     * })
    **/
    count<T extends course_orderCountArgs>(
      args?: Subset<T, course_orderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Course_orderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course_order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Course_orderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Course_orderAggregateArgs>(args: Subset<T, Course_orderAggregateArgs>): Prisma.PrismaPromise<GetCourse_orderAggregateType<T>>

    /**
     * Group by Course_order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_orderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends course_orderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: course_orderGroupByArgs['orderBy'] }
        : { orderBy?: course_orderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, course_orderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourse_orderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the course_order model
   */
  readonly fields: course_orderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for course_order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__course_orderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the course_order model
   */
  interface course_orderFieldRefs {
    readonly id: FieldRef<"course_order", 'String'>
  }
    

  // Custom InputTypes
  /**
   * course_order findUnique
   */
  export type course_orderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_order
     */
    select?: course_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_order
     */
    omit?: course_orderOmit<ExtArgs> | null
    /**
     * Filter, which course_order to fetch.
     */
    where: course_orderWhereUniqueInput
  }

  /**
   * course_order findUniqueOrThrow
   */
  export type course_orderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_order
     */
    select?: course_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_order
     */
    omit?: course_orderOmit<ExtArgs> | null
    /**
     * Filter, which course_order to fetch.
     */
    where: course_orderWhereUniqueInput
  }

  /**
   * course_order findFirst
   */
  export type course_orderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_order
     */
    select?: course_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_order
     */
    omit?: course_orderOmit<ExtArgs> | null
    /**
     * Filter, which course_order to fetch.
     */
    where?: course_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_orders to fetch.
     */
    orderBy?: course_orderOrderByWithRelationInput | course_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for course_orders.
     */
    cursor?: course_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of course_orders.
     */
    distinct?: Course_orderScalarFieldEnum | Course_orderScalarFieldEnum[]
  }

  /**
   * course_order findFirstOrThrow
   */
  export type course_orderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_order
     */
    select?: course_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_order
     */
    omit?: course_orderOmit<ExtArgs> | null
    /**
     * Filter, which course_order to fetch.
     */
    where?: course_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_orders to fetch.
     */
    orderBy?: course_orderOrderByWithRelationInput | course_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for course_orders.
     */
    cursor?: course_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of course_orders.
     */
    distinct?: Course_orderScalarFieldEnum | Course_orderScalarFieldEnum[]
  }

  /**
   * course_order findMany
   */
  export type course_orderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_order
     */
    select?: course_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_order
     */
    omit?: course_orderOmit<ExtArgs> | null
    /**
     * Filter, which course_orders to fetch.
     */
    where?: course_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_orders to fetch.
     */
    orderBy?: course_orderOrderByWithRelationInput | course_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing course_orders.
     */
    cursor?: course_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of course_orders.
     */
    distinct?: Course_orderScalarFieldEnum | Course_orderScalarFieldEnum[]
  }

  /**
   * course_order create
   */
  export type course_orderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_order
     */
    select?: course_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_order
     */
    omit?: course_orderOmit<ExtArgs> | null
    /**
     * The data needed to create a course_order.
     */
    data?: XOR<course_orderCreateInput, course_orderUncheckedCreateInput>
  }

  /**
   * course_order createMany
   */
  export type course_orderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many course_orders.
     */
    data: course_orderCreateManyInput | course_orderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * course_order createManyAndReturn
   */
  export type course_orderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_order
     */
    select?: course_orderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course_order
     */
    omit?: course_orderOmit<ExtArgs> | null
    /**
     * The data used to create many course_orders.
     */
    data: course_orderCreateManyInput | course_orderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * course_order update
   */
  export type course_orderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_order
     */
    select?: course_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_order
     */
    omit?: course_orderOmit<ExtArgs> | null
    /**
     * The data needed to update a course_order.
     */
    data: XOR<course_orderUpdateInput, course_orderUncheckedUpdateInput>
    /**
     * Choose, which course_order to update.
     */
    where: course_orderWhereUniqueInput
  }

  /**
   * course_order updateMany
   */
  export type course_orderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update course_orders.
     */
    data: XOR<course_orderUpdateManyMutationInput, course_orderUncheckedUpdateManyInput>
    /**
     * Filter which course_orders to update
     */
    where?: course_orderWhereInput
    /**
     * Limit how many course_orders to update.
     */
    limit?: number
  }

  /**
   * course_order updateManyAndReturn
   */
  export type course_orderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_order
     */
    select?: course_orderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course_order
     */
    omit?: course_orderOmit<ExtArgs> | null
    /**
     * The data used to update course_orders.
     */
    data: XOR<course_orderUpdateManyMutationInput, course_orderUncheckedUpdateManyInput>
    /**
     * Filter which course_orders to update
     */
    where?: course_orderWhereInput
    /**
     * Limit how many course_orders to update.
     */
    limit?: number
  }

  /**
   * course_order upsert
   */
  export type course_orderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_order
     */
    select?: course_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_order
     */
    omit?: course_orderOmit<ExtArgs> | null
    /**
     * The filter to search for the course_order to update in case it exists.
     */
    where: course_orderWhereUniqueInput
    /**
     * In case the course_order found by the `where` argument doesn't exist, create a new course_order with this data.
     */
    create: XOR<course_orderCreateInput, course_orderUncheckedCreateInput>
    /**
     * In case the course_order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<course_orderUpdateInput, course_orderUncheckedUpdateInput>
  }

  /**
   * course_order delete
   */
  export type course_orderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_order
     */
    select?: course_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_order
     */
    omit?: course_orderOmit<ExtArgs> | null
    /**
     * Filter which course_order to delete.
     */
    where: course_orderWhereUniqueInput
  }

  /**
   * course_order deleteMany
   */
  export type course_orderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course_orders to delete
     */
    where?: course_orderWhereInput
    /**
     * Limit how many course_orders to delete.
     */
    limit?: number
  }

  /**
   * course_order without action
   */
  export type course_orderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_order
     */
    select?: course_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_order
     */
    omit?: course_orderOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone_number: 'phone_number',
    national_code: 'national_code',
    location: 'location'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const User_roleScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    role_id: 'role_id',
    isActive: 'isActive',
    created_at: 'created_at'
  };

  export type User_roleScalarFieldEnum = (typeof User_roleScalarFieldEnum)[keyof typeof User_roleScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const Login_transactionScalarFieldEnum: {
    id: 'id',
    ip: 'ip',
    login_date: 'login_date',
    user_id: 'user_id'
  };

  export type Login_transactionScalarFieldEnum = (typeof Login_transactionScalarFieldEnum)[keyof typeof Login_transactionScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    mini_description: 'mini_description',
    isActive: 'isActive',
    picture: 'picture',
    price: 'price',
    discount: 'discount',
    google_title: 'google_title',
    google_description: 'google_description',
    created_by: 'created_by',
    type_id: 'type_id',
    created_at: 'created_at'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const Course_rateScalarFieldEnum: {
    id: 'id',
    rate: 'rate',
    course_id: 'course_id',
    user_id: 'user_id'
  };

  export type Course_rateScalarFieldEnum = (typeof Course_rateScalarFieldEnum)[keyof typeof Course_rateScalarFieldEnum]


  export const Course_favoriteScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    course_id: 'course_id'
  };

  export type Course_favoriteScalarFieldEnum = (typeof Course_favoriteScalarFieldEnum)[keyof typeof Course_favoriteScalarFieldEnum]


  export const Course_commentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    text: 'text',
    user_id: 'user_id',
    isActive: 'isActive',
    parent_id: 'parent_id',
    course_id: 'course_id'
  };

  export type Course_commentScalarFieldEnum = (typeof Course_commentScalarFieldEnum)[keyof typeof Course_commentScalarFieldEnum]


  export const Course_sessionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    text: 'text',
    file: 'file',
    course_id: 'course_id'
  };

  export type Course_sessionScalarFieldEnum = (typeof Course_sessionScalarFieldEnum)[keyof typeof Course_sessionScalarFieldEnum]


  export const Course_typeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    file: 'file'
  };

  export type Course_typeScalarFieldEnum = (typeof Course_typeScalarFieldEnum)[keyof typeof Course_typeScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    file: 'file'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const Course_categoryScalarFieldEnum: {
    id: 'id',
    course_id: 'course_id',
    category_id: 'category_id'
  };

  export type Course_categoryScalarFieldEnum = (typeof Course_categoryScalarFieldEnum)[keyof typeof Course_categoryScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const Course_orderScalarFieldEnum: {
    id: 'id'
  };

  export type Course_orderScalarFieldEnum = (typeof Course_orderScalarFieldEnum)[keyof typeof Course_orderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    phone_number?: StringFilter<"user"> | string
    national_code?: StringNullableFilter<"user"> | string | null
    location?: StringNullableFilter<"user"> | string | null
    userRoles?: User_roleListRelationFilter
    loginTransactions?: Login_transactionListRelationFilter
    courses?: CourseListRelationFilter
    courseRates?: Course_rateListRelationFilter
    courseFavorites?: Course_favoriteListRelationFilter
    courseComments?: Course_commentListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    national_code?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    userRoles?: user_roleOrderByRelationAggregateInput
    loginTransactions?: login_transactionOrderByRelationAggregateInput
    courses?: courseOrderByRelationAggregateInput
    courseRates?: course_rateOrderByRelationAggregateInput
    courseFavorites?: course_favoriteOrderByRelationAggregateInput
    courseComments?: course_commentOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    phone_number?: StringFilter<"user"> | string
    national_code?: StringNullableFilter<"user"> | string | null
    location?: StringNullableFilter<"user"> | string | null
    userRoles?: User_roleListRelationFilter
    loginTransactions?: Login_transactionListRelationFilter
    courses?: CourseListRelationFilter
    courseRates?: Course_rateListRelationFilter
    courseFavorites?: Course_favoriteListRelationFilter
    courseComments?: Course_commentListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    national_code?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    phone_number?: StringWithAggregatesFilter<"user"> | string
    national_code?: StringNullableWithAggregatesFilter<"user"> | string | null
    location?: StringNullableWithAggregatesFilter<"user"> | string | null
  }

  export type user_roleWhereInput = {
    AND?: user_roleWhereInput | user_roleWhereInput[]
    OR?: user_roleWhereInput[]
    NOT?: user_roleWhereInput | user_roleWhereInput[]
    id?: StringFilter<"user_role"> | string
    user_id?: StringFilter<"user_role"> | string
    role_id?: StringFilter<"user_role"> | string
    isActive?: BoolFilter<"user_role"> | boolean
    created_at?: DateTimeFilter<"user_role"> | Date | string
    role?: XOR<RoleScalarRelationFilter, roleWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type user_roleOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    isActive?: SortOrder
    created_at?: SortOrder
    role?: roleOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type user_roleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: user_roleWhereInput | user_roleWhereInput[]
    OR?: user_roleWhereInput[]
    NOT?: user_roleWhereInput | user_roleWhereInput[]
    user_id?: StringFilter<"user_role"> | string
    role_id?: StringFilter<"user_role"> | string
    isActive?: BoolFilter<"user_role"> | boolean
    created_at?: DateTimeFilter<"user_role"> | Date | string
    role?: XOR<RoleScalarRelationFilter, roleWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type user_roleOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    isActive?: SortOrder
    created_at?: SortOrder
    _count?: user_roleCountOrderByAggregateInput
    _max?: user_roleMaxOrderByAggregateInput
    _min?: user_roleMinOrderByAggregateInput
  }

  export type user_roleScalarWhereWithAggregatesInput = {
    AND?: user_roleScalarWhereWithAggregatesInput | user_roleScalarWhereWithAggregatesInput[]
    OR?: user_roleScalarWhereWithAggregatesInput[]
    NOT?: user_roleScalarWhereWithAggregatesInput | user_roleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user_role"> | string
    user_id?: StringWithAggregatesFilter<"user_role"> | string
    role_id?: StringWithAggregatesFilter<"user_role"> | string
    isActive?: BoolWithAggregatesFilter<"user_role"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"user_role"> | Date | string
  }

  export type roleWhereInput = {
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    id?: StringFilter<"role"> | string
    name?: StringFilter<"role"> | string
    userRoles?: User_roleListRelationFilter
  }

  export type roleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userRoles?: user_roleOrderByRelationAggregateInput
  }

  export type roleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    name?: StringFilter<"role"> | string
    userRoles?: User_roleListRelationFilter
  }, "id">

  export type roleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: roleCountOrderByAggregateInput
    _max?: roleMaxOrderByAggregateInput
    _min?: roleMinOrderByAggregateInput
  }

  export type roleScalarWhereWithAggregatesInput = {
    AND?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    OR?: roleScalarWhereWithAggregatesInput[]
    NOT?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"role"> | string
    name?: StringWithAggregatesFilter<"role"> | string
  }

  export type login_transactionWhereInput = {
    AND?: login_transactionWhereInput | login_transactionWhereInput[]
    OR?: login_transactionWhereInput[]
    NOT?: login_transactionWhereInput | login_transactionWhereInput[]
    id?: StringFilter<"login_transaction"> | string
    ip?: StringFilter<"login_transaction"> | string
    login_date?: DateTimeFilter<"login_transaction"> | Date | string
    user_id?: StringFilter<"login_transaction"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type login_transactionOrderByWithRelationInput = {
    id?: SortOrder
    ip?: SortOrder
    login_date?: SortOrder
    user_id?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type login_transactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: login_transactionWhereInput | login_transactionWhereInput[]
    OR?: login_transactionWhereInput[]
    NOT?: login_transactionWhereInput | login_transactionWhereInput[]
    ip?: StringFilter<"login_transaction"> | string
    login_date?: DateTimeFilter<"login_transaction"> | Date | string
    user_id?: StringFilter<"login_transaction"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type login_transactionOrderByWithAggregationInput = {
    id?: SortOrder
    ip?: SortOrder
    login_date?: SortOrder
    user_id?: SortOrder
    _count?: login_transactionCountOrderByAggregateInput
    _max?: login_transactionMaxOrderByAggregateInput
    _min?: login_transactionMinOrderByAggregateInput
  }

  export type login_transactionScalarWhereWithAggregatesInput = {
    AND?: login_transactionScalarWhereWithAggregatesInput | login_transactionScalarWhereWithAggregatesInput[]
    OR?: login_transactionScalarWhereWithAggregatesInput[]
    NOT?: login_transactionScalarWhereWithAggregatesInput | login_transactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"login_transaction"> | string
    ip?: StringWithAggregatesFilter<"login_transaction"> | string
    login_date?: DateTimeWithAggregatesFilter<"login_transaction"> | Date | string
    user_id?: StringWithAggregatesFilter<"login_transaction"> | string
  }

  export type courseWhereInput = {
    AND?: courseWhereInput | courseWhereInput[]
    OR?: courseWhereInput[]
    NOT?: courseWhereInput | courseWhereInput[]
    id?: StringFilter<"course"> | string
    title?: StringFilter<"course"> | string
    description?: StringFilter<"course"> | string
    mini_description?: StringFilter<"course"> | string
    isActive?: BoolFilter<"course"> | boolean
    picture?: StringFilter<"course"> | string
    price?: DecimalFilter<"course"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"course"> | Decimal | DecimalJsLike | number | string
    google_title?: StringFilter<"course"> | string
    google_description?: StringFilter<"course"> | string
    created_by?: StringFilter<"course"> | string
    type_id?: StringFilter<"course"> | string
    created_at?: DateTimeFilter<"course"> | Date | string
    type?: XOR<Course_typeScalarRelationFilter, course_typeWhereInput>
    teacher?: XOR<UserScalarRelationFilter, userWhereInput>
    courseRates?: Course_rateListRelationFilter
    courseFavorites?: Course_favoriteListRelationFilter
    courseSessions?: Course_sessionListRelationFilter
    courseCategories?: Course_categoryListRelationFilter
    courseComments?: Course_commentListRelationFilter
  }

  export type courseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    mini_description?: SortOrder
    isActive?: SortOrder
    picture?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    google_title?: SortOrder
    google_description?: SortOrder
    created_by?: SortOrder
    type_id?: SortOrder
    created_at?: SortOrder
    type?: course_typeOrderByWithRelationInput
    teacher?: userOrderByWithRelationInput
    courseRates?: course_rateOrderByRelationAggregateInput
    courseFavorites?: course_favoriteOrderByRelationAggregateInput
    courseSessions?: course_sessionOrderByRelationAggregateInput
    courseCategories?: course_categoryOrderByRelationAggregateInput
    courseComments?: course_commentOrderByRelationAggregateInput
  }

  export type courseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: courseWhereInput | courseWhereInput[]
    OR?: courseWhereInput[]
    NOT?: courseWhereInput | courseWhereInput[]
    title?: StringFilter<"course"> | string
    description?: StringFilter<"course"> | string
    mini_description?: StringFilter<"course"> | string
    isActive?: BoolFilter<"course"> | boolean
    picture?: StringFilter<"course"> | string
    price?: DecimalFilter<"course"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"course"> | Decimal | DecimalJsLike | number | string
    google_title?: StringFilter<"course"> | string
    google_description?: StringFilter<"course"> | string
    created_by?: StringFilter<"course"> | string
    type_id?: StringFilter<"course"> | string
    created_at?: DateTimeFilter<"course"> | Date | string
    type?: XOR<Course_typeScalarRelationFilter, course_typeWhereInput>
    teacher?: XOR<UserScalarRelationFilter, userWhereInput>
    courseRates?: Course_rateListRelationFilter
    courseFavorites?: Course_favoriteListRelationFilter
    courseSessions?: Course_sessionListRelationFilter
    courseCategories?: Course_categoryListRelationFilter
    courseComments?: Course_commentListRelationFilter
  }, "id">

  export type courseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    mini_description?: SortOrder
    isActive?: SortOrder
    picture?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    google_title?: SortOrder
    google_description?: SortOrder
    created_by?: SortOrder
    type_id?: SortOrder
    created_at?: SortOrder
    _count?: courseCountOrderByAggregateInput
    _avg?: courseAvgOrderByAggregateInput
    _max?: courseMaxOrderByAggregateInput
    _min?: courseMinOrderByAggregateInput
    _sum?: courseSumOrderByAggregateInput
  }

  export type courseScalarWhereWithAggregatesInput = {
    AND?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[]
    OR?: courseScalarWhereWithAggregatesInput[]
    NOT?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"course"> | string
    title?: StringWithAggregatesFilter<"course"> | string
    description?: StringWithAggregatesFilter<"course"> | string
    mini_description?: StringWithAggregatesFilter<"course"> | string
    isActive?: BoolWithAggregatesFilter<"course"> | boolean
    picture?: StringWithAggregatesFilter<"course"> | string
    price?: DecimalWithAggregatesFilter<"course"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalWithAggregatesFilter<"course"> | Decimal | DecimalJsLike | number | string
    google_title?: StringWithAggregatesFilter<"course"> | string
    google_description?: StringWithAggregatesFilter<"course"> | string
    created_by?: StringWithAggregatesFilter<"course"> | string
    type_id?: StringWithAggregatesFilter<"course"> | string
    created_at?: DateTimeWithAggregatesFilter<"course"> | Date | string
  }

  export type course_rateWhereInput = {
    AND?: course_rateWhereInput | course_rateWhereInput[]
    OR?: course_rateWhereInput[]
    NOT?: course_rateWhereInput | course_rateWhereInput[]
    id?: StringFilter<"course_rate"> | string
    rate?: FloatFilter<"course_rate"> | number
    course_id?: StringFilter<"course_rate"> | string
    user_id?: StringFilter<"course_rate"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
  }

  export type course_rateOrderByWithRelationInput = {
    id?: SortOrder
    rate?: SortOrder
    course_id?: SortOrder
    user_id?: SortOrder
    user?: userOrderByWithRelationInput
    course?: courseOrderByWithRelationInput
  }

  export type course_rateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: course_rateWhereInput | course_rateWhereInput[]
    OR?: course_rateWhereInput[]
    NOT?: course_rateWhereInput | course_rateWhereInput[]
    rate?: FloatFilter<"course_rate"> | number
    course_id?: StringFilter<"course_rate"> | string
    user_id?: StringFilter<"course_rate"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
  }, "id">

  export type course_rateOrderByWithAggregationInput = {
    id?: SortOrder
    rate?: SortOrder
    course_id?: SortOrder
    user_id?: SortOrder
    _count?: course_rateCountOrderByAggregateInput
    _avg?: course_rateAvgOrderByAggregateInput
    _max?: course_rateMaxOrderByAggregateInput
    _min?: course_rateMinOrderByAggregateInput
    _sum?: course_rateSumOrderByAggregateInput
  }

  export type course_rateScalarWhereWithAggregatesInput = {
    AND?: course_rateScalarWhereWithAggregatesInput | course_rateScalarWhereWithAggregatesInput[]
    OR?: course_rateScalarWhereWithAggregatesInput[]
    NOT?: course_rateScalarWhereWithAggregatesInput | course_rateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"course_rate"> | string
    rate?: FloatWithAggregatesFilter<"course_rate"> | number
    course_id?: StringWithAggregatesFilter<"course_rate"> | string
    user_id?: StringWithAggregatesFilter<"course_rate"> | string
  }

  export type course_favoriteWhereInput = {
    AND?: course_favoriteWhereInput | course_favoriteWhereInput[]
    OR?: course_favoriteWhereInput[]
    NOT?: course_favoriteWhereInput | course_favoriteWhereInput[]
    id?: StringFilter<"course_favorite"> | string
    user_id?: StringFilter<"course_favorite"> | string
    course_id?: StringFilter<"course_favorite"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
  }

  export type course_favoriteOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    user?: userOrderByWithRelationInput
    course?: courseOrderByWithRelationInput
  }

  export type course_favoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: course_favoriteWhereInput | course_favoriteWhereInput[]
    OR?: course_favoriteWhereInput[]
    NOT?: course_favoriteWhereInput | course_favoriteWhereInput[]
    user_id?: StringFilter<"course_favorite"> | string
    course_id?: StringFilter<"course_favorite"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
  }, "id">

  export type course_favoriteOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    _count?: course_favoriteCountOrderByAggregateInput
    _max?: course_favoriteMaxOrderByAggregateInput
    _min?: course_favoriteMinOrderByAggregateInput
  }

  export type course_favoriteScalarWhereWithAggregatesInput = {
    AND?: course_favoriteScalarWhereWithAggregatesInput | course_favoriteScalarWhereWithAggregatesInput[]
    OR?: course_favoriteScalarWhereWithAggregatesInput[]
    NOT?: course_favoriteScalarWhereWithAggregatesInput | course_favoriteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"course_favorite"> | string
    user_id?: StringWithAggregatesFilter<"course_favorite"> | string
    course_id?: StringWithAggregatesFilter<"course_favorite"> | string
  }

  export type course_commentWhereInput = {
    AND?: course_commentWhereInput | course_commentWhereInput[]
    OR?: course_commentWhereInput[]
    NOT?: course_commentWhereInput | course_commentWhereInput[]
    id?: StringFilter<"course_comment"> | string
    title?: StringFilter<"course_comment"> | string
    text?: StringFilter<"course_comment"> | string
    user_id?: StringFilter<"course_comment"> | string
    isActive?: BoolFilter<"course_comment"> | boolean
    parent_id?: StringNullableFilter<"course_comment"> | string | null
    course_id?: StringFilter<"course_comment"> | string
    parent?: XOR<Course_commentNullableScalarRelationFilter, course_commentWhereInput> | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    courseComments?: Course_commentListRelationFilter
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
  }

  export type course_commentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    user_id?: SortOrder
    isActive?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    course_id?: SortOrder
    parent?: course_commentOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    courseComments?: course_commentOrderByRelationAggregateInput
    course?: courseOrderByWithRelationInput
  }

  export type course_commentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: course_commentWhereInput | course_commentWhereInput[]
    OR?: course_commentWhereInput[]
    NOT?: course_commentWhereInput | course_commentWhereInput[]
    title?: StringFilter<"course_comment"> | string
    text?: StringFilter<"course_comment"> | string
    user_id?: StringFilter<"course_comment"> | string
    isActive?: BoolFilter<"course_comment"> | boolean
    parent_id?: StringNullableFilter<"course_comment"> | string | null
    course_id?: StringFilter<"course_comment"> | string
    parent?: XOR<Course_commentNullableScalarRelationFilter, course_commentWhereInput> | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    courseComments?: Course_commentListRelationFilter
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
  }, "id">

  export type course_commentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    user_id?: SortOrder
    isActive?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    course_id?: SortOrder
    _count?: course_commentCountOrderByAggregateInput
    _max?: course_commentMaxOrderByAggregateInput
    _min?: course_commentMinOrderByAggregateInput
  }

  export type course_commentScalarWhereWithAggregatesInput = {
    AND?: course_commentScalarWhereWithAggregatesInput | course_commentScalarWhereWithAggregatesInput[]
    OR?: course_commentScalarWhereWithAggregatesInput[]
    NOT?: course_commentScalarWhereWithAggregatesInput | course_commentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"course_comment"> | string
    title?: StringWithAggregatesFilter<"course_comment"> | string
    text?: StringWithAggregatesFilter<"course_comment"> | string
    user_id?: StringWithAggregatesFilter<"course_comment"> | string
    isActive?: BoolWithAggregatesFilter<"course_comment"> | boolean
    parent_id?: StringNullableWithAggregatesFilter<"course_comment"> | string | null
    course_id?: StringWithAggregatesFilter<"course_comment"> | string
  }

  export type course_sessionWhereInput = {
    AND?: course_sessionWhereInput | course_sessionWhereInput[]
    OR?: course_sessionWhereInput[]
    NOT?: course_sessionWhereInput | course_sessionWhereInput[]
    id?: StringFilter<"course_session"> | string
    title?: StringFilter<"course_session"> | string
    text?: StringFilter<"course_session"> | string
    file?: StringNullableFilter<"course_session"> | string | null
    course_id?: StringFilter<"course_session"> | string
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
  }

  export type course_sessionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    file?: SortOrderInput | SortOrder
    course_id?: SortOrder
    course?: courseOrderByWithRelationInput
  }

  export type course_sessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: course_sessionWhereInput | course_sessionWhereInput[]
    OR?: course_sessionWhereInput[]
    NOT?: course_sessionWhereInput | course_sessionWhereInput[]
    title?: StringFilter<"course_session"> | string
    text?: StringFilter<"course_session"> | string
    file?: StringNullableFilter<"course_session"> | string | null
    course_id?: StringFilter<"course_session"> | string
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
  }, "id">

  export type course_sessionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    file?: SortOrderInput | SortOrder
    course_id?: SortOrder
    _count?: course_sessionCountOrderByAggregateInput
    _max?: course_sessionMaxOrderByAggregateInput
    _min?: course_sessionMinOrderByAggregateInput
  }

  export type course_sessionScalarWhereWithAggregatesInput = {
    AND?: course_sessionScalarWhereWithAggregatesInput | course_sessionScalarWhereWithAggregatesInput[]
    OR?: course_sessionScalarWhereWithAggregatesInput[]
    NOT?: course_sessionScalarWhereWithAggregatesInput | course_sessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"course_session"> | string
    title?: StringWithAggregatesFilter<"course_session"> | string
    text?: StringWithAggregatesFilter<"course_session"> | string
    file?: StringNullableWithAggregatesFilter<"course_session"> | string | null
    course_id?: StringWithAggregatesFilter<"course_session"> | string
  }

  export type course_typeWhereInput = {
    AND?: course_typeWhereInput | course_typeWhereInput[]
    OR?: course_typeWhereInput[]
    NOT?: course_typeWhereInput | course_typeWhereInput[]
    id?: StringFilter<"course_type"> | string
    title?: StringFilter<"course_type"> | string
    file?: StringNullableFilter<"course_type"> | string | null
    courses?: CourseListRelationFilter
  }

  export type course_typeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    file?: SortOrderInput | SortOrder
    courses?: courseOrderByRelationAggregateInput
  }

  export type course_typeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: course_typeWhereInput | course_typeWhereInput[]
    OR?: course_typeWhereInput[]
    NOT?: course_typeWhereInput | course_typeWhereInput[]
    title?: StringFilter<"course_type"> | string
    file?: StringNullableFilter<"course_type"> | string | null
    courses?: CourseListRelationFilter
  }, "id">

  export type course_typeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    file?: SortOrderInput | SortOrder
    _count?: course_typeCountOrderByAggregateInput
    _max?: course_typeMaxOrderByAggregateInput
    _min?: course_typeMinOrderByAggregateInput
  }

  export type course_typeScalarWhereWithAggregatesInput = {
    AND?: course_typeScalarWhereWithAggregatesInput | course_typeScalarWhereWithAggregatesInput[]
    OR?: course_typeScalarWhereWithAggregatesInput[]
    NOT?: course_typeScalarWhereWithAggregatesInput | course_typeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"course_type"> | string
    title?: StringWithAggregatesFilter<"course_type"> | string
    file?: StringNullableWithAggregatesFilter<"course_type"> | string | null
  }

  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    id?: StringFilter<"category"> | string
    title?: StringFilter<"category"> | string
    file?: StringNullableFilter<"category"> | string | null
    courseCategories?: Course_categoryListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    file?: SortOrderInput | SortOrder
    courseCategories?: course_categoryOrderByRelationAggregateInput
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    title?: StringFilter<"category"> | string
    file?: StringNullableFilter<"category"> | string | null
    courseCategories?: Course_categoryListRelationFilter
  }, "id">

  export type categoryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    file?: SortOrderInput | SortOrder
    _count?: categoryCountOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"category"> | string
    title?: StringWithAggregatesFilter<"category"> | string
    file?: StringNullableWithAggregatesFilter<"category"> | string | null
  }

  export type course_categoryWhereInput = {
    AND?: course_categoryWhereInput | course_categoryWhereInput[]
    OR?: course_categoryWhereInput[]
    NOT?: course_categoryWhereInput | course_categoryWhereInput[]
    id?: StringFilter<"course_category"> | string
    course_id?: StringFilter<"course_category"> | string
    category_id?: StringFilter<"course_category"> | string
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
  }

  export type course_categoryOrderByWithRelationInput = {
    id?: SortOrder
    course_id?: SortOrder
    category_id?: SortOrder
    category?: categoryOrderByWithRelationInput
    course?: courseOrderByWithRelationInput
  }

  export type course_categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: course_categoryWhereInput | course_categoryWhereInput[]
    OR?: course_categoryWhereInput[]
    NOT?: course_categoryWhereInput | course_categoryWhereInput[]
    course_id?: StringFilter<"course_category"> | string
    category_id?: StringFilter<"course_category"> | string
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
  }, "id">

  export type course_categoryOrderByWithAggregationInput = {
    id?: SortOrder
    course_id?: SortOrder
    category_id?: SortOrder
    _count?: course_categoryCountOrderByAggregateInput
    _max?: course_categoryMaxOrderByAggregateInput
    _min?: course_categoryMinOrderByAggregateInput
  }

  export type course_categoryScalarWhereWithAggregatesInput = {
    AND?: course_categoryScalarWhereWithAggregatesInput | course_categoryScalarWhereWithAggregatesInput[]
    OR?: course_categoryScalarWhereWithAggregatesInput[]
    NOT?: course_categoryScalarWhereWithAggregatesInput | course_categoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"course_category"> | string
    course_id?: StringWithAggregatesFilter<"course_category"> | string
    category_id?: StringWithAggregatesFilter<"course_category"> | string
  }

  export type orderWhereInput = {
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    id?: StringFilter<"order"> | string
  }

  export type orderOrderByWithRelationInput = {
    id?: SortOrder
  }

  export type orderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
  }, "id">

  export type orderOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: orderCountOrderByAggregateInput
    _max?: orderMaxOrderByAggregateInput
    _min?: orderMinOrderByAggregateInput
  }

  export type orderScalarWhereWithAggregatesInput = {
    AND?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    OR?: orderScalarWhereWithAggregatesInput[]
    NOT?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"order"> | string
  }

  export type course_orderWhereInput = {
    AND?: course_orderWhereInput | course_orderWhereInput[]
    OR?: course_orderWhereInput[]
    NOT?: course_orderWhereInput | course_orderWhereInput[]
    id?: StringFilter<"course_order"> | string
  }

  export type course_orderOrderByWithRelationInput = {
    id?: SortOrder
  }

  export type course_orderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: course_orderWhereInput | course_orderWhereInput[]
    OR?: course_orderWhereInput[]
    NOT?: course_orderWhereInput | course_orderWhereInput[]
  }, "id">

  export type course_orderOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: course_orderCountOrderByAggregateInput
    _max?: course_orderMaxOrderByAggregateInput
    _min?: course_orderMinOrderByAggregateInput
  }

  export type course_orderScalarWhereWithAggregatesInput = {
    AND?: course_orderScalarWhereWithAggregatesInput | course_orderScalarWhereWithAggregatesInput[]
    OR?: course_orderScalarWhereWithAggregatesInput[]
    NOT?: course_orderScalarWhereWithAggregatesInput | course_orderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"course_order"> | string
  }

  export type userCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    phone_number: string
    national_code?: string | null
    location?: string | null
    userRoles?: user_roleCreateNestedManyWithoutUserInput
    loginTransactions?: login_transactionCreateNestedManyWithoutUserInput
    courses?: courseCreateNestedManyWithoutTeacherInput
    courseRates?: course_rateCreateNestedManyWithoutUserInput
    courseFavorites?: course_favoriteCreateNestedManyWithoutUserInput
    courseComments?: course_commentCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    phone_number: string
    national_code?: string | null
    location?: string | null
    userRoles?: user_roleUncheckedCreateNestedManyWithoutUserInput
    loginTransactions?: login_transactionUncheckedCreateNestedManyWithoutUserInput
    courses?: courseUncheckedCreateNestedManyWithoutTeacherInput
    courseRates?: course_rateUncheckedCreateNestedManyWithoutUserInput
    courseFavorites?: course_favoriteUncheckedCreateNestedManyWithoutUserInput
    courseComments?: course_commentUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    national_code?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    userRoles?: user_roleUpdateManyWithoutUserNestedInput
    loginTransactions?: login_transactionUpdateManyWithoutUserNestedInput
    courses?: courseUpdateManyWithoutTeacherNestedInput
    courseRates?: course_rateUpdateManyWithoutUserNestedInput
    courseFavorites?: course_favoriteUpdateManyWithoutUserNestedInput
    courseComments?: course_commentUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    national_code?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    userRoles?: user_roleUncheckedUpdateManyWithoutUserNestedInput
    loginTransactions?: login_transactionUncheckedUpdateManyWithoutUserNestedInput
    courses?: courseUncheckedUpdateManyWithoutTeacherNestedInput
    courseRates?: course_rateUncheckedUpdateManyWithoutUserNestedInput
    courseFavorites?: course_favoriteUncheckedUpdateManyWithoutUserNestedInput
    courseComments?: course_commentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    phone_number: string
    national_code?: string | null
    location?: string | null
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    national_code?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    national_code?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_roleCreateInput = {
    id?: string
    isActive?: boolean
    created_at?: Date | string
    role: roleCreateNestedOneWithoutUserRolesInput
    user: userCreateNestedOneWithoutUserRolesInput
  }

  export type user_roleUncheckedCreateInput = {
    id?: string
    user_id: string
    role_id: string
    isActive?: boolean
    created_at?: Date | string
  }

  export type user_roleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: roleUpdateOneRequiredWithoutUserRolesNestedInput
    user?: userUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type user_roleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_roleCreateManyInput = {
    id?: string
    user_id: string
    role_id: string
    isActive?: boolean
    created_at?: Date | string
  }

  export type user_roleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_roleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type roleCreateInput = {
    id?: string
    name: string
    userRoles?: user_roleCreateNestedManyWithoutRoleInput
  }

  export type roleUncheckedCreateInput = {
    id?: string
    name: string
    userRoles?: user_roleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type roleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userRoles?: user_roleUpdateManyWithoutRoleNestedInput
  }

  export type roleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userRoles?: user_roleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type roleCreateManyInput = {
    id?: string
    name: string
  }

  export type roleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type roleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type login_transactionCreateInput = {
    id?: string
    ip: string
    login_date?: Date | string
    user: userCreateNestedOneWithoutLoginTransactionsInput
  }

  export type login_transactionUncheckedCreateInput = {
    id?: string
    ip: string
    login_date?: Date | string
    user_id: string
  }

  export type login_transactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    login_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutLoginTransactionsNestedInput
  }

  export type login_transactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    login_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type login_transactionCreateManyInput = {
    id?: string
    ip: string
    login_date?: Date | string
    user_id: string
  }

  export type login_transactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    login_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type login_transactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    login_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type courseCreateInput = {
    id?: string
    title: string
    description: string
    mini_description: string
    isActive?: boolean
    picture: string
    price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    google_title: string
    google_description: string
    created_at?: Date | string
    type: course_typeCreateNestedOneWithoutCoursesInput
    teacher: userCreateNestedOneWithoutCoursesInput
    courseRates?: course_rateCreateNestedManyWithoutCourseInput
    courseFavorites?: course_favoriteCreateNestedManyWithoutCourseInput
    courseSessions?: course_sessionCreateNestedManyWithoutCourseInput
    courseCategories?: course_categoryCreateNestedManyWithoutCourseInput
    courseComments?: course_commentCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    mini_description: string
    isActive?: boolean
    picture: string
    price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    google_title: string
    google_description: string
    created_by: string
    type_id: string
    created_at?: Date | string
    courseRates?: course_rateUncheckedCreateNestedManyWithoutCourseInput
    courseFavorites?: course_favoriteUncheckedCreateNestedManyWithoutCourseInput
    courseSessions?: course_sessionUncheckedCreateNestedManyWithoutCourseInput
    courseCategories?: course_categoryUncheckedCreateNestedManyWithoutCourseInput
    courseComments?: course_commentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mini_description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    google_title?: StringFieldUpdateOperationsInput | string
    google_description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: course_typeUpdateOneRequiredWithoutCoursesNestedInput
    teacher?: userUpdateOneRequiredWithoutCoursesNestedInput
    courseRates?: course_rateUpdateManyWithoutCourseNestedInput
    courseFavorites?: course_favoriteUpdateManyWithoutCourseNestedInput
    courseSessions?: course_sessionUpdateManyWithoutCourseNestedInput
    courseCategories?: course_categoryUpdateManyWithoutCourseNestedInput
    courseComments?: course_commentUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mini_description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    google_title?: StringFieldUpdateOperationsInput | string
    google_description?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courseRates?: course_rateUncheckedUpdateManyWithoutCourseNestedInput
    courseFavorites?: course_favoriteUncheckedUpdateManyWithoutCourseNestedInput
    courseSessions?: course_sessionUncheckedUpdateManyWithoutCourseNestedInput
    courseCategories?: course_categoryUncheckedUpdateManyWithoutCourseNestedInput
    courseComments?: course_commentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type courseCreateManyInput = {
    id?: string
    title: string
    description: string
    mini_description: string
    isActive?: boolean
    picture: string
    price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    google_title: string
    google_description: string
    created_by: string
    type_id: string
    created_at?: Date | string
  }

  export type courseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mini_description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    google_title?: StringFieldUpdateOperationsInput | string
    google_description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type courseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mini_description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    google_title?: StringFieldUpdateOperationsInput | string
    google_description?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type course_rateCreateInput = {
    id?: string
    rate: number
    user: userCreateNestedOneWithoutCourseRatesInput
    course: courseCreateNestedOneWithoutCourseRatesInput
  }

  export type course_rateUncheckedCreateInput = {
    id?: string
    rate: number
    course_id: string
    user_id: string
  }

  export type course_rateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    user?: userUpdateOneRequiredWithoutCourseRatesNestedInput
    course?: courseUpdateOneRequiredWithoutCourseRatesNestedInput
  }

  export type course_rateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    course_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type course_rateCreateManyInput = {
    id?: string
    rate: number
    course_id: string
    user_id: string
  }

  export type course_rateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
  }

  export type course_rateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    course_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type course_favoriteCreateInput = {
    id?: string
    user: userCreateNestedOneWithoutCourseFavoritesInput
    course: courseCreateNestedOneWithoutCourseFavoritesInput
  }

  export type course_favoriteUncheckedCreateInput = {
    id?: string
    user_id: string
    course_id: string
  }

  export type course_favoriteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutCourseFavoritesNestedInput
    course?: courseUpdateOneRequiredWithoutCourseFavoritesNestedInput
  }

  export type course_favoriteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    course_id?: StringFieldUpdateOperationsInput | string
  }

  export type course_favoriteCreateManyInput = {
    id?: string
    user_id: string
    course_id: string
  }

  export type course_favoriteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type course_favoriteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    course_id?: StringFieldUpdateOperationsInput | string
  }

  export type course_commentCreateInput = {
    id?: string
    title: string
    text: string
    isActive?: boolean
    parent?: course_commentCreateNestedOneWithoutCourseCommentsInput
    user: userCreateNestedOneWithoutCourseCommentsInput
    courseComments?: course_commentCreateNestedManyWithoutParentInput
    course: courseCreateNestedOneWithoutCourseCommentsInput
  }

  export type course_commentUncheckedCreateInput = {
    id?: string
    title: string
    text: string
    user_id: string
    isActive?: boolean
    parent_id?: string | null
    course_id: string
    courseComments?: course_commentUncheckedCreateNestedManyWithoutParentInput
  }

  export type course_commentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parent?: course_commentUpdateOneWithoutCourseCommentsNestedInput
    user?: userUpdateOneRequiredWithoutCourseCommentsNestedInput
    courseComments?: course_commentUpdateManyWithoutParentNestedInput
    course?: courseUpdateOneRequiredWithoutCourseCommentsNestedInput
  }

  export type course_commentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    course_id?: StringFieldUpdateOperationsInput | string
    courseComments?: course_commentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type course_commentCreateManyInput = {
    id?: string
    title: string
    text: string
    user_id: string
    isActive?: boolean
    parent_id?: string | null
    course_id: string
  }

  export type course_commentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type course_commentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    course_id?: StringFieldUpdateOperationsInput | string
  }

  export type course_sessionCreateInput = {
    id?: string
    title: string
    text: string
    file?: string | null
    course: courseCreateNestedOneWithoutCourseSessionsInput
  }

  export type course_sessionUncheckedCreateInput = {
    id?: string
    title: string
    text: string
    file?: string | null
    course_id: string
  }

  export type course_sessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
    course?: courseUpdateOneRequiredWithoutCourseSessionsNestedInput
  }

  export type course_sessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
    course_id?: StringFieldUpdateOperationsInput | string
  }

  export type course_sessionCreateManyInput = {
    id?: string
    title: string
    text: string
    file?: string | null
    course_id: string
  }

  export type course_sessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type course_sessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
    course_id?: StringFieldUpdateOperationsInput | string
  }

  export type course_typeCreateInput = {
    id?: string
    title: string
    file?: string | null
    courses?: courseCreateNestedManyWithoutTypeInput
  }

  export type course_typeUncheckedCreateInput = {
    id?: string
    title: string
    file?: string | null
    courses?: courseUncheckedCreateNestedManyWithoutTypeInput
  }

  export type course_typeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
    courses?: courseUpdateManyWithoutTypeNestedInput
  }

  export type course_typeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
    courses?: courseUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type course_typeCreateManyInput = {
    id?: string
    title: string
    file?: string | null
  }

  export type course_typeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type course_typeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoryCreateInput = {
    id?: string
    title: string
    file?: string | null
    courseCategories?: course_categoryCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateInput = {
    id?: string
    title: string
    file?: string | null
    courseCategories?: course_categoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
    courseCategories?: course_categoryUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
    courseCategories?: course_categoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryCreateManyInput = {
    id?: string
    title: string
    file?: string | null
  }

  export type categoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type course_categoryCreateInput = {
    id?: string
    category: categoryCreateNestedOneWithoutCourseCategoriesInput
    course: courseCreateNestedOneWithoutCourseCategoriesInput
  }

  export type course_categoryUncheckedCreateInput = {
    id?: string
    course_id: string
    category_id: string
  }

  export type course_categoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: categoryUpdateOneRequiredWithoutCourseCategoriesNestedInput
    course?: courseUpdateOneRequiredWithoutCourseCategoriesNestedInput
  }

  export type course_categoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    course_id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
  }

  export type course_categoryCreateManyInput = {
    id?: string
    course_id: string
    category_id: string
  }

  export type course_categoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type course_categoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    course_id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
  }

  export type orderCreateInput = {
    id?: string
  }

  export type orderUncheckedCreateInput = {
    id?: string
  }

  export type orderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type orderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type orderCreateManyInput = {
    id?: string
  }

  export type orderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type orderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type course_orderCreateInput = {
    id?: string
  }

  export type course_orderUncheckedCreateInput = {
    id?: string
  }

  export type course_orderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type course_orderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type course_orderCreateManyInput = {
    id?: string
  }

  export type course_orderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type course_orderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type User_roleListRelationFilter = {
    every?: user_roleWhereInput
    some?: user_roleWhereInput
    none?: user_roleWhereInput
  }

  export type Login_transactionListRelationFilter = {
    every?: login_transactionWhereInput
    some?: login_transactionWhereInput
    none?: login_transactionWhereInput
  }

  export type CourseListRelationFilter = {
    every?: courseWhereInput
    some?: courseWhereInput
    none?: courseWhereInput
  }

  export type Course_rateListRelationFilter = {
    every?: course_rateWhereInput
    some?: course_rateWhereInput
    none?: course_rateWhereInput
  }

  export type Course_favoriteListRelationFilter = {
    every?: course_favoriteWhereInput
    some?: course_favoriteWhereInput
    none?: course_favoriteWhereInput
  }

  export type Course_commentListRelationFilter = {
    every?: course_commentWhereInput
    some?: course_commentWhereInput
    none?: course_commentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type user_roleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type login_transactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type courseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type course_rateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type course_favoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type course_commentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    national_code?: SortOrder
    location?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    national_code?: SortOrder
    location?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    national_code?: SortOrder
    location?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RoleScalarRelationFilter = {
    is?: roleWhereInput
    isNot?: roleWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type user_roleCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    isActive?: SortOrder
    created_at?: SortOrder
  }

  export type user_roleMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    isActive?: SortOrder
    created_at?: SortOrder
  }

  export type user_roleMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    isActive?: SortOrder
    created_at?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type roleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type roleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type roleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type login_transactionCountOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    login_date?: SortOrder
    user_id?: SortOrder
  }

  export type login_transactionMaxOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    login_date?: SortOrder
    user_id?: SortOrder
  }

  export type login_transactionMinOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    login_date?: SortOrder
    user_id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type Course_typeScalarRelationFilter = {
    is?: course_typeWhereInput
    isNot?: course_typeWhereInput
  }

  export type Course_sessionListRelationFilter = {
    every?: course_sessionWhereInput
    some?: course_sessionWhereInput
    none?: course_sessionWhereInput
  }

  export type Course_categoryListRelationFilter = {
    every?: course_categoryWhereInput
    some?: course_categoryWhereInput
    none?: course_categoryWhereInput
  }

  export type course_sessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type course_categoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type courseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    mini_description?: SortOrder
    isActive?: SortOrder
    picture?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    google_title?: SortOrder
    google_description?: SortOrder
    created_by?: SortOrder
    type_id?: SortOrder
    created_at?: SortOrder
  }

  export type courseAvgOrderByAggregateInput = {
    price?: SortOrder
    discount?: SortOrder
  }

  export type courseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    mini_description?: SortOrder
    isActive?: SortOrder
    picture?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    google_title?: SortOrder
    google_description?: SortOrder
    created_by?: SortOrder
    type_id?: SortOrder
    created_at?: SortOrder
  }

  export type courseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    mini_description?: SortOrder
    isActive?: SortOrder
    picture?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    google_title?: SortOrder
    google_description?: SortOrder
    created_by?: SortOrder
    type_id?: SortOrder
    created_at?: SortOrder
  }

  export type courseSumOrderByAggregateInput = {
    price?: SortOrder
    discount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CourseScalarRelationFilter = {
    is?: courseWhereInput
    isNot?: courseWhereInput
  }

  export type course_rateCountOrderByAggregateInput = {
    id?: SortOrder
    rate?: SortOrder
    course_id?: SortOrder
    user_id?: SortOrder
  }

  export type course_rateAvgOrderByAggregateInput = {
    rate?: SortOrder
  }

  export type course_rateMaxOrderByAggregateInput = {
    id?: SortOrder
    rate?: SortOrder
    course_id?: SortOrder
    user_id?: SortOrder
  }

  export type course_rateMinOrderByAggregateInput = {
    id?: SortOrder
    rate?: SortOrder
    course_id?: SortOrder
    user_id?: SortOrder
  }

  export type course_rateSumOrderByAggregateInput = {
    rate?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type course_favoriteCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
  }

  export type course_favoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
  }

  export type course_favoriteMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
  }

  export type Course_commentNullableScalarRelationFilter = {
    is?: course_commentWhereInput | null
    isNot?: course_commentWhereInput | null
  }

  export type course_commentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    user_id?: SortOrder
    isActive?: SortOrder
    parent_id?: SortOrder
    course_id?: SortOrder
  }

  export type course_commentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    user_id?: SortOrder
    isActive?: SortOrder
    parent_id?: SortOrder
    course_id?: SortOrder
  }

  export type course_commentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    user_id?: SortOrder
    isActive?: SortOrder
    parent_id?: SortOrder
    course_id?: SortOrder
  }

  export type course_sessionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    file?: SortOrder
    course_id?: SortOrder
  }

  export type course_sessionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    file?: SortOrder
    course_id?: SortOrder
  }

  export type course_sessionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    file?: SortOrder
    course_id?: SortOrder
  }

  export type course_typeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    file?: SortOrder
  }

  export type course_typeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    file?: SortOrder
  }

  export type course_typeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    file?: SortOrder
  }

  export type categoryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    file?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    file?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    file?: SortOrder
  }

  export type CategoryScalarRelationFilter = {
    is?: categoryWhereInput
    isNot?: categoryWhereInput
  }

  export type course_categoryCountOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    category_id?: SortOrder
  }

  export type course_categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    category_id?: SortOrder
  }

  export type course_categoryMinOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    category_id?: SortOrder
  }

  export type orderCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type orderMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type orderMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type course_orderCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type course_orderMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type course_orderMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type user_roleCreateNestedManyWithoutUserInput = {
    create?: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput> | user_roleCreateWithoutUserInput[] | user_roleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutUserInput | user_roleCreateOrConnectWithoutUserInput[]
    createMany?: user_roleCreateManyUserInputEnvelope
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
  }

  export type login_transactionCreateNestedManyWithoutUserInput = {
    create?: XOR<login_transactionCreateWithoutUserInput, login_transactionUncheckedCreateWithoutUserInput> | login_transactionCreateWithoutUserInput[] | login_transactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: login_transactionCreateOrConnectWithoutUserInput | login_transactionCreateOrConnectWithoutUserInput[]
    createMany?: login_transactionCreateManyUserInputEnvelope
    connect?: login_transactionWhereUniqueInput | login_transactionWhereUniqueInput[]
  }

  export type courseCreateNestedManyWithoutTeacherInput = {
    create?: XOR<courseCreateWithoutTeacherInput, courseUncheckedCreateWithoutTeacherInput> | courseCreateWithoutTeacherInput[] | courseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: courseCreateOrConnectWithoutTeacherInput | courseCreateOrConnectWithoutTeacherInput[]
    createMany?: courseCreateManyTeacherInputEnvelope
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
  }

  export type course_rateCreateNestedManyWithoutUserInput = {
    create?: XOR<course_rateCreateWithoutUserInput, course_rateUncheckedCreateWithoutUserInput> | course_rateCreateWithoutUserInput[] | course_rateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: course_rateCreateOrConnectWithoutUserInput | course_rateCreateOrConnectWithoutUserInput[]
    createMany?: course_rateCreateManyUserInputEnvelope
    connect?: course_rateWhereUniqueInput | course_rateWhereUniqueInput[]
  }

  export type course_favoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<course_favoriteCreateWithoutUserInput, course_favoriteUncheckedCreateWithoutUserInput> | course_favoriteCreateWithoutUserInput[] | course_favoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: course_favoriteCreateOrConnectWithoutUserInput | course_favoriteCreateOrConnectWithoutUserInput[]
    createMany?: course_favoriteCreateManyUserInputEnvelope
    connect?: course_favoriteWhereUniqueInput | course_favoriteWhereUniqueInput[]
  }

  export type course_commentCreateNestedManyWithoutUserInput = {
    create?: XOR<course_commentCreateWithoutUserInput, course_commentUncheckedCreateWithoutUserInput> | course_commentCreateWithoutUserInput[] | course_commentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: course_commentCreateOrConnectWithoutUserInput | course_commentCreateOrConnectWithoutUserInput[]
    createMany?: course_commentCreateManyUserInputEnvelope
    connect?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
  }

  export type user_roleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput> | user_roleCreateWithoutUserInput[] | user_roleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutUserInput | user_roleCreateOrConnectWithoutUserInput[]
    createMany?: user_roleCreateManyUserInputEnvelope
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
  }

  export type login_transactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<login_transactionCreateWithoutUserInput, login_transactionUncheckedCreateWithoutUserInput> | login_transactionCreateWithoutUserInput[] | login_transactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: login_transactionCreateOrConnectWithoutUserInput | login_transactionCreateOrConnectWithoutUserInput[]
    createMany?: login_transactionCreateManyUserInputEnvelope
    connect?: login_transactionWhereUniqueInput | login_transactionWhereUniqueInput[]
  }

  export type courseUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<courseCreateWithoutTeacherInput, courseUncheckedCreateWithoutTeacherInput> | courseCreateWithoutTeacherInput[] | courseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: courseCreateOrConnectWithoutTeacherInput | courseCreateOrConnectWithoutTeacherInput[]
    createMany?: courseCreateManyTeacherInputEnvelope
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
  }

  export type course_rateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<course_rateCreateWithoutUserInput, course_rateUncheckedCreateWithoutUserInput> | course_rateCreateWithoutUserInput[] | course_rateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: course_rateCreateOrConnectWithoutUserInput | course_rateCreateOrConnectWithoutUserInput[]
    createMany?: course_rateCreateManyUserInputEnvelope
    connect?: course_rateWhereUniqueInput | course_rateWhereUniqueInput[]
  }

  export type course_favoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<course_favoriteCreateWithoutUserInput, course_favoriteUncheckedCreateWithoutUserInput> | course_favoriteCreateWithoutUserInput[] | course_favoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: course_favoriteCreateOrConnectWithoutUserInput | course_favoriteCreateOrConnectWithoutUserInput[]
    createMany?: course_favoriteCreateManyUserInputEnvelope
    connect?: course_favoriteWhereUniqueInput | course_favoriteWhereUniqueInput[]
  }

  export type course_commentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<course_commentCreateWithoutUserInput, course_commentUncheckedCreateWithoutUserInput> | course_commentCreateWithoutUserInput[] | course_commentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: course_commentCreateOrConnectWithoutUserInput | course_commentCreateOrConnectWithoutUserInput[]
    createMany?: course_commentCreateManyUserInputEnvelope
    connect?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type user_roleUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput> | user_roleCreateWithoutUserInput[] | user_roleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutUserInput | user_roleCreateOrConnectWithoutUserInput[]
    upsert?: user_roleUpsertWithWhereUniqueWithoutUserInput | user_roleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_roleCreateManyUserInputEnvelope
    set?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    disconnect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    delete?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    update?: user_roleUpdateWithWhereUniqueWithoutUserInput | user_roleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_roleUpdateManyWithWhereWithoutUserInput | user_roleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_roleScalarWhereInput | user_roleScalarWhereInput[]
  }

  export type login_transactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<login_transactionCreateWithoutUserInput, login_transactionUncheckedCreateWithoutUserInput> | login_transactionCreateWithoutUserInput[] | login_transactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: login_transactionCreateOrConnectWithoutUserInput | login_transactionCreateOrConnectWithoutUserInput[]
    upsert?: login_transactionUpsertWithWhereUniqueWithoutUserInput | login_transactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: login_transactionCreateManyUserInputEnvelope
    set?: login_transactionWhereUniqueInput | login_transactionWhereUniqueInput[]
    disconnect?: login_transactionWhereUniqueInput | login_transactionWhereUniqueInput[]
    delete?: login_transactionWhereUniqueInput | login_transactionWhereUniqueInput[]
    connect?: login_transactionWhereUniqueInput | login_transactionWhereUniqueInput[]
    update?: login_transactionUpdateWithWhereUniqueWithoutUserInput | login_transactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: login_transactionUpdateManyWithWhereWithoutUserInput | login_transactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: login_transactionScalarWhereInput | login_transactionScalarWhereInput[]
  }

  export type courseUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<courseCreateWithoutTeacherInput, courseUncheckedCreateWithoutTeacherInput> | courseCreateWithoutTeacherInput[] | courseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: courseCreateOrConnectWithoutTeacherInput | courseCreateOrConnectWithoutTeacherInput[]
    upsert?: courseUpsertWithWhereUniqueWithoutTeacherInput | courseUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: courseCreateManyTeacherInputEnvelope
    set?: courseWhereUniqueInput | courseWhereUniqueInput[]
    disconnect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    delete?: courseWhereUniqueInput | courseWhereUniqueInput[]
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    update?: courseUpdateWithWhereUniqueWithoutTeacherInput | courseUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: courseUpdateManyWithWhereWithoutTeacherInput | courseUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: courseScalarWhereInput | courseScalarWhereInput[]
  }

  export type course_rateUpdateManyWithoutUserNestedInput = {
    create?: XOR<course_rateCreateWithoutUserInput, course_rateUncheckedCreateWithoutUserInput> | course_rateCreateWithoutUserInput[] | course_rateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: course_rateCreateOrConnectWithoutUserInput | course_rateCreateOrConnectWithoutUserInput[]
    upsert?: course_rateUpsertWithWhereUniqueWithoutUserInput | course_rateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: course_rateCreateManyUserInputEnvelope
    set?: course_rateWhereUniqueInput | course_rateWhereUniqueInput[]
    disconnect?: course_rateWhereUniqueInput | course_rateWhereUniqueInput[]
    delete?: course_rateWhereUniqueInput | course_rateWhereUniqueInput[]
    connect?: course_rateWhereUniqueInput | course_rateWhereUniqueInput[]
    update?: course_rateUpdateWithWhereUniqueWithoutUserInput | course_rateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: course_rateUpdateManyWithWhereWithoutUserInput | course_rateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: course_rateScalarWhereInput | course_rateScalarWhereInput[]
  }

  export type course_favoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<course_favoriteCreateWithoutUserInput, course_favoriteUncheckedCreateWithoutUserInput> | course_favoriteCreateWithoutUserInput[] | course_favoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: course_favoriteCreateOrConnectWithoutUserInput | course_favoriteCreateOrConnectWithoutUserInput[]
    upsert?: course_favoriteUpsertWithWhereUniqueWithoutUserInput | course_favoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: course_favoriteCreateManyUserInputEnvelope
    set?: course_favoriteWhereUniqueInput | course_favoriteWhereUniqueInput[]
    disconnect?: course_favoriteWhereUniqueInput | course_favoriteWhereUniqueInput[]
    delete?: course_favoriteWhereUniqueInput | course_favoriteWhereUniqueInput[]
    connect?: course_favoriteWhereUniqueInput | course_favoriteWhereUniqueInput[]
    update?: course_favoriteUpdateWithWhereUniqueWithoutUserInput | course_favoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: course_favoriteUpdateManyWithWhereWithoutUserInput | course_favoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: course_favoriteScalarWhereInput | course_favoriteScalarWhereInput[]
  }

  export type course_commentUpdateManyWithoutUserNestedInput = {
    create?: XOR<course_commentCreateWithoutUserInput, course_commentUncheckedCreateWithoutUserInput> | course_commentCreateWithoutUserInput[] | course_commentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: course_commentCreateOrConnectWithoutUserInput | course_commentCreateOrConnectWithoutUserInput[]
    upsert?: course_commentUpsertWithWhereUniqueWithoutUserInput | course_commentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: course_commentCreateManyUserInputEnvelope
    set?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
    disconnect?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
    delete?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
    connect?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
    update?: course_commentUpdateWithWhereUniqueWithoutUserInput | course_commentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: course_commentUpdateManyWithWhereWithoutUserInput | course_commentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: course_commentScalarWhereInput | course_commentScalarWhereInput[]
  }

  export type user_roleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput> | user_roleCreateWithoutUserInput[] | user_roleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutUserInput | user_roleCreateOrConnectWithoutUserInput[]
    upsert?: user_roleUpsertWithWhereUniqueWithoutUserInput | user_roleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_roleCreateManyUserInputEnvelope
    set?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    disconnect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    delete?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    update?: user_roleUpdateWithWhereUniqueWithoutUserInput | user_roleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_roleUpdateManyWithWhereWithoutUserInput | user_roleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_roleScalarWhereInput | user_roleScalarWhereInput[]
  }

  export type login_transactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<login_transactionCreateWithoutUserInput, login_transactionUncheckedCreateWithoutUserInput> | login_transactionCreateWithoutUserInput[] | login_transactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: login_transactionCreateOrConnectWithoutUserInput | login_transactionCreateOrConnectWithoutUserInput[]
    upsert?: login_transactionUpsertWithWhereUniqueWithoutUserInput | login_transactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: login_transactionCreateManyUserInputEnvelope
    set?: login_transactionWhereUniqueInput | login_transactionWhereUniqueInput[]
    disconnect?: login_transactionWhereUniqueInput | login_transactionWhereUniqueInput[]
    delete?: login_transactionWhereUniqueInput | login_transactionWhereUniqueInput[]
    connect?: login_transactionWhereUniqueInput | login_transactionWhereUniqueInput[]
    update?: login_transactionUpdateWithWhereUniqueWithoutUserInput | login_transactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: login_transactionUpdateManyWithWhereWithoutUserInput | login_transactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: login_transactionScalarWhereInput | login_transactionScalarWhereInput[]
  }

  export type courseUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<courseCreateWithoutTeacherInput, courseUncheckedCreateWithoutTeacherInput> | courseCreateWithoutTeacherInput[] | courseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: courseCreateOrConnectWithoutTeacherInput | courseCreateOrConnectWithoutTeacherInput[]
    upsert?: courseUpsertWithWhereUniqueWithoutTeacherInput | courseUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: courseCreateManyTeacherInputEnvelope
    set?: courseWhereUniqueInput | courseWhereUniqueInput[]
    disconnect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    delete?: courseWhereUniqueInput | courseWhereUniqueInput[]
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    update?: courseUpdateWithWhereUniqueWithoutTeacherInput | courseUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: courseUpdateManyWithWhereWithoutTeacherInput | courseUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: courseScalarWhereInput | courseScalarWhereInput[]
  }

  export type course_rateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<course_rateCreateWithoutUserInput, course_rateUncheckedCreateWithoutUserInput> | course_rateCreateWithoutUserInput[] | course_rateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: course_rateCreateOrConnectWithoutUserInput | course_rateCreateOrConnectWithoutUserInput[]
    upsert?: course_rateUpsertWithWhereUniqueWithoutUserInput | course_rateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: course_rateCreateManyUserInputEnvelope
    set?: course_rateWhereUniqueInput | course_rateWhereUniqueInput[]
    disconnect?: course_rateWhereUniqueInput | course_rateWhereUniqueInput[]
    delete?: course_rateWhereUniqueInput | course_rateWhereUniqueInput[]
    connect?: course_rateWhereUniqueInput | course_rateWhereUniqueInput[]
    update?: course_rateUpdateWithWhereUniqueWithoutUserInput | course_rateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: course_rateUpdateManyWithWhereWithoutUserInput | course_rateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: course_rateScalarWhereInput | course_rateScalarWhereInput[]
  }

  export type course_favoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<course_favoriteCreateWithoutUserInput, course_favoriteUncheckedCreateWithoutUserInput> | course_favoriteCreateWithoutUserInput[] | course_favoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: course_favoriteCreateOrConnectWithoutUserInput | course_favoriteCreateOrConnectWithoutUserInput[]
    upsert?: course_favoriteUpsertWithWhereUniqueWithoutUserInput | course_favoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: course_favoriteCreateManyUserInputEnvelope
    set?: course_favoriteWhereUniqueInput | course_favoriteWhereUniqueInput[]
    disconnect?: course_favoriteWhereUniqueInput | course_favoriteWhereUniqueInput[]
    delete?: course_favoriteWhereUniqueInput | course_favoriteWhereUniqueInput[]
    connect?: course_favoriteWhereUniqueInput | course_favoriteWhereUniqueInput[]
    update?: course_favoriteUpdateWithWhereUniqueWithoutUserInput | course_favoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: course_favoriteUpdateManyWithWhereWithoutUserInput | course_favoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: course_favoriteScalarWhereInput | course_favoriteScalarWhereInput[]
  }

  export type course_commentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<course_commentCreateWithoutUserInput, course_commentUncheckedCreateWithoutUserInput> | course_commentCreateWithoutUserInput[] | course_commentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: course_commentCreateOrConnectWithoutUserInput | course_commentCreateOrConnectWithoutUserInput[]
    upsert?: course_commentUpsertWithWhereUniqueWithoutUserInput | course_commentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: course_commentCreateManyUserInputEnvelope
    set?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
    disconnect?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
    delete?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
    connect?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
    update?: course_commentUpdateWithWhereUniqueWithoutUserInput | course_commentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: course_commentUpdateManyWithWhereWithoutUserInput | course_commentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: course_commentScalarWhereInput | course_commentScalarWhereInput[]
  }

  export type roleCreateNestedOneWithoutUserRolesInput = {
    create?: XOR<roleCreateWithoutUserRolesInput, roleUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: roleCreateOrConnectWithoutUserRolesInput
    connect?: roleWhereUniqueInput
  }

  export type userCreateNestedOneWithoutUserRolesInput = {
    create?: XOR<userCreateWithoutUserRolesInput, userUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: userCreateOrConnectWithoutUserRolesInput
    connect?: userWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type roleUpdateOneRequiredWithoutUserRolesNestedInput = {
    create?: XOR<roleCreateWithoutUserRolesInput, roleUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: roleCreateOrConnectWithoutUserRolesInput
    upsert?: roleUpsertWithoutUserRolesInput
    connect?: roleWhereUniqueInput
    update?: XOR<XOR<roleUpdateToOneWithWhereWithoutUserRolesInput, roleUpdateWithoutUserRolesInput>, roleUncheckedUpdateWithoutUserRolesInput>
  }

  export type userUpdateOneRequiredWithoutUserRolesNestedInput = {
    create?: XOR<userCreateWithoutUserRolesInput, userUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: userCreateOrConnectWithoutUserRolesInput
    upsert?: userUpsertWithoutUserRolesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUserRolesInput, userUpdateWithoutUserRolesInput>, userUncheckedUpdateWithoutUserRolesInput>
  }

  export type user_roleCreateNestedManyWithoutRoleInput = {
    create?: XOR<user_roleCreateWithoutRoleInput, user_roleUncheckedCreateWithoutRoleInput> | user_roleCreateWithoutRoleInput[] | user_roleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutRoleInput | user_roleCreateOrConnectWithoutRoleInput[]
    createMany?: user_roleCreateManyRoleInputEnvelope
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
  }

  export type user_roleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<user_roleCreateWithoutRoleInput, user_roleUncheckedCreateWithoutRoleInput> | user_roleCreateWithoutRoleInput[] | user_roleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutRoleInput | user_roleCreateOrConnectWithoutRoleInput[]
    createMany?: user_roleCreateManyRoleInputEnvelope
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
  }

  export type user_roleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<user_roleCreateWithoutRoleInput, user_roleUncheckedCreateWithoutRoleInput> | user_roleCreateWithoutRoleInput[] | user_roleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutRoleInput | user_roleCreateOrConnectWithoutRoleInput[]
    upsert?: user_roleUpsertWithWhereUniqueWithoutRoleInput | user_roleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: user_roleCreateManyRoleInputEnvelope
    set?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    disconnect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    delete?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    update?: user_roleUpdateWithWhereUniqueWithoutRoleInput | user_roleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: user_roleUpdateManyWithWhereWithoutRoleInput | user_roleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: user_roleScalarWhereInput | user_roleScalarWhereInput[]
  }

  export type user_roleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<user_roleCreateWithoutRoleInput, user_roleUncheckedCreateWithoutRoleInput> | user_roleCreateWithoutRoleInput[] | user_roleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: user_roleCreateOrConnectWithoutRoleInput | user_roleCreateOrConnectWithoutRoleInput[]
    upsert?: user_roleUpsertWithWhereUniqueWithoutRoleInput | user_roleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: user_roleCreateManyRoleInputEnvelope
    set?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    disconnect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    delete?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[]
    update?: user_roleUpdateWithWhereUniqueWithoutRoleInput | user_roleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: user_roleUpdateManyWithWhereWithoutRoleInput | user_roleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: user_roleScalarWhereInput | user_roleScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutLoginTransactionsInput = {
    create?: XOR<userCreateWithoutLoginTransactionsInput, userUncheckedCreateWithoutLoginTransactionsInput>
    connectOrCreate?: userCreateOrConnectWithoutLoginTransactionsInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutLoginTransactionsNestedInput = {
    create?: XOR<userCreateWithoutLoginTransactionsInput, userUncheckedCreateWithoutLoginTransactionsInput>
    connectOrCreate?: userCreateOrConnectWithoutLoginTransactionsInput
    upsert?: userUpsertWithoutLoginTransactionsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutLoginTransactionsInput, userUpdateWithoutLoginTransactionsInput>, userUncheckedUpdateWithoutLoginTransactionsInput>
  }

  export type course_typeCreateNestedOneWithoutCoursesInput = {
    create?: XOR<course_typeCreateWithoutCoursesInput, course_typeUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: course_typeCreateOrConnectWithoutCoursesInput
    connect?: course_typeWhereUniqueInput
  }

  export type userCreateNestedOneWithoutCoursesInput = {
    create?: XOR<userCreateWithoutCoursesInput, userUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: userCreateOrConnectWithoutCoursesInput
    connect?: userWhereUniqueInput
  }

  export type course_rateCreateNestedManyWithoutCourseInput = {
    create?: XOR<course_rateCreateWithoutCourseInput, course_rateUncheckedCreateWithoutCourseInput> | course_rateCreateWithoutCourseInput[] | course_rateUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: course_rateCreateOrConnectWithoutCourseInput | course_rateCreateOrConnectWithoutCourseInput[]
    createMany?: course_rateCreateManyCourseInputEnvelope
    connect?: course_rateWhereUniqueInput | course_rateWhereUniqueInput[]
  }

  export type course_favoriteCreateNestedManyWithoutCourseInput = {
    create?: XOR<course_favoriteCreateWithoutCourseInput, course_favoriteUncheckedCreateWithoutCourseInput> | course_favoriteCreateWithoutCourseInput[] | course_favoriteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: course_favoriteCreateOrConnectWithoutCourseInput | course_favoriteCreateOrConnectWithoutCourseInput[]
    createMany?: course_favoriteCreateManyCourseInputEnvelope
    connect?: course_favoriteWhereUniqueInput | course_favoriteWhereUniqueInput[]
  }

  export type course_sessionCreateNestedManyWithoutCourseInput = {
    create?: XOR<course_sessionCreateWithoutCourseInput, course_sessionUncheckedCreateWithoutCourseInput> | course_sessionCreateWithoutCourseInput[] | course_sessionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: course_sessionCreateOrConnectWithoutCourseInput | course_sessionCreateOrConnectWithoutCourseInput[]
    createMany?: course_sessionCreateManyCourseInputEnvelope
    connect?: course_sessionWhereUniqueInput | course_sessionWhereUniqueInput[]
  }

  export type course_categoryCreateNestedManyWithoutCourseInput = {
    create?: XOR<course_categoryCreateWithoutCourseInput, course_categoryUncheckedCreateWithoutCourseInput> | course_categoryCreateWithoutCourseInput[] | course_categoryUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: course_categoryCreateOrConnectWithoutCourseInput | course_categoryCreateOrConnectWithoutCourseInput[]
    createMany?: course_categoryCreateManyCourseInputEnvelope
    connect?: course_categoryWhereUniqueInput | course_categoryWhereUniqueInput[]
  }

  export type course_commentCreateNestedManyWithoutCourseInput = {
    create?: XOR<course_commentCreateWithoutCourseInput, course_commentUncheckedCreateWithoutCourseInput> | course_commentCreateWithoutCourseInput[] | course_commentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: course_commentCreateOrConnectWithoutCourseInput | course_commentCreateOrConnectWithoutCourseInput[]
    createMany?: course_commentCreateManyCourseInputEnvelope
    connect?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
  }

  export type course_rateUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<course_rateCreateWithoutCourseInput, course_rateUncheckedCreateWithoutCourseInput> | course_rateCreateWithoutCourseInput[] | course_rateUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: course_rateCreateOrConnectWithoutCourseInput | course_rateCreateOrConnectWithoutCourseInput[]
    createMany?: course_rateCreateManyCourseInputEnvelope
    connect?: course_rateWhereUniqueInput | course_rateWhereUniqueInput[]
  }

  export type course_favoriteUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<course_favoriteCreateWithoutCourseInput, course_favoriteUncheckedCreateWithoutCourseInput> | course_favoriteCreateWithoutCourseInput[] | course_favoriteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: course_favoriteCreateOrConnectWithoutCourseInput | course_favoriteCreateOrConnectWithoutCourseInput[]
    createMany?: course_favoriteCreateManyCourseInputEnvelope
    connect?: course_favoriteWhereUniqueInput | course_favoriteWhereUniqueInput[]
  }

  export type course_sessionUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<course_sessionCreateWithoutCourseInput, course_sessionUncheckedCreateWithoutCourseInput> | course_sessionCreateWithoutCourseInput[] | course_sessionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: course_sessionCreateOrConnectWithoutCourseInput | course_sessionCreateOrConnectWithoutCourseInput[]
    createMany?: course_sessionCreateManyCourseInputEnvelope
    connect?: course_sessionWhereUniqueInput | course_sessionWhereUniqueInput[]
  }

  export type course_categoryUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<course_categoryCreateWithoutCourseInput, course_categoryUncheckedCreateWithoutCourseInput> | course_categoryCreateWithoutCourseInput[] | course_categoryUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: course_categoryCreateOrConnectWithoutCourseInput | course_categoryCreateOrConnectWithoutCourseInput[]
    createMany?: course_categoryCreateManyCourseInputEnvelope
    connect?: course_categoryWhereUniqueInput | course_categoryWhereUniqueInput[]
  }

  export type course_commentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<course_commentCreateWithoutCourseInput, course_commentUncheckedCreateWithoutCourseInput> | course_commentCreateWithoutCourseInput[] | course_commentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: course_commentCreateOrConnectWithoutCourseInput | course_commentCreateOrConnectWithoutCourseInput[]
    createMany?: course_commentCreateManyCourseInputEnvelope
    connect?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type course_typeUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<course_typeCreateWithoutCoursesInput, course_typeUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: course_typeCreateOrConnectWithoutCoursesInput
    upsert?: course_typeUpsertWithoutCoursesInput
    connect?: course_typeWhereUniqueInput
    update?: XOR<XOR<course_typeUpdateToOneWithWhereWithoutCoursesInput, course_typeUpdateWithoutCoursesInput>, course_typeUncheckedUpdateWithoutCoursesInput>
  }

  export type userUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<userCreateWithoutCoursesInput, userUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: userCreateOrConnectWithoutCoursesInput
    upsert?: userUpsertWithoutCoursesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutCoursesInput, userUpdateWithoutCoursesInput>, userUncheckedUpdateWithoutCoursesInput>
  }

  export type course_rateUpdateManyWithoutCourseNestedInput = {
    create?: XOR<course_rateCreateWithoutCourseInput, course_rateUncheckedCreateWithoutCourseInput> | course_rateCreateWithoutCourseInput[] | course_rateUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: course_rateCreateOrConnectWithoutCourseInput | course_rateCreateOrConnectWithoutCourseInput[]
    upsert?: course_rateUpsertWithWhereUniqueWithoutCourseInput | course_rateUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: course_rateCreateManyCourseInputEnvelope
    set?: course_rateWhereUniqueInput | course_rateWhereUniqueInput[]
    disconnect?: course_rateWhereUniqueInput | course_rateWhereUniqueInput[]
    delete?: course_rateWhereUniqueInput | course_rateWhereUniqueInput[]
    connect?: course_rateWhereUniqueInput | course_rateWhereUniqueInput[]
    update?: course_rateUpdateWithWhereUniqueWithoutCourseInput | course_rateUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: course_rateUpdateManyWithWhereWithoutCourseInput | course_rateUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: course_rateScalarWhereInput | course_rateScalarWhereInput[]
  }

  export type course_favoriteUpdateManyWithoutCourseNestedInput = {
    create?: XOR<course_favoriteCreateWithoutCourseInput, course_favoriteUncheckedCreateWithoutCourseInput> | course_favoriteCreateWithoutCourseInput[] | course_favoriteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: course_favoriteCreateOrConnectWithoutCourseInput | course_favoriteCreateOrConnectWithoutCourseInput[]
    upsert?: course_favoriteUpsertWithWhereUniqueWithoutCourseInput | course_favoriteUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: course_favoriteCreateManyCourseInputEnvelope
    set?: course_favoriteWhereUniqueInput | course_favoriteWhereUniqueInput[]
    disconnect?: course_favoriteWhereUniqueInput | course_favoriteWhereUniqueInput[]
    delete?: course_favoriteWhereUniqueInput | course_favoriteWhereUniqueInput[]
    connect?: course_favoriteWhereUniqueInput | course_favoriteWhereUniqueInput[]
    update?: course_favoriteUpdateWithWhereUniqueWithoutCourseInput | course_favoriteUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: course_favoriteUpdateManyWithWhereWithoutCourseInput | course_favoriteUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: course_favoriteScalarWhereInput | course_favoriteScalarWhereInput[]
  }

  export type course_sessionUpdateManyWithoutCourseNestedInput = {
    create?: XOR<course_sessionCreateWithoutCourseInput, course_sessionUncheckedCreateWithoutCourseInput> | course_sessionCreateWithoutCourseInput[] | course_sessionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: course_sessionCreateOrConnectWithoutCourseInput | course_sessionCreateOrConnectWithoutCourseInput[]
    upsert?: course_sessionUpsertWithWhereUniqueWithoutCourseInput | course_sessionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: course_sessionCreateManyCourseInputEnvelope
    set?: course_sessionWhereUniqueInput | course_sessionWhereUniqueInput[]
    disconnect?: course_sessionWhereUniqueInput | course_sessionWhereUniqueInput[]
    delete?: course_sessionWhereUniqueInput | course_sessionWhereUniqueInput[]
    connect?: course_sessionWhereUniqueInput | course_sessionWhereUniqueInput[]
    update?: course_sessionUpdateWithWhereUniqueWithoutCourseInput | course_sessionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: course_sessionUpdateManyWithWhereWithoutCourseInput | course_sessionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: course_sessionScalarWhereInput | course_sessionScalarWhereInput[]
  }

  export type course_categoryUpdateManyWithoutCourseNestedInput = {
    create?: XOR<course_categoryCreateWithoutCourseInput, course_categoryUncheckedCreateWithoutCourseInput> | course_categoryCreateWithoutCourseInput[] | course_categoryUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: course_categoryCreateOrConnectWithoutCourseInput | course_categoryCreateOrConnectWithoutCourseInput[]
    upsert?: course_categoryUpsertWithWhereUniqueWithoutCourseInput | course_categoryUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: course_categoryCreateManyCourseInputEnvelope
    set?: course_categoryWhereUniqueInput | course_categoryWhereUniqueInput[]
    disconnect?: course_categoryWhereUniqueInput | course_categoryWhereUniqueInput[]
    delete?: course_categoryWhereUniqueInput | course_categoryWhereUniqueInput[]
    connect?: course_categoryWhereUniqueInput | course_categoryWhereUniqueInput[]
    update?: course_categoryUpdateWithWhereUniqueWithoutCourseInput | course_categoryUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: course_categoryUpdateManyWithWhereWithoutCourseInput | course_categoryUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: course_categoryScalarWhereInput | course_categoryScalarWhereInput[]
  }

  export type course_commentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<course_commentCreateWithoutCourseInput, course_commentUncheckedCreateWithoutCourseInput> | course_commentCreateWithoutCourseInput[] | course_commentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: course_commentCreateOrConnectWithoutCourseInput | course_commentCreateOrConnectWithoutCourseInput[]
    upsert?: course_commentUpsertWithWhereUniqueWithoutCourseInput | course_commentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: course_commentCreateManyCourseInputEnvelope
    set?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
    disconnect?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
    delete?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
    connect?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
    update?: course_commentUpdateWithWhereUniqueWithoutCourseInput | course_commentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: course_commentUpdateManyWithWhereWithoutCourseInput | course_commentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: course_commentScalarWhereInput | course_commentScalarWhereInput[]
  }

  export type course_rateUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<course_rateCreateWithoutCourseInput, course_rateUncheckedCreateWithoutCourseInput> | course_rateCreateWithoutCourseInput[] | course_rateUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: course_rateCreateOrConnectWithoutCourseInput | course_rateCreateOrConnectWithoutCourseInput[]
    upsert?: course_rateUpsertWithWhereUniqueWithoutCourseInput | course_rateUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: course_rateCreateManyCourseInputEnvelope
    set?: course_rateWhereUniqueInput | course_rateWhereUniqueInput[]
    disconnect?: course_rateWhereUniqueInput | course_rateWhereUniqueInput[]
    delete?: course_rateWhereUniqueInput | course_rateWhereUniqueInput[]
    connect?: course_rateWhereUniqueInput | course_rateWhereUniqueInput[]
    update?: course_rateUpdateWithWhereUniqueWithoutCourseInput | course_rateUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: course_rateUpdateManyWithWhereWithoutCourseInput | course_rateUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: course_rateScalarWhereInput | course_rateScalarWhereInput[]
  }

  export type course_favoriteUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<course_favoriteCreateWithoutCourseInput, course_favoriteUncheckedCreateWithoutCourseInput> | course_favoriteCreateWithoutCourseInput[] | course_favoriteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: course_favoriteCreateOrConnectWithoutCourseInput | course_favoriteCreateOrConnectWithoutCourseInput[]
    upsert?: course_favoriteUpsertWithWhereUniqueWithoutCourseInput | course_favoriteUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: course_favoriteCreateManyCourseInputEnvelope
    set?: course_favoriteWhereUniqueInput | course_favoriteWhereUniqueInput[]
    disconnect?: course_favoriteWhereUniqueInput | course_favoriteWhereUniqueInput[]
    delete?: course_favoriteWhereUniqueInput | course_favoriteWhereUniqueInput[]
    connect?: course_favoriteWhereUniqueInput | course_favoriteWhereUniqueInput[]
    update?: course_favoriteUpdateWithWhereUniqueWithoutCourseInput | course_favoriteUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: course_favoriteUpdateManyWithWhereWithoutCourseInput | course_favoriteUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: course_favoriteScalarWhereInput | course_favoriteScalarWhereInput[]
  }

  export type course_sessionUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<course_sessionCreateWithoutCourseInput, course_sessionUncheckedCreateWithoutCourseInput> | course_sessionCreateWithoutCourseInput[] | course_sessionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: course_sessionCreateOrConnectWithoutCourseInput | course_sessionCreateOrConnectWithoutCourseInput[]
    upsert?: course_sessionUpsertWithWhereUniqueWithoutCourseInput | course_sessionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: course_sessionCreateManyCourseInputEnvelope
    set?: course_sessionWhereUniqueInput | course_sessionWhereUniqueInput[]
    disconnect?: course_sessionWhereUniqueInput | course_sessionWhereUniqueInput[]
    delete?: course_sessionWhereUniqueInput | course_sessionWhereUniqueInput[]
    connect?: course_sessionWhereUniqueInput | course_sessionWhereUniqueInput[]
    update?: course_sessionUpdateWithWhereUniqueWithoutCourseInput | course_sessionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: course_sessionUpdateManyWithWhereWithoutCourseInput | course_sessionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: course_sessionScalarWhereInput | course_sessionScalarWhereInput[]
  }

  export type course_categoryUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<course_categoryCreateWithoutCourseInput, course_categoryUncheckedCreateWithoutCourseInput> | course_categoryCreateWithoutCourseInput[] | course_categoryUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: course_categoryCreateOrConnectWithoutCourseInput | course_categoryCreateOrConnectWithoutCourseInput[]
    upsert?: course_categoryUpsertWithWhereUniqueWithoutCourseInput | course_categoryUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: course_categoryCreateManyCourseInputEnvelope
    set?: course_categoryWhereUniqueInput | course_categoryWhereUniqueInput[]
    disconnect?: course_categoryWhereUniqueInput | course_categoryWhereUniqueInput[]
    delete?: course_categoryWhereUniqueInput | course_categoryWhereUniqueInput[]
    connect?: course_categoryWhereUniqueInput | course_categoryWhereUniqueInput[]
    update?: course_categoryUpdateWithWhereUniqueWithoutCourseInput | course_categoryUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: course_categoryUpdateManyWithWhereWithoutCourseInput | course_categoryUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: course_categoryScalarWhereInput | course_categoryScalarWhereInput[]
  }

  export type course_commentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<course_commentCreateWithoutCourseInput, course_commentUncheckedCreateWithoutCourseInput> | course_commentCreateWithoutCourseInput[] | course_commentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: course_commentCreateOrConnectWithoutCourseInput | course_commentCreateOrConnectWithoutCourseInput[]
    upsert?: course_commentUpsertWithWhereUniqueWithoutCourseInput | course_commentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: course_commentCreateManyCourseInputEnvelope
    set?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
    disconnect?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
    delete?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
    connect?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
    update?: course_commentUpdateWithWhereUniqueWithoutCourseInput | course_commentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: course_commentUpdateManyWithWhereWithoutCourseInput | course_commentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: course_commentScalarWhereInput | course_commentScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutCourseRatesInput = {
    create?: XOR<userCreateWithoutCourseRatesInput, userUncheckedCreateWithoutCourseRatesInput>
    connectOrCreate?: userCreateOrConnectWithoutCourseRatesInput
    connect?: userWhereUniqueInput
  }

  export type courseCreateNestedOneWithoutCourseRatesInput = {
    create?: XOR<courseCreateWithoutCourseRatesInput, courseUncheckedCreateWithoutCourseRatesInput>
    connectOrCreate?: courseCreateOrConnectWithoutCourseRatesInput
    connect?: courseWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type userUpdateOneRequiredWithoutCourseRatesNestedInput = {
    create?: XOR<userCreateWithoutCourseRatesInput, userUncheckedCreateWithoutCourseRatesInput>
    connectOrCreate?: userCreateOrConnectWithoutCourseRatesInput
    upsert?: userUpsertWithoutCourseRatesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutCourseRatesInput, userUpdateWithoutCourseRatesInput>, userUncheckedUpdateWithoutCourseRatesInput>
  }

  export type courseUpdateOneRequiredWithoutCourseRatesNestedInput = {
    create?: XOR<courseCreateWithoutCourseRatesInput, courseUncheckedCreateWithoutCourseRatesInput>
    connectOrCreate?: courseCreateOrConnectWithoutCourseRatesInput
    upsert?: courseUpsertWithoutCourseRatesInput
    connect?: courseWhereUniqueInput
    update?: XOR<XOR<courseUpdateToOneWithWhereWithoutCourseRatesInput, courseUpdateWithoutCourseRatesInput>, courseUncheckedUpdateWithoutCourseRatesInput>
  }

  export type userCreateNestedOneWithoutCourseFavoritesInput = {
    create?: XOR<userCreateWithoutCourseFavoritesInput, userUncheckedCreateWithoutCourseFavoritesInput>
    connectOrCreate?: userCreateOrConnectWithoutCourseFavoritesInput
    connect?: userWhereUniqueInput
  }

  export type courseCreateNestedOneWithoutCourseFavoritesInput = {
    create?: XOR<courseCreateWithoutCourseFavoritesInput, courseUncheckedCreateWithoutCourseFavoritesInput>
    connectOrCreate?: courseCreateOrConnectWithoutCourseFavoritesInput
    connect?: courseWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutCourseFavoritesNestedInput = {
    create?: XOR<userCreateWithoutCourseFavoritesInput, userUncheckedCreateWithoutCourseFavoritesInput>
    connectOrCreate?: userCreateOrConnectWithoutCourseFavoritesInput
    upsert?: userUpsertWithoutCourseFavoritesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutCourseFavoritesInput, userUpdateWithoutCourseFavoritesInput>, userUncheckedUpdateWithoutCourseFavoritesInput>
  }

  export type courseUpdateOneRequiredWithoutCourseFavoritesNestedInput = {
    create?: XOR<courseCreateWithoutCourseFavoritesInput, courseUncheckedCreateWithoutCourseFavoritesInput>
    connectOrCreate?: courseCreateOrConnectWithoutCourseFavoritesInput
    upsert?: courseUpsertWithoutCourseFavoritesInput
    connect?: courseWhereUniqueInput
    update?: XOR<XOR<courseUpdateToOneWithWhereWithoutCourseFavoritesInput, courseUpdateWithoutCourseFavoritesInput>, courseUncheckedUpdateWithoutCourseFavoritesInput>
  }

  export type course_commentCreateNestedOneWithoutCourseCommentsInput = {
    create?: XOR<course_commentCreateWithoutCourseCommentsInput, course_commentUncheckedCreateWithoutCourseCommentsInput>
    connectOrCreate?: course_commentCreateOrConnectWithoutCourseCommentsInput
    connect?: course_commentWhereUniqueInput
  }

  export type userCreateNestedOneWithoutCourseCommentsInput = {
    create?: XOR<userCreateWithoutCourseCommentsInput, userUncheckedCreateWithoutCourseCommentsInput>
    connectOrCreate?: userCreateOrConnectWithoutCourseCommentsInput
    connect?: userWhereUniqueInput
  }

  export type course_commentCreateNestedManyWithoutParentInput = {
    create?: XOR<course_commentCreateWithoutParentInput, course_commentUncheckedCreateWithoutParentInput> | course_commentCreateWithoutParentInput[] | course_commentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: course_commentCreateOrConnectWithoutParentInput | course_commentCreateOrConnectWithoutParentInput[]
    createMany?: course_commentCreateManyParentInputEnvelope
    connect?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
  }

  export type courseCreateNestedOneWithoutCourseCommentsInput = {
    create?: XOR<courseCreateWithoutCourseCommentsInput, courseUncheckedCreateWithoutCourseCommentsInput>
    connectOrCreate?: courseCreateOrConnectWithoutCourseCommentsInput
    connect?: courseWhereUniqueInput
  }

  export type course_commentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<course_commentCreateWithoutParentInput, course_commentUncheckedCreateWithoutParentInput> | course_commentCreateWithoutParentInput[] | course_commentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: course_commentCreateOrConnectWithoutParentInput | course_commentCreateOrConnectWithoutParentInput[]
    createMany?: course_commentCreateManyParentInputEnvelope
    connect?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
  }

  export type course_commentUpdateOneWithoutCourseCommentsNestedInput = {
    create?: XOR<course_commentCreateWithoutCourseCommentsInput, course_commentUncheckedCreateWithoutCourseCommentsInput>
    connectOrCreate?: course_commentCreateOrConnectWithoutCourseCommentsInput
    upsert?: course_commentUpsertWithoutCourseCommentsInput
    disconnect?: course_commentWhereInput | boolean
    delete?: course_commentWhereInput | boolean
    connect?: course_commentWhereUniqueInput
    update?: XOR<XOR<course_commentUpdateToOneWithWhereWithoutCourseCommentsInput, course_commentUpdateWithoutCourseCommentsInput>, course_commentUncheckedUpdateWithoutCourseCommentsInput>
  }

  export type userUpdateOneRequiredWithoutCourseCommentsNestedInput = {
    create?: XOR<userCreateWithoutCourseCommentsInput, userUncheckedCreateWithoutCourseCommentsInput>
    connectOrCreate?: userCreateOrConnectWithoutCourseCommentsInput
    upsert?: userUpsertWithoutCourseCommentsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutCourseCommentsInput, userUpdateWithoutCourseCommentsInput>, userUncheckedUpdateWithoutCourseCommentsInput>
  }

  export type course_commentUpdateManyWithoutParentNestedInput = {
    create?: XOR<course_commentCreateWithoutParentInput, course_commentUncheckedCreateWithoutParentInput> | course_commentCreateWithoutParentInput[] | course_commentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: course_commentCreateOrConnectWithoutParentInput | course_commentCreateOrConnectWithoutParentInput[]
    upsert?: course_commentUpsertWithWhereUniqueWithoutParentInput | course_commentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: course_commentCreateManyParentInputEnvelope
    set?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
    disconnect?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
    delete?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
    connect?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
    update?: course_commentUpdateWithWhereUniqueWithoutParentInput | course_commentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: course_commentUpdateManyWithWhereWithoutParentInput | course_commentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: course_commentScalarWhereInput | course_commentScalarWhereInput[]
  }

  export type courseUpdateOneRequiredWithoutCourseCommentsNestedInput = {
    create?: XOR<courseCreateWithoutCourseCommentsInput, courseUncheckedCreateWithoutCourseCommentsInput>
    connectOrCreate?: courseCreateOrConnectWithoutCourseCommentsInput
    upsert?: courseUpsertWithoutCourseCommentsInput
    connect?: courseWhereUniqueInput
    update?: XOR<XOR<courseUpdateToOneWithWhereWithoutCourseCommentsInput, courseUpdateWithoutCourseCommentsInput>, courseUncheckedUpdateWithoutCourseCommentsInput>
  }

  export type course_commentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<course_commentCreateWithoutParentInput, course_commentUncheckedCreateWithoutParentInput> | course_commentCreateWithoutParentInput[] | course_commentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: course_commentCreateOrConnectWithoutParentInput | course_commentCreateOrConnectWithoutParentInput[]
    upsert?: course_commentUpsertWithWhereUniqueWithoutParentInput | course_commentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: course_commentCreateManyParentInputEnvelope
    set?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
    disconnect?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
    delete?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
    connect?: course_commentWhereUniqueInput | course_commentWhereUniqueInput[]
    update?: course_commentUpdateWithWhereUniqueWithoutParentInput | course_commentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: course_commentUpdateManyWithWhereWithoutParentInput | course_commentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: course_commentScalarWhereInput | course_commentScalarWhereInput[]
  }

  export type courseCreateNestedOneWithoutCourseSessionsInput = {
    create?: XOR<courseCreateWithoutCourseSessionsInput, courseUncheckedCreateWithoutCourseSessionsInput>
    connectOrCreate?: courseCreateOrConnectWithoutCourseSessionsInput
    connect?: courseWhereUniqueInput
  }

  export type courseUpdateOneRequiredWithoutCourseSessionsNestedInput = {
    create?: XOR<courseCreateWithoutCourseSessionsInput, courseUncheckedCreateWithoutCourseSessionsInput>
    connectOrCreate?: courseCreateOrConnectWithoutCourseSessionsInput
    upsert?: courseUpsertWithoutCourseSessionsInput
    connect?: courseWhereUniqueInput
    update?: XOR<XOR<courseUpdateToOneWithWhereWithoutCourseSessionsInput, courseUpdateWithoutCourseSessionsInput>, courseUncheckedUpdateWithoutCourseSessionsInput>
  }

  export type courseCreateNestedManyWithoutTypeInput = {
    create?: XOR<courseCreateWithoutTypeInput, courseUncheckedCreateWithoutTypeInput> | courseCreateWithoutTypeInput[] | courseUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: courseCreateOrConnectWithoutTypeInput | courseCreateOrConnectWithoutTypeInput[]
    createMany?: courseCreateManyTypeInputEnvelope
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
  }

  export type courseUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<courseCreateWithoutTypeInput, courseUncheckedCreateWithoutTypeInput> | courseCreateWithoutTypeInput[] | courseUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: courseCreateOrConnectWithoutTypeInput | courseCreateOrConnectWithoutTypeInput[]
    createMany?: courseCreateManyTypeInputEnvelope
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
  }

  export type courseUpdateManyWithoutTypeNestedInput = {
    create?: XOR<courseCreateWithoutTypeInput, courseUncheckedCreateWithoutTypeInput> | courseCreateWithoutTypeInput[] | courseUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: courseCreateOrConnectWithoutTypeInput | courseCreateOrConnectWithoutTypeInput[]
    upsert?: courseUpsertWithWhereUniqueWithoutTypeInput | courseUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: courseCreateManyTypeInputEnvelope
    set?: courseWhereUniqueInput | courseWhereUniqueInput[]
    disconnect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    delete?: courseWhereUniqueInput | courseWhereUniqueInput[]
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    update?: courseUpdateWithWhereUniqueWithoutTypeInput | courseUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: courseUpdateManyWithWhereWithoutTypeInput | courseUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: courseScalarWhereInput | courseScalarWhereInput[]
  }

  export type courseUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<courseCreateWithoutTypeInput, courseUncheckedCreateWithoutTypeInput> | courseCreateWithoutTypeInput[] | courseUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: courseCreateOrConnectWithoutTypeInput | courseCreateOrConnectWithoutTypeInput[]
    upsert?: courseUpsertWithWhereUniqueWithoutTypeInput | courseUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: courseCreateManyTypeInputEnvelope
    set?: courseWhereUniqueInput | courseWhereUniqueInput[]
    disconnect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    delete?: courseWhereUniqueInput | courseWhereUniqueInput[]
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    update?: courseUpdateWithWhereUniqueWithoutTypeInput | courseUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: courseUpdateManyWithWhereWithoutTypeInput | courseUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: courseScalarWhereInput | courseScalarWhereInput[]
  }

  export type course_categoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<course_categoryCreateWithoutCategoryInput, course_categoryUncheckedCreateWithoutCategoryInput> | course_categoryCreateWithoutCategoryInput[] | course_categoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: course_categoryCreateOrConnectWithoutCategoryInput | course_categoryCreateOrConnectWithoutCategoryInput[]
    createMany?: course_categoryCreateManyCategoryInputEnvelope
    connect?: course_categoryWhereUniqueInput | course_categoryWhereUniqueInput[]
  }

  export type course_categoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<course_categoryCreateWithoutCategoryInput, course_categoryUncheckedCreateWithoutCategoryInput> | course_categoryCreateWithoutCategoryInput[] | course_categoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: course_categoryCreateOrConnectWithoutCategoryInput | course_categoryCreateOrConnectWithoutCategoryInput[]
    createMany?: course_categoryCreateManyCategoryInputEnvelope
    connect?: course_categoryWhereUniqueInput | course_categoryWhereUniqueInput[]
  }

  export type course_categoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<course_categoryCreateWithoutCategoryInput, course_categoryUncheckedCreateWithoutCategoryInput> | course_categoryCreateWithoutCategoryInput[] | course_categoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: course_categoryCreateOrConnectWithoutCategoryInput | course_categoryCreateOrConnectWithoutCategoryInput[]
    upsert?: course_categoryUpsertWithWhereUniqueWithoutCategoryInput | course_categoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: course_categoryCreateManyCategoryInputEnvelope
    set?: course_categoryWhereUniqueInput | course_categoryWhereUniqueInput[]
    disconnect?: course_categoryWhereUniqueInput | course_categoryWhereUniqueInput[]
    delete?: course_categoryWhereUniqueInput | course_categoryWhereUniqueInput[]
    connect?: course_categoryWhereUniqueInput | course_categoryWhereUniqueInput[]
    update?: course_categoryUpdateWithWhereUniqueWithoutCategoryInput | course_categoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: course_categoryUpdateManyWithWhereWithoutCategoryInput | course_categoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: course_categoryScalarWhereInput | course_categoryScalarWhereInput[]
  }

  export type course_categoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<course_categoryCreateWithoutCategoryInput, course_categoryUncheckedCreateWithoutCategoryInput> | course_categoryCreateWithoutCategoryInput[] | course_categoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: course_categoryCreateOrConnectWithoutCategoryInput | course_categoryCreateOrConnectWithoutCategoryInput[]
    upsert?: course_categoryUpsertWithWhereUniqueWithoutCategoryInput | course_categoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: course_categoryCreateManyCategoryInputEnvelope
    set?: course_categoryWhereUniqueInput | course_categoryWhereUniqueInput[]
    disconnect?: course_categoryWhereUniqueInput | course_categoryWhereUniqueInput[]
    delete?: course_categoryWhereUniqueInput | course_categoryWhereUniqueInput[]
    connect?: course_categoryWhereUniqueInput | course_categoryWhereUniqueInput[]
    update?: course_categoryUpdateWithWhereUniqueWithoutCategoryInput | course_categoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: course_categoryUpdateManyWithWhereWithoutCategoryInput | course_categoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: course_categoryScalarWhereInput | course_categoryScalarWhereInput[]
  }

  export type categoryCreateNestedOneWithoutCourseCategoriesInput = {
    create?: XOR<categoryCreateWithoutCourseCategoriesInput, categoryUncheckedCreateWithoutCourseCategoriesInput>
    connectOrCreate?: categoryCreateOrConnectWithoutCourseCategoriesInput
    connect?: categoryWhereUniqueInput
  }

  export type courseCreateNestedOneWithoutCourseCategoriesInput = {
    create?: XOR<courseCreateWithoutCourseCategoriesInput, courseUncheckedCreateWithoutCourseCategoriesInput>
    connectOrCreate?: courseCreateOrConnectWithoutCourseCategoriesInput
    connect?: courseWhereUniqueInput
  }

  export type categoryUpdateOneRequiredWithoutCourseCategoriesNestedInput = {
    create?: XOR<categoryCreateWithoutCourseCategoriesInput, categoryUncheckedCreateWithoutCourseCategoriesInput>
    connectOrCreate?: categoryCreateOrConnectWithoutCourseCategoriesInput
    upsert?: categoryUpsertWithoutCourseCategoriesInput
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutCourseCategoriesInput, categoryUpdateWithoutCourseCategoriesInput>, categoryUncheckedUpdateWithoutCourseCategoriesInput>
  }

  export type courseUpdateOneRequiredWithoutCourseCategoriesNestedInput = {
    create?: XOR<courseCreateWithoutCourseCategoriesInput, courseUncheckedCreateWithoutCourseCategoriesInput>
    connectOrCreate?: courseCreateOrConnectWithoutCourseCategoriesInput
    upsert?: courseUpsertWithoutCourseCategoriesInput
    connect?: courseWhereUniqueInput
    update?: XOR<XOR<courseUpdateToOneWithWhereWithoutCourseCategoriesInput, courseUpdateWithoutCourseCategoriesInput>, courseUncheckedUpdateWithoutCourseCategoriesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type user_roleCreateWithoutUserInput = {
    id?: string
    isActive?: boolean
    created_at?: Date | string
    role: roleCreateNestedOneWithoutUserRolesInput
  }

  export type user_roleUncheckedCreateWithoutUserInput = {
    id?: string
    role_id: string
    isActive?: boolean
    created_at?: Date | string
  }

  export type user_roleCreateOrConnectWithoutUserInput = {
    where: user_roleWhereUniqueInput
    create: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput>
  }

  export type user_roleCreateManyUserInputEnvelope = {
    data: user_roleCreateManyUserInput | user_roleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type login_transactionCreateWithoutUserInput = {
    id?: string
    ip: string
    login_date?: Date | string
  }

  export type login_transactionUncheckedCreateWithoutUserInput = {
    id?: string
    ip: string
    login_date?: Date | string
  }

  export type login_transactionCreateOrConnectWithoutUserInput = {
    where: login_transactionWhereUniqueInput
    create: XOR<login_transactionCreateWithoutUserInput, login_transactionUncheckedCreateWithoutUserInput>
  }

  export type login_transactionCreateManyUserInputEnvelope = {
    data: login_transactionCreateManyUserInput | login_transactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type courseCreateWithoutTeacherInput = {
    id?: string
    title: string
    description: string
    mini_description: string
    isActive?: boolean
    picture: string
    price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    google_title: string
    google_description: string
    created_at?: Date | string
    type: course_typeCreateNestedOneWithoutCoursesInput
    courseRates?: course_rateCreateNestedManyWithoutCourseInput
    courseFavorites?: course_favoriteCreateNestedManyWithoutCourseInput
    courseSessions?: course_sessionCreateNestedManyWithoutCourseInput
    courseCategories?: course_categoryCreateNestedManyWithoutCourseInput
    courseComments?: course_commentCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutTeacherInput = {
    id?: string
    title: string
    description: string
    mini_description: string
    isActive?: boolean
    picture: string
    price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    google_title: string
    google_description: string
    type_id: string
    created_at?: Date | string
    courseRates?: course_rateUncheckedCreateNestedManyWithoutCourseInput
    courseFavorites?: course_favoriteUncheckedCreateNestedManyWithoutCourseInput
    courseSessions?: course_sessionUncheckedCreateNestedManyWithoutCourseInput
    courseCategories?: course_categoryUncheckedCreateNestedManyWithoutCourseInput
    courseComments?: course_commentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutTeacherInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutTeacherInput, courseUncheckedCreateWithoutTeacherInput>
  }

  export type courseCreateManyTeacherInputEnvelope = {
    data: courseCreateManyTeacherInput | courseCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type course_rateCreateWithoutUserInput = {
    id?: string
    rate: number
    course: courseCreateNestedOneWithoutCourseRatesInput
  }

  export type course_rateUncheckedCreateWithoutUserInput = {
    id?: string
    rate: number
    course_id: string
  }

  export type course_rateCreateOrConnectWithoutUserInput = {
    where: course_rateWhereUniqueInput
    create: XOR<course_rateCreateWithoutUserInput, course_rateUncheckedCreateWithoutUserInput>
  }

  export type course_rateCreateManyUserInputEnvelope = {
    data: course_rateCreateManyUserInput | course_rateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type course_favoriteCreateWithoutUserInput = {
    id?: string
    course: courseCreateNestedOneWithoutCourseFavoritesInput
  }

  export type course_favoriteUncheckedCreateWithoutUserInput = {
    id?: string
    course_id: string
  }

  export type course_favoriteCreateOrConnectWithoutUserInput = {
    where: course_favoriteWhereUniqueInput
    create: XOR<course_favoriteCreateWithoutUserInput, course_favoriteUncheckedCreateWithoutUserInput>
  }

  export type course_favoriteCreateManyUserInputEnvelope = {
    data: course_favoriteCreateManyUserInput | course_favoriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type course_commentCreateWithoutUserInput = {
    id?: string
    title: string
    text: string
    isActive?: boolean
    parent?: course_commentCreateNestedOneWithoutCourseCommentsInput
    courseComments?: course_commentCreateNestedManyWithoutParentInput
    course: courseCreateNestedOneWithoutCourseCommentsInput
  }

  export type course_commentUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    text: string
    isActive?: boolean
    parent_id?: string | null
    course_id: string
    courseComments?: course_commentUncheckedCreateNestedManyWithoutParentInput
  }

  export type course_commentCreateOrConnectWithoutUserInput = {
    where: course_commentWhereUniqueInput
    create: XOR<course_commentCreateWithoutUserInput, course_commentUncheckedCreateWithoutUserInput>
  }

  export type course_commentCreateManyUserInputEnvelope = {
    data: course_commentCreateManyUserInput | course_commentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type user_roleUpsertWithWhereUniqueWithoutUserInput = {
    where: user_roleWhereUniqueInput
    update: XOR<user_roleUpdateWithoutUserInput, user_roleUncheckedUpdateWithoutUserInput>
    create: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput>
  }

  export type user_roleUpdateWithWhereUniqueWithoutUserInput = {
    where: user_roleWhereUniqueInput
    data: XOR<user_roleUpdateWithoutUserInput, user_roleUncheckedUpdateWithoutUserInput>
  }

  export type user_roleUpdateManyWithWhereWithoutUserInput = {
    where: user_roleScalarWhereInput
    data: XOR<user_roleUpdateManyMutationInput, user_roleUncheckedUpdateManyWithoutUserInput>
  }

  export type user_roleScalarWhereInput = {
    AND?: user_roleScalarWhereInput | user_roleScalarWhereInput[]
    OR?: user_roleScalarWhereInput[]
    NOT?: user_roleScalarWhereInput | user_roleScalarWhereInput[]
    id?: StringFilter<"user_role"> | string
    user_id?: StringFilter<"user_role"> | string
    role_id?: StringFilter<"user_role"> | string
    isActive?: BoolFilter<"user_role"> | boolean
    created_at?: DateTimeFilter<"user_role"> | Date | string
  }

  export type login_transactionUpsertWithWhereUniqueWithoutUserInput = {
    where: login_transactionWhereUniqueInput
    update: XOR<login_transactionUpdateWithoutUserInput, login_transactionUncheckedUpdateWithoutUserInput>
    create: XOR<login_transactionCreateWithoutUserInput, login_transactionUncheckedCreateWithoutUserInput>
  }

  export type login_transactionUpdateWithWhereUniqueWithoutUserInput = {
    where: login_transactionWhereUniqueInput
    data: XOR<login_transactionUpdateWithoutUserInput, login_transactionUncheckedUpdateWithoutUserInput>
  }

  export type login_transactionUpdateManyWithWhereWithoutUserInput = {
    where: login_transactionScalarWhereInput
    data: XOR<login_transactionUpdateManyMutationInput, login_transactionUncheckedUpdateManyWithoutUserInput>
  }

  export type login_transactionScalarWhereInput = {
    AND?: login_transactionScalarWhereInput | login_transactionScalarWhereInput[]
    OR?: login_transactionScalarWhereInput[]
    NOT?: login_transactionScalarWhereInput | login_transactionScalarWhereInput[]
    id?: StringFilter<"login_transaction"> | string
    ip?: StringFilter<"login_transaction"> | string
    login_date?: DateTimeFilter<"login_transaction"> | Date | string
    user_id?: StringFilter<"login_transaction"> | string
  }

  export type courseUpsertWithWhereUniqueWithoutTeacherInput = {
    where: courseWhereUniqueInput
    update: XOR<courseUpdateWithoutTeacherInput, courseUncheckedUpdateWithoutTeacherInput>
    create: XOR<courseCreateWithoutTeacherInput, courseUncheckedCreateWithoutTeacherInput>
  }

  export type courseUpdateWithWhereUniqueWithoutTeacherInput = {
    where: courseWhereUniqueInput
    data: XOR<courseUpdateWithoutTeacherInput, courseUncheckedUpdateWithoutTeacherInput>
  }

  export type courseUpdateManyWithWhereWithoutTeacherInput = {
    where: courseScalarWhereInput
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyWithoutTeacherInput>
  }

  export type courseScalarWhereInput = {
    AND?: courseScalarWhereInput | courseScalarWhereInput[]
    OR?: courseScalarWhereInput[]
    NOT?: courseScalarWhereInput | courseScalarWhereInput[]
    id?: StringFilter<"course"> | string
    title?: StringFilter<"course"> | string
    description?: StringFilter<"course"> | string
    mini_description?: StringFilter<"course"> | string
    isActive?: BoolFilter<"course"> | boolean
    picture?: StringFilter<"course"> | string
    price?: DecimalFilter<"course"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"course"> | Decimal | DecimalJsLike | number | string
    google_title?: StringFilter<"course"> | string
    google_description?: StringFilter<"course"> | string
    created_by?: StringFilter<"course"> | string
    type_id?: StringFilter<"course"> | string
    created_at?: DateTimeFilter<"course"> | Date | string
  }

  export type course_rateUpsertWithWhereUniqueWithoutUserInput = {
    where: course_rateWhereUniqueInput
    update: XOR<course_rateUpdateWithoutUserInput, course_rateUncheckedUpdateWithoutUserInput>
    create: XOR<course_rateCreateWithoutUserInput, course_rateUncheckedCreateWithoutUserInput>
  }

  export type course_rateUpdateWithWhereUniqueWithoutUserInput = {
    where: course_rateWhereUniqueInput
    data: XOR<course_rateUpdateWithoutUserInput, course_rateUncheckedUpdateWithoutUserInput>
  }

  export type course_rateUpdateManyWithWhereWithoutUserInput = {
    where: course_rateScalarWhereInput
    data: XOR<course_rateUpdateManyMutationInput, course_rateUncheckedUpdateManyWithoutUserInput>
  }

  export type course_rateScalarWhereInput = {
    AND?: course_rateScalarWhereInput | course_rateScalarWhereInput[]
    OR?: course_rateScalarWhereInput[]
    NOT?: course_rateScalarWhereInput | course_rateScalarWhereInput[]
    id?: StringFilter<"course_rate"> | string
    rate?: FloatFilter<"course_rate"> | number
    course_id?: StringFilter<"course_rate"> | string
    user_id?: StringFilter<"course_rate"> | string
  }

  export type course_favoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: course_favoriteWhereUniqueInput
    update: XOR<course_favoriteUpdateWithoutUserInput, course_favoriteUncheckedUpdateWithoutUserInput>
    create: XOR<course_favoriteCreateWithoutUserInput, course_favoriteUncheckedCreateWithoutUserInput>
  }

  export type course_favoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: course_favoriteWhereUniqueInput
    data: XOR<course_favoriteUpdateWithoutUserInput, course_favoriteUncheckedUpdateWithoutUserInput>
  }

  export type course_favoriteUpdateManyWithWhereWithoutUserInput = {
    where: course_favoriteScalarWhereInput
    data: XOR<course_favoriteUpdateManyMutationInput, course_favoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type course_favoriteScalarWhereInput = {
    AND?: course_favoriteScalarWhereInput | course_favoriteScalarWhereInput[]
    OR?: course_favoriteScalarWhereInput[]
    NOT?: course_favoriteScalarWhereInput | course_favoriteScalarWhereInput[]
    id?: StringFilter<"course_favorite"> | string
    user_id?: StringFilter<"course_favorite"> | string
    course_id?: StringFilter<"course_favorite"> | string
  }

  export type course_commentUpsertWithWhereUniqueWithoutUserInput = {
    where: course_commentWhereUniqueInput
    update: XOR<course_commentUpdateWithoutUserInput, course_commentUncheckedUpdateWithoutUserInput>
    create: XOR<course_commentCreateWithoutUserInput, course_commentUncheckedCreateWithoutUserInput>
  }

  export type course_commentUpdateWithWhereUniqueWithoutUserInput = {
    where: course_commentWhereUniqueInput
    data: XOR<course_commentUpdateWithoutUserInput, course_commentUncheckedUpdateWithoutUserInput>
  }

  export type course_commentUpdateManyWithWhereWithoutUserInput = {
    where: course_commentScalarWhereInput
    data: XOR<course_commentUpdateManyMutationInput, course_commentUncheckedUpdateManyWithoutUserInput>
  }

  export type course_commentScalarWhereInput = {
    AND?: course_commentScalarWhereInput | course_commentScalarWhereInput[]
    OR?: course_commentScalarWhereInput[]
    NOT?: course_commentScalarWhereInput | course_commentScalarWhereInput[]
    id?: StringFilter<"course_comment"> | string
    title?: StringFilter<"course_comment"> | string
    text?: StringFilter<"course_comment"> | string
    user_id?: StringFilter<"course_comment"> | string
    isActive?: BoolFilter<"course_comment"> | boolean
    parent_id?: StringNullableFilter<"course_comment"> | string | null
    course_id?: StringFilter<"course_comment"> | string
  }

  export type roleCreateWithoutUserRolesInput = {
    id?: string
    name: string
  }

  export type roleUncheckedCreateWithoutUserRolesInput = {
    id?: string
    name: string
  }

  export type roleCreateOrConnectWithoutUserRolesInput = {
    where: roleWhereUniqueInput
    create: XOR<roleCreateWithoutUserRolesInput, roleUncheckedCreateWithoutUserRolesInput>
  }

  export type userCreateWithoutUserRolesInput = {
    id?: string
    name: string
    email: string
    password: string
    phone_number: string
    national_code?: string | null
    location?: string | null
    loginTransactions?: login_transactionCreateNestedManyWithoutUserInput
    courses?: courseCreateNestedManyWithoutTeacherInput
    courseRates?: course_rateCreateNestedManyWithoutUserInput
    courseFavorites?: course_favoriteCreateNestedManyWithoutUserInput
    courseComments?: course_commentCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUserRolesInput = {
    id?: string
    name: string
    email: string
    password: string
    phone_number: string
    national_code?: string | null
    location?: string | null
    loginTransactions?: login_transactionUncheckedCreateNestedManyWithoutUserInput
    courses?: courseUncheckedCreateNestedManyWithoutTeacherInput
    courseRates?: course_rateUncheckedCreateNestedManyWithoutUserInput
    courseFavorites?: course_favoriteUncheckedCreateNestedManyWithoutUserInput
    courseComments?: course_commentUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUserRolesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUserRolesInput, userUncheckedCreateWithoutUserRolesInput>
  }

  export type roleUpsertWithoutUserRolesInput = {
    update: XOR<roleUpdateWithoutUserRolesInput, roleUncheckedUpdateWithoutUserRolesInput>
    create: XOR<roleCreateWithoutUserRolesInput, roleUncheckedCreateWithoutUserRolesInput>
    where?: roleWhereInput
  }

  export type roleUpdateToOneWithWhereWithoutUserRolesInput = {
    where?: roleWhereInput
    data: XOR<roleUpdateWithoutUserRolesInput, roleUncheckedUpdateWithoutUserRolesInput>
  }

  export type roleUpdateWithoutUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type roleUncheckedUpdateWithoutUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type userUpsertWithoutUserRolesInput = {
    update: XOR<userUpdateWithoutUserRolesInput, userUncheckedUpdateWithoutUserRolesInput>
    create: XOR<userCreateWithoutUserRolesInput, userUncheckedCreateWithoutUserRolesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUserRolesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUserRolesInput, userUncheckedUpdateWithoutUserRolesInput>
  }

  export type userUpdateWithoutUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    national_code?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    loginTransactions?: login_transactionUpdateManyWithoutUserNestedInput
    courses?: courseUpdateManyWithoutTeacherNestedInput
    courseRates?: course_rateUpdateManyWithoutUserNestedInput
    courseFavorites?: course_favoriteUpdateManyWithoutUserNestedInput
    courseComments?: course_commentUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    national_code?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    loginTransactions?: login_transactionUncheckedUpdateManyWithoutUserNestedInput
    courses?: courseUncheckedUpdateManyWithoutTeacherNestedInput
    courseRates?: course_rateUncheckedUpdateManyWithoutUserNestedInput
    courseFavorites?: course_favoriteUncheckedUpdateManyWithoutUserNestedInput
    courseComments?: course_commentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type user_roleCreateWithoutRoleInput = {
    id?: string
    isActive?: boolean
    created_at?: Date | string
    user: userCreateNestedOneWithoutUserRolesInput
  }

  export type user_roleUncheckedCreateWithoutRoleInput = {
    id?: string
    user_id: string
    isActive?: boolean
    created_at?: Date | string
  }

  export type user_roleCreateOrConnectWithoutRoleInput = {
    where: user_roleWhereUniqueInput
    create: XOR<user_roleCreateWithoutRoleInput, user_roleUncheckedCreateWithoutRoleInput>
  }

  export type user_roleCreateManyRoleInputEnvelope = {
    data: user_roleCreateManyRoleInput | user_roleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type user_roleUpsertWithWhereUniqueWithoutRoleInput = {
    where: user_roleWhereUniqueInput
    update: XOR<user_roleUpdateWithoutRoleInput, user_roleUncheckedUpdateWithoutRoleInput>
    create: XOR<user_roleCreateWithoutRoleInput, user_roleUncheckedCreateWithoutRoleInput>
  }

  export type user_roleUpdateWithWhereUniqueWithoutRoleInput = {
    where: user_roleWhereUniqueInput
    data: XOR<user_roleUpdateWithoutRoleInput, user_roleUncheckedUpdateWithoutRoleInput>
  }

  export type user_roleUpdateManyWithWhereWithoutRoleInput = {
    where: user_roleScalarWhereInput
    data: XOR<user_roleUpdateManyMutationInput, user_roleUncheckedUpdateManyWithoutRoleInput>
  }

  export type userCreateWithoutLoginTransactionsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone_number: string
    national_code?: string | null
    location?: string | null
    userRoles?: user_roleCreateNestedManyWithoutUserInput
    courses?: courseCreateNestedManyWithoutTeacherInput
    courseRates?: course_rateCreateNestedManyWithoutUserInput
    courseFavorites?: course_favoriteCreateNestedManyWithoutUserInput
    courseComments?: course_commentCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutLoginTransactionsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone_number: string
    national_code?: string | null
    location?: string | null
    userRoles?: user_roleUncheckedCreateNestedManyWithoutUserInput
    courses?: courseUncheckedCreateNestedManyWithoutTeacherInput
    courseRates?: course_rateUncheckedCreateNestedManyWithoutUserInput
    courseFavorites?: course_favoriteUncheckedCreateNestedManyWithoutUserInput
    courseComments?: course_commentUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutLoginTransactionsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutLoginTransactionsInput, userUncheckedCreateWithoutLoginTransactionsInput>
  }

  export type userUpsertWithoutLoginTransactionsInput = {
    update: XOR<userUpdateWithoutLoginTransactionsInput, userUncheckedUpdateWithoutLoginTransactionsInput>
    create: XOR<userCreateWithoutLoginTransactionsInput, userUncheckedCreateWithoutLoginTransactionsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutLoginTransactionsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutLoginTransactionsInput, userUncheckedUpdateWithoutLoginTransactionsInput>
  }

  export type userUpdateWithoutLoginTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    national_code?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    userRoles?: user_roleUpdateManyWithoutUserNestedInput
    courses?: courseUpdateManyWithoutTeacherNestedInput
    courseRates?: course_rateUpdateManyWithoutUserNestedInput
    courseFavorites?: course_favoriteUpdateManyWithoutUserNestedInput
    courseComments?: course_commentUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutLoginTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    national_code?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    userRoles?: user_roleUncheckedUpdateManyWithoutUserNestedInput
    courses?: courseUncheckedUpdateManyWithoutTeacherNestedInput
    courseRates?: course_rateUncheckedUpdateManyWithoutUserNestedInput
    courseFavorites?: course_favoriteUncheckedUpdateManyWithoutUserNestedInput
    courseComments?: course_commentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type course_typeCreateWithoutCoursesInput = {
    id?: string
    title: string
    file?: string | null
  }

  export type course_typeUncheckedCreateWithoutCoursesInput = {
    id?: string
    title: string
    file?: string | null
  }

  export type course_typeCreateOrConnectWithoutCoursesInput = {
    where: course_typeWhereUniqueInput
    create: XOR<course_typeCreateWithoutCoursesInput, course_typeUncheckedCreateWithoutCoursesInput>
  }

  export type userCreateWithoutCoursesInput = {
    id?: string
    name: string
    email: string
    password: string
    phone_number: string
    national_code?: string | null
    location?: string | null
    userRoles?: user_roleCreateNestedManyWithoutUserInput
    loginTransactions?: login_transactionCreateNestedManyWithoutUserInput
    courseRates?: course_rateCreateNestedManyWithoutUserInput
    courseFavorites?: course_favoriteCreateNestedManyWithoutUserInput
    courseComments?: course_commentCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutCoursesInput = {
    id?: string
    name: string
    email: string
    password: string
    phone_number: string
    national_code?: string | null
    location?: string | null
    userRoles?: user_roleUncheckedCreateNestedManyWithoutUserInput
    loginTransactions?: login_transactionUncheckedCreateNestedManyWithoutUserInput
    courseRates?: course_rateUncheckedCreateNestedManyWithoutUserInput
    courseFavorites?: course_favoriteUncheckedCreateNestedManyWithoutUserInput
    courseComments?: course_commentUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutCoursesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCoursesInput, userUncheckedCreateWithoutCoursesInput>
  }

  export type course_rateCreateWithoutCourseInput = {
    id?: string
    rate: number
    user: userCreateNestedOneWithoutCourseRatesInput
  }

  export type course_rateUncheckedCreateWithoutCourseInput = {
    id?: string
    rate: number
    user_id: string
  }

  export type course_rateCreateOrConnectWithoutCourseInput = {
    where: course_rateWhereUniqueInput
    create: XOR<course_rateCreateWithoutCourseInput, course_rateUncheckedCreateWithoutCourseInput>
  }

  export type course_rateCreateManyCourseInputEnvelope = {
    data: course_rateCreateManyCourseInput | course_rateCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type course_favoriteCreateWithoutCourseInput = {
    id?: string
    user: userCreateNestedOneWithoutCourseFavoritesInput
  }

  export type course_favoriteUncheckedCreateWithoutCourseInput = {
    id?: string
    user_id: string
  }

  export type course_favoriteCreateOrConnectWithoutCourseInput = {
    where: course_favoriteWhereUniqueInput
    create: XOR<course_favoriteCreateWithoutCourseInput, course_favoriteUncheckedCreateWithoutCourseInput>
  }

  export type course_favoriteCreateManyCourseInputEnvelope = {
    data: course_favoriteCreateManyCourseInput | course_favoriteCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type course_sessionCreateWithoutCourseInput = {
    id?: string
    title: string
    text: string
    file?: string | null
  }

  export type course_sessionUncheckedCreateWithoutCourseInput = {
    id?: string
    title: string
    text: string
    file?: string | null
  }

  export type course_sessionCreateOrConnectWithoutCourseInput = {
    where: course_sessionWhereUniqueInput
    create: XOR<course_sessionCreateWithoutCourseInput, course_sessionUncheckedCreateWithoutCourseInput>
  }

  export type course_sessionCreateManyCourseInputEnvelope = {
    data: course_sessionCreateManyCourseInput | course_sessionCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type course_categoryCreateWithoutCourseInput = {
    id?: string
    category: categoryCreateNestedOneWithoutCourseCategoriesInput
  }

  export type course_categoryUncheckedCreateWithoutCourseInput = {
    id?: string
    category_id: string
  }

  export type course_categoryCreateOrConnectWithoutCourseInput = {
    where: course_categoryWhereUniqueInput
    create: XOR<course_categoryCreateWithoutCourseInput, course_categoryUncheckedCreateWithoutCourseInput>
  }

  export type course_categoryCreateManyCourseInputEnvelope = {
    data: course_categoryCreateManyCourseInput | course_categoryCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type course_commentCreateWithoutCourseInput = {
    id?: string
    title: string
    text: string
    isActive?: boolean
    parent?: course_commentCreateNestedOneWithoutCourseCommentsInput
    user: userCreateNestedOneWithoutCourseCommentsInput
    courseComments?: course_commentCreateNestedManyWithoutParentInput
  }

  export type course_commentUncheckedCreateWithoutCourseInput = {
    id?: string
    title: string
    text: string
    user_id: string
    isActive?: boolean
    parent_id?: string | null
    courseComments?: course_commentUncheckedCreateNestedManyWithoutParentInput
  }

  export type course_commentCreateOrConnectWithoutCourseInput = {
    where: course_commentWhereUniqueInput
    create: XOR<course_commentCreateWithoutCourseInput, course_commentUncheckedCreateWithoutCourseInput>
  }

  export type course_commentCreateManyCourseInputEnvelope = {
    data: course_commentCreateManyCourseInput | course_commentCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type course_typeUpsertWithoutCoursesInput = {
    update: XOR<course_typeUpdateWithoutCoursesInput, course_typeUncheckedUpdateWithoutCoursesInput>
    create: XOR<course_typeCreateWithoutCoursesInput, course_typeUncheckedCreateWithoutCoursesInput>
    where?: course_typeWhereInput
  }

  export type course_typeUpdateToOneWithWhereWithoutCoursesInput = {
    where?: course_typeWhereInput
    data: XOR<course_typeUpdateWithoutCoursesInput, course_typeUncheckedUpdateWithoutCoursesInput>
  }

  export type course_typeUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type course_typeUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUpsertWithoutCoursesInput = {
    update: XOR<userUpdateWithoutCoursesInput, userUncheckedUpdateWithoutCoursesInput>
    create: XOR<userCreateWithoutCoursesInput, userUncheckedCreateWithoutCoursesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutCoursesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutCoursesInput, userUncheckedUpdateWithoutCoursesInput>
  }

  export type userUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    national_code?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    userRoles?: user_roleUpdateManyWithoutUserNestedInput
    loginTransactions?: login_transactionUpdateManyWithoutUserNestedInput
    courseRates?: course_rateUpdateManyWithoutUserNestedInput
    courseFavorites?: course_favoriteUpdateManyWithoutUserNestedInput
    courseComments?: course_commentUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    national_code?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    userRoles?: user_roleUncheckedUpdateManyWithoutUserNestedInput
    loginTransactions?: login_transactionUncheckedUpdateManyWithoutUserNestedInput
    courseRates?: course_rateUncheckedUpdateManyWithoutUserNestedInput
    courseFavorites?: course_favoriteUncheckedUpdateManyWithoutUserNestedInput
    courseComments?: course_commentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type course_rateUpsertWithWhereUniqueWithoutCourseInput = {
    where: course_rateWhereUniqueInput
    update: XOR<course_rateUpdateWithoutCourseInput, course_rateUncheckedUpdateWithoutCourseInput>
    create: XOR<course_rateCreateWithoutCourseInput, course_rateUncheckedCreateWithoutCourseInput>
  }

  export type course_rateUpdateWithWhereUniqueWithoutCourseInput = {
    where: course_rateWhereUniqueInput
    data: XOR<course_rateUpdateWithoutCourseInput, course_rateUncheckedUpdateWithoutCourseInput>
  }

  export type course_rateUpdateManyWithWhereWithoutCourseInput = {
    where: course_rateScalarWhereInput
    data: XOR<course_rateUpdateManyMutationInput, course_rateUncheckedUpdateManyWithoutCourseInput>
  }

  export type course_favoriteUpsertWithWhereUniqueWithoutCourseInput = {
    where: course_favoriteWhereUniqueInput
    update: XOR<course_favoriteUpdateWithoutCourseInput, course_favoriteUncheckedUpdateWithoutCourseInput>
    create: XOR<course_favoriteCreateWithoutCourseInput, course_favoriteUncheckedCreateWithoutCourseInput>
  }

  export type course_favoriteUpdateWithWhereUniqueWithoutCourseInput = {
    where: course_favoriteWhereUniqueInput
    data: XOR<course_favoriteUpdateWithoutCourseInput, course_favoriteUncheckedUpdateWithoutCourseInput>
  }

  export type course_favoriteUpdateManyWithWhereWithoutCourseInput = {
    where: course_favoriteScalarWhereInput
    data: XOR<course_favoriteUpdateManyMutationInput, course_favoriteUncheckedUpdateManyWithoutCourseInput>
  }

  export type course_sessionUpsertWithWhereUniqueWithoutCourseInput = {
    where: course_sessionWhereUniqueInput
    update: XOR<course_sessionUpdateWithoutCourseInput, course_sessionUncheckedUpdateWithoutCourseInput>
    create: XOR<course_sessionCreateWithoutCourseInput, course_sessionUncheckedCreateWithoutCourseInput>
  }

  export type course_sessionUpdateWithWhereUniqueWithoutCourseInput = {
    where: course_sessionWhereUniqueInput
    data: XOR<course_sessionUpdateWithoutCourseInput, course_sessionUncheckedUpdateWithoutCourseInput>
  }

  export type course_sessionUpdateManyWithWhereWithoutCourseInput = {
    where: course_sessionScalarWhereInput
    data: XOR<course_sessionUpdateManyMutationInput, course_sessionUncheckedUpdateManyWithoutCourseInput>
  }

  export type course_sessionScalarWhereInput = {
    AND?: course_sessionScalarWhereInput | course_sessionScalarWhereInput[]
    OR?: course_sessionScalarWhereInput[]
    NOT?: course_sessionScalarWhereInput | course_sessionScalarWhereInput[]
    id?: StringFilter<"course_session"> | string
    title?: StringFilter<"course_session"> | string
    text?: StringFilter<"course_session"> | string
    file?: StringNullableFilter<"course_session"> | string | null
    course_id?: StringFilter<"course_session"> | string
  }

  export type course_categoryUpsertWithWhereUniqueWithoutCourseInput = {
    where: course_categoryWhereUniqueInput
    update: XOR<course_categoryUpdateWithoutCourseInput, course_categoryUncheckedUpdateWithoutCourseInput>
    create: XOR<course_categoryCreateWithoutCourseInput, course_categoryUncheckedCreateWithoutCourseInput>
  }

  export type course_categoryUpdateWithWhereUniqueWithoutCourseInput = {
    where: course_categoryWhereUniqueInput
    data: XOR<course_categoryUpdateWithoutCourseInput, course_categoryUncheckedUpdateWithoutCourseInput>
  }

  export type course_categoryUpdateManyWithWhereWithoutCourseInput = {
    where: course_categoryScalarWhereInput
    data: XOR<course_categoryUpdateManyMutationInput, course_categoryUncheckedUpdateManyWithoutCourseInput>
  }

  export type course_categoryScalarWhereInput = {
    AND?: course_categoryScalarWhereInput | course_categoryScalarWhereInput[]
    OR?: course_categoryScalarWhereInput[]
    NOT?: course_categoryScalarWhereInput | course_categoryScalarWhereInput[]
    id?: StringFilter<"course_category"> | string
    course_id?: StringFilter<"course_category"> | string
    category_id?: StringFilter<"course_category"> | string
  }

  export type course_commentUpsertWithWhereUniqueWithoutCourseInput = {
    where: course_commentWhereUniqueInput
    update: XOR<course_commentUpdateWithoutCourseInput, course_commentUncheckedUpdateWithoutCourseInput>
    create: XOR<course_commentCreateWithoutCourseInput, course_commentUncheckedCreateWithoutCourseInput>
  }

  export type course_commentUpdateWithWhereUniqueWithoutCourseInput = {
    where: course_commentWhereUniqueInput
    data: XOR<course_commentUpdateWithoutCourseInput, course_commentUncheckedUpdateWithoutCourseInput>
  }

  export type course_commentUpdateManyWithWhereWithoutCourseInput = {
    where: course_commentScalarWhereInput
    data: XOR<course_commentUpdateManyMutationInput, course_commentUncheckedUpdateManyWithoutCourseInput>
  }

  export type userCreateWithoutCourseRatesInput = {
    id?: string
    name: string
    email: string
    password: string
    phone_number: string
    national_code?: string | null
    location?: string | null
    userRoles?: user_roleCreateNestedManyWithoutUserInput
    loginTransactions?: login_transactionCreateNestedManyWithoutUserInput
    courses?: courseCreateNestedManyWithoutTeacherInput
    courseFavorites?: course_favoriteCreateNestedManyWithoutUserInput
    courseComments?: course_commentCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutCourseRatesInput = {
    id?: string
    name: string
    email: string
    password: string
    phone_number: string
    national_code?: string | null
    location?: string | null
    userRoles?: user_roleUncheckedCreateNestedManyWithoutUserInput
    loginTransactions?: login_transactionUncheckedCreateNestedManyWithoutUserInput
    courses?: courseUncheckedCreateNestedManyWithoutTeacherInput
    courseFavorites?: course_favoriteUncheckedCreateNestedManyWithoutUserInput
    courseComments?: course_commentUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutCourseRatesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCourseRatesInput, userUncheckedCreateWithoutCourseRatesInput>
  }

  export type courseCreateWithoutCourseRatesInput = {
    id?: string
    title: string
    description: string
    mini_description: string
    isActive?: boolean
    picture: string
    price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    google_title: string
    google_description: string
    created_at?: Date | string
    type: course_typeCreateNestedOneWithoutCoursesInput
    teacher: userCreateNestedOneWithoutCoursesInput
    courseFavorites?: course_favoriteCreateNestedManyWithoutCourseInput
    courseSessions?: course_sessionCreateNestedManyWithoutCourseInput
    courseCategories?: course_categoryCreateNestedManyWithoutCourseInput
    courseComments?: course_commentCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutCourseRatesInput = {
    id?: string
    title: string
    description: string
    mini_description: string
    isActive?: boolean
    picture: string
    price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    google_title: string
    google_description: string
    created_by: string
    type_id: string
    created_at?: Date | string
    courseFavorites?: course_favoriteUncheckedCreateNestedManyWithoutCourseInput
    courseSessions?: course_sessionUncheckedCreateNestedManyWithoutCourseInput
    courseCategories?: course_categoryUncheckedCreateNestedManyWithoutCourseInput
    courseComments?: course_commentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutCourseRatesInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutCourseRatesInput, courseUncheckedCreateWithoutCourseRatesInput>
  }

  export type userUpsertWithoutCourseRatesInput = {
    update: XOR<userUpdateWithoutCourseRatesInput, userUncheckedUpdateWithoutCourseRatesInput>
    create: XOR<userCreateWithoutCourseRatesInput, userUncheckedCreateWithoutCourseRatesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutCourseRatesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutCourseRatesInput, userUncheckedUpdateWithoutCourseRatesInput>
  }

  export type userUpdateWithoutCourseRatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    national_code?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    userRoles?: user_roleUpdateManyWithoutUserNestedInput
    loginTransactions?: login_transactionUpdateManyWithoutUserNestedInput
    courses?: courseUpdateManyWithoutTeacherNestedInput
    courseFavorites?: course_favoriteUpdateManyWithoutUserNestedInput
    courseComments?: course_commentUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutCourseRatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    national_code?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    userRoles?: user_roleUncheckedUpdateManyWithoutUserNestedInput
    loginTransactions?: login_transactionUncheckedUpdateManyWithoutUserNestedInput
    courses?: courseUncheckedUpdateManyWithoutTeacherNestedInput
    courseFavorites?: course_favoriteUncheckedUpdateManyWithoutUserNestedInput
    courseComments?: course_commentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type courseUpsertWithoutCourseRatesInput = {
    update: XOR<courseUpdateWithoutCourseRatesInput, courseUncheckedUpdateWithoutCourseRatesInput>
    create: XOR<courseCreateWithoutCourseRatesInput, courseUncheckedCreateWithoutCourseRatesInput>
    where?: courseWhereInput
  }

  export type courseUpdateToOneWithWhereWithoutCourseRatesInput = {
    where?: courseWhereInput
    data: XOR<courseUpdateWithoutCourseRatesInput, courseUncheckedUpdateWithoutCourseRatesInput>
  }

  export type courseUpdateWithoutCourseRatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mini_description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    google_title?: StringFieldUpdateOperationsInput | string
    google_description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: course_typeUpdateOneRequiredWithoutCoursesNestedInput
    teacher?: userUpdateOneRequiredWithoutCoursesNestedInput
    courseFavorites?: course_favoriteUpdateManyWithoutCourseNestedInput
    courseSessions?: course_sessionUpdateManyWithoutCourseNestedInput
    courseCategories?: course_categoryUpdateManyWithoutCourseNestedInput
    courseComments?: course_commentUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutCourseRatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mini_description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    google_title?: StringFieldUpdateOperationsInput | string
    google_description?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courseFavorites?: course_favoriteUncheckedUpdateManyWithoutCourseNestedInput
    courseSessions?: course_sessionUncheckedUpdateManyWithoutCourseNestedInput
    courseCategories?: course_categoryUncheckedUpdateManyWithoutCourseNestedInput
    courseComments?: course_commentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type userCreateWithoutCourseFavoritesInput = {
    id?: string
    name: string
    email: string
    password: string
    phone_number: string
    national_code?: string | null
    location?: string | null
    userRoles?: user_roleCreateNestedManyWithoutUserInput
    loginTransactions?: login_transactionCreateNestedManyWithoutUserInput
    courses?: courseCreateNestedManyWithoutTeacherInput
    courseRates?: course_rateCreateNestedManyWithoutUserInput
    courseComments?: course_commentCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutCourseFavoritesInput = {
    id?: string
    name: string
    email: string
    password: string
    phone_number: string
    national_code?: string | null
    location?: string | null
    userRoles?: user_roleUncheckedCreateNestedManyWithoutUserInput
    loginTransactions?: login_transactionUncheckedCreateNestedManyWithoutUserInput
    courses?: courseUncheckedCreateNestedManyWithoutTeacherInput
    courseRates?: course_rateUncheckedCreateNestedManyWithoutUserInput
    courseComments?: course_commentUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutCourseFavoritesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCourseFavoritesInput, userUncheckedCreateWithoutCourseFavoritesInput>
  }

  export type courseCreateWithoutCourseFavoritesInput = {
    id?: string
    title: string
    description: string
    mini_description: string
    isActive?: boolean
    picture: string
    price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    google_title: string
    google_description: string
    created_at?: Date | string
    type: course_typeCreateNestedOneWithoutCoursesInput
    teacher: userCreateNestedOneWithoutCoursesInput
    courseRates?: course_rateCreateNestedManyWithoutCourseInput
    courseSessions?: course_sessionCreateNestedManyWithoutCourseInput
    courseCategories?: course_categoryCreateNestedManyWithoutCourseInput
    courseComments?: course_commentCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutCourseFavoritesInput = {
    id?: string
    title: string
    description: string
    mini_description: string
    isActive?: boolean
    picture: string
    price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    google_title: string
    google_description: string
    created_by: string
    type_id: string
    created_at?: Date | string
    courseRates?: course_rateUncheckedCreateNestedManyWithoutCourseInput
    courseSessions?: course_sessionUncheckedCreateNestedManyWithoutCourseInput
    courseCategories?: course_categoryUncheckedCreateNestedManyWithoutCourseInput
    courseComments?: course_commentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutCourseFavoritesInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutCourseFavoritesInput, courseUncheckedCreateWithoutCourseFavoritesInput>
  }

  export type userUpsertWithoutCourseFavoritesInput = {
    update: XOR<userUpdateWithoutCourseFavoritesInput, userUncheckedUpdateWithoutCourseFavoritesInput>
    create: XOR<userCreateWithoutCourseFavoritesInput, userUncheckedCreateWithoutCourseFavoritesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutCourseFavoritesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutCourseFavoritesInput, userUncheckedUpdateWithoutCourseFavoritesInput>
  }

  export type userUpdateWithoutCourseFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    national_code?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    userRoles?: user_roleUpdateManyWithoutUserNestedInput
    loginTransactions?: login_transactionUpdateManyWithoutUserNestedInput
    courses?: courseUpdateManyWithoutTeacherNestedInput
    courseRates?: course_rateUpdateManyWithoutUserNestedInput
    courseComments?: course_commentUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutCourseFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    national_code?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    userRoles?: user_roleUncheckedUpdateManyWithoutUserNestedInput
    loginTransactions?: login_transactionUncheckedUpdateManyWithoutUserNestedInput
    courses?: courseUncheckedUpdateManyWithoutTeacherNestedInput
    courseRates?: course_rateUncheckedUpdateManyWithoutUserNestedInput
    courseComments?: course_commentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type courseUpsertWithoutCourseFavoritesInput = {
    update: XOR<courseUpdateWithoutCourseFavoritesInput, courseUncheckedUpdateWithoutCourseFavoritesInput>
    create: XOR<courseCreateWithoutCourseFavoritesInput, courseUncheckedCreateWithoutCourseFavoritesInput>
    where?: courseWhereInput
  }

  export type courseUpdateToOneWithWhereWithoutCourseFavoritesInput = {
    where?: courseWhereInput
    data: XOR<courseUpdateWithoutCourseFavoritesInput, courseUncheckedUpdateWithoutCourseFavoritesInput>
  }

  export type courseUpdateWithoutCourseFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mini_description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    google_title?: StringFieldUpdateOperationsInput | string
    google_description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: course_typeUpdateOneRequiredWithoutCoursesNestedInput
    teacher?: userUpdateOneRequiredWithoutCoursesNestedInput
    courseRates?: course_rateUpdateManyWithoutCourseNestedInput
    courseSessions?: course_sessionUpdateManyWithoutCourseNestedInput
    courseCategories?: course_categoryUpdateManyWithoutCourseNestedInput
    courseComments?: course_commentUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutCourseFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mini_description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    google_title?: StringFieldUpdateOperationsInput | string
    google_description?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courseRates?: course_rateUncheckedUpdateManyWithoutCourseNestedInput
    courseSessions?: course_sessionUncheckedUpdateManyWithoutCourseNestedInput
    courseCategories?: course_categoryUncheckedUpdateManyWithoutCourseNestedInput
    courseComments?: course_commentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type course_commentCreateWithoutCourseCommentsInput = {
    id?: string
    title: string
    text: string
    isActive?: boolean
    parent?: course_commentCreateNestedOneWithoutCourseCommentsInput
    user: userCreateNestedOneWithoutCourseCommentsInput
    course: courseCreateNestedOneWithoutCourseCommentsInput
  }

  export type course_commentUncheckedCreateWithoutCourseCommentsInput = {
    id?: string
    title: string
    text: string
    user_id: string
    isActive?: boolean
    parent_id?: string | null
    course_id: string
  }

  export type course_commentCreateOrConnectWithoutCourseCommentsInput = {
    where: course_commentWhereUniqueInput
    create: XOR<course_commentCreateWithoutCourseCommentsInput, course_commentUncheckedCreateWithoutCourseCommentsInput>
  }

  export type userCreateWithoutCourseCommentsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone_number: string
    national_code?: string | null
    location?: string | null
    userRoles?: user_roleCreateNestedManyWithoutUserInput
    loginTransactions?: login_transactionCreateNestedManyWithoutUserInput
    courses?: courseCreateNestedManyWithoutTeacherInput
    courseRates?: course_rateCreateNestedManyWithoutUserInput
    courseFavorites?: course_favoriteCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutCourseCommentsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone_number: string
    national_code?: string | null
    location?: string | null
    userRoles?: user_roleUncheckedCreateNestedManyWithoutUserInput
    loginTransactions?: login_transactionUncheckedCreateNestedManyWithoutUserInput
    courses?: courseUncheckedCreateNestedManyWithoutTeacherInput
    courseRates?: course_rateUncheckedCreateNestedManyWithoutUserInput
    courseFavorites?: course_favoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutCourseCommentsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCourseCommentsInput, userUncheckedCreateWithoutCourseCommentsInput>
  }

  export type course_commentCreateWithoutParentInput = {
    id?: string
    title: string
    text: string
    isActive?: boolean
    user: userCreateNestedOneWithoutCourseCommentsInput
    courseComments?: course_commentCreateNestedManyWithoutParentInput
    course: courseCreateNestedOneWithoutCourseCommentsInput
  }

  export type course_commentUncheckedCreateWithoutParentInput = {
    id?: string
    title: string
    text: string
    user_id: string
    isActive?: boolean
    course_id: string
    courseComments?: course_commentUncheckedCreateNestedManyWithoutParentInput
  }

  export type course_commentCreateOrConnectWithoutParentInput = {
    where: course_commentWhereUniqueInput
    create: XOR<course_commentCreateWithoutParentInput, course_commentUncheckedCreateWithoutParentInput>
  }

  export type course_commentCreateManyParentInputEnvelope = {
    data: course_commentCreateManyParentInput | course_commentCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type courseCreateWithoutCourseCommentsInput = {
    id?: string
    title: string
    description: string
    mini_description: string
    isActive?: boolean
    picture: string
    price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    google_title: string
    google_description: string
    created_at?: Date | string
    type: course_typeCreateNestedOneWithoutCoursesInput
    teacher: userCreateNestedOneWithoutCoursesInput
    courseRates?: course_rateCreateNestedManyWithoutCourseInput
    courseFavorites?: course_favoriteCreateNestedManyWithoutCourseInput
    courseSessions?: course_sessionCreateNestedManyWithoutCourseInput
    courseCategories?: course_categoryCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutCourseCommentsInput = {
    id?: string
    title: string
    description: string
    mini_description: string
    isActive?: boolean
    picture: string
    price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    google_title: string
    google_description: string
    created_by: string
    type_id: string
    created_at?: Date | string
    courseRates?: course_rateUncheckedCreateNestedManyWithoutCourseInput
    courseFavorites?: course_favoriteUncheckedCreateNestedManyWithoutCourseInput
    courseSessions?: course_sessionUncheckedCreateNestedManyWithoutCourseInput
    courseCategories?: course_categoryUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutCourseCommentsInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutCourseCommentsInput, courseUncheckedCreateWithoutCourseCommentsInput>
  }

  export type course_commentUpsertWithoutCourseCommentsInput = {
    update: XOR<course_commentUpdateWithoutCourseCommentsInput, course_commentUncheckedUpdateWithoutCourseCommentsInput>
    create: XOR<course_commentCreateWithoutCourseCommentsInput, course_commentUncheckedCreateWithoutCourseCommentsInput>
    where?: course_commentWhereInput
  }

  export type course_commentUpdateToOneWithWhereWithoutCourseCommentsInput = {
    where?: course_commentWhereInput
    data: XOR<course_commentUpdateWithoutCourseCommentsInput, course_commentUncheckedUpdateWithoutCourseCommentsInput>
  }

  export type course_commentUpdateWithoutCourseCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parent?: course_commentUpdateOneWithoutCourseCommentsNestedInput
    user?: userUpdateOneRequiredWithoutCourseCommentsNestedInput
    course?: courseUpdateOneRequiredWithoutCourseCommentsNestedInput
  }

  export type course_commentUncheckedUpdateWithoutCourseCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    course_id?: StringFieldUpdateOperationsInput | string
  }

  export type userUpsertWithoutCourseCommentsInput = {
    update: XOR<userUpdateWithoutCourseCommentsInput, userUncheckedUpdateWithoutCourseCommentsInput>
    create: XOR<userCreateWithoutCourseCommentsInput, userUncheckedCreateWithoutCourseCommentsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutCourseCommentsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutCourseCommentsInput, userUncheckedUpdateWithoutCourseCommentsInput>
  }

  export type userUpdateWithoutCourseCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    national_code?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    userRoles?: user_roleUpdateManyWithoutUserNestedInput
    loginTransactions?: login_transactionUpdateManyWithoutUserNestedInput
    courses?: courseUpdateManyWithoutTeacherNestedInput
    courseRates?: course_rateUpdateManyWithoutUserNestedInput
    courseFavorites?: course_favoriteUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutCourseCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    national_code?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    userRoles?: user_roleUncheckedUpdateManyWithoutUserNestedInput
    loginTransactions?: login_transactionUncheckedUpdateManyWithoutUserNestedInput
    courses?: courseUncheckedUpdateManyWithoutTeacherNestedInput
    courseRates?: course_rateUncheckedUpdateManyWithoutUserNestedInput
    courseFavorites?: course_favoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type course_commentUpsertWithWhereUniqueWithoutParentInput = {
    where: course_commentWhereUniqueInput
    update: XOR<course_commentUpdateWithoutParentInput, course_commentUncheckedUpdateWithoutParentInput>
    create: XOR<course_commentCreateWithoutParentInput, course_commentUncheckedCreateWithoutParentInput>
  }

  export type course_commentUpdateWithWhereUniqueWithoutParentInput = {
    where: course_commentWhereUniqueInput
    data: XOR<course_commentUpdateWithoutParentInput, course_commentUncheckedUpdateWithoutParentInput>
  }

  export type course_commentUpdateManyWithWhereWithoutParentInput = {
    where: course_commentScalarWhereInput
    data: XOR<course_commentUpdateManyMutationInput, course_commentUncheckedUpdateManyWithoutParentInput>
  }

  export type courseUpsertWithoutCourseCommentsInput = {
    update: XOR<courseUpdateWithoutCourseCommentsInput, courseUncheckedUpdateWithoutCourseCommentsInput>
    create: XOR<courseCreateWithoutCourseCommentsInput, courseUncheckedCreateWithoutCourseCommentsInput>
    where?: courseWhereInput
  }

  export type courseUpdateToOneWithWhereWithoutCourseCommentsInput = {
    where?: courseWhereInput
    data: XOR<courseUpdateWithoutCourseCommentsInput, courseUncheckedUpdateWithoutCourseCommentsInput>
  }

  export type courseUpdateWithoutCourseCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mini_description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    google_title?: StringFieldUpdateOperationsInput | string
    google_description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: course_typeUpdateOneRequiredWithoutCoursesNestedInput
    teacher?: userUpdateOneRequiredWithoutCoursesNestedInput
    courseRates?: course_rateUpdateManyWithoutCourseNestedInput
    courseFavorites?: course_favoriteUpdateManyWithoutCourseNestedInput
    courseSessions?: course_sessionUpdateManyWithoutCourseNestedInput
    courseCategories?: course_categoryUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutCourseCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mini_description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    google_title?: StringFieldUpdateOperationsInput | string
    google_description?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courseRates?: course_rateUncheckedUpdateManyWithoutCourseNestedInput
    courseFavorites?: course_favoriteUncheckedUpdateManyWithoutCourseNestedInput
    courseSessions?: course_sessionUncheckedUpdateManyWithoutCourseNestedInput
    courseCategories?: course_categoryUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type courseCreateWithoutCourseSessionsInput = {
    id?: string
    title: string
    description: string
    mini_description: string
    isActive?: boolean
    picture: string
    price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    google_title: string
    google_description: string
    created_at?: Date | string
    type: course_typeCreateNestedOneWithoutCoursesInput
    teacher: userCreateNestedOneWithoutCoursesInput
    courseRates?: course_rateCreateNestedManyWithoutCourseInput
    courseFavorites?: course_favoriteCreateNestedManyWithoutCourseInput
    courseCategories?: course_categoryCreateNestedManyWithoutCourseInput
    courseComments?: course_commentCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutCourseSessionsInput = {
    id?: string
    title: string
    description: string
    mini_description: string
    isActive?: boolean
    picture: string
    price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    google_title: string
    google_description: string
    created_by: string
    type_id: string
    created_at?: Date | string
    courseRates?: course_rateUncheckedCreateNestedManyWithoutCourseInput
    courseFavorites?: course_favoriteUncheckedCreateNestedManyWithoutCourseInput
    courseCategories?: course_categoryUncheckedCreateNestedManyWithoutCourseInput
    courseComments?: course_commentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutCourseSessionsInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutCourseSessionsInput, courseUncheckedCreateWithoutCourseSessionsInput>
  }

  export type courseUpsertWithoutCourseSessionsInput = {
    update: XOR<courseUpdateWithoutCourseSessionsInput, courseUncheckedUpdateWithoutCourseSessionsInput>
    create: XOR<courseCreateWithoutCourseSessionsInput, courseUncheckedCreateWithoutCourseSessionsInput>
    where?: courseWhereInput
  }

  export type courseUpdateToOneWithWhereWithoutCourseSessionsInput = {
    where?: courseWhereInput
    data: XOR<courseUpdateWithoutCourseSessionsInput, courseUncheckedUpdateWithoutCourseSessionsInput>
  }

  export type courseUpdateWithoutCourseSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mini_description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    google_title?: StringFieldUpdateOperationsInput | string
    google_description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: course_typeUpdateOneRequiredWithoutCoursesNestedInput
    teacher?: userUpdateOneRequiredWithoutCoursesNestedInput
    courseRates?: course_rateUpdateManyWithoutCourseNestedInput
    courseFavorites?: course_favoriteUpdateManyWithoutCourseNestedInput
    courseCategories?: course_categoryUpdateManyWithoutCourseNestedInput
    courseComments?: course_commentUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutCourseSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mini_description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    google_title?: StringFieldUpdateOperationsInput | string
    google_description?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courseRates?: course_rateUncheckedUpdateManyWithoutCourseNestedInput
    courseFavorites?: course_favoriteUncheckedUpdateManyWithoutCourseNestedInput
    courseCategories?: course_categoryUncheckedUpdateManyWithoutCourseNestedInput
    courseComments?: course_commentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type courseCreateWithoutTypeInput = {
    id?: string
    title: string
    description: string
    mini_description: string
    isActive?: boolean
    picture: string
    price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    google_title: string
    google_description: string
    created_at?: Date | string
    teacher: userCreateNestedOneWithoutCoursesInput
    courseRates?: course_rateCreateNestedManyWithoutCourseInput
    courseFavorites?: course_favoriteCreateNestedManyWithoutCourseInput
    courseSessions?: course_sessionCreateNestedManyWithoutCourseInput
    courseCategories?: course_categoryCreateNestedManyWithoutCourseInput
    courseComments?: course_commentCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutTypeInput = {
    id?: string
    title: string
    description: string
    mini_description: string
    isActive?: boolean
    picture: string
    price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    google_title: string
    google_description: string
    created_by: string
    created_at?: Date | string
    courseRates?: course_rateUncheckedCreateNestedManyWithoutCourseInput
    courseFavorites?: course_favoriteUncheckedCreateNestedManyWithoutCourseInput
    courseSessions?: course_sessionUncheckedCreateNestedManyWithoutCourseInput
    courseCategories?: course_categoryUncheckedCreateNestedManyWithoutCourseInput
    courseComments?: course_commentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutTypeInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutTypeInput, courseUncheckedCreateWithoutTypeInput>
  }

  export type courseCreateManyTypeInputEnvelope = {
    data: courseCreateManyTypeInput | courseCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type courseUpsertWithWhereUniqueWithoutTypeInput = {
    where: courseWhereUniqueInput
    update: XOR<courseUpdateWithoutTypeInput, courseUncheckedUpdateWithoutTypeInput>
    create: XOR<courseCreateWithoutTypeInput, courseUncheckedCreateWithoutTypeInput>
  }

  export type courseUpdateWithWhereUniqueWithoutTypeInput = {
    where: courseWhereUniqueInput
    data: XOR<courseUpdateWithoutTypeInput, courseUncheckedUpdateWithoutTypeInput>
  }

  export type courseUpdateManyWithWhereWithoutTypeInput = {
    where: courseScalarWhereInput
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyWithoutTypeInput>
  }

  export type course_categoryCreateWithoutCategoryInput = {
    id?: string
    course: courseCreateNestedOneWithoutCourseCategoriesInput
  }

  export type course_categoryUncheckedCreateWithoutCategoryInput = {
    id?: string
    course_id: string
  }

  export type course_categoryCreateOrConnectWithoutCategoryInput = {
    where: course_categoryWhereUniqueInput
    create: XOR<course_categoryCreateWithoutCategoryInput, course_categoryUncheckedCreateWithoutCategoryInput>
  }

  export type course_categoryCreateManyCategoryInputEnvelope = {
    data: course_categoryCreateManyCategoryInput | course_categoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type course_categoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: course_categoryWhereUniqueInput
    update: XOR<course_categoryUpdateWithoutCategoryInput, course_categoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<course_categoryCreateWithoutCategoryInput, course_categoryUncheckedCreateWithoutCategoryInput>
  }

  export type course_categoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: course_categoryWhereUniqueInput
    data: XOR<course_categoryUpdateWithoutCategoryInput, course_categoryUncheckedUpdateWithoutCategoryInput>
  }

  export type course_categoryUpdateManyWithWhereWithoutCategoryInput = {
    where: course_categoryScalarWhereInput
    data: XOR<course_categoryUpdateManyMutationInput, course_categoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type categoryCreateWithoutCourseCategoriesInput = {
    id?: string
    title: string
    file?: string | null
  }

  export type categoryUncheckedCreateWithoutCourseCategoriesInput = {
    id?: string
    title: string
    file?: string | null
  }

  export type categoryCreateOrConnectWithoutCourseCategoriesInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutCourseCategoriesInput, categoryUncheckedCreateWithoutCourseCategoriesInput>
  }

  export type courseCreateWithoutCourseCategoriesInput = {
    id?: string
    title: string
    description: string
    mini_description: string
    isActive?: boolean
    picture: string
    price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    google_title: string
    google_description: string
    created_at?: Date | string
    type: course_typeCreateNestedOneWithoutCoursesInput
    teacher: userCreateNestedOneWithoutCoursesInput
    courseRates?: course_rateCreateNestedManyWithoutCourseInput
    courseFavorites?: course_favoriteCreateNestedManyWithoutCourseInput
    courseSessions?: course_sessionCreateNestedManyWithoutCourseInput
    courseComments?: course_commentCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutCourseCategoriesInput = {
    id?: string
    title: string
    description: string
    mini_description: string
    isActive?: boolean
    picture: string
    price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    google_title: string
    google_description: string
    created_by: string
    type_id: string
    created_at?: Date | string
    courseRates?: course_rateUncheckedCreateNestedManyWithoutCourseInput
    courseFavorites?: course_favoriteUncheckedCreateNestedManyWithoutCourseInput
    courseSessions?: course_sessionUncheckedCreateNestedManyWithoutCourseInput
    courseComments?: course_commentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutCourseCategoriesInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutCourseCategoriesInput, courseUncheckedCreateWithoutCourseCategoriesInput>
  }

  export type categoryUpsertWithoutCourseCategoriesInput = {
    update: XOR<categoryUpdateWithoutCourseCategoriesInput, categoryUncheckedUpdateWithoutCourseCategoriesInput>
    create: XOR<categoryCreateWithoutCourseCategoriesInput, categoryUncheckedCreateWithoutCourseCategoriesInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutCourseCategoriesInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutCourseCategoriesInput, categoryUncheckedUpdateWithoutCourseCategoriesInput>
  }

  export type categoryUpdateWithoutCourseCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoryUncheckedUpdateWithoutCourseCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type courseUpsertWithoutCourseCategoriesInput = {
    update: XOR<courseUpdateWithoutCourseCategoriesInput, courseUncheckedUpdateWithoutCourseCategoriesInput>
    create: XOR<courseCreateWithoutCourseCategoriesInput, courseUncheckedCreateWithoutCourseCategoriesInput>
    where?: courseWhereInput
  }

  export type courseUpdateToOneWithWhereWithoutCourseCategoriesInput = {
    where?: courseWhereInput
    data: XOR<courseUpdateWithoutCourseCategoriesInput, courseUncheckedUpdateWithoutCourseCategoriesInput>
  }

  export type courseUpdateWithoutCourseCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mini_description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    google_title?: StringFieldUpdateOperationsInput | string
    google_description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: course_typeUpdateOneRequiredWithoutCoursesNestedInput
    teacher?: userUpdateOneRequiredWithoutCoursesNestedInput
    courseRates?: course_rateUpdateManyWithoutCourseNestedInput
    courseFavorites?: course_favoriteUpdateManyWithoutCourseNestedInput
    courseSessions?: course_sessionUpdateManyWithoutCourseNestedInput
    courseComments?: course_commentUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutCourseCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mini_description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    google_title?: StringFieldUpdateOperationsInput | string
    google_description?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courseRates?: course_rateUncheckedUpdateManyWithoutCourseNestedInput
    courseFavorites?: course_favoriteUncheckedUpdateManyWithoutCourseNestedInput
    courseSessions?: course_sessionUncheckedUpdateManyWithoutCourseNestedInput
    courseComments?: course_commentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type user_roleCreateManyUserInput = {
    id?: string
    role_id: string
    isActive?: boolean
    created_at?: Date | string
  }

  export type login_transactionCreateManyUserInput = {
    id?: string
    ip: string
    login_date?: Date | string
  }

  export type courseCreateManyTeacherInput = {
    id?: string
    title: string
    description: string
    mini_description: string
    isActive?: boolean
    picture: string
    price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    google_title: string
    google_description: string
    type_id: string
    created_at?: Date | string
  }

  export type course_rateCreateManyUserInput = {
    id?: string
    rate: number
    course_id: string
  }

  export type course_favoriteCreateManyUserInput = {
    id?: string
    course_id: string
  }

  export type course_commentCreateManyUserInput = {
    id?: string
    title: string
    text: string
    isActive?: boolean
    parent_id?: string | null
    course_id: string
  }

  export type user_roleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: roleUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type user_roleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_roleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type login_transactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    login_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type login_transactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    login_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type login_transactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    login_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type courseUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mini_description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    google_title?: StringFieldUpdateOperationsInput | string
    google_description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: course_typeUpdateOneRequiredWithoutCoursesNestedInput
    courseRates?: course_rateUpdateManyWithoutCourseNestedInput
    courseFavorites?: course_favoriteUpdateManyWithoutCourseNestedInput
    courseSessions?: course_sessionUpdateManyWithoutCourseNestedInput
    courseCategories?: course_categoryUpdateManyWithoutCourseNestedInput
    courseComments?: course_commentUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mini_description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    google_title?: StringFieldUpdateOperationsInput | string
    google_description?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courseRates?: course_rateUncheckedUpdateManyWithoutCourseNestedInput
    courseFavorites?: course_favoriteUncheckedUpdateManyWithoutCourseNestedInput
    courseSessions?: course_sessionUncheckedUpdateManyWithoutCourseNestedInput
    courseCategories?: course_categoryUncheckedUpdateManyWithoutCourseNestedInput
    courseComments?: course_commentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mini_description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    google_title?: StringFieldUpdateOperationsInput | string
    google_description?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type course_rateUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    course?: courseUpdateOneRequiredWithoutCourseRatesNestedInput
  }

  export type course_rateUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    course_id?: StringFieldUpdateOperationsInput | string
  }

  export type course_rateUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    course_id?: StringFieldUpdateOperationsInput | string
  }

  export type course_favoriteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    course?: courseUpdateOneRequiredWithoutCourseFavoritesNestedInput
  }

  export type course_favoriteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    course_id?: StringFieldUpdateOperationsInput | string
  }

  export type course_favoriteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    course_id?: StringFieldUpdateOperationsInput | string
  }

  export type course_commentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parent?: course_commentUpdateOneWithoutCourseCommentsNestedInput
    courseComments?: course_commentUpdateManyWithoutParentNestedInput
    course?: courseUpdateOneRequiredWithoutCourseCommentsNestedInput
  }

  export type course_commentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    course_id?: StringFieldUpdateOperationsInput | string
    courseComments?: course_commentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type course_commentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    course_id?: StringFieldUpdateOperationsInput | string
  }

  export type user_roleCreateManyRoleInput = {
    id?: string
    user_id: string
    isActive?: boolean
    created_at?: Date | string
  }

  export type user_roleUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type user_roleUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_roleUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type course_rateCreateManyCourseInput = {
    id?: string
    rate: number
    user_id: string
  }

  export type course_favoriteCreateManyCourseInput = {
    id?: string
    user_id: string
  }

  export type course_sessionCreateManyCourseInput = {
    id?: string
    title: string
    text: string
    file?: string | null
  }

  export type course_categoryCreateManyCourseInput = {
    id?: string
    category_id: string
  }

  export type course_commentCreateManyCourseInput = {
    id?: string
    title: string
    text: string
    user_id: string
    isActive?: boolean
    parent_id?: string | null
  }

  export type course_rateUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    user?: userUpdateOneRequiredWithoutCourseRatesNestedInput
  }

  export type course_rateUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type course_rateUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type course_favoriteUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutCourseFavoritesNestedInput
  }

  export type course_favoriteUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type course_favoriteUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type course_sessionUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type course_sessionUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type course_sessionUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type course_categoryUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: categoryUpdateOneRequiredWithoutCourseCategoriesNestedInput
  }

  export type course_categoryUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
  }

  export type course_categoryUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
  }

  export type course_commentUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parent?: course_commentUpdateOneWithoutCourseCommentsNestedInput
    user?: userUpdateOneRequiredWithoutCourseCommentsNestedInput
    courseComments?: course_commentUpdateManyWithoutParentNestedInput
  }

  export type course_commentUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    courseComments?: course_commentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type course_commentUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type course_commentCreateManyParentInput = {
    id?: string
    title: string
    text: string
    user_id: string
    isActive?: boolean
    course_id: string
  }

  export type course_commentUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: userUpdateOneRequiredWithoutCourseCommentsNestedInput
    courseComments?: course_commentUpdateManyWithoutParentNestedInput
    course?: courseUpdateOneRequiredWithoutCourseCommentsNestedInput
  }

  export type course_commentUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    course_id?: StringFieldUpdateOperationsInput | string
    courseComments?: course_commentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type course_commentUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    course_id?: StringFieldUpdateOperationsInput | string
  }

  export type courseCreateManyTypeInput = {
    id?: string
    title: string
    description: string
    mini_description: string
    isActive?: boolean
    picture: string
    price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    google_title: string
    google_description: string
    created_by: string
    created_at?: Date | string
  }

  export type courseUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mini_description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    google_title?: StringFieldUpdateOperationsInput | string
    google_description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: userUpdateOneRequiredWithoutCoursesNestedInput
    courseRates?: course_rateUpdateManyWithoutCourseNestedInput
    courseFavorites?: course_favoriteUpdateManyWithoutCourseNestedInput
    courseSessions?: course_sessionUpdateManyWithoutCourseNestedInput
    courseCategories?: course_categoryUpdateManyWithoutCourseNestedInput
    courseComments?: course_commentUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mini_description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    google_title?: StringFieldUpdateOperationsInput | string
    google_description?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courseRates?: course_rateUncheckedUpdateManyWithoutCourseNestedInput
    courseFavorites?: course_favoriteUncheckedUpdateManyWithoutCourseNestedInput
    courseSessions?: course_sessionUncheckedUpdateManyWithoutCourseNestedInput
    courseCategories?: course_categoryUncheckedUpdateManyWithoutCourseNestedInput
    courseComments?: course_commentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mini_description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    google_title?: StringFieldUpdateOperationsInput | string
    google_description?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type course_categoryCreateManyCategoryInput = {
    id?: string
    course_id: string
  }

  export type course_categoryUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    course?: courseUpdateOneRequiredWithoutCourseCategoriesNestedInput
  }

  export type course_categoryUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    course_id?: StringFieldUpdateOperationsInput | string
  }

  export type course_categoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    course_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}