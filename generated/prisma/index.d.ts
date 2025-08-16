
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user_verifications
 * 
 */
export type user_verifications = $Result.DefaultSelection<Prisma.$user_verificationsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model projetos
 * 
 */
export type projetos = $Result.DefaultSelection<Prisma.$projetosPayload>
/**
 * Model ongs
 * 
 */
export type ongs = $Result.DefaultSelection<Prisma.$ongsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more User_verifications
 * const user_verifications = await prisma.user_verifications.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more User_verifications
   * const user_verifications = await prisma.user_verifications.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user_verifications`: Exposes CRUD operations for the **user_verifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_verifications
    * const user_verifications = await prisma.user_verifications.findMany()
    * ```
    */
  get user_verifications(): Prisma.user_verificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projetos`: Exposes CRUD operations for the **projetos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projetos
    * const projetos = await prisma.projetos.findMany()
    * ```
    */
  get projetos(): Prisma.projetosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ongs`: Exposes CRUD operations for the **ongs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ongs
    * const ongs = await prisma.ongs.findMany()
    * ```
    */
  get ongs(): Prisma.ongsDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    user_verifications: 'user_verifications',
    users: 'users',
    projetos: 'projetos',
    ongs: 'ongs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user_verifications" | "users" | "projetos" | "ongs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user_verifications: {
        payload: Prisma.$user_verificationsPayload<ExtArgs>
        fields: Prisma.user_verificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_verificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_verificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_verificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_verificationsPayload>
          }
          findFirst: {
            args: Prisma.user_verificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_verificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_verificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_verificationsPayload>
          }
          findMany: {
            args: Prisma.user_verificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_verificationsPayload>[]
          }
          create: {
            args: Prisma.user_verificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_verificationsPayload>
          }
          createMany: {
            args: Prisma.user_verificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_verificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_verificationsPayload>[]
          }
          delete: {
            args: Prisma.user_verificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_verificationsPayload>
          }
          update: {
            args: Prisma.user_verificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_verificationsPayload>
          }
          deleteMany: {
            args: Prisma.user_verificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_verificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_verificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_verificationsPayload>[]
          }
          upsert: {
            args: Prisma.user_verificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_verificationsPayload>
          }
          aggregate: {
            args: Prisma.User_verificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_verifications>
          }
          groupBy: {
            args: Prisma.user_verificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_verificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_verificationsCountArgs<ExtArgs>
            result: $Utils.Optional<User_verificationsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      projetos: {
        payload: Prisma.$projetosPayload<ExtArgs>
        fields: Prisma.projetosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projetosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projetosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projetosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projetosPayload>
          }
          findFirst: {
            args: Prisma.projetosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projetosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projetosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projetosPayload>
          }
          findMany: {
            args: Prisma.projetosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projetosPayload>[]
          }
          create: {
            args: Prisma.projetosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projetosPayload>
          }
          createMany: {
            args: Prisma.projetosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projetosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projetosPayload>[]
          }
          delete: {
            args: Prisma.projetosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projetosPayload>
          }
          update: {
            args: Prisma.projetosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projetosPayload>
          }
          deleteMany: {
            args: Prisma.projetosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projetosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.projetosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projetosPayload>[]
          }
          upsert: {
            args: Prisma.projetosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projetosPayload>
          }
          aggregate: {
            args: Prisma.ProjetosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjetos>
          }
          groupBy: {
            args: Prisma.projetosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjetosGroupByOutputType>[]
          }
          count: {
            args: Prisma.projetosCountArgs<ExtArgs>
            result: $Utils.Optional<ProjetosCountAggregateOutputType> | number
          }
        }
      }
      ongs: {
        payload: Prisma.$ongsPayload<ExtArgs>
        fields: Prisma.ongsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ongsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ongsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongsPayload>
          }
          findFirst: {
            args: Prisma.ongsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ongsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongsPayload>
          }
          findMany: {
            args: Prisma.ongsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongsPayload>[]
          }
          create: {
            args: Prisma.ongsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongsPayload>
          }
          createMany: {
            args: Prisma.ongsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ongsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongsPayload>[]
          }
          delete: {
            args: Prisma.ongsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongsPayload>
          }
          update: {
            args: Prisma.ongsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongsPayload>
          }
          deleteMany: {
            args: Prisma.ongsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ongsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ongsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongsPayload>[]
          }
          upsert: {
            args: Prisma.ongsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongsPayload>
          }
          aggregate: {
            args: Prisma.OngsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOngs>
          }
          groupBy: {
            args: Prisma.ongsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OngsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ongsCountArgs<ExtArgs>
            result: $Utils.Optional<OngsCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user_verifications?: user_verificationsOmit
    users?: usersOmit
    projetos?: projetosOmit
    ongs?: ongsOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    projetos: number
    verifications: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projetos?: boolean | UsersCountOutputTypeCountProjetosArgs
    verifications?: boolean | UsersCountOutputTypeCountVerificationsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProjetosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projetosWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountVerificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_verificationsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user_verifications
   */

  export type AggregateUser_verifications = {
    _count: User_verificationsCountAggregateOutputType | null
    _min: User_verificationsMinAggregateOutputType | null
    _max: User_verificationsMaxAggregateOutputType | null
  }

  export type User_verificationsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    unique_string: Uint8Array | null
    salt: Uint8Array | null
    created_at: Date | null
    expires_at: Date | null
  }

  export type User_verificationsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    unique_string: Uint8Array | null
    salt: Uint8Array | null
    created_at: Date | null
    expires_at: Date | null
  }

  export type User_verificationsCountAggregateOutputType = {
    id: number
    user_id: number
    unique_string: number
    salt: number
    created_at: number
    expires_at: number
    _all: number
  }


  export type User_verificationsMinAggregateInputType = {
    id?: true
    user_id?: true
    unique_string?: true
    salt?: true
    created_at?: true
    expires_at?: true
  }

  export type User_verificationsMaxAggregateInputType = {
    id?: true
    user_id?: true
    unique_string?: true
    salt?: true
    created_at?: true
    expires_at?: true
  }

  export type User_verificationsCountAggregateInputType = {
    id?: true
    user_id?: true
    unique_string?: true
    salt?: true
    created_at?: true
    expires_at?: true
    _all?: true
  }

  export type User_verificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_verifications to aggregate.
     */
    where?: user_verificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_verifications to fetch.
     */
    orderBy?: user_verificationsOrderByWithRelationInput | user_verificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_verificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_verifications
    **/
    _count?: true | User_verificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_verificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_verificationsMaxAggregateInputType
  }

  export type GetUser_verificationsAggregateType<T extends User_verificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_verifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_verifications[P]>
      : GetScalarType<T[P], AggregateUser_verifications[P]>
  }




  export type user_verificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_verificationsWhereInput
    orderBy?: user_verificationsOrderByWithAggregationInput | user_verificationsOrderByWithAggregationInput[]
    by: User_verificationsScalarFieldEnum[] | User_verificationsScalarFieldEnum
    having?: user_verificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_verificationsCountAggregateInputType | true
    _min?: User_verificationsMinAggregateInputType
    _max?: User_verificationsMaxAggregateInputType
  }

  export type User_verificationsGroupByOutputType = {
    id: string
    user_id: string
    unique_string: Uint8Array
    salt: Uint8Array | null
    created_at: Date | null
    expires_at: Date
    _count: User_verificationsCountAggregateOutputType | null
    _min: User_verificationsMinAggregateOutputType | null
    _max: User_verificationsMaxAggregateOutputType | null
  }

  type GetUser_verificationsGroupByPayload<T extends user_verificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_verificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_verificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_verificationsGroupByOutputType[P]>
            : GetScalarType<T[P], User_verificationsGroupByOutputType[P]>
        }
      >
    >


  export type user_verificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    unique_string?: boolean
    salt?: boolean
    created_at?: boolean
    expires_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_verifications"]>

  export type user_verificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    unique_string?: boolean
    salt?: boolean
    created_at?: boolean
    expires_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_verifications"]>

  export type user_verificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    unique_string?: boolean
    salt?: boolean
    created_at?: boolean
    expires_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_verifications"]>

  export type user_verificationsSelectScalar = {
    id?: boolean
    user_id?: boolean
    unique_string?: boolean
    salt?: boolean
    created_at?: boolean
    expires_at?: boolean
  }

  export type user_verificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "unique_string" | "salt" | "created_at" | "expires_at", ExtArgs["result"]["user_verifications"]>
  export type user_verificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_verificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_verificationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_verificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_verifications"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      unique_string: Uint8Array
      salt: Uint8Array | null
      created_at: Date | null
      expires_at: Date
    }, ExtArgs["result"]["user_verifications"]>
    composites: {}
  }

  type user_verificationsGetPayload<S extends boolean | null | undefined | user_verificationsDefaultArgs> = $Result.GetResult<Prisma.$user_verificationsPayload, S>

  type user_verificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_verificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_verificationsCountAggregateInputType | true
    }

  export interface user_verificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_verifications'], meta: { name: 'user_verifications' } }
    /**
     * Find zero or one User_verifications that matches the filter.
     * @param {user_verificationsFindUniqueArgs} args - Arguments to find a User_verifications
     * @example
     * // Get one User_verifications
     * const user_verifications = await prisma.user_verifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_verificationsFindUniqueArgs>(args: SelectSubset<T, user_verificationsFindUniqueArgs<ExtArgs>>): Prisma__user_verificationsClient<$Result.GetResult<Prisma.$user_verificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_verifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_verificationsFindUniqueOrThrowArgs} args - Arguments to find a User_verifications
     * @example
     * // Get one User_verifications
     * const user_verifications = await prisma.user_verifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_verificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, user_verificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_verificationsClient<$Result.GetResult<Prisma.$user_verificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_verificationsFindFirstArgs} args - Arguments to find a User_verifications
     * @example
     * // Get one User_verifications
     * const user_verifications = await prisma.user_verifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_verificationsFindFirstArgs>(args?: SelectSubset<T, user_verificationsFindFirstArgs<ExtArgs>>): Prisma__user_verificationsClient<$Result.GetResult<Prisma.$user_verificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_verifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_verificationsFindFirstOrThrowArgs} args - Arguments to find a User_verifications
     * @example
     * // Get one User_verifications
     * const user_verifications = await prisma.user_verifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_verificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, user_verificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_verificationsClient<$Result.GetResult<Prisma.$user_verificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_verificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_verifications
     * const user_verifications = await prisma.user_verifications.findMany()
     * 
     * // Get first 10 User_verifications
     * const user_verifications = await prisma.user_verifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_verificationsWithIdOnly = await prisma.user_verifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_verificationsFindManyArgs>(args?: SelectSubset<T, user_verificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_verificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_verifications.
     * @param {user_verificationsCreateArgs} args - Arguments to create a User_verifications.
     * @example
     * // Create one User_verifications
     * const User_verifications = await prisma.user_verifications.create({
     *   data: {
     *     // ... data to create a User_verifications
     *   }
     * })
     * 
     */
    create<T extends user_verificationsCreateArgs>(args: SelectSubset<T, user_verificationsCreateArgs<ExtArgs>>): Prisma__user_verificationsClient<$Result.GetResult<Prisma.$user_verificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_verifications.
     * @param {user_verificationsCreateManyArgs} args - Arguments to create many User_verifications.
     * @example
     * // Create many User_verifications
     * const user_verifications = await prisma.user_verifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_verificationsCreateManyArgs>(args?: SelectSubset<T, user_verificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_verifications and returns the data saved in the database.
     * @param {user_verificationsCreateManyAndReturnArgs} args - Arguments to create many User_verifications.
     * @example
     * // Create many User_verifications
     * const user_verifications = await prisma.user_verifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_verifications and only return the `id`
     * const user_verificationsWithIdOnly = await prisma.user_verifications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_verificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, user_verificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_verificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_verifications.
     * @param {user_verificationsDeleteArgs} args - Arguments to delete one User_verifications.
     * @example
     * // Delete one User_verifications
     * const User_verifications = await prisma.user_verifications.delete({
     *   where: {
     *     // ... filter to delete one User_verifications
     *   }
     * })
     * 
     */
    delete<T extends user_verificationsDeleteArgs>(args: SelectSubset<T, user_verificationsDeleteArgs<ExtArgs>>): Prisma__user_verificationsClient<$Result.GetResult<Prisma.$user_verificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_verifications.
     * @param {user_verificationsUpdateArgs} args - Arguments to update one User_verifications.
     * @example
     * // Update one User_verifications
     * const user_verifications = await prisma.user_verifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_verificationsUpdateArgs>(args: SelectSubset<T, user_verificationsUpdateArgs<ExtArgs>>): Prisma__user_verificationsClient<$Result.GetResult<Prisma.$user_verificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_verifications.
     * @param {user_verificationsDeleteManyArgs} args - Arguments to filter User_verifications to delete.
     * @example
     * // Delete a few User_verifications
     * const { count } = await prisma.user_verifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_verificationsDeleteManyArgs>(args?: SelectSubset<T, user_verificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_verificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_verifications
     * const user_verifications = await prisma.user_verifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_verificationsUpdateManyArgs>(args: SelectSubset<T, user_verificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_verifications and returns the data updated in the database.
     * @param {user_verificationsUpdateManyAndReturnArgs} args - Arguments to update many User_verifications.
     * @example
     * // Update many User_verifications
     * const user_verifications = await prisma.user_verifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_verifications and only return the `id`
     * const user_verificationsWithIdOnly = await prisma.user_verifications.updateManyAndReturn({
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
    updateManyAndReturn<T extends user_verificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, user_verificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_verificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_verifications.
     * @param {user_verificationsUpsertArgs} args - Arguments to update or create a User_verifications.
     * @example
     * // Update or create a User_verifications
     * const user_verifications = await prisma.user_verifications.upsert({
     *   create: {
     *     // ... data to create a User_verifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_verifications we want to update
     *   }
     * })
     */
    upsert<T extends user_verificationsUpsertArgs>(args: SelectSubset<T, user_verificationsUpsertArgs<ExtArgs>>): Prisma__user_verificationsClient<$Result.GetResult<Prisma.$user_verificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_verificationsCountArgs} args - Arguments to filter User_verifications to count.
     * @example
     * // Count the number of User_verifications
     * const count = await prisma.user_verifications.count({
     *   where: {
     *     // ... the filter for the User_verifications we want to count
     *   }
     * })
    **/
    count<T extends user_verificationsCountArgs>(
      args?: Subset<T, user_verificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_verificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_verificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_verificationsAggregateArgs>(args: Subset<T, User_verificationsAggregateArgs>): Prisma.PrismaPromise<GetUser_verificationsAggregateType<T>>

    /**
     * Group by User_verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_verificationsGroupByArgs} args - Group by arguments.
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
      T extends user_verificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_verificationsGroupByArgs['orderBy'] }
        : { orderBy?: user_verificationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_verificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_verificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_verifications model
   */
  readonly fields: user_verificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_verifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_verificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_verifications model
   */
  interface user_verificationsFieldRefs {
    readonly id: FieldRef<"user_verifications", 'String'>
    readonly user_id: FieldRef<"user_verifications", 'String'>
    readonly unique_string: FieldRef<"user_verifications", 'Bytes'>
    readonly salt: FieldRef<"user_verifications", 'Bytes'>
    readonly created_at: FieldRef<"user_verifications", 'DateTime'>
    readonly expires_at: FieldRef<"user_verifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_verifications findUnique
   */
  export type user_verificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_verifications
     */
    select?: user_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_verifications
     */
    omit?: user_verificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_verificationsInclude<ExtArgs> | null
    /**
     * Filter, which user_verifications to fetch.
     */
    where: user_verificationsWhereUniqueInput
  }

  /**
   * user_verifications findUniqueOrThrow
   */
  export type user_verificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_verifications
     */
    select?: user_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_verifications
     */
    omit?: user_verificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_verificationsInclude<ExtArgs> | null
    /**
     * Filter, which user_verifications to fetch.
     */
    where: user_verificationsWhereUniqueInput
  }

  /**
   * user_verifications findFirst
   */
  export type user_verificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_verifications
     */
    select?: user_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_verifications
     */
    omit?: user_verificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_verificationsInclude<ExtArgs> | null
    /**
     * Filter, which user_verifications to fetch.
     */
    where?: user_verificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_verifications to fetch.
     */
    orderBy?: user_verificationsOrderByWithRelationInput | user_verificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_verifications.
     */
    cursor?: user_verificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_verifications.
     */
    distinct?: User_verificationsScalarFieldEnum | User_verificationsScalarFieldEnum[]
  }

  /**
   * user_verifications findFirstOrThrow
   */
  export type user_verificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_verifications
     */
    select?: user_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_verifications
     */
    omit?: user_verificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_verificationsInclude<ExtArgs> | null
    /**
     * Filter, which user_verifications to fetch.
     */
    where?: user_verificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_verifications to fetch.
     */
    orderBy?: user_verificationsOrderByWithRelationInput | user_verificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_verifications.
     */
    cursor?: user_verificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_verifications.
     */
    distinct?: User_verificationsScalarFieldEnum | User_verificationsScalarFieldEnum[]
  }

  /**
   * user_verifications findMany
   */
  export type user_verificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_verifications
     */
    select?: user_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_verifications
     */
    omit?: user_verificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_verificationsInclude<ExtArgs> | null
    /**
     * Filter, which user_verifications to fetch.
     */
    where?: user_verificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_verifications to fetch.
     */
    orderBy?: user_verificationsOrderByWithRelationInput | user_verificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_verifications.
     */
    cursor?: user_verificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_verifications.
     */
    skip?: number
    distinct?: User_verificationsScalarFieldEnum | User_verificationsScalarFieldEnum[]
  }

  /**
   * user_verifications create
   */
  export type user_verificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_verifications
     */
    select?: user_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_verifications
     */
    omit?: user_verificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_verificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a user_verifications.
     */
    data: XOR<user_verificationsCreateInput, user_verificationsUncheckedCreateInput>
  }

  /**
   * user_verifications createMany
   */
  export type user_verificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_verifications.
     */
    data: user_verificationsCreateManyInput | user_verificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_verifications createManyAndReturn
   */
  export type user_verificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_verifications
     */
    select?: user_verificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_verifications
     */
    omit?: user_verificationsOmit<ExtArgs> | null
    /**
     * The data used to create many user_verifications.
     */
    data: user_verificationsCreateManyInput | user_verificationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_verificationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_verifications update
   */
  export type user_verificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_verifications
     */
    select?: user_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_verifications
     */
    omit?: user_verificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_verificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a user_verifications.
     */
    data: XOR<user_verificationsUpdateInput, user_verificationsUncheckedUpdateInput>
    /**
     * Choose, which user_verifications to update.
     */
    where: user_verificationsWhereUniqueInput
  }

  /**
   * user_verifications updateMany
   */
  export type user_verificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_verifications.
     */
    data: XOR<user_verificationsUpdateManyMutationInput, user_verificationsUncheckedUpdateManyInput>
    /**
     * Filter which user_verifications to update
     */
    where?: user_verificationsWhereInput
    /**
     * Limit how many user_verifications to update.
     */
    limit?: number
  }

  /**
   * user_verifications updateManyAndReturn
   */
  export type user_verificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_verifications
     */
    select?: user_verificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_verifications
     */
    omit?: user_verificationsOmit<ExtArgs> | null
    /**
     * The data used to update user_verifications.
     */
    data: XOR<user_verificationsUpdateManyMutationInput, user_verificationsUncheckedUpdateManyInput>
    /**
     * Filter which user_verifications to update
     */
    where?: user_verificationsWhereInput
    /**
     * Limit how many user_verifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_verificationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_verifications upsert
   */
  export type user_verificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_verifications
     */
    select?: user_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_verifications
     */
    omit?: user_verificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_verificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the user_verifications to update in case it exists.
     */
    where: user_verificationsWhereUniqueInput
    /**
     * In case the user_verifications found by the `where` argument doesn't exist, create a new user_verifications with this data.
     */
    create: XOR<user_verificationsCreateInput, user_verificationsUncheckedCreateInput>
    /**
     * In case the user_verifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_verificationsUpdateInput, user_verificationsUncheckedUpdateInput>
  }

  /**
   * user_verifications delete
   */
  export type user_verificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_verifications
     */
    select?: user_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_verifications
     */
    omit?: user_verificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_verificationsInclude<ExtArgs> | null
    /**
     * Filter which user_verifications to delete.
     */
    where: user_verificationsWhereUniqueInput
  }

  /**
   * user_verifications deleteMany
   */
  export type user_verificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_verifications to delete
     */
    where?: user_verificationsWhereInput
    /**
     * Limit how many user_verifications to delete.
     */
    limit?: number
  }

  /**
   * user_verifications without action
   */
  export type user_verificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_verifications
     */
    select?: user_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_verifications
     */
    omit?: user_verificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_verificationsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    fullname: string | null
    email: string | null
    institution: string | null
    password: string | null
    salt: string | null
    verified: boolean | null
    description: string | null
    photoUrl: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    fullname: string | null
    email: string | null
    institution: string | null
    password: string | null
    salt: string | null
    verified: boolean | null
    description: string | null
    photoUrl: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    fullname: number
    email: number
    institution: number
    password: number
    salt: number
    verified: number
    description: number
    photoUrl: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    institution?: true
    password?: true
    salt?: true
    verified?: true
    description?: true
    photoUrl?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    institution?: true
    password?: true
    salt?: true
    verified?: true
    description?: true
    photoUrl?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    institution?: true
    password?: true
    salt?: true
    verified?: true
    description?: true
    photoUrl?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    fullname: string
    email: string
    institution: string | null
    password: string
    salt: string
    verified: boolean | null
    description: string | null
    photoUrl: string | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    institution?: boolean
    password?: boolean
    salt?: boolean
    verified?: boolean
    description?: boolean
    photoUrl?: boolean
    projetos?: boolean | users$projetosArgs<ExtArgs>
    verifications?: boolean | users$verificationsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    institution?: boolean
    password?: boolean
    salt?: boolean
    verified?: boolean
    description?: boolean
    photoUrl?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    institution?: boolean
    password?: boolean
    salt?: boolean
    verified?: boolean
    description?: boolean
    photoUrl?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    fullname?: boolean
    email?: boolean
    institution?: boolean
    password?: boolean
    salt?: boolean
    verified?: boolean
    description?: boolean
    photoUrl?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "email" | "institution" | "password" | "salt" | "verified" | "description" | "photoUrl", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projetos?: boolean | users$projetosArgs<ExtArgs>
    verifications?: boolean | users$verificationsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      projetos: Prisma.$projetosPayload<ExtArgs>[]
      verifications: Prisma.$user_verificationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullname: string
      email: string
      institution: string | null
      password: string
      salt: string
      verified: boolean | null
      description: string | null
      photoUrl: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projetos<T extends users$projetosArgs<ExtArgs> = {}>(args?: Subset<T, users$projetosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projetosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    verifications<T extends users$verificationsArgs<ExtArgs> = {}>(args?: Subset<T, users$verificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_verificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly fullname: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly institution: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly salt: FieldRef<"users", 'String'>
    readonly verified: FieldRef<"users", 'Boolean'>
    readonly description: FieldRef<"users", 'String'>
    readonly photoUrl: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.projetos
   */
  export type users$projetosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projetos
     */
    select?: projetosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projetos
     */
    omit?: projetosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projetosInclude<ExtArgs> | null
    where?: projetosWhereInput
    orderBy?: projetosOrderByWithRelationInput | projetosOrderByWithRelationInput[]
    cursor?: projetosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjetosScalarFieldEnum | ProjetosScalarFieldEnum[]
  }

  /**
   * users.verifications
   */
  export type users$verificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_verifications
     */
    select?: user_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_verifications
     */
    omit?: user_verificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_verificationsInclude<ExtArgs> | null
    where?: user_verificationsWhereInput
    orderBy?: user_verificationsOrderByWithRelationInput | user_verificationsOrderByWithRelationInput[]
    cursor?: user_verificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_verificationsScalarFieldEnum | User_verificationsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model projetos
   */

  export type AggregateProjetos = {
    _count: ProjetosCountAggregateOutputType | null
    _avg: ProjetosAvgAggregateOutputType | null
    _sum: ProjetosSumAggregateOutputType | null
    _min: ProjetosMinAggregateOutputType | null
    _max: ProjetosMaxAggregateOutputType | null
  }

  export type ProjetosAvgAggregateOutputType = {
    quantidade_alunos: number | null
    horas_extensao: number | null
    tempo_previsto: number | null
  }

  export type ProjetosSumAggregateOutputType = {
    quantidade_alunos: number | null
    horas_extensao: number | null
    tempo_previsto: number | null
  }

  export type ProjetosMinAggregateOutputType = {
    id: string | null
    nome_projeto: string | null
    area_interesse: string | null
    soft_skills: string | null
    quantidade_alunos: number | null
    descricao_projeto: string | null
    professores_atrelados: string | null
    horas_extensao: number | null
    tempo_previsto: number | null
    ong_selecionada: string | null
    categoria_ong: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
  }

  export type ProjetosMaxAggregateOutputType = {
    id: string | null
    nome_projeto: string | null
    area_interesse: string | null
    soft_skills: string | null
    quantidade_alunos: number | null
    descricao_projeto: string | null
    professores_atrelados: string | null
    horas_extensao: number | null
    tempo_previsto: number | null
    ong_selecionada: string | null
    categoria_ong: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
  }

  export type ProjetosCountAggregateOutputType = {
    id: number
    nome_projeto: number
    area_interesse: number
    soft_skills: number
    quantidade_alunos: number
    descricao_projeto: number
    professores_atrelados: number
    horas_extensao: number
    tempo_previsto: number
    ong_selecionada: number
    categoria_ong: number
    status: number
    created_at: number
    updated_at: number
    user_id: number
    _all: number
  }


  export type ProjetosAvgAggregateInputType = {
    quantidade_alunos?: true
    horas_extensao?: true
    tempo_previsto?: true
  }

  export type ProjetosSumAggregateInputType = {
    quantidade_alunos?: true
    horas_extensao?: true
    tempo_previsto?: true
  }

  export type ProjetosMinAggregateInputType = {
    id?: true
    nome_projeto?: true
    area_interesse?: true
    soft_skills?: true
    quantidade_alunos?: true
    descricao_projeto?: true
    professores_atrelados?: true
    horas_extensao?: true
    tempo_previsto?: true
    ong_selecionada?: true
    categoria_ong?: true
    status?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type ProjetosMaxAggregateInputType = {
    id?: true
    nome_projeto?: true
    area_interesse?: true
    soft_skills?: true
    quantidade_alunos?: true
    descricao_projeto?: true
    professores_atrelados?: true
    horas_extensao?: true
    tempo_previsto?: true
    ong_selecionada?: true
    categoria_ong?: true
    status?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type ProjetosCountAggregateInputType = {
    id?: true
    nome_projeto?: true
    area_interesse?: true
    soft_skills?: true
    quantidade_alunos?: true
    descricao_projeto?: true
    professores_atrelados?: true
    horas_extensao?: true
    tempo_previsto?: true
    ong_selecionada?: true
    categoria_ong?: true
    status?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    _all?: true
  }

  export type ProjetosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projetos to aggregate.
     */
    where?: projetosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projetos to fetch.
     */
    orderBy?: projetosOrderByWithRelationInput | projetosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projetosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projetos
    **/
    _count?: true | ProjetosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjetosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjetosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjetosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjetosMaxAggregateInputType
  }

  export type GetProjetosAggregateType<T extends ProjetosAggregateArgs> = {
        [P in keyof T & keyof AggregateProjetos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjetos[P]>
      : GetScalarType<T[P], AggregateProjetos[P]>
  }




  export type projetosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projetosWhereInput
    orderBy?: projetosOrderByWithAggregationInput | projetosOrderByWithAggregationInput[]
    by: ProjetosScalarFieldEnum[] | ProjetosScalarFieldEnum
    having?: projetosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjetosCountAggregateInputType | true
    _avg?: ProjetosAvgAggregateInputType
    _sum?: ProjetosSumAggregateInputType
    _min?: ProjetosMinAggregateInputType
    _max?: ProjetosMaxAggregateInputType
  }

  export type ProjetosGroupByOutputType = {
    id: string
    nome_projeto: string
    area_interesse: string
    soft_skills: string
    quantidade_alunos: number
    descricao_projeto: string
    professores_atrelados: string
    horas_extensao: number
    tempo_previsto: number
    ong_selecionada: string | null
    categoria_ong: string | null
    status: string
    created_at: Date
    updated_at: Date
    user_id: string
    _count: ProjetosCountAggregateOutputType | null
    _avg: ProjetosAvgAggregateOutputType | null
    _sum: ProjetosSumAggregateOutputType | null
    _min: ProjetosMinAggregateOutputType | null
    _max: ProjetosMaxAggregateOutputType | null
  }

  type GetProjetosGroupByPayload<T extends projetosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjetosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjetosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjetosGroupByOutputType[P]>
            : GetScalarType<T[P], ProjetosGroupByOutputType[P]>
        }
      >
    >


  export type projetosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_projeto?: boolean
    area_interesse?: boolean
    soft_skills?: boolean
    quantidade_alunos?: boolean
    descricao_projeto?: boolean
    professores_atrelados?: boolean
    horas_extensao?: boolean
    tempo_previsto?: boolean
    ong_selecionada?: boolean
    categoria_ong?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projetos"]>

  export type projetosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_projeto?: boolean
    area_interesse?: boolean
    soft_skills?: boolean
    quantidade_alunos?: boolean
    descricao_projeto?: boolean
    professores_atrelados?: boolean
    horas_extensao?: boolean
    tempo_previsto?: boolean
    ong_selecionada?: boolean
    categoria_ong?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projetos"]>

  export type projetosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_projeto?: boolean
    area_interesse?: boolean
    soft_skills?: boolean
    quantidade_alunos?: boolean
    descricao_projeto?: boolean
    professores_atrelados?: boolean
    horas_extensao?: boolean
    tempo_previsto?: boolean
    ong_selecionada?: boolean
    categoria_ong?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projetos"]>

  export type projetosSelectScalar = {
    id?: boolean
    nome_projeto?: boolean
    area_interesse?: boolean
    soft_skills?: boolean
    quantidade_alunos?: boolean
    descricao_projeto?: boolean
    professores_atrelados?: boolean
    horas_extensao?: boolean
    tempo_previsto?: boolean
    ong_selecionada?: boolean
    categoria_ong?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
  }

  export type projetosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome_projeto" | "area_interesse" | "soft_skills" | "quantidade_alunos" | "descricao_projeto" | "professores_atrelados" | "horas_extensao" | "tempo_previsto" | "ong_selecionada" | "categoria_ong" | "status" | "created_at" | "updated_at" | "user_id", ExtArgs["result"]["projetos"]>
  export type projetosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type projetosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type projetosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $projetosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projetos"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome_projeto: string
      area_interesse: string
      soft_skills: string
      quantidade_alunos: number
      descricao_projeto: string
      professores_atrelados: string
      horas_extensao: number
      tempo_previsto: number
      ong_selecionada: string | null
      categoria_ong: string | null
      status: string
      created_at: Date
      updated_at: Date
      user_id: string
    }, ExtArgs["result"]["projetos"]>
    composites: {}
  }

  type projetosGetPayload<S extends boolean | null | undefined | projetosDefaultArgs> = $Result.GetResult<Prisma.$projetosPayload, S>

  type projetosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projetosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjetosCountAggregateInputType | true
    }

  export interface projetosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projetos'], meta: { name: 'projetos' } }
    /**
     * Find zero or one Projetos that matches the filter.
     * @param {projetosFindUniqueArgs} args - Arguments to find a Projetos
     * @example
     * // Get one Projetos
     * const projetos = await prisma.projetos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projetosFindUniqueArgs>(args: SelectSubset<T, projetosFindUniqueArgs<ExtArgs>>): Prisma__projetosClient<$Result.GetResult<Prisma.$projetosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projetos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projetosFindUniqueOrThrowArgs} args - Arguments to find a Projetos
     * @example
     * // Get one Projetos
     * const projetos = await prisma.projetos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projetosFindUniqueOrThrowArgs>(args: SelectSubset<T, projetosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projetosClient<$Result.GetResult<Prisma.$projetosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projetos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projetosFindFirstArgs} args - Arguments to find a Projetos
     * @example
     * // Get one Projetos
     * const projetos = await prisma.projetos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projetosFindFirstArgs>(args?: SelectSubset<T, projetosFindFirstArgs<ExtArgs>>): Prisma__projetosClient<$Result.GetResult<Prisma.$projetosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projetos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projetosFindFirstOrThrowArgs} args - Arguments to find a Projetos
     * @example
     * // Get one Projetos
     * const projetos = await prisma.projetos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projetosFindFirstOrThrowArgs>(args?: SelectSubset<T, projetosFindFirstOrThrowArgs<ExtArgs>>): Prisma__projetosClient<$Result.GetResult<Prisma.$projetosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projetos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projetosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projetos
     * const projetos = await prisma.projetos.findMany()
     * 
     * // Get first 10 Projetos
     * const projetos = await prisma.projetos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projetosWithIdOnly = await prisma.projetos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends projetosFindManyArgs>(args?: SelectSubset<T, projetosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projetosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projetos.
     * @param {projetosCreateArgs} args - Arguments to create a Projetos.
     * @example
     * // Create one Projetos
     * const Projetos = await prisma.projetos.create({
     *   data: {
     *     // ... data to create a Projetos
     *   }
     * })
     * 
     */
    create<T extends projetosCreateArgs>(args: SelectSubset<T, projetosCreateArgs<ExtArgs>>): Prisma__projetosClient<$Result.GetResult<Prisma.$projetosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projetos.
     * @param {projetosCreateManyArgs} args - Arguments to create many Projetos.
     * @example
     * // Create many Projetos
     * const projetos = await prisma.projetos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projetosCreateManyArgs>(args?: SelectSubset<T, projetosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projetos and returns the data saved in the database.
     * @param {projetosCreateManyAndReturnArgs} args - Arguments to create many Projetos.
     * @example
     * // Create many Projetos
     * const projetos = await prisma.projetos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projetos and only return the `id`
     * const projetosWithIdOnly = await prisma.projetos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends projetosCreateManyAndReturnArgs>(args?: SelectSubset<T, projetosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projetosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Projetos.
     * @param {projetosDeleteArgs} args - Arguments to delete one Projetos.
     * @example
     * // Delete one Projetos
     * const Projetos = await prisma.projetos.delete({
     *   where: {
     *     // ... filter to delete one Projetos
     *   }
     * })
     * 
     */
    delete<T extends projetosDeleteArgs>(args: SelectSubset<T, projetosDeleteArgs<ExtArgs>>): Prisma__projetosClient<$Result.GetResult<Prisma.$projetosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projetos.
     * @param {projetosUpdateArgs} args - Arguments to update one Projetos.
     * @example
     * // Update one Projetos
     * const projetos = await prisma.projetos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projetosUpdateArgs>(args: SelectSubset<T, projetosUpdateArgs<ExtArgs>>): Prisma__projetosClient<$Result.GetResult<Prisma.$projetosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projetos.
     * @param {projetosDeleteManyArgs} args - Arguments to filter Projetos to delete.
     * @example
     * // Delete a few Projetos
     * const { count } = await prisma.projetos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projetosDeleteManyArgs>(args?: SelectSubset<T, projetosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projetos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projetosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projetos
     * const projetos = await prisma.projetos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projetosUpdateManyArgs>(args: SelectSubset<T, projetosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projetos and returns the data updated in the database.
     * @param {projetosUpdateManyAndReturnArgs} args - Arguments to update many Projetos.
     * @example
     * // Update many Projetos
     * const projetos = await prisma.projetos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projetos and only return the `id`
     * const projetosWithIdOnly = await prisma.projetos.updateManyAndReturn({
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
    updateManyAndReturn<T extends projetosUpdateManyAndReturnArgs>(args: SelectSubset<T, projetosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projetosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Projetos.
     * @param {projetosUpsertArgs} args - Arguments to update or create a Projetos.
     * @example
     * // Update or create a Projetos
     * const projetos = await prisma.projetos.upsert({
     *   create: {
     *     // ... data to create a Projetos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projetos we want to update
     *   }
     * })
     */
    upsert<T extends projetosUpsertArgs>(args: SelectSubset<T, projetosUpsertArgs<ExtArgs>>): Prisma__projetosClient<$Result.GetResult<Prisma.$projetosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projetos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projetosCountArgs} args - Arguments to filter Projetos to count.
     * @example
     * // Count the number of Projetos
     * const count = await prisma.projetos.count({
     *   where: {
     *     // ... the filter for the Projetos we want to count
     *   }
     * })
    **/
    count<T extends projetosCountArgs>(
      args?: Subset<T, projetosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjetosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projetos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjetosAggregateArgs>(args: Subset<T, ProjetosAggregateArgs>): Prisma.PrismaPromise<GetProjetosAggregateType<T>>

    /**
     * Group by Projetos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projetosGroupByArgs} args - Group by arguments.
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
      T extends projetosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projetosGroupByArgs['orderBy'] }
        : { orderBy?: projetosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, projetosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjetosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projetos model
   */
  readonly fields: projetosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projetos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projetosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the projetos model
   */
  interface projetosFieldRefs {
    readonly id: FieldRef<"projetos", 'String'>
    readonly nome_projeto: FieldRef<"projetos", 'String'>
    readonly area_interesse: FieldRef<"projetos", 'String'>
    readonly soft_skills: FieldRef<"projetos", 'String'>
    readonly quantidade_alunos: FieldRef<"projetos", 'Int'>
    readonly descricao_projeto: FieldRef<"projetos", 'String'>
    readonly professores_atrelados: FieldRef<"projetos", 'String'>
    readonly horas_extensao: FieldRef<"projetos", 'Int'>
    readonly tempo_previsto: FieldRef<"projetos", 'Int'>
    readonly ong_selecionada: FieldRef<"projetos", 'String'>
    readonly categoria_ong: FieldRef<"projetos", 'String'>
    readonly status: FieldRef<"projetos", 'String'>
    readonly created_at: FieldRef<"projetos", 'DateTime'>
    readonly updated_at: FieldRef<"projetos", 'DateTime'>
    readonly user_id: FieldRef<"projetos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * projetos findUnique
   */
  export type projetosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projetos
     */
    select?: projetosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projetos
     */
    omit?: projetosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projetosInclude<ExtArgs> | null
    /**
     * Filter, which projetos to fetch.
     */
    where: projetosWhereUniqueInput
  }

  /**
   * projetos findUniqueOrThrow
   */
  export type projetosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projetos
     */
    select?: projetosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projetos
     */
    omit?: projetosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projetosInclude<ExtArgs> | null
    /**
     * Filter, which projetos to fetch.
     */
    where: projetosWhereUniqueInput
  }

  /**
   * projetos findFirst
   */
  export type projetosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projetos
     */
    select?: projetosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projetos
     */
    omit?: projetosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projetosInclude<ExtArgs> | null
    /**
     * Filter, which projetos to fetch.
     */
    where?: projetosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projetos to fetch.
     */
    orderBy?: projetosOrderByWithRelationInput | projetosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projetos.
     */
    cursor?: projetosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projetos.
     */
    distinct?: ProjetosScalarFieldEnum | ProjetosScalarFieldEnum[]
  }

  /**
   * projetos findFirstOrThrow
   */
  export type projetosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projetos
     */
    select?: projetosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projetos
     */
    omit?: projetosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projetosInclude<ExtArgs> | null
    /**
     * Filter, which projetos to fetch.
     */
    where?: projetosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projetos to fetch.
     */
    orderBy?: projetosOrderByWithRelationInput | projetosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projetos.
     */
    cursor?: projetosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projetos.
     */
    distinct?: ProjetosScalarFieldEnum | ProjetosScalarFieldEnum[]
  }

  /**
   * projetos findMany
   */
  export type projetosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projetos
     */
    select?: projetosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projetos
     */
    omit?: projetosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projetosInclude<ExtArgs> | null
    /**
     * Filter, which projetos to fetch.
     */
    where?: projetosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projetos to fetch.
     */
    orderBy?: projetosOrderByWithRelationInput | projetosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projetos.
     */
    cursor?: projetosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projetos.
     */
    skip?: number
    distinct?: ProjetosScalarFieldEnum | ProjetosScalarFieldEnum[]
  }

  /**
   * projetos create
   */
  export type projetosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projetos
     */
    select?: projetosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projetos
     */
    omit?: projetosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projetosInclude<ExtArgs> | null
    /**
     * The data needed to create a projetos.
     */
    data: XOR<projetosCreateInput, projetosUncheckedCreateInput>
  }

  /**
   * projetos createMany
   */
  export type projetosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projetos.
     */
    data: projetosCreateManyInput | projetosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projetos createManyAndReturn
   */
  export type projetosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projetos
     */
    select?: projetosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projetos
     */
    omit?: projetosOmit<ExtArgs> | null
    /**
     * The data used to create many projetos.
     */
    data: projetosCreateManyInput | projetosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projetosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * projetos update
   */
  export type projetosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projetos
     */
    select?: projetosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projetos
     */
    omit?: projetosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projetosInclude<ExtArgs> | null
    /**
     * The data needed to update a projetos.
     */
    data: XOR<projetosUpdateInput, projetosUncheckedUpdateInput>
    /**
     * Choose, which projetos to update.
     */
    where: projetosWhereUniqueInput
  }

  /**
   * projetos updateMany
   */
  export type projetosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projetos.
     */
    data: XOR<projetosUpdateManyMutationInput, projetosUncheckedUpdateManyInput>
    /**
     * Filter which projetos to update
     */
    where?: projetosWhereInput
    /**
     * Limit how many projetos to update.
     */
    limit?: number
  }

  /**
   * projetos updateManyAndReturn
   */
  export type projetosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projetos
     */
    select?: projetosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projetos
     */
    omit?: projetosOmit<ExtArgs> | null
    /**
     * The data used to update projetos.
     */
    data: XOR<projetosUpdateManyMutationInput, projetosUncheckedUpdateManyInput>
    /**
     * Filter which projetos to update
     */
    where?: projetosWhereInput
    /**
     * Limit how many projetos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projetosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * projetos upsert
   */
  export type projetosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projetos
     */
    select?: projetosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projetos
     */
    omit?: projetosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projetosInclude<ExtArgs> | null
    /**
     * The filter to search for the projetos to update in case it exists.
     */
    where: projetosWhereUniqueInput
    /**
     * In case the projetos found by the `where` argument doesn't exist, create a new projetos with this data.
     */
    create: XOR<projetosCreateInput, projetosUncheckedCreateInput>
    /**
     * In case the projetos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projetosUpdateInput, projetosUncheckedUpdateInput>
  }

  /**
   * projetos delete
   */
  export type projetosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projetos
     */
    select?: projetosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projetos
     */
    omit?: projetosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projetosInclude<ExtArgs> | null
    /**
     * Filter which projetos to delete.
     */
    where: projetosWhereUniqueInput
  }

  /**
   * projetos deleteMany
   */
  export type projetosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projetos to delete
     */
    where?: projetosWhereInput
    /**
     * Limit how many projetos to delete.
     */
    limit?: number
  }

  /**
   * projetos without action
   */
  export type projetosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projetos
     */
    select?: projetosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projetos
     */
    omit?: projetosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projetosInclude<ExtArgs> | null
  }


  /**
   * Model ongs
   */

  export type AggregateOngs = {
    _count: OngsCountAggregateOutputType | null
    _avg: OngsAvgAggregateOutputType | null
    _sum: OngsSumAggregateOutputType | null
    _min: OngsMinAggregateOutputType | null
    _max: OngsMaxAggregateOutputType | null
  }

  export type OngsAvgAggregateOutputType = {
    id: number | null
  }

  export type OngsSumAggregateOutputType = {
    id: number | null
  }

  export type OngsMinAggregateOutputType = {
    id: number | null
    nome_ong: string | null
    motivo_criacao: string | null
    sobre: string | null
    responsavel_contato: string | null
    cnpj: string | null
    email: string | null
    quantidade_assistidos: string | null
    metas: string | null
    causa_organizacao: string | null
    area: string | null
    match_area: string | null
    objetivos_ods: string | null
    atividades_projeto_desenvolve: string | null
    possui_voluntarios: string | null
    possui_funcionarios: string | null
    funcionamento: string | null
    endereco: string | null
    rpa: string | null
    contato_divulgacao: string | null
    redes_sociais: string | null
    produto_social: string | null
    mensagem_convite: string | null
    serve_refeicao: string | null
  }

  export type OngsMaxAggregateOutputType = {
    id: number | null
    nome_ong: string | null
    motivo_criacao: string | null
    sobre: string | null
    responsavel_contato: string | null
    cnpj: string | null
    email: string | null
    quantidade_assistidos: string | null
    metas: string | null
    causa_organizacao: string | null
    area: string | null
    match_area: string | null
    objetivos_ods: string | null
    atividades_projeto_desenvolve: string | null
    possui_voluntarios: string | null
    possui_funcionarios: string | null
    funcionamento: string | null
    endereco: string | null
    rpa: string | null
    contato_divulgacao: string | null
    redes_sociais: string | null
    produto_social: string | null
    mensagem_convite: string | null
    serve_refeicao: string | null
  }

  export type OngsCountAggregateOutputType = {
    id: number
    nome_ong: number
    motivo_criacao: number
    sobre: number
    responsavel_contato: number
    cnpj: number
    email: number
    quantidade_assistidos: number
    metas: number
    causa_organizacao: number
    area: number
    match_area: number
    objetivos_ods: number
    atividades_projeto_desenvolve: number
    possui_voluntarios: number
    possui_funcionarios: number
    funcionamento: number
    endereco: number
    rpa: number
    contato_divulgacao: number
    redes_sociais: number
    produto_social: number
    mensagem_convite: number
    serve_refeicao: number
    _all: number
  }


  export type OngsAvgAggregateInputType = {
    id?: true
  }

  export type OngsSumAggregateInputType = {
    id?: true
  }

  export type OngsMinAggregateInputType = {
    id?: true
    nome_ong?: true
    motivo_criacao?: true
    sobre?: true
    responsavel_contato?: true
    cnpj?: true
    email?: true
    quantidade_assistidos?: true
    metas?: true
    causa_organizacao?: true
    area?: true
    match_area?: true
    objetivos_ods?: true
    atividades_projeto_desenvolve?: true
    possui_voluntarios?: true
    possui_funcionarios?: true
    funcionamento?: true
    endereco?: true
    rpa?: true
    contato_divulgacao?: true
    redes_sociais?: true
    produto_social?: true
    mensagem_convite?: true
    serve_refeicao?: true
  }

  export type OngsMaxAggregateInputType = {
    id?: true
    nome_ong?: true
    motivo_criacao?: true
    sobre?: true
    responsavel_contato?: true
    cnpj?: true
    email?: true
    quantidade_assistidos?: true
    metas?: true
    causa_organizacao?: true
    area?: true
    match_area?: true
    objetivos_ods?: true
    atividades_projeto_desenvolve?: true
    possui_voluntarios?: true
    possui_funcionarios?: true
    funcionamento?: true
    endereco?: true
    rpa?: true
    contato_divulgacao?: true
    redes_sociais?: true
    produto_social?: true
    mensagem_convite?: true
    serve_refeicao?: true
  }

  export type OngsCountAggregateInputType = {
    id?: true
    nome_ong?: true
    motivo_criacao?: true
    sobre?: true
    responsavel_contato?: true
    cnpj?: true
    email?: true
    quantidade_assistidos?: true
    metas?: true
    causa_organizacao?: true
    area?: true
    match_area?: true
    objetivos_ods?: true
    atividades_projeto_desenvolve?: true
    possui_voluntarios?: true
    possui_funcionarios?: true
    funcionamento?: true
    endereco?: true
    rpa?: true
    contato_divulgacao?: true
    redes_sociais?: true
    produto_social?: true
    mensagem_convite?: true
    serve_refeicao?: true
    _all?: true
  }

  export type OngsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ongs to aggregate.
     */
    where?: ongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ongs to fetch.
     */
    orderBy?: ongsOrderByWithRelationInput | ongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ongs
    **/
    _count?: true | OngsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OngsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OngsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OngsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OngsMaxAggregateInputType
  }

  export type GetOngsAggregateType<T extends OngsAggregateArgs> = {
        [P in keyof T & keyof AggregateOngs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOngs[P]>
      : GetScalarType<T[P], AggregateOngs[P]>
  }




  export type ongsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ongsWhereInput
    orderBy?: ongsOrderByWithAggregationInput | ongsOrderByWithAggregationInput[]
    by: OngsScalarFieldEnum[] | OngsScalarFieldEnum
    having?: ongsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OngsCountAggregateInputType | true
    _avg?: OngsAvgAggregateInputType
    _sum?: OngsSumAggregateInputType
    _min?: OngsMinAggregateInputType
    _max?: OngsMaxAggregateInputType
  }

  export type OngsGroupByOutputType = {
    id: number
    nome_ong: string | null
    motivo_criacao: string | null
    sobre: string | null
    responsavel_contato: string | null
    cnpj: string | null
    email: string | null
    quantidade_assistidos: string | null
    metas: string | null
    causa_organizacao: string | null
    area: string | null
    match_area: string | null
    objetivos_ods: string | null
    atividades_projeto_desenvolve: string | null
    possui_voluntarios: string | null
    possui_funcionarios: string | null
    funcionamento: string | null
    endereco: string | null
    rpa: string | null
    contato_divulgacao: string | null
    redes_sociais: string | null
    produto_social: string | null
    mensagem_convite: string | null
    serve_refeicao: string | null
    _count: OngsCountAggregateOutputType | null
    _avg: OngsAvgAggregateOutputType | null
    _sum: OngsSumAggregateOutputType | null
    _min: OngsMinAggregateOutputType | null
    _max: OngsMaxAggregateOutputType | null
  }

  type GetOngsGroupByPayload<T extends ongsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OngsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OngsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OngsGroupByOutputType[P]>
            : GetScalarType<T[P], OngsGroupByOutputType[P]>
        }
      >
    >


  export type ongsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_ong?: boolean
    motivo_criacao?: boolean
    sobre?: boolean
    responsavel_contato?: boolean
    cnpj?: boolean
    email?: boolean
    quantidade_assistidos?: boolean
    metas?: boolean
    causa_organizacao?: boolean
    area?: boolean
    match_area?: boolean
    objetivos_ods?: boolean
    atividades_projeto_desenvolve?: boolean
    possui_voluntarios?: boolean
    possui_funcionarios?: boolean
    funcionamento?: boolean
    endereco?: boolean
    rpa?: boolean
    contato_divulgacao?: boolean
    redes_sociais?: boolean
    produto_social?: boolean
    mensagem_convite?: boolean
    serve_refeicao?: boolean
  }, ExtArgs["result"]["ongs"]>

  export type ongsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_ong?: boolean
    motivo_criacao?: boolean
    sobre?: boolean
    responsavel_contato?: boolean
    cnpj?: boolean
    email?: boolean
    quantidade_assistidos?: boolean
    metas?: boolean
    causa_organizacao?: boolean
    area?: boolean
    match_area?: boolean
    objetivos_ods?: boolean
    atividades_projeto_desenvolve?: boolean
    possui_voluntarios?: boolean
    possui_funcionarios?: boolean
    funcionamento?: boolean
    endereco?: boolean
    rpa?: boolean
    contato_divulgacao?: boolean
    redes_sociais?: boolean
    produto_social?: boolean
    mensagem_convite?: boolean
    serve_refeicao?: boolean
  }, ExtArgs["result"]["ongs"]>

  export type ongsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_ong?: boolean
    motivo_criacao?: boolean
    sobre?: boolean
    responsavel_contato?: boolean
    cnpj?: boolean
    email?: boolean
    quantidade_assistidos?: boolean
    metas?: boolean
    causa_organizacao?: boolean
    area?: boolean
    match_area?: boolean
    objetivos_ods?: boolean
    atividades_projeto_desenvolve?: boolean
    possui_voluntarios?: boolean
    possui_funcionarios?: boolean
    funcionamento?: boolean
    endereco?: boolean
    rpa?: boolean
    contato_divulgacao?: boolean
    redes_sociais?: boolean
    produto_social?: boolean
    mensagem_convite?: boolean
    serve_refeicao?: boolean
  }, ExtArgs["result"]["ongs"]>

  export type ongsSelectScalar = {
    id?: boolean
    nome_ong?: boolean
    motivo_criacao?: boolean
    sobre?: boolean
    responsavel_contato?: boolean
    cnpj?: boolean
    email?: boolean
    quantidade_assistidos?: boolean
    metas?: boolean
    causa_organizacao?: boolean
    area?: boolean
    match_area?: boolean
    objetivos_ods?: boolean
    atividades_projeto_desenvolve?: boolean
    possui_voluntarios?: boolean
    possui_funcionarios?: boolean
    funcionamento?: boolean
    endereco?: boolean
    rpa?: boolean
    contato_divulgacao?: boolean
    redes_sociais?: boolean
    produto_social?: boolean
    mensagem_convite?: boolean
    serve_refeicao?: boolean
  }

  export type ongsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome_ong" | "motivo_criacao" | "sobre" | "responsavel_contato" | "cnpj" | "email" | "quantidade_assistidos" | "metas" | "causa_organizacao" | "area" | "match_area" | "objetivos_ods" | "atividades_projeto_desenvolve" | "possui_voluntarios" | "possui_funcionarios" | "funcionamento" | "endereco" | "rpa" | "contato_divulgacao" | "redes_sociais" | "produto_social" | "mensagem_convite" | "serve_refeicao", ExtArgs["result"]["ongs"]>

  export type $ongsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ongs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome_ong: string | null
      motivo_criacao: string | null
      sobre: string | null
      responsavel_contato: string | null
      cnpj: string | null
      email: string | null
      quantidade_assistidos: string | null
      metas: string | null
      causa_organizacao: string | null
      area: string | null
      match_area: string | null
      objetivos_ods: string | null
      atividades_projeto_desenvolve: string | null
      possui_voluntarios: string | null
      possui_funcionarios: string | null
      funcionamento: string | null
      endereco: string | null
      rpa: string | null
      contato_divulgacao: string | null
      redes_sociais: string | null
      produto_social: string | null
      mensagem_convite: string | null
      serve_refeicao: string | null
    }, ExtArgs["result"]["ongs"]>
    composites: {}
  }

  type ongsGetPayload<S extends boolean | null | undefined | ongsDefaultArgs> = $Result.GetResult<Prisma.$ongsPayload, S>

  type ongsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ongsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OngsCountAggregateInputType | true
    }

  export interface ongsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ongs'], meta: { name: 'ongs' } }
    /**
     * Find zero or one Ongs that matches the filter.
     * @param {ongsFindUniqueArgs} args - Arguments to find a Ongs
     * @example
     * // Get one Ongs
     * const ongs = await prisma.ongs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ongsFindUniqueArgs>(args: SelectSubset<T, ongsFindUniqueArgs<ExtArgs>>): Prisma__ongsClient<$Result.GetResult<Prisma.$ongsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ongs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ongsFindUniqueOrThrowArgs} args - Arguments to find a Ongs
     * @example
     * // Get one Ongs
     * const ongs = await prisma.ongs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ongsFindUniqueOrThrowArgs>(args: SelectSubset<T, ongsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ongsClient<$Result.GetResult<Prisma.$ongsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ongsFindFirstArgs} args - Arguments to find a Ongs
     * @example
     * // Get one Ongs
     * const ongs = await prisma.ongs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ongsFindFirstArgs>(args?: SelectSubset<T, ongsFindFirstArgs<ExtArgs>>): Prisma__ongsClient<$Result.GetResult<Prisma.$ongsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ongs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ongsFindFirstOrThrowArgs} args - Arguments to find a Ongs
     * @example
     * // Get one Ongs
     * const ongs = await prisma.ongs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ongsFindFirstOrThrowArgs>(args?: SelectSubset<T, ongsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ongsClient<$Result.GetResult<Prisma.$ongsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ongsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ongs
     * const ongs = await prisma.ongs.findMany()
     * 
     * // Get first 10 Ongs
     * const ongs = await prisma.ongs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ongsWithIdOnly = await prisma.ongs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ongsFindManyArgs>(args?: SelectSubset<T, ongsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ongsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ongs.
     * @param {ongsCreateArgs} args - Arguments to create a Ongs.
     * @example
     * // Create one Ongs
     * const Ongs = await prisma.ongs.create({
     *   data: {
     *     // ... data to create a Ongs
     *   }
     * })
     * 
     */
    create<T extends ongsCreateArgs>(args: SelectSubset<T, ongsCreateArgs<ExtArgs>>): Prisma__ongsClient<$Result.GetResult<Prisma.$ongsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ongs.
     * @param {ongsCreateManyArgs} args - Arguments to create many Ongs.
     * @example
     * // Create many Ongs
     * const ongs = await prisma.ongs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ongsCreateManyArgs>(args?: SelectSubset<T, ongsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ongs and returns the data saved in the database.
     * @param {ongsCreateManyAndReturnArgs} args - Arguments to create many Ongs.
     * @example
     * // Create many Ongs
     * const ongs = await prisma.ongs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ongs and only return the `id`
     * const ongsWithIdOnly = await prisma.ongs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ongsCreateManyAndReturnArgs>(args?: SelectSubset<T, ongsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ongsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ongs.
     * @param {ongsDeleteArgs} args - Arguments to delete one Ongs.
     * @example
     * // Delete one Ongs
     * const Ongs = await prisma.ongs.delete({
     *   where: {
     *     // ... filter to delete one Ongs
     *   }
     * })
     * 
     */
    delete<T extends ongsDeleteArgs>(args: SelectSubset<T, ongsDeleteArgs<ExtArgs>>): Prisma__ongsClient<$Result.GetResult<Prisma.$ongsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ongs.
     * @param {ongsUpdateArgs} args - Arguments to update one Ongs.
     * @example
     * // Update one Ongs
     * const ongs = await prisma.ongs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ongsUpdateArgs>(args: SelectSubset<T, ongsUpdateArgs<ExtArgs>>): Prisma__ongsClient<$Result.GetResult<Prisma.$ongsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ongs.
     * @param {ongsDeleteManyArgs} args - Arguments to filter Ongs to delete.
     * @example
     * // Delete a few Ongs
     * const { count } = await prisma.ongs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ongsDeleteManyArgs>(args?: SelectSubset<T, ongsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ongsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ongs
     * const ongs = await prisma.ongs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ongsUpdateManyArgs>(args: SelectSubset<T, ongsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ongs and returns the data updated in the database.
     * @param {ongsUpdateManyAndReturnArgs} args - Arguments to update many Ongs.
     * @example
     * // Update many Ongs
     * const ongs = await prisma.ongs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ongs and only return the `id`
     * const ongsWithIdOnly = await prisma.ongs.updateManyAndReturn({
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
    updateManyAndReturn<T extends ongsUpdateManyAndReturnArgs>(args: SelectSubset<T, ongsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ongsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ongs.
     * @param {ongsUpsertArgs} args - Arguments to update or create a Ongs.
     * @example
     * // Update or create a Ongs
     * const ongs = await prisma.ongs.upsert({
     *   create: {
     *     // ... data to create a Ongs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ongs we want to update
     *   }
     * })
     */
    upsert<T extends ongsUpsertArgs>(args: SelectSubset<T, ongsUpsertArgs<ExtArgs>>): Prisma__ongsClient<$Result.GetResult<Prisma.$ongsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ongsCountArgs} args - Arguments to filter Ongs to count.
     * @example
     * // Count the number of Ongs
     * const count = await prisma.ongs.count({
     *   where: {
     *     // ... the filter for the Ongs we want to count
     *   }
     * })
    **/
    count<T extends ongsCountArgs>(
      args?: Subset<T, ongsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OngsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OngsAggregateArgs>(args: Subset<T, OngsAggregateArgs>): Prisma.PrismaPromise<GetOngsAggregateType<T>>

    /**
     * Group by Ongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ongsGroupByArgs} args - Group by arguments.
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
      T extends ongsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ongsGroupByArgs['orderBy'] }
        : { orderBy?: ongsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ongsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOngsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ongs model
   */
  readonly fields: ongsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ongs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ongsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ongs model
   */
  interface ongsFieldRefs {
    readonly id: FieldRef<"ongs", 'Int'>
    readonly nome_ong: FieldRef<"ongs", 'String'>
    readonly motivo_criacao: FieldRef<"ongs", 'String'>
    readonly sobre: FieldRef<"ongs", 'String'>
    readonly responsavel_contato: FieldRef<"ongs", 'String'>
    readonly cnpj: FieldRef<"ongs", 'String'>
    readonly email: FieldRef<"ongs", 'String'>
    readonly quantidade_assistidos: FieldRef<"ongs", 'String'>
    readonly metas: FieldRef<"ongs", 'String'>
    readonly causa_organizacao: FieldRef<"ongs", 'String'>
    readonly area: FieldRef<"ongs", 'String'>
    readonly match_area: FieldRef<"ongs", 'String'>
    readonly objetivos_ods: FieldRef<"ongs", 'String'>
    readonly atividades_projeto_desenvolve: FieldRef<"ongs", 'String'>
    readonly possui_voluntarios: FieldRef<"ongs", 'String'>
    readonly possui_funcionarios: FieldRef<"ongs", 'String'>
    readonly funcionamento: FieldRef<"ongs", 'String'>
    readonly endereco: FieldRef<"ongs", 'String'>
    readonly rpa: FieldRef<"ongs", 'String'>
    readonly contato_divulgacao: FieldRef<"ongs", 'String'>
    readonly redes_sociais: FieldRef<"ongs", 'String'>
    readonly produto_social: FieldRef<"ongs", 'String'>
    readonly mensagem_convite: FieldRef<"ongs", 'String'>
    readonly serve_refeicao: FieldRef<"ongs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ongs findUnique
   */
  export type ongsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongs
     */
    select?: ongsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ongs
     */
    omit?: ongsOmit<ExtArgs> | null
    /**
     * Filter, which ongs to fetch.
     */
    where: ongsWhereUniqueInput
  }

  /**
   * ongs findUniqueOrThrow
   */
  export type ongsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongs
     */
    select?: ongsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ongs
     */
    omit?: ongsOmit<ExtArgs> | null
    /**
     * Filter, which ongs to fetch.
     */
    where: ongsWhereUniqueInput
  }

  /**
   * ongs findFirst
   */
  export type ongsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongs
     */
    select?: ongsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ongs
     */
    omit?: ongsOmit<ExtArgs> | null
    /**
     * Filter, which ongs to fetch.
     */
    where?: ongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ongs to fetch.
     */
    orderBy?: ongsOrderByWithRelationInput | ongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ongs.
     */
    cursor?: ongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ongs.
     */
    distinct?: OngsScalarFieldEnum | OngsScalarFieldEnum[]
  }

  /**
   * ongs findFirstOrThrow
   */
  export type ongsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongs
     */
    select?: ongsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ongs
     */
    omit?: ongsOmit<ExtArgs> | null
    /**
     * Filter, which ongs to fetch.
     */
    where?: ongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ongs to fetch.
     */
    orderBy?: ongsOrderByWithRelationInput | ongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ongs.
     */
    cursor?: ongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ongs.
     */
    distinct?: OngsScalarFieldEnum | OngsScalarFieldEnum[]
  }

  /**
   * ongs findMany
   */
  export type ongsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongs
     */
    select?: ongsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ongs
     */
    omit?: ongsOmit<ExtArgs> | null
    /**
     * Filter, which ongs to fetch.
     */
    where?: ongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ongs to fetch.
     */
    orderBy?: ongsOrderByWithRelationInput | ongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ongs.
     */
    cursor?: ongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ongs.
     */
    skip?: number
    distinct?: OngsScalarFieldEnum | OngsScalarFieldEnum[]
  }

  /**
   * ongs create
   */
  export type ongsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongs
     */
    select?: ongsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ongs
     */
    omit?: ongsOmit<ExtArgs> | null
    /**
     * The data needed to create a ongs.
     */
    data?: XOR<ongsCreateInput, ongsUncheckedCreateInput>
  }

  /**
   * ongs createMany
   */
  export type ongsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ongs.
     */
    data: ongsCreateManyInput | ongsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ongs createManyAndReturn
   */
  export type ongsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongs
     */
    select?: ongsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ongs
     */
    omit?: ongsOmit<ExtArgs> | null
    /**
     * The data used to create many ongs.
     */
    data: ongsCreateManyInput | ongsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ongs update
   */
  export type ongsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongs
     */
    select?: ongsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ongs
     */
    omit?: ongsOmit<ExtArgs> | null
    /**
     * The data needed to update a ongs.
     */
    data: XOR<ongsUpdateInput, ongsUncheckedUpdateInput>
    /**
     * Choose, which ongs to update.
     */
    where: ongsWhereUniqueInput
  }

  /**
   * ongs updateMany
   */
  export type ongsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ongs.
     */
    data: XOR<ongsUpdateManyMutationInput, ongsUncheckedUpdateManyInput>
    /**
     * Filter which ongs to update
     */
    where?: ongsWhereInput
    /**
     * Limit how many ongs to update.
     */
    limit?: number
  }

  /**
   * ongs updateManyAndReturn
   */
  export type ongsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongs
     */
    select?: ongsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ongs
     */
    omit?: ongsOmit<ExtArgs> | null
    /**
     * The data used to update ongs.
     */
    data: XOR<ongsUpdateManyMutationInput, ongsUncheckedUpdateManyInput>
    /**
     * Filter which ongs to update
     */
    where?: ongsWhereInput
    /**
     * Limit how many ongs to update.
     */
    limit?: number
  }

  /**
   * ongs upsert
   */
  export type ongsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongs
     */
    select?: ongsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ongs
     */
    omit?: ongsOmit<ExtArgs> | null
    /**
     * The filter to search for the ongs to update in case it exists.
     */
    where: ongsWhereUniqueInput
    /**
     * In case the ongs found by the `where` argument doesn't exist, create a new ongs with this data.
     */
    create: XOR<ongsCreateInput, ongsUncheckedCreateInput>
    /**
     * In case the ongs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ongsUpdateInput, ongsUncheckedUpdateInput>
  }

  /**
   * ongs delete
   */
  export type ongsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongs
     */
    select?: ongsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ongs
     */
    omit?: ongsOmit<ExtArgs> | null
    /**
     * Filter which ongs to delete.
     */
    where: ongsWhereUniqueInput
  }

  /**
   * ongs deleteMany
   */
  export type ongsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ongs to delete
     */
    where?: ongsWhereInput
    /**
     * Limit how many ongs to delete.
     */
    limit?: number
  }

  /**
   * ongs without action
   */
  export type ongsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongs
     */
    select?: ongsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ongs
     */
    omit?: ongsOmit<ExtArgs> | null
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


  export const User_verificationsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    unique_string: 'unique_string',
    salt: 'salt',
    created_at: 'created_at',
    expires_at: 'expires_at'
  };

  export type User_verificationsScalarFieldEnum = (typeof User_verificationsScalarFieldEnum)[keyof typeof User_verificationsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    email: 'email',
    institution: 'institution',
    password: 'password',
    salt: 'salt',
    verified: 'verified',
    description: 'description',
    photoUrl: 'photoUrl'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ProjetosScalarFieldEnum: {
    id: 'id',
    nome_projeto: 'nome_projeto',
    area_interesse: 'area_interesse',
    soft_skills: 'soft_skills',
    quantidade_alunos: 'quantidade_alunos',
    descricao_projeto: 'descricao_projeto',
    professores_atrelados: 'professores_atrelados',
    horas_extensao: 'horas_extensao',
    tempo_previsto: 'tempo_previsto',
    ong_selecionada: 'ong_selecionada',
    categoria_ong: 'categoria_ong',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id'
  };

  export type ProjetosScalarFieldEnum = (typeof ProjetosScalarFieldEnum)[keyof typeof ProjetosScalarFieldEnum]


  export const OngsScalarFieldEnum: {
    id: 'id',
    nome_ong: 'nome_ong',
    motivo_criacao: 'motivo_criacao',
    sobre: 'sobre',
    responsavel_contato: 'responsavel_contato',
    cnpj: 'cnpj',
    email: 'email',
    quantidade_assistidos: 'quantidade_assistidos',
    metas: 'metas',
    causa_organizacao: 'causa_organizacao',
    area: 'area',
    match_area: 'match_area',
    objetivos_ods: 'objetivos_ods',
    atividades_projeto_desenvolve: 'atividades_projeto_desenvolve',
    possui_voluntarios: 'possui_voluntarios',
    possui_funcionarios: 'possui_funcionarios',
    funcionamento: 'funcionamento',
    endereco: 'endereco',
    rpa: 'rpa',
    contato_divulgacao: 'contato_divulgacao',
    redes_sociais: 'redes_sociais',
    produto_social: 'produto_social',
    mensagem_convite: 'mensagem_convite',
    serve_refeicao: 'serve_refeicao'
  };

  export type OngsScalarFieldEnum = (typeof OngsScalarFieldEnum)[keyof typeof OngsScalarFieldEnum]


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
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type user_verificationsWhereInput = {
    AND?: user_verificationsWhereInput | user_verificationsWhereInput[]
    OR?: user_verificationsWhereInput[]
    NOT?: user_verificationsWhereInput | user_verificationsWhereInput[]
    id?: UuidFilter<"user_verifications"> | string
    user_id?: UuidFilter<"user_verifications"> | string
    unique_string?: BytesFilter<"user_verifications"> | Uint8Array
    salt?: BytesNullableFilter<"user_verifications"> | Uint8Array | null
    created_at?: DateTimeNullableFilter<"user_verifications"> | Date | string | null
    expires_at?: DateTimeFilter<"user_verifications"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_verificationsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    unique_string?: SortOrder
    salt?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    expires_at?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type user_verificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: user_verificationsWhereInput | user_verificationsWhereInput[]
    OR?: user_verificationsWhereInput[]
    NOT?: user_verificationsWhereInput | user_verificationsWhereInput[]
    user_id?: UuidFilter<"user_verifications"> | string
    unique_string?: BytesFilter<"user_verifications"> | Uint8Array
    salt?: BytesNullableFilter<"user_verifications"> | Uint8Array | null
    created_at?: DateTimeNullableFilter<"user_verifications"> | Date | string | null
    expires_at?: DateTimeFilter<"user_verifications"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type user_verificationsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    unique_string?: SortOrder
    salt?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    expires_at?: SortOrder
    _count?: user_verificationsCountOrderByAggregateInput
    _max?: user_verificationsMaxOrderByAggregateInput
    _min?: user_verificationsMinOrderByAggregateInput
  }

  export type user_verificationsScalarWhereWithAggregatesInput = {
    AND?: user_verificationsScalarWhereWithAggregatesInput | user_verificationsScalarWhereWithAggregatesInput[]
    OR?: user_verificationsScalarWhereWithAggregatesInput[]
    NOT?: user_verificationsScalarWhereWithAggregatesInput | user_verificationsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"user_verifications"> | string
    user_id?: UuidWithAggregatesFilter<"user_verifications"> | string
    unique_string?: BytesWithAggregatesFilter<"user_verifications"> | Uint8Array
    salt?: BytesNullableWithAggregatesFilter<"user_verifications"> | Uint8Array | null
    created_at?: DateTimeNullableWithAggregatesFilter<"user_verifications"> | Date | string | null
    expires_at?: DateTimeWithAggregatesFilter<"user_verifications"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    fullname?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    institution?: StringNullableFilter<"users"> | string | null
    password?: StringFilter<"users"> | string
    salt?: StringFilter<"users"> | string
    verified?: BoolNullableFilter<"users"> | boolean | null
    description?: StringNullableFilter<"users"> | string | null
    photoUrl?: StringNullableFilter<"users"> | string | null
    projetos?: ProjetosListRelationFilter
    verifications?: User_verificationsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    institution?: SortOrderInput | SortOrder
    password?: SortOrder
    salt?: SortOrder
    verified?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    projetos?: projetosOrderByRelationAggregateInput
    verifications?: user_verificationsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    fullname?: StringFilter<"users"> | string
    institution?: StringNullableFilter<"users"> | string | null
    password?: StringFilter<"users"> | string
    salt?: StringFilter<"users"> | string
    verified?: BoolNullableFilter<"users"> | boolean | null
    description?: StringNullableFilter<"users"> | string | null
    photoUrl?: StringNullableFilter<"users"> | string | null
    projetos?: ProjetosListRelationFilter
    verifications?: User_verificationsListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    institution?: SortOrderInput | SortOrder
    password?: SortOrder
    salt?: SortOrder
    verified?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    fullname?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    institution?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringWithAggregatesFilter<"users"> | string
    salt?: StringWithAggregatesFilter<"users"> | string
    verified?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    description?: StringNullableWithAggregatesFilter<"users"> | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type projetosWhereInput = {
    AND?: projetosWhereInput | projetosWhereInput[]
    OR?: projetosWhereInput[]
    NOT?: projetosWhereInput | projetosWhereInput[]
    id?: UuidFilter<"projetos"> | string
    nome_projeto?: StringFilter<"projetos"> | string
    area_interesse?: StringFilter<"projetos"> | string
    soft_skills?: StringFilter<"projetos"> | string
    quantidade_alunos?: IntFilter<"projetos"> | number
    descricao_projeto?: StringFilter<"projetos"> | string
    professores_atrelados?: StringFilter<"projetos"> | string
    horas_extensao?: IntFilter<"projetos"> | number
    tempo_previsto?: IntFilter<"projetos"> | number
    ong_selecionada?: StringNullableFilter<"projetos"> | string | null
    categoria_ong?: StringNullableFilter<"projetos"> | string | null
    status?: StringFilter<"projetos"> | string
    created_at?: DateTimeFilter<"projetos"> | Date | string
    updated_at?: DateTimeFilter<"projetos"> | Date | string
    user_id?: UuidFilter<"projetos"> | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type projetosOrderByWithRelationInput = {
    id?: SortOrder
    nome_projeto?: SortOrder
    area_interesse?: SortOrder
    soft_skills?: SortOrder
    quantidade_alunos?: SortOrder
    descricao_projeto?: SortOrder
    professores_atrelados?: SortOrder
    horas_extensao?: SortOrder
    tempo_previsto?: SortOrder
    ong_selecionada?: SortOrderInput | SortOrder
    categoria_ong?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type projetosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: projetosWhereInput | projetosWhereInput[]
    OR?: projetosWhereInput[]
    NOT?: projetosWhereInput | projetosWhereInput[]
    nome_projeto?: StringFilter<"projetos"> | string
    area_interesse?: StringFilter<"projetos"> | string
    soft_skills?: StringFilter<"projetos"> | string
    quantidade_alunos?: IntFilter<"projetos"> | number
    descricao_projeto?: StringFilter<"projetos"> | string
    professores_atrelados?: StringFilter<"projetos"> | string
    horas_extensao?: IntFilter<"projetos"> | number
    tempo_previsto?: IntFilter<"projetos"> | number
    ong_selecionada?: StringNullableFilter<"projetos"> | string | null
    categoria_ong?: StringNullableFilter<"projetos"> | string | null
    status?: StringFilter<"projetos"> | string
    created_at?: DateTimeFilter<"projetos"> | Date | string
    updated_at?: DateTimeFilter<"projetos"> | Date | string
    user_id?: UuidFilter<"projetos"> | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type projetosOrderByWithAggregationInput = {
    id?: SortOrder
    nome_projeto?: SortOrder
    area_interesse?: SortOrder
    soft_skills?: SortOrder
    quantidade_alunos?: SortOrder
    descricao_projeto?: SortOrder
    professores_atrelados?: SortOrder
    horas_extensao?: SortOrder
    tempo_previsto?: SortOrder
    ong_selecionada?: SortOrderInput | SortOrder
    categoria_ong?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    _count?: projetosCountOrderByAggregateInput
    _avg?: projetosAvgOrderByAggregateInput
    _max?: projetosMaxOrderByAggregateInput
    _min?: projetosMinOrderByAggregateInput
    _sum?: projetosSumOrderByAggregateInput
  }

  export type projetosScalarWhereWithAggregatesInput = {
    AND?: projetosScalarWhereWithAggregatesInput | projetosScalarWhereWithAggregatesInput[]
    OR?: projetosScalarWhereWithAggregatesInput[]
    NOT?: projetosScalarWhereWithAggregatesInput | projetosScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"projetos"> | string
    nome_projeto?: StringWithAggregatesFilter<"projetos"> | string
    area_interesse?: StringWithAggregatesFilter<"projetos"> | string
    soft_skills?: StringWithAggregatesFilter<"projetos"> | string
    quantidade_alunos?: IntWithAggregatesFilter<"projetos"> | number
    descricao_projeto?: StringWithAggregatesFilter<"projetos"> | string
    professores_atrelados?: StringWithAggregatesFilter<"projetos"> | string
    horas_extensao?: IntWithAggregatesFilter<"projetos"> | number
    tempo_previsto?: IntWithAggregatesFilter<"projetos"> | number
    ong_selecionada?: StringNullableWithAggregatesFilter<"projetos"> | string | null
    categoria_ong?: StringNullableWithAggregatesFilter<"projetos"> | string | null
    status?: StringWithAggregatesFilter<"projetos"> | string
    created_at?: DateTimeWithAggregatesFilter<"projetos"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"projetos"> | Date | string
    user_id?: UuidWithAggregatesFilter<"projetos"> | string
  }

  export type ongsWhereInput = {
    AND?: ongsWhereInput | ongsWhereInput[]
    OR?: ongsWhereInput[]
    NOT?: ongsWhereInput | ongsWhereInput[]
    id?: IntFilter<"ongs"> | number
    nome_ong?: StringNullableFilter<"ongs"> | string | null
    motivo_criacao?: StringNullableFilter<"ongs"> | string | null
    sobre?: StringNullableFilter<"ongs"> | string | null
    responsavel_contato?: StringNullableFilter<"ongs"> | string | null
    cnpj?: StringNullableFilter<"ongs"> | string | null
    email?: StringNullableFilter<"ongs"> | string | null
    quantidade_assistidos?: StringNullableFilter<"ongs"> | string | null
    metas?: StringNullableFilter<"ongs"> | string | null
    causa_organizacao?: StringNullableFilter<"ongs"> | string | null
    area?: StringNullableFilter<"ongs"> | string | null
    match_area?: StringNullableFilter<"ongs"> | string | null
    objetivos_ods?: StringNullableFilter<"ongs"> | string | null
    atividades_projeto_desenvolve?: StringNullableFilter<"ongs"> | string | null
    possui_voluntarios?: StringNullableFilter<"ongs"> | string | null
    possui_funcionarios?: StringNullableFilter<"ongs"> | string | null
    funcionamento?: StringNullableFilter<"ongs"> | string | null
    endereco?: StringNullableFilter<"ongs"> | string | null
    rpa?: StringNullableFilter<"ongs"> | string | null
    contato_divulgacao?: StringNullableFilter<"ongs"> | string | null
    redes_sociais?: StringNullableFilter<"ongs"> | string | null
    produto_social?: StringNullableFilter<"ongs"> | string | null
    mensagem_convite?: StringNullableFilter<"ongs"> | string | null
    serve_refeicao?: StringNullableFilter<"ongs"> | string | null
  }

  export type ongsOrderByWithRelationInput = {
    id?: SortOrder
    nome_ong?: SortOrderInput | SortOrder
    motivo_criacao?: SortOrderInput | SortOrder
    sobre?: SortOrderInput | SortOrder
    responsavel_contato?: SortOrderInput | SortOrder
    cnpj?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    quantidade_assistidos?: SortOrderInput | SortOrder
    metas?: SortOrderInput | SortOrder
    causa_organizacao?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    match_area?: SortOrderInput | SortOrder
    objetivos_ods?: SortOrderInput | SortOrder
    atividades_projeto_desenvolve?: SortOrderInput | SortOrder
    possui_voluntarios?: SortOrderInput | SortOrder
    possui_funcionarios?: SortOrderInput | SortOrder
    funcionamento?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    rpa?: SortOrderInput | SortOrder
    contato_divulgacao?: SortOrderInput | SortOrder
    redes_sociais?: SortOrderInput | SortOrder
    produto_social?: SortOrderInput | SortOrder
    mensagem_convite?: SortOrderInput | SortOrder
    serve_refeicao?: SortOrderInput | SortOrder
  }

  export type ongsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: ongsWhereInput | ongsWhereInput[]
    OR?: ongsWhereInput[]
    NOT?: ongsWhereInput | ongsWhereInput[]
    nome_ong?: StringNullableFilter<"ongs"> | string | null
    motivo_criacao?: StringNullableFilter<"ongs"> | string | null
    sobre?: StringNullableFilter<"ongs"> | string | null
    responsavel_contato?: StringNullableFilter<"ongs"> | string | null
    cnpj?: StringNullableFilter<"ongs"> | string | null
    quantidade_assistidos?: StringNullableFilter<"ongs"> | string | null
    metas?: StringNullableFilter<"ongs"> | string | null
    causa_organizacao?: StringNullableFilter<"ongs"> | string | null
    area?: StringNullableFilter<"ongs"> | string | null
    match_area?: StringNullableFilter<"ongs"> | string | null
    objetivos_ods?: StringNullableFilter<"ongs"> | string | null
    atividades_projeto_desenvolve?: StringNullableFilter<"ongs"> | string | null
    possui_voluntarios?: StringNullableFilter<"ongs"> | string | null
    possui_funcionarios?: StringNullableFilter<"ongs"> | string | null
    funcionamento?: StringNullableFilter<"ongs"> | string | null
    endereco?: StringNullableFilter<"ongs"> | string | null
    rpa?: StringNullableFilter<"ongs"> | string | null
    contato_divulgacao?: StringNullableFilter<"ongs"> | string | null
    redes_sociais?: StringNullableFilter<"ongs"> | string | null
    produto_social?: StringNullableFilter<"ongs"> | string | null
    mensagem_convite?: StringNullableFilter<"ongs"> | string | null
    serve_refeicao?: StringNullableFilter<"ongs"> | string | null
  }, "id" | "email">

  export type ongsOrderByWithAggregationInput = {
    id?: SortOrder
    nome_ong?: SortOrderInput | SortOrder
    motivo_criacao?: SortOrderInput | SortOrder
    sobre?: SortOrderInput | SortOrder
    responsavel_contato?: SortOrderInput | SortOrder
    cnpj?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    quantidade_assistidos?: SortOrderInput | SortOrder
    metas?: SortOrderInput | SortOrder
    causa_organizacao?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    match_area?: SortOrderInput | SortOrder
    objetivos_ods?: SortOrderInput | SortOrder
    atividades_projeto_desenvolve?: SortOrderInput | SortOrder
    possui_voluntarios?: SortOrderInput | SortOrder
    possui_funcionarios?: SortOrderInput | SortOrder
    funcionamento?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    rpa?: SortOrderInput | SortOrder
    contato_divulgacao?: SortOrderInput | SortOrder
    redes_sociais?: SortOrderInput | SortOrder
    produto_social?: SortOrderInput | SortOrder
    mensagem_convite?: SortOrderInput | SortOrder
    serve_refeicao?: SortOrderInput | SortOrder
    _count?: ongsCountOrderByAggregateInput
    _avg?: ongsAvgOrderByAggregateInput
    _max?: ongsMaxOrderByAggregateInput
    _min?: ongsMinOrderByAggregateInput
    _sum?: ongsSumOrderByAggregateInput
  }

  export type ongsScalarWhereWithAggregatesInput = {
    AND?: ongsScalarWhereWithAggregatesInput | ongsScalarWhereWithAggregatesInput[]
    OR?: ongsScalarWhereWithAggregatesInput[]
    NOT?: ongsScalarWhereWithAggregatesInput | ongsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ongs"> | number
    nome_ong?: StringNullableWithAggregatesFilter<"ongs"> | string | null
    motivo_criacao?: StringNullableWithAggregatesFilter<"ongs"> | string | null
    sobre?: StringNullableWithAggregatesFilter<"ongs"> | string | null
    responsavel_contato?: StringNullableWithAggregatesFilter<"ongs"> | string | null
    cnpj?: StringNullableWithAggregatesFilter<"ongs"> | string | null
    email?: StringNullableWithAggregatesFilter<"ongs"> | string | null
    quantidade_assistidos?: StringNullableWithAggregatesFilter<"ongs"> | string | null
    metas?: StringNullableWithAggregatesFilter<"ongs"> | string | null
    causa_organizacao?: StringNullableWithAggregatesFilter<"ongs"> | string | null
    area?: StringNullableWithAggregatesFilter<"ongs"> | string | null
    match_area?: StringNullableWithAggregatesFilter<"ongs"> | string | null
    objetivos_ods?: StringNullableWithAggregatesFilter<"ongs"> | string | null
    atividades_projeto_desenvolve?: StringNullableWithAggregatesFilter<"ongs"> | string | null
    possui_voluntarios?: StringNullableWithAggregatesFilter<"ongs"> | string | null
    possui_funcionarios?: StringNullableWithAggregatesFilter<"ongs"> | string | null
    funcionamento?: StringNullableWithAggregatesFilter<"ongs"> | string | null
    endereco?: StringNullableWithAggregatesFilter<"ongs"> | string | null
    rpa?: StringNullableWithAggregatesFilter<"ongs"> | string | null
    contato_divulgacao?: StringNullableWithAggregatesFilter<"ongs"> | string | null
    redes_sociais?: StringNullableWithAggregatesFilter<"ongs"> | string | null
    produto_social?: StringNullableWithAggregatesFilter<"ongs"> | string | null
    mensagem_convite?: StringNullableWithAggregatesFilter<"ongs"> | string | null
    serve_refeicao?: StringNullableWithAggregatesFilter<"ongs"> | string | null
  }

  export type user_verificationsCreateInput = {
    id?: string
    unique_string: Uint8Array
    salt?: Uint8Array | null
    created_at?: Date | string | null
    expires_at: Date | string
    user: usersCreateNestedOneWithoutVerificationsInput
  }

  export type user_verificationsUncheckedCreateInput = {
    id?: string
    user_id: string
    unique_string: Uint8Array
    salt?: Uint8Array | null
    created_at?: Date | string | null
    expires_at: Date | string
  }

  export type user_verificationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unique_string?: BytesFieldUpdateOperationsInput | Uint8Array
    salt?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutVerificationsNestedInput
  }

  export type user_verificationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    unique_string?: BytesFieldUpdateOperationsInput | Uint8Array
    salt?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_verificationsCreateManyInput = {
    id?: string
    user_id: string
    unique_string: Uint8Array
    salt?: Uint8Array | null
    created_at?: Date | string | null
    expires_at: Date | string
  }

  export type user_verificationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    unique_string?: BytesFieldUpdateOperationsInput | Uint8Array
    salt?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_verificationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    unique_string?: BytesFieldUpdateOperationsInput | Uint8Array
    salt?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    id?: string
    fullname: string
    email: string
    institution?: string | null
    password: string
    salt: string
    verified?: boolean | null
    description?: string | null
    photoUrl?: string | null
    projetos?: projetosCreateNestedManyWithoutUserInput
    verifications?: user_verificationsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    fullname: string
    email: string
    institution?: string | null
    password: string
    salt: string
    verified?: boolean | null
    description?: string | null
    photoUrl?: string | null
    projetos?: projetosUncheckedCreateNestedManyWithoutUserInput
    verifications?: user_verificationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    projetos?: projetosUpdateManyWithoutUserNestedInput
    verifications?: user_verificationsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    projetos?: projetosUncheckedUpdateManyWithoutUserNestedInput
    verifications?: user_verificationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    fullname: string
    email: string
    institution?: string | null
    password: string
    salt: string
    verified?: boolean | null
    description?: string | null
    photoUrl?: string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type projetosCreateInput = {
    id?: string
    nome_projeto: string
    area_interesse: string
    soft_skills: string
    quantidade_alunos: number
    descricao_projeto: string
    professores_atrelados: string
    horas_extensao: number
    tempo_previsto: number
    ong_selecionada?: string | null
    categoria_ong?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    user: usersCreateNestedOneWithoutProjetosInput
  }

  export type projetosUncheckedCreateInput = {
    id?: string
    nome_projeto: string
    area_interesse: string
    soft_skills: string
    quantidade_alunos: number
    descricao_projeto: string
    professores_atrelados: string
    horas_extensao: number
    tempo_previsto: number
    ong_selecionada?: string | null
    categoria_ong?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
  }

  export type projetosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome_projeto?: StringFieldUpdateOperationsInput | string
    area_interesse?: StringFieldUpdateOperationsInput | string
    soft_skills?: StringFieldUpdateOperationsInput | string
    quantidade_alunos?: IntFieldUpdateOperationsInput | number
    descricao_projeto?: StringFieldUpdateOperationsInput | string
    professores_atrelados?: StringFieldUpdateOperationsInput | string
    horas_extensao?: IntFieldUpdateOperationsInput | number
    tempo_previsto?: IntFieldUpdateOperationsInput | number
    ong_selecionada?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_ong?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutProjetosNestedInput
  }

  export type projetosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome_projeto?: StringFieldUpdateOperationsInput | string
    area_interesse?: StringFieldUpdateOperationsInput | string
    soft_skills?: StringFieldUpdateOperationsInput | string
    quantidade_alunos?: IntFieldUpdateOperationsInput | number
    descricao_projeto?: StringFieldUpdateOperationsInput | string
    professores_atrelados?: StringFieldUpdateOperationsInput | string
    horas_extensao?: IntFieldUpdateOperationsInput | number
    tempo_previsto?: IntFieldUpdateOperationsInput | number
    ong_selecionada?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_ong?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type projetosCreateManyInput = {
    id?: string
    nome_projeto: string
    area_interesse: string
    soft_skills: string
    quantidade_alunos: number
    descricao_projeto: string
    professores_atrelados: string
    horas_extensao: number
    tempo_previsto: number
    ong_selecionada?: string | null
    categoria_ong?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
  }

  export type projetosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome_projeto?: StringFieldUpdateOperationsInput | string
    area_interesse?: StringFieldUpdateOperationsInput | string
    soft_skills?: StringFieldUpdateOperationsInput | string
    quantidade_alunos?: IntFieldUpdateOperationsInput | number
    descricao_projeto?: StringFieldUpdateOperationsInput | string
    professores_atrelados?: StringFieldUpdateOperationsInput | string
    horas_extensao?: IntFieldUpdateOperationsInput | number
    tempo_previsto?: IntFieldUpdateOperationsInput | number
    ong_selecionada?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_ong?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projetosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome_projeto?: StringFieldUpdateOperationsInput | string
    area_interesse?: StringFieldUpdateOperationsInput | string
    soft_skills?: StringFieldUpdateOperationsInput | string
    quantidade_alunos?: IntFieldUpdateOperationsInput | number
    descricao_projeto?: StringFieldUpdateOperationsInput | string
    professores_atrelados?: StringFieldUpdateOperationsInput | string
    horas_extensao?: IntFieldUpdateOperationsInput | number
    tempo_previsto?: IntFieldUpdateOperationsInput | number
    ong_selecionada?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_ong?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type ongsCreateInput = {
    nome_ong?: string | null
    motivo_criacao?: string | null
    sobre?: string | null
    responsavel_contato?: string | null
    cnpj?: string | null
    email?: string | null
    quantidade_assistidos?: string | null
    metas?: string | null
    causa_organizacao?: string | null
    area?: string | null
    match_area?: string | null
    objetivos_ods?: string | null
    atividades_projeto_desenvolve?: string | null
    possui_voluntarios?: string | null
    possui_funcionarios?: string | null
    funcionamento?: string | null
    endereco?: string | null
    rpa?: string | null
    contato_divulgacao?: string | null
    redes_sociais?: string | null
    produto_social?: string | null
    mensagem_convite?: string | null
    serve_refeicao?: string | null
  }

  export type ongsUncheckedCreateInput = {
    id?: number
    nome_ong?: string | null
    motivo_criacao?: string | null
    sobre?: string | null
    responsavel_contato?: string | null
    cnpj?: string | null
    email?: string | null
    quantidade_assistidos?: string | null
    metas?: string | null
    causa_organizacao?: string | null
    area?: string | null
    match_area?: string | null
    objetivos_ods?: string | null
    atividades_projeto_desenvolve?: string | null
    possui_voluntarios?: string | null
    possui_funcionarios?: string | null
    funcionamento?: string | null
    endereco?: string | null
    rpa?: string | null
    contato_divulgacao?: string | null
    redes_sociais?: string | null
    produto_social?: string | null
    mensagem_convite?: string | null
    serve_refeicao?: string | null
  }

  export type ongsUpdateInput = {
    nome_ong?: NullableStringFieldUpdateOperationsInput | string | null
    motivo_criacao?: NullableStringFieldUpdateOperationsInput | string | null
    sobre?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel_contato?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade_assistidos?: NullableStringFieldUpdateOperationsInput | string | null
    metas?: NullableStringFieldUpdateOperationsInput | string | null
    causa_organizacao?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    match_area?: NullableStringFieldUpdateOperationsInput | string | null
    objetivos_ods?: NullableStringFieldUpdateOperationsInput | string | null
    atividades_projeto_desenvolve?: NullableStringFieldUpdateOperationsInput | string | null
    possui_voluntarios?: NullableStringFieldUpdateOperationsInput | string | null
    possui_funcionarios?: NullableStringFieldUpdateOperationsInput | string | null
    funcionamento?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    rpa?: NullableStringFieldUpdateOperationsInput | string | null
    contato_divulgacao?: NullableStringFieldUpdateOperationsInput | string | null
    redes_sociais?: NullableStringFieldUpdateOperationsInput | string | null
    produto_social?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem_convite?: NullableStringFieldUpdateOperationsInput | string | null
    serve_refeicao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ongsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_ong?: NullableStringFieldUpdateOperationsInput | string | null
    motivo_criacao?: NullableStringFieldUpdateOperationsInput | string | null
    sobre?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel_contato?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade_assistidos?: NullableStringFieldUpdateOperationsInput | string | null
    metas?: NullableStringFieldUpdateOperationsInput | string | null
    causa_organizacao?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    match_area?: NullableStringFieldUpdateOperationsInput | string | null
    objetivos_ods?: NullableStringFieldUpdateOperationsInput | string | null
    atividades_projeto_desenvolve?: NullableStringFieldUpdateOperationsInput | string | null
    possui_voluntarios?: NullableStringFieldUpdateOperationsInput | string | null
    possui_funcionarios?: NullableStringFieldUpdateOperationsInput | string | null
    funcionamento?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    rpa?: NullableStringFieldUpdateOperationsInput | string | null
    contato_divulgacao?: NullableStringFieldUpdateOperationsInput | string | null
    redes_sociais?: NullableStringFieldUpdateOperationsInput | string | null
    produto_social?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem_convite?: NullableStringFieldUpdateOperationsInput | string | null
    serve_refeicao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ongsCreateManyInput = {
    id?: number
    nome_ong?: string | null
    motivo_criacao?: string | null
    sobre?: string | null
    responsavel_contato?: string | null
    cnpj?: string | null
    email?: string | null
    quantidade_assistidos?: string | null
    metas?: string | null
    causa_organizacao?: string | null
    area?: string | null
    match_area?: string | null
    objetivos_ods?: string | null
    atividades_projeto_desenvolve?: string | null
    possui_voluntarios?: string | null
    possui_funcionarios?: string | null
    funcionamento?: string | null
    endereco?: string | null
    rpa?: string | null
    contato_divulgacao?: string | null
    redes_sociais?: string | null
    produto_social?: string | null
    mensagem_convite?: string | null
    serve_refeicao?: string | null
  }

  export type ongsUpdateManyMutationInput = {
    nome_ong?: NullableStringFieldUpdateOperationsInput | string | null
    motivo_criacao?: NullableStringFieldUpdateOperationsInput | string | null
    sobre?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel_contato?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade_assistidos?: NullableStringFieldUpdateOperationsInput | string | null
    metas?: NullableStringFieldUpdateOperationsInput | string | null
    causa_organizacao?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    match_area?: NullableStringFieldUpdateOperationsInput | string | null
    objetivos_ods?: NullableStringFieldUpdateOperationsInput | string | null
    atividades_projeto_desenvolve?: NullableStringFieldUpdateOperationsInput | string | null
    possui_voluntarios?: NullableStringFieldUpdateOperationsInput | string | null
    possui_funcionarios?: NullableStringFieldUpdateOperationsInput | string | null
    funcionamento?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    rpa?: NullableStringFieldUpdateOperationsInput | string | null
    contato_divulgacao?: NullableStringFieldUpdateOperationsInput | string | null
    redes_sociais?: NullableStringFieldUpdateOperationsInput | string | null
    produto_social?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem_convite?: NullableStringFieldUpdateOperationsInput | string | null
    serve_refeicao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ongsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_ong?: NullableStringFieldUpdateOperationsInput | string | null
    motivo_criacao?: NullableStringFieldUpdateOperationsInput | string | null
    sobre?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel_contato?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade_assistidos?: NullableStringFieldUpdateOperationsInput | string | null
    metas?: NullableStringFieldUpdateOperationsInput | string | null
    causa_organizacao?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    match_area?: NullableStringFieldUpdateOperationsInput | string | null
    objetivos_ods?: NullableStringFieldUpdateOperationsInput | string | null
    atividades_projeto_desenvolve?: NullableStringFieldUpdateOperationsInput | string | null
    possui_voluntarios?: NullableStringFieldUpdateOperationsInput | string | null
    possui_funcionarios?: NullableStringFieldUpdateOperationsInput | string | null
    funcionamento?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    rpa?: NullableStringFieldUpdateOperationsInput | string | null
    contato_divulgacao?: NullableStringFieldUpdateOperationsInput | string | null
    redes_sociais?: NullableStringFieldUpdateOperationsInput | string | null
    produto_social?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem_convite?: NullableStringFieldUpdateOperationsInput | string | null
    serve_refeicao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type user_verificationsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    unique_string?: SortOrder
    salt?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
  }

  export type user_verificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    unique_string?: SortOrder
    salt?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
  }

  export type user_verificationsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    unique_string?: SortOrder
    salt?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ProjetosListRelationFilter = {
    every?: projetosWhereInput
    some?: projetosWhereInput
    none?: projetosWhereInput
  }

  export type User_verificationsListRelationFilter = {
    every?: user_verificationsWhereInput
    some?: user_verificationsWhereInput
    none?: user_verificationsWhereInput
  }

  export type projetosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_verificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    institution?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    verified?: SortOrder
    description?: SortOrder
    photoUrl?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    institution?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    verified?: SortOrder
    description?: SortOrder
    photoUrl?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    institution?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    verified?: SortOrder
    description?: SortOrder
    photoUrl?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type projetosCountOrderByAggregateInput = {
    id?: SortOrder
    nome_projeto?: SortOrder
    area_interesse?: SortOrder
    soft_skills?: SortOrder
    quantidade_alunos?: SortOrder
    descricao_projeto?: SortOrder
    professores_atrelados?: SortOrder
    horas_extensao?: SortOrder
    tempo_previsto?: SortOrder
    ong_selecionada?: SortOrder
    categoria_ong?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type projetosAvgOrderByAggregateInput = {
    quantidade_alunos?: SortOrder
    horas_extensao?: SortOrder
    tempo_previsto?: SortOrder
  }

  export type projetosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome_projeto?: SortOrder
    area_interesse?: SortOrder
    soft_skills?: SortOrder
    quantidade_alunos?: SortOrder
    descricao_projeto?: SortOrder
    professores_atrelados?: SortOrder
    horas_extensao?: SortOrder
    tempo_previsto?: SortOrder
    ong_selecionada?: SortOrder
    categoria_ong?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type projetosMinOrderByAggregateInput = {
    id?: SortOrder
    nome_projeto?: SortOrder
    area_interesse?: SortOrder
    soft_skills?: SortOrder
    quantidade_alunos?: SortOrder
    descricao_projeto?: SortOrder
    professores_atrelados?: SortOrder
    horas_extensao?: SortOrder
    tempo_previsto?: SortOrder
    ong_selecionada?: SortOrder
    categoria_ong?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type projetosSumOrderByAggregateInput = {
    quantidade_alunos?: SortOrder
    horas_extensao?: SortOrder
    tempo_previsto?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ongsCountOrderByAggregateInput = {
    id?: SortOrder
    nome_ong?: SortOrder
    motivo_criacao?: SortOrder
    sobre?: SortOrder
    responsavel_contato?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    quantidade_assistidos?: SortOrder
    metas?: SortOrder
    causa_organizacao?: SortOrder
    area?: SortOrder
    match_area?: SortOrder
    objetivos_ods?: SortOrder
    atividades_projeto_desenvolve?: SortOrder
    possui_voluntarios?: SortOrder
    possui_funcionarios?: SortOrder
    funcionamento?: SortOrder
    endereco?: SortOrder
    rpa?: SortOrder
    contato_divulgacao?: SortOrder
    redes_sociais?: SortOrder
    produto_social?: SortOrder
    mensagem_convite?: SortOrder
    serve_refeicao?: SortOrder
  }

  export type ongsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ongsMaxOrderByAggregateInput = {
    id?: SortOrder
    nome_ong?: SortOrder
    motivo_criacao?: SortOrder
    sobre?: SortOrder
    responsavel_contato?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    quantidade_assistidos?: SortOrder
    metas?: SortOrder
    causa_organizacao?: SortOrder
    area?: SortOrder
    match_area?: SortOrder
    objetivos_ods?: SortOrder
    atividades_projeto_desenvolve?: SortOrder
    possui_voluntarios?: SortOrder
    possui_funcionarios?: SortOrder
    funcionamento?: SortOrder
    endereco?: SortOrder
    rpa?: SortOrder
    contato_divulgacao?: SortOrder
    redes_sociais?: SortOrder
    produto_social?: SortOrder
    mensagem_convite?: SortOrder
    serve_refeicao?: SortOrder
  }

  export type ongsMinOrderByAggregateInput = {
    id?: SortOrder
    nome_ong?: SortOrder
    motivo_criacao?: SortOrder
    sobre?: SortOrder
    responsavel_contato?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    quantidade_assistidos?: SortOrder
    metas?: SortOrder
    causa_organizacao?: SortOrder
    area?: SortOrder
    match_area?: SortOrder
    objetivos_ods?: SortOrder
    atividades_projeto_desenvolve?: SortOrder
    possui_voluntarios?: SortOrder
    possui_funcionarios?: SortOrder
    funcionamento?: SortOrder
    endereco?: SortOrder
    rpa?: SortOrder
    contato_divulgacao?: SortOrder
    redes_sociais?: SortOrder
    produto_social?: SortOrder
    mensagem_convite?: SortOrder
    serve_refeicao?: SortOrder
  }

  export type ongsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersCreateNestedOneWithoutVerificationsInput = {
    create?: XOR<usersCreateWithoutVerificationsInput, usersUncheckedCreateWithoutVerificationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutVerificationsInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Uint8Array
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersUpdateOneRequiredWithoutVerificationsNestedInput = {
    create?: XOR<usersCreateWithoutVerificationsInput, usersUncheckedCreateWithoutVerificationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutVerificationsInput
    upsert?: usersUpsertWithoutVerificationsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutVerificationsInput, usersUpdateWithoutVerificationsInput>, usersUncheckedUpdateWithoutVerificationsInput>
  }

  export type projetosCreateNestedManyWithoutUserInput = {
    create?: XOR<projetosCreateWithoutUserInput, projetosUncheckedCreateWithoutUserInput> | projetosCreateWithoutUserInput[] | projetosUncheckedCreateWithoutUserInput[]
    connectOrCreate?: projetosCreateOrConnectWithoutUserInput | projetosCreateOrConnectWithoutUserInput[]
    createMany?: projetosCreateManyUserInputEnvelope
    connect?: projetosWhereUniqueInput | projetosWhereUniqueInput[]
  }

  export type user_verificationsCreateNestedManyWithoutUserInput = {
    create?: XOR<user_verificationsCreateWithoutUserInput, user_verificationsUncheckedCreateWithoutUserInput> | user_verificationsCreateWithoutUserInput[] | user_verificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_verificationsCreateOrConnectWithoutUserInput | user_verificationsCreateOrConnectWithoutUserInput[]
    createMany?: user_verificationsCreateManyUserInputEnvelope
    connect?: user_verificationsWhereUniqueInput | user_verificationsWhereUniqueInput[]
  }

  export type projetosUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<projetosCreateWithoutUserInput, projetosUncheckedCreateWithoutUserInput> | projetosCreateWithoutUserInput[] | projetosUncheckedCreateWithoutUserInput[]
    connectOrCreate?: projetosCreateOrConnectWithoutUserInput | projetosCreateOrConnectWithoutUserInput[]
    createMany?: projetosCreateManyUserInputEnvelope
    connect?: projetosWhereUniqueInput | projetosWhereUniqueInput[]
  }

  export type user_verificationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_verificationsCreateWithoutUserInput, user_verificationsUncheckedCreateWithoutUserInput> | user_verificationsCreateWithoutUserInput[] | user_verificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_verificationsCreateOrConnectWithoutUserInput | user_verificationsCreateOrConnectWithoutUserInput[]
    createMany?: user_verificationsCreateManyUserInputEnvelope
    connect?: user_verificationsWhereUniqueInput | user_verificationsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type projetosUpdateManyWithoutUserNestedInput = {
    create?: XOR<projetosCreateWithoutUserInput, projetosUncheckedCreateWithoutUserInput> | projetosCreateWithoutUserInput[] | projetosUncheckedCreateWithoutUserInput[]
    connectOrCreate?: projetosCreateOrConnectWithoutUserInput | projetosCreateOrConnectWithoutUserInput[]
    upsert?: projetosUpsertWithWhereUniqueWithoutUserInput | projetosUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: projetosCreateManyUserInputEnvelope
    set?: projetosWhereUniqueInput | projetosWhereUniqueInput[]
    disconnect?: projetosWhereUniqueInput | projetosWhereUniqueInput[]
    delete?: projetosWhereUniqueInput | projetosWhereUniqueInput[]
    connect?: projetosWhereUniqueInput | projetosWhereUniqueInput[]
    update?: projetosUpdateWithWhereUniqueWithoutUserInput | projetosUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: projetosUpdateManyWithWhereWithoutUserInput | projetosUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: projetosScalarWhereInput | projetosScalarWhereInput[]
  }

  export type user_verificationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_verificationsCreateWithoutUserInput, user_verificationsUncheckedCreateWithoutUserInput> | user_verificationsCreateWithoutUserInput[] | user_verificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_verificationsCreateOrConnectWithoutUserInput | user_verificationsCreateOrConnectWithoutUserInput[]
    upsert?: user_verificationsUpsertWithWhereUniqueWithoutUserInput | user_verificationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_verificationsCreateManyUserInputEnvelope
    set?: user_verificationsWhereUniqueInput | user_verificationsWhereUniqueInput[]
    disconnect?: user_verificationsWhereUniqueInput | user_verificationsWhereUniqueInput[]
    delete?: user_verificationsWhereUniqueInput | user_verificationsWhereUniqueInput[]
    connect?: user_verificationsWhereUniqueInput | user_verificationsWhereUniqueInput[]
    update?: user_verificationsUpdateWithWhereUniqueWithoutUserInput | user_verificationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_verificationsUpdateManyWithWhereWithoutUserInput | user_verificationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_verificationsScalarWhereInput | user_verificationsScalarWhereInput[]
  }

  export type projetosUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<projetosCreateWithoutUserInput, projetosUncheckedCreateWithoutUserInput> | projetosCreateWithoutUserInput[] | projetosUncheckedCreateWithoutUserInput[]
    connectOrCreate?: projetosCreateOrConnectWithoutUserInput | projetosCreateOrConnectWithoutUserInput[]
    upsert?: projetosUpsertWithWhereUniqueWithoutUserInput | projetosUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: projetosCreateManyUserInputEnvelope
    set?: projetosWhereUniqueInput | projetosWhereUniqueInput[]
    disconnect?: projetosWhereUniqueInput | projetosWhereUniqueInput[]
    delete?: projetosWhereUniqueInput | projetosWhereUniqueInput[]
    connect?: projetosWhereUniqueInput | projetosWhereUniqueInput[]
    update?: projetosUpdateWithWhereUniqueWithoutUserInput | projetosUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: projetosUpdateManyWithWhereWithoutUserInput | projetosUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: projetosScalarWhereInput | projetosScalarWhereInput[]
  }

  export type user_verificationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_verificationsCreateWithoutUserInput, user_verificationsUncheckedCreateWithoutUserInput> | user_verificationsCreateWithoutUserInput[] | user_verificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_verificationsCreateOrConnectWithoutUserInput | user_verificationsCreateOrConnectWithoutUserInput[]
    upsert?: user_verificationsUpsertWithWhereUniqueWithoutUserInput | user_verificationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_verificationsCreateManyUserInputEnvelope
    set?: user_verificationsWhereUniqueInput | user_verificationsWhereUniqueInput[]
    disconnect?: user_verificationsWhereUniqueInput | user_verificationsWhereUniqueInput[]
    delete?: user_verificationsWhereUniqueInput | user_verificationsWhereUniqueInput[]
    connect?: user_verificationsWhereUniqueInput | user_verificationsWhereUniqueInput[]
    update?: user_verificationsUpdateWithWhereUniqueWithoutUserInput | user_verificationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_verificationsUpdateManyWithWhereWithoutUserInput | user_verificationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_verificationsScalarWhereInput | user_verificationsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutProjetosInput = {
    create?: XOR<usersCreateWithoutProjetosInput, usersUncheckedCreateWithoutProjetosInput>
    connectOrCreate?: usersCreateOrConnectWithoutProjetosInput
    connect?: usersWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUpdateOneRequiredWithoutProjetosNestedInput = {
    create?: XOR<usersCreateWithoutProjetosInput, usersUncheckedCreateWithoutProjetosInput>
    connectOrCreate?: usersCreateOrConnectWithoutProjetosInput
    upsert?: usersUpsertWithoutProjetosInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProjetosInput, usersUpdateWithoutProjetosInput>, usersUncheckedUpdateWithoutProjetosInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type usersCreateWithoutVerificationsInput = {
    id?: string
    fullname: string
    email: string
    institution?: string | null
    password: string
    salt: string
    verified?: boolean | null
    description?: string | null
    photoUrl?: string | null
    projetos?: projetosCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutVerificationsInput = {
    id?: string
    fullname: string
    email: string
    institution?: string | null
    password: string
    salt: string
    verified?: boolean | null
    description?: string | null
    photoUrl?: string | null
    projetos?: projetosUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutVerificationsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutVerificationsInput, usersUncheckedCreateWithoutVerificationsInput>
  }

  export type usersUpsertWithoutVerificationsInput = {
    update: XOR<usersUpdateWithoutVerificationsInput, usersUncheckedUpdateWithoutVerificationsInput>
    create: XOR<usersCreateWithoutVerificationsInput, usersUncheckedCreateWithoutVerificationsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutVerificationsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutVerificationsInput, usersUncheckedUpdateWithoutVerificationsInput>
  }

  export type usersUpdateWithoutVerificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    projetos?: projetosUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutVerificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    projetos?: projetosUncheckedUpdateManyWithoutUserNestedInput
  }

  export type projetosCreateWithoutUserInput = {
    id?: string
    nome_projeto: string
    area_interesse: string
    soft_skills: string
    quantidade_alunos: number
    descricao_projeto: string
    professores_atrelados: string
    horas_extensao: number
    tempo_previsto: number
    ong_selecionada?: string | null
    categoria_ong?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type projetosUncheckedCreateWithoutUserInput = {
    id?: string
    nome_projeto: string
    area_interesse: string
    soft_skills: string
    quantidade_alunos: number
    descricao_projeto: string
    professores_atrelados: string
    horas_extensao: number
    tempo_previsto: number
    ong_selecionada?: string | null
    categoria_ong?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type projetosCreateOrConnectWithoutUserInput = {
    where: projetosWhereUniqueInput
    create: XOR<projetosCreateWithoutUserInput, projetosUncheckedCreateWithoutUserInput>
  }

  export type projetosCreateManyUserInputEnvelope = {
    data: projetosCreateManyUserInput | projetosCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type user_verificationsCreateWithoutUserInput = {
    id?: string
    unique_string: Uint8Array
    salt?: Uint8Array | null
    created_at?: Date | string | null
    expires_at: Date | string
  }

  export type user_verificationsUncheckedCreateWithoutUserInput = {
    id?: string
    unique_string: Uint8Array
    salt?: Uint8Array | null
    created_at?: Date | string | null
    expires_at: Date | string
  }

  export type user_verificationsCreateOrConnectWithoutUserInput = {
    where: user_verificationsWhereUniqueInput
    create: XOR<user_verificationsCreateWithoutUserInput, user_verificationsUncheckedCreateWithoutUserInput>
  }

  export type user_verificationsCreateManyUserInputEnvelope = {
    data: user_verificationsCreateManyUserInput | user_verificationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type projetosUpsertWithWhereUniqueWithoutUserInput = {
    where: projetosWhereUniqueInput
    update: XOR<projetosUpdateWithoutUserInput, projetosUncheckedUpdateWithoutUserInput>
    create: XOR<projetosCreateWithoutUserInput, projetosUncheckedCreateWithoutUserInput>
  }

  export type projetosUpdateWithWhereUniqueWithoutUserInput = {
    where: projetosWhereUniqueInput
    data: XOR<projetosUpdateWithoutUserInput, projetosUncheckedUpdateWithoutUserInput>
  }

  export type projetosUpdateManyWithWhereWithoutUserInput = {
    where: projetosScalarWhereInput
    data: XOR<projetosUpdateManyMutationInput, projetosUncheckedUpdateManyWithoutUserInput>
  }

  export type projetosScalarWhereInput = {
    AND?: projetosScalarWhereInput | projetosScalarWhereInput[]
    OR?: projetosScalarWhereInput[]
    NOT?: projetosScalarWhereInput | projetosScalarWhereInput[]
    id?: UuidFilter<"projetos"> | string
    nome_projeto?: StringFilter<"projetos"> | string
    area_interesse?: StringFilter<"projetos"> | string
    soft_skills?: StringFilter<"projetos"> | string
    quantidade_alunos?: IntFilter<"projetos"> | number
    descricao_projeto?: StringFilter<"projetos"> | string
    professores_atrelados?: StringFilter<"projetos"> | string
    horas_extensao?: IntFilter<"projetos"> | number
    tempo_previsto?: IntFilter<"projetos"> | number
    ong_selecionada?: StringNullableFilter<"projetos"> | string | null
    categoria_ong?: StringNullableFilter<"projetos"> | string | null
    status?: StringFilter<"projetos"> | string
    created_at?: DateTimeFilter<"projetos"> | Date | string
    updated_at?: DateTimeFilter<"projetos"> | Date | string
    user_id?: UuidFilter<"projetos"> | string
  }

  export type user_verificationsUpsertWithWhereUniqueWithoutUserInput = {
    where: user_verificationsWhereUniqueInput
    update: XOR<user_verificationsUpdateWithoutUserInput, user_verificationsUncheckedUpdateWithoutUserInput>
    create: XOR<user_verificationsCreateWithoutUserInput, user_verificationsUncheckedCreateWithoutUserInput>
  }

  export type user_verificationsUpdateWithWhereUniqueWithoutUserInput = {
    where: user_verificationsWhereUniqueInput
    data: XOR<user_verificationsUpdateWithoutUserInput, user_verificationsUncheckedUpdateWithoutUserInput>
  }

  export type user_verificationsUpdateManyWithWhereWithoutUserInput = {
    where: user_verificationsScalarWhereInput
    data: XOR<user_verificationsUpdateManyMutationInput, user_verificationsUncheckedUpdateManyWithoutUserInput>
  }

  export type user_verificationsScalarWhereInput = {
    AND?: user_verificationsScalarWhereInput | user_verificationsScalarWhereInput[]
    OR?: user_verificationsScalarWhereInput[]
    NOT?: user_verificationsScalarWhereInput | user_verificationsScalarWhereInput[]
    id?: UuidFilter<"user_verifications"> | string
    user_id?: UuidFilter<"user_verifications"> | string
    unique_string?: BytesFilter<"user_verifications"> | Uint8Array
    salt?: BytesNullableFilter<"user_verifications"> | Uint8Array | null
    created_at?: DateTimeNullableFilter<"user_verifications"> | Date | string | null
    expires_at?: DateTimeFilter<"user_verifications"> | Date | string
  }

  export type usersCreateWithoutProjetosInput = {
    id?: string
    fullname: string
    email: string
    institution?: string | null
    password: string
    salt: string
    verified?: boolean | null
    description?: string | null
    photoUrl?: string | null
    verifications?: user_verificationsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutProjetosInput = {
    id?: string
    fullname: string
    email: string
    institution?: string | null
    password: string
    salt: string
    verified?: boolean | null
    description?: string | null
    photoUrl?: string | null
    verifications?: user_verificationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutProjetosInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProjetosInput, usersUncheckedCreateWithoutProjetosInput>
  }

  export type usersUpsertWithoutProjetosInput = {
    update: XOR<usersUpdateWithoutProjetosInput, usersUncheckedUpdateWithoutProjetosInput>
    create: XOR<usersCreateWithoutProjetosInput, usersUncheckedCreateWithoutProjetosInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProjetosInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProjetosInput, usersUncheckedUpdateWithoutProjetosInput>
  }

  export type usersUpdateWithoutProjetosInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verifications?: user_verificationsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutProjetosInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verifications?: user_verificationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type projetosCreateManyUserInput = {
    id?: string
    nome_projeto: string
    area_interesse: string
    soft_skills: string
    quantidade_alunos: number
    descricao_projeto: string
    professores_atrelados: string
    horas_extensao: number
    tempo_previsto: number
    ong_selecionada?: string | null
    categoria_ong?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_verificationsCreateManyUserInput = {
    id?: string
    unique_string: Uint8Array
    salt?: Uint8Array | null
    created_at?: Date | string | null
    expires_at: Date | string
  }

  export type projetosUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome_projeto?: StringFieldUpdateOperationsInput | string
    area_interesse?: StringFieldUpdateOperationsInput | string
    soft_skills?: StringFieldUpdateOperationsInput | string
    quantidade_alunos?: IntFieldUpdateOperationsInput | number
    descricao_projeto?: StringFieldUpdateOperationsInput | string
    professores_atrelados?: StringFieldUpdateOperationsInput | string
    horas_extensao?: IntFieldUpdateOperationsInput | number
    tempo_previsto?: IntFieldUpdateOperationsInput | number
    ong_selecionada?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_ong?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projetosUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome_projeto?: StringFieldUpdateOperationsInput | string
    area_interesse?: StringFieldUpdateOperationsInput | string
    soft_skills?: StringFieldUpdateOperationsInput | string
    quantidade_alunos?: IntFieldUpdateOperationsInput | number
    descricao_projeto?: StringFieldUpdateOperationsInput | string
    professores_atrelados?: StringFieldUpdateOperationsInput | string
    horas_extensao?: IntFieldUpdateOperationsInput | number
    tempo_previsto?: IntFieldUpdateOperationsInput | number
    ong_selecionada?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_ong?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projetosUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome_projeto?: StringFieldUpdateOperationsInput | string
    area_interesse?: StringFieldUpdateOperationsInput | string
    soft_skills?: StringFieldUpdateOperationsInput | string
    quantidade_alunos?: IntFieldUpdateOperationsInput | number
    descricao_projeto?: StringFieldUpdateOperationsInput | string
    professores_atrelados?: StringFieldUpdateOperationsInput | string
    horas_extensao?: IntFieldUpdateOperationsInput | number
    tempo_previsto?: IntFieldUpdateOperationsInput | number
    ong_selecionada?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_ong?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_verificationsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    unique_string?: BytesFieldUpdateOperationsInput | Uint8Array
    salt?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_verificationsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    unique_string?: BytesFieldUpdateOperationsInput | Uint8Array
    salt?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_verificationsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    unique_string?: BytesFieldUpdateOperationsInput | Uint8Array
    salt?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
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