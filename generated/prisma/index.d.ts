
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
 * Model Ong
 * 
 */
export type Ong = $Result.DefaultSelection<Prisma.$OngPayload>
/**
 * Model tabela_ongs
 * 
 */
export type tabela_ongs = $Result.DefaultSelection<Prisma.$tabela_ongsPayload>

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
   * `prisma.ong`: Exposes CRUD operations for the **Ong** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ongs
    * const ongs = await prisma.ong.findMany()
    * ```
    */
  get ong(): Prisma.OngDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tabela_ongs`: Exposes CRUD operations for the **tabela_ongs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tabela_ongs
    * const tabela_ongs = await prisma.tabela_ongs.findMany()
    * ```
    */
  get tabela_ongs(): Prisma.tabela_ongsDelegate<ExtArgs, ClientOptions>;
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
    Ong: 'Ong',
    tabela_ongs: 'tabela_ongs'
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
      modelProps: "user_verifications" | "users" | "projetos" | "ong" | "tabela_ongs"
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
      Ong: {
        payload: Prisma.$OngPayload<ExtArgs>
        fields: Prisma.OngFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OngFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OngFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload>
          }
          findFirst: {
            args: Prisma.OngFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OngFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload>
          }
          findMany: {
            args: Prisma.OngFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload>[]
          }
          create: {
            args: Prisma.OngCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload>
          }
          createMany: {
            args: Prisma.OngCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OngCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload>[]
          }
          delete: {
            args: Prisma.OngDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload>
          }
          update: {
            args: Prisma.OngUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload>
          }
          deleteMany: {
            args: Prisma.OngDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OngUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OngUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload>[]
          }
          upsert: {
            args: Prisma.OngUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload>
          }
          aggregate: {
            args: Prisma.OngAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOng>
          }
          groupBy: {
            args: Prisma.OngGroupByArgs<ExtArgs>
            result: $Utils.Optional<OngGroupByOutputType>[]
          }
          count: {
            args: Prisma.OngCountArgs<ExtArgs>
            result: $Utils.Optional<OngCountAggregateOutputType> | number
          }
        }
      }
      tabela_ongs: {
        payload: Prisma.$tabela_ongsPayload<ExtArgs>
        fields: Prisma.tabela_ongsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tabela_ongsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tabela_ongsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tabela_ongsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tabela_ongsPayload>
          }
          findFirst: {
            args: Prisma.tabela_ongsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tabela_ongsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tabela_ongsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tabela_ongsPayload>
          }
          findMany: {
            args: Prisma.tabela_ongsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tabela_ongsPayload>[]
          }
          create: {
            args: Prisma.tabela_ongsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tabela_ongsPayload>
          }
          createMany: {
            args: Prisma.tabela_ongsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tabela_ongsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tabela_ongsPayload>[]
          }
          delete: {
            args: Prisma.tabela_ongsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tabela_ongsPayload>
          }
          update: {
            args: Prisma.tabela_ongsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tabela_ongsPayload>
          }
          deleteMany: {
            args: Prisma.tabela_ongsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tabela_ongsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tabela_ongsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tabela_ongsPayload>[]
          }
          upsert: {
            args: Prisma.tabela_ongsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tabela_ongsPayload>
          }
          aggregate: {
            args: Prisma.Tabela_ongsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTabela_ongs>
          }
          groupBy: {
            args: Prisma.tabela_ongsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tabela_ongsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tabela_ongsCountArgs<ExtArgs>
            result: $Utils.Optional<Tabela_ongsCountAggregateOutputType> | number
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
    ong?: OngOmit
    tabela_ongs?: tabela_ongsOmit
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
   * Model Ong
   */

  export type AggregateOng = {
    _count: OngCountAggregateOutputType | null
    _avg: OngAvgAggregateOutputType | null
    _sum: OngSumAggregateOutputType | null
    _min: OngMinAggregateOutputType | null
    _max: OngMaxAggregateOutputType | null
  }

  export type OngAvgAggregateOutputType = {
    RPA: number | null
    id: number | null
  }

  export type OngSumAggregateOutputType = {
    RPA: number | null
    id: number | null
  }

  export type OngMinAggregateOutputType = {
    nome_ong: string | null
    Motivo_da_cria__o_do_projeto_: string | null
    Sobre: string | null
    Respons_vel_para_contato: string | null
    CNPJ_: string | null
    quantidade_pessoas_assistidas: string | null
    metas: string | null
    Causa_da_Organiza__o_: string | null
    area: string | null
    match_area: string | null
    objetivos_ods: string | null
    Atividades_que_o_projeto_desenvolve_: string | null
    possui_funcionarios: string | null
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_: string | null
    Funcionamento__da_organiza__o: string | null
    Endere_o: string | null
    RPA: number | null
    contato_divulgacao: string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__: string | null
    possui_produto_social: string | null
    mensagem_para_voluntarios: string | null
    serve_refeicoes_cozinha_propria: string | null
    id: number | null
  }

  export type OngMaxAggregateOutputType = {
    nome_ong: string | null
    Motivo_da_cria__o_do_projeto_: string | null
    Sobre: string | null
    Respons_vel_para_contato: string | null
    CNPJ_: string | null
    quantidade_pessoas_assistidas: string | null
    metas: string | null
    Causa_da_Organiza__o_: string | null
    area: string | null
    match_area: string | null
    objetivos_ods: string | null
    Atividades_que_o_projeto_desenvolve_: string | null
    possui_funcionarios: string | null
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_: string | null
    Funcionamento__da_organiza__o: string | null
    Endere_o: string | null
    RPA: number | null
    contato_divulgacao: string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__: string | null
    possui_produto_social: string | null
    mensagem_para_voluntarios: string | null
    serve_refeicoes_cozinha_propria: string | null
    id: number | null
  }

  export type OngCountAggregateOutputType = {
    nome_ong: number
    Motivo_da_cria__o_do_projeto_: number
    Sobre: number
    Respons_vel_para_contato: number
    CNPJ_: number
    quantidade_pessoas_assistidas: number
    metas: number
    Causa_da_Organiza__o_: number
    area: number
    match_area: number
    objetivos_ods: number
    Atividades_que_o_projeto_desenvolve_: number
    possui_funcionarios: number
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_: number
    Funcionamento__da_organiza__o: number
    Endere_o: number
    RPA: number
    contato_divulgacao: number
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__: number
    possui_produto_social: number
    mensagem_para_voluntarios: number
    serve_refeicoes_cozinha_propria: number
    id: number
    _all: number
  }


  export type OngAvgAggregateInputType = {
    RPA?: true
    id?: true
  }

  export type OngSumAggregateInputType = {
    RPA?: true
    id?: true
  }

  export type OngMinAggregateInputType = {
    nome_ong?: true
    Motivo_da_cria__o_do_projeto_?: true
    Sobre?: true
    Respons_vel_para_contato?: true
    CNPJ_?: true
    quantidade_pessoas_assistidas?: true
    metas?: true
    Causa_da_Organiza__o_?: true
    area?: true
    match_area?: true
    objetivos_ods?: true
    Atividades_que_o_projeto_desenvolve_?: true
    possui_funcionarios?: true
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: true
    Funcionamento__da_organiza__o?: true
    Endere_o?: true
    RPA?: true
    contato_divulgacao?: true
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: true
    possui_produto_social?: true
    mensagem_para_voluntarios?: true
    serve_refeicoes_cozinha_propria?: true
    id?: true
  }

  export type OngMaxAggregateInputType = {
    nome_ong?: true
    Motivo_da_cria__o_do_projeto_?: true
    Sobre?: true
    Respons_vel_para_contato?: true
    CNPJ_?: true
    quantidade_pessoas_assistidas?: true
    metas?: true
    Causa_da_Organiza__o_?: true
    area?: true
    match_area?: true
    objetivos_ods?: true
    Atividades_que_o_projeto_desenvolve_?: true
    possui_funcionarios?: true
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: true
    Funcionamento__da_organiza__o?: true
    Endere_o?: true
    RPA?: true
    contato_divulgacao?: true
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: true
    possui_produto_social?: true
    mensagem_para_voluntarios?: true
    serve_refeicoes_cozinha_propria?: true
    id?: true
  }

  export type OngCountAggregateInputType = {
    nome_ong?: true
    Motivo_da_cria__o_do_projeto_?: true
    Sobre?: true
    Respons_vel_para_contato?: true
    CNPJ_?: true
    quantidade_pessoas_assistidas?: true
    metas?: true
    Causa_da_Organiza__o_?: true
    area?: true
    match_area?: true
    objetivos_ods?: true
    Atividades_que_o_projeto_desenvolve_?: true
    possui_funcionarios?: true
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: true
    Funcionamento__da_organiza__o?: true
    Endere_o?: true
    RPA?: true
    contato_divulgacao?: true
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: true
    possui_produto_social?: true
    mensagem_para_voluntarios?: true
    serve_refeicoes_cozinha_propria?: true
    id?: true
    _all?: true
  }

  export type OngAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ong to aggregate.
     */
    where?: OngWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ongs to fetch.
     */
    orderBy?: OngOrderByWithRelationInput | OngOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OngWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ongs
    **/
    _count?: true | OngCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OngAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OngSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OngMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OngMaxAggregateInputType
  }

  export type GetOngAggregateType<T extends OngAggregateArgs> = {
        [P in keyof T & keyof AggregateOng]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOng[P]>
      : GetScalarType<T[P], AggregateOng[P]>
  }




  export type OngGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OngWhereInput
    orderBy?: OngOrderByWithAggregationInput | OngOrderByWithAggregationInput[]
    by: OngScalarFieldEnum[] | OngScalarFieldEnum
    having?: OngScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OngCountAggregateInputType | true
    _avg?: OngAvgAggregateInputType
    _sum?: OngSumAggregateInputType
    _min?: OngMinAggregateInputType
    _max?: OngMaxAggregateInputType
  }

  export type OngGroupByOutputType = {
    nome_ong: string | null
    Motivo_da_cria__o_do_projeto_: string | null
    Sobre: string | null
    Respons_vel_para_contato: string | null
    CNPJ_: string | null
    quantidade_pessoas_assistidas: string | null
    metas: string | null
    Causa_da_Organiza__o_: string | null
    area: string | null
    match_area: string | null
    objetivos_ods: string | null
    Atividades_que_o_projeto_desenvolve_: string | null
    possui_funcionarios: string | null
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_: string | null
    Funcionamento__da_organiza__o: string | null
    Endere_o: string | null
    RPA: number | null
    contato_divulgacao: string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__: string | null
    possui_produto_social: string | null
    mensagem_para_voluntarios: string | null
    serve_refeicoes_cozinha_propria: string | null
    id: number
    _count: OngCountAggregateOutputType | null
    _avg: OngAvgAggregateOutputType | null
    _sum: OngSumAggregateOutputType | null
    _min: OngMinAggregateOutputType | null
    _max: OngMaxAggregateOutputType | null
  }

  type GetOngGroupByPayload<T extends OngGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OngGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OngGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OngGroupByOutputType[P]>
            : GetScalarType<T[P], OngGroupByOutputType[P]>
        }
      >
    >


  export type OngSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome_ong?: boolean
    Motivo_da_cria__o_do_projeto_?: boolean
    Sobre?: boolean
    Respons_vel_para_contato?: boolean
    CNPJ_?: boolean
    quantidade_pessoas_assistidas?: boolean
    metas?: boolean
    Causa_da_Organiza__o_?: boolean
    area?: boolean
    match_area?: boolean
    objetivos_ods?: boolean
    Atividades_que_o_projeto_desenvolve_?: boolean
    possui_funcionarios?: boolean
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: boolean
    Funcionamento__da_organiza__o?: boolean
    Endere_o?: boolean
    RPA?: boolean
    contato_divulgacao?: boolean
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: boolean
    possui_produto_social?: boolean
    mensagem_para_voluntarios?: boolean
    serve_refeicoes_cozinha_propria?: boolean
    id?: boolean
  }, ExtArgs["result"]["ong"]>

  export type OngSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome_ong?: boolean
    Motivo_da_cria__o_do_projeto_?: boolean
    Sobre?: boolean
    Respons_vel_para_contato?: boolean
    CNPJ_?: boolean
    quantidade_pessoas_assistidas?: boolean
    metas?: boolean
    Causa_da_Organiza__o_?: boolean
    area?: boolean
    match_area?: boolean
    objetivos_ods?: boolean
    Atividades_que_o_projeto_desenvolve_?: boolean
    possui_funcionarios?: boolean
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: boolean
    Funcionamento__da_organiza__o?: boolean
    Endere_o?: boolean
    RPA?: boolean
    contato_divulgacao?: boolean
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: boolean
    possui_produto_social?: boolean
    mensagem_para_voluntarios?: boolean
    serve_refeicoes_cozinha_propria?: boolean
    id?: boolean
  }, ExtArgs["result"]["ong"]>

  export type OngSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome_ong?: boolean
    Motivo_da_cria__o_do_projeto_?: boolean
    Sobre?: boolean
    Respons_vel_para_contato?: boolean
    CNPJ_?: boolean
    quantidade_pessoas_assistidas?: boolean
    metas?: boolean
    Causa_da_Organiza__o_?: boolean
    area?: boolean
    match_area?: boolean
    objetivos_ods?: boolean
    Atividades_que_o_projeto_desenvolve_?: boolean
    possui_funcionarios?: boolean
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: boolean
    Funcionamento__da_organiza__o?: boolean
    Endere_o?: boolean
    RPA?: boolean
    contato_divulgacao?: boolean
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: boolean
    possui_produto_social?: boolean
    mensagem_para_voluntarios?: boolean
    serve_refeicoes_cozinha_propria?: boolean
    id?: boolean
  }, ExtArgs["result"]["ong"]>

  export type OngSelectScalar = {
    nome_ong?: boolean
    Motivo_da_cria__o_do_projeto_?: boolean
    Sobre?: boolean
    Respons_vel_para_contato?: boolean
    CNPJ_?: boolean
    quantidade_pessoas_assistidas?: boolean
    metas?: boolean
    Causa_da_Organiza__o_?: boolean
    area?: boolean
    match_area?: boolean
    objetivos_ods?: boolean
    Atividades_que_o_projeto_desenvolve_?: boolean
    possui_funcionarios?: boolean
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: boolean
    Funcionamento__da_organiza__o?: boolean
    Endere_o?: boolean
    RPA?: boolean
    contato_divulgacao?: boolean
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: boolean
    possui_produto_social?: boolean
    mensagem_para_voluntarios?: boolean
    serve_refeicoes_cozinha_propria?: boolean
    id?: boolean
  }

  export type OngOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nome_ong" | "Motivo_da_cria__o_do_projeto_" | "Sobre" | "Respons_vel_para_contato" | "CNPJ_" | "quantidade_pessoas_assistidas" | "metas" | "Causa_da_Organiza__o_" | "area" | "match_area" | "objetivos_ods" | "Atividades_que_o_projeto_desenvolve_" | "possui_funcionarios" | "A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_" | "Funcionamento__da_organiza__o" | "Endere_o" | "RPA" | "contato_divulgacao" | "Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__" | "possui_produto_social" | "mensagem_para_voluntarios" | "serve_refeicoes_cozinha_propria" | "id", ExtArgs["result"]["ong"]>

  export type $OngPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ong"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      nome_ong: string | null
      Motivo_da_cria__o_do_projeto_: string | null
      Sobre: string | null
      Respons_vel_para_contato: string | null
      CNPJ_: string | null
      quantidade_pessoas_assistidas: string | null
      metas: string | null
      Causa_da_Organiza__o_: string | null
      area: string | null
      match_area: string | null
      objetivos_ods: string | null
      Atividades_que_o_projeto_desenvolve_: string | null
      possui_funcionarios: string | null
      A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_: string | null
      Funcionamento__da_organiza__o: string | null
      Endere_o: string | null
      RPA: number | null
      contato_divulgacao: string | null
      Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__: string | null
      possui_produto_social: string | null
      mensagem_para_voluntarios: string | null
      serve_refeicoes_cozinha_propria: string | null
      id: number
    }, ExtArgs["result"]["ong"]>
    composites: {}
  }

  type OngGetPayload<S extends boolean | null | undefined | OngDefaultArgs> = $Result.GetResult<Prisma.$OngPayload, S>

  type OngCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OngFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OngCountAggregateInputType | true
    }

  export interface OngDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ong'], meta: { name: 'Ong' } }
    /**
     * Find zero or one Ong that matches the filter.
     * @param {OngFindUniqueArgs} args - Arguments to find a Ong
     * @example
     * // Get one Ong
     * const ong = await prisma.ong.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OngFindUniqueArgs>(args: SelectSubset<T, OngFindUniqueArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ong that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OngFindUniqueOrThrowArgs} args - Arguments to find a Ong
     * @example
     * // Get one Ong
     * const ong = await prisma.ong.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OngFindUniqueOrThrowArgs>(args: SelectSubset<T, OngFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ong that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngFindFirstArgs} args - Arguments to find a Ong
     * @example
     * // Get one Ong
     * const ong = await prisma.ong.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OngFindFirstArgs>(args?: SelectSubset<T, OngFindFirstArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ong that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngFindFirstOrThrowArgs} args - Arguments to find a Ong
     * @example
     * // Get one Ong
     * const ong = await prisma.ong.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OngFindFirstOrThrowArgs>(args?: SelectSubset<T, OngFindFirstOrThrowArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ongs
     * const ongs = await prisma.ong.findMany()
     * 
     * // Get first 10 Ongs
     * const ongs = await prisma.ong.findMany({ take: 10 })
     * 
     * // Only select the `nome_ong`
     * const ongWithNome_ongOnly = await prisma.ong.findMany({ select: { nome_ong: true } })
     * 
     */
    findMany<T extends OngFindManyArgs>(args?: SelectSubset<T, OngFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ong.
     * @param {OngCreateArgs} args - Arguments to create a Ong.
     * @example
     * // Create one Ong
     * const Ong = await prisma.ong.create({
     *   data: {
     *     // ... data to create a Ong
     *   }
     * })
     * 
     */
    create<T extends OngCreateArgs>(args: SelectSubset<T, OngCreateArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ongs.
     * @param {OngCreateManyArgs} args - Arguments to create many Ongs.
     * @example
     * // Create many Ongs
     * const ong = await prisma.ong.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OngCreateManyArgs>(args?: SelectSubset<T, OngCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ongs and returns the data saved in the database.
     * @param {OngCreateManyAndReturnArgs} args - Arguments to create many Ongs.
     * @example
     * // Create many Ongs
     * const ong = await prisma.ong.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ongs and only return the `nome_ong`
     * const ongWithNome_ongOnly = await prisma.ong.createManyAndReturn({
     *   select: { nome_ong: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OngCreateManyAndReturnArgs>(args?: SelectSubset<T, OngCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ong.
     * @param {OngDeleteArgs} args - Arguments to delete one Ong.
     * @example
     * // Delete one Ong
     * const Ong = await prisma.ong.delete({
     *   where: {
     *     // ... filter to delete one Ong
     *   }
     * })
     * 
     */
    delete<T extends OngDeleteArgs>(args: SelectSubset<T, OngDeleteArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ong.
     * @param {OngUpdateArgs} args - Arguments to update one Ong.
     * @example
     * // Update one Ong
     * const ong = await prisma.ong.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OngUpdateArgs>(args: SelectSubset<T, OngUpdateArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ongs.
     * @param {OngDeleteManyArgs} args - Arguments to filter Ongs to delete.
     * @example
     * // Delete a few Ongs
     * const { count } = await prisma.ong.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OngDeleteManyArgs>(args?: SelectSubset<T, OngDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ongs
     * const ong = await prisma.ong.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OngUpdateManyArgs>(args: SelectSubset<T, OngUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ongs and returns the data updated in the database.
     * @param {OngUpdateManyAndReturnArgs} args - Arguments to update many Ongs.
     * @example
     * // Update many Ongs
     * const ong = await prisma.ong.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ongs and only return the `nome_ong`
     * const ongWithNome_ongOnly = await prisma.ong.updateManyAndReturn({
     *   select: { nome_ong: true },
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
    updateManyAndReturn<T extends OngUpdateManyAndReturnArgs>(args: SelectSubset<T, OngUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ong.
     * @param {OngUpsertArgs} args - Arguments to update or create a Ong.
     * @example
     * // Update or create a Ong
     * const ong = await prisma.ong.upsert({
     *   create: {
     *     // ... data to create a Ong
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ong we want to update
     *   }
     * })
     */
    upsert<T extends OngUpsertArgs>(args: SelectSubset<T, OngUpsertArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngCountArgs} args - Arguments to filter Ongs to count.
     * @example
     * // Count the number of Ongs
     * const count = await prisma.ong.count({
     *   where: {
     *     // ... the filter for the Ongs we want to count
     *   }
     * })
    **/
    count<T extends OngCountArgs>(
      args?: Subset<T, OngCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OngCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OngAggregateArgs>(args: Subset<T, OngAggregateArgs>): Prisma.PrismaPromise<GetOngAggregateType<T>>

    /**
     * Group by Ong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngGroupByArgs} args - Group by arguments.
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
      T extends OngGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OngGroupByArgs['orderBy'] }
        : { orderBy?: OngGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OngGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOngGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ong model
   */
  readonly fields: OngFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ong.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OngClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Ong model
   */
  interface OngFieldRefs {
    readonly nome_ong: FieldRef<"Ong", 'String'>
    readonly Motivo_da_cria__o_do_projeto_: FieldRef<"Ong", 'String'>
    readonly Sobre: FieldRef<"Ong", 'String'>
    readonly Respons_vel_para_contato: FieldRef<"Ong", 'String'>
    readonly CNPJ_: FieldRef<"Ong", 'String'>
    readonly quantidade_pessoas_assistidas: FieldRef<"Ong", 'String'>
    readonly metas: FieldRef<"Ong", 'String'>
    readonly Causa_da_Organiza__o_: FieldRef<"Ong", 'String'>
    readonly area: FieldRef<"Ong", 'String'>
    readonly match_area: FieldRef<"Ong", 'String'>
    readonly objetivos_ods: FieldRef<"Ong", 'String'>
    readonly Atividades_que_o_projeto_desenvolve_: FieldRef<"Ong", 'String'>
    readonly possui_funcionarios: FieldRef<"Ong", 'String'>
    readonly A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_: FieldRef<"Ong", 'String'>
    readonly Funcionamento__da_organiza__o: FieldRef<"Ong", 'String'>
    readonly Endere_o: FieldRef<"Ong", 'String'>
    readonly RPA: FieldRef<"Ong", 'Float'>
    readonly contato_divulgacao: FieldRef<"Ong", 'String'>
    readonly Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__: FieldRef<"Ong", 'String'>
    readonly possui_produto_social: FieldRef<"Ong", 'String'>
    readonly mensagem_para_voluntarios: FieldRef<"Ong", 'String'>
    readonly serve_refeicoes_cozinha_propria: FieldRef<"Ong", 'String'>
    readonly id: FieldRef<"Ong", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ong findUnique
   */
  export type OngFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ong
     */
    omit?: OngOmit<ExtArgs> | null
    /**
     * Filter, which Ong to fetch.
     */
    where: OngWhereUniqueInput
  }

  /**
   * Ong findUniqueOrThrow
   */
  export type OngFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ong
     */
    omit?: OngOmit<ExtArgs> | null
    /**
     * Filter, which Ong to fetch.
     */
    where: OngWhereUniqueInput
  }

  /**
   * Ong findFirst
   */
  export type OngFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ong
     */
    omit?: OngOmit<ExtArgs> | null
    /**
     * Filter, which Ong to fetch.
     */
    where?: OngWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ongs to fetch.
     */
    orderBy?: OngOrderByWithRelationInput | OngOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ongs.
     */
    cursor?: OngWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ongs.
     */
    distinct?: OngScalarFieldEnum | OngScalarFieldEnum[]
  }

  /**
   * Ong findFirstOrThrow
   */
  export type OngFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ong
     */
    omit?: OngOmit<ExtArgs> | null
    /**
     * Filter, which Ong to fetch.
     */
    where?: OngWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ongs to fetch.
     */
    orderBy?: OngOrderByWithRelationInput | OngOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ongs.
     */
    cursor?: OngWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ongs.
     */
    distinct?: OngScalarFieldEnum | OngScalarFieldEnum[]
  }

  /**
   * Ong findMany
   */
  export type OngFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ong
     */
    omit?: OngOmit<ExtArgs> | null
    /**
     * Filter, which Ongs to fetch.
     */
    where?: OngWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ongs to fetch.
     */
    orderBy?: OngOrderByWithRelationInput | OngOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ongs.
     */
    cursor?: OngWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ongs.
     */
    skip?: number
    distinct?: OngScalarFieldEnum | OngScalarFieldEnum[]
  }

  /**
   * Ong create
   */
  export type OngCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ong
     */
    omit?: OngOmit<ExtArgs> | null
    /**
     * The data needed to create a Ong.
     */
    data?: XOR<OngCreateInput, OngUncheckedCreateInput>
  }

  /**
   * Ong createMany
   */
  export type OngCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ongs.
     */
    data: OngCreateManyInput | OngCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ong createManyAndReturn
   */
  export type OngCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ong
     */
    omit?: OngOmit<ExtArgs> | null
    /**
     * The data used to create many Ongs.
     */
    data: OngCreateManyInput | OngCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ong update
   */
  export type OngUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ong
     */
    omit?: OngOmit<ExtArgs> | null
    /**
     * The data needed to update a Ong.
     */
    data: XOR<OngUpdateInput, OngUncheckedUpdateInput>
    /**
     * Choose, which Ong to update.
     */
    where: OngWhereUniqueInput
  }

  /**
   * Ong updateMany
   */
  export type OngUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ongs.
     */
    data: XOR<OngUpdateManyMutationInput, OngUncheckedUpdateManyInput>
    /**
     * Filter which Ongs to update
     */
    where?: OngWhereInput
    /**
     * Limit how many Ongs to update.
     */
    limit?: number
  }

  /**
   * Ong updateManyAndReturn
   */
  export type OngUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ong
     */
    omit?: OngOmit<ExtArgs> | null
    /**
     * The data used to update Ongs.
     */
    data: XOR<OngUpdateManyMutationInput, OngUncheckedUpdateManyInput>
    /**
     * Filter which Ongs to update
     */
    where?: OngWhereInput
    /**
     * Limit how many Ongs to update.
     */
    limit?: number
  }

  /**
   * Ong upsert
   */
  export type OngUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ong
     */
    omit?: OngOmit<ExtArgs> | null
    /**
     * The filter to search for the Ong to update in case it exists.
     */
    where: OngWhereUniqueInput
    /**
     * In case the Ong found by the `where` argument doesn't exist, create a new Ong with this data.
     */
    create: XOR<OngCreateInput, OngUncheckedCreateInput>
    /**
     * In case the Ong was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OngUpdateInput, OngUncheckedUpdateInput>
  }

  /**
   * Ong delete
   */
  export type OngDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ong
     */
    omit?: OngOmit<ExtArgs> | null
    /**
     * Filter which Ong to delete.
     */
    where: OngWhereUniqueInput
  }

  /**
   * Ong deleteMany
   */
  export type OngDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ongs to delete
     */
    where?: OngWhereInput
    /**
     * Limit how many Ongs to delete.
     */
    limit?: number
  }

  /**
   * Ong without action
   */
  export type OngDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ong
     */
    omit?: OngOmit<ExtArgs> | null
  }


  /**
   * Model tabela_ongs
   */

  export type AggregateTabela_ongs = {
    _count: Tabela_ongsCountAggregateOutputType | null
    _avg: Tabela_ongsAvgAggregateOutputType | null
    _sum: Tabela_ongsSumAggregateOutputType | null
    _min: Tabela_ongsMinAggregateOutputType | null
    _max: Tabela_ongsMaxAggregateOutputType | null
  }

  export type Tabela_ongsAvgAggregateOutputType = {
    id: number | null
  }

  export type Tabela_ongsSumAggregateOutputType = {
    id: number | null
  }

  export type Tabela_ongsMinAggregateOutputType = {
    id: number | null
    nome_ong: string | null
    motivo_criacao: string | null
    sobre: string | null
    responsavel_contato: string | null
    cnpj: string | null
    quantidade_assistidos: string | null
    metas: string | null
    causa_organizacao: string | null
    area: string | null
    match_area: string | null
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
    Nome_da_ONG_Projeto: string | null
    Motivo_da_cria__o_do_projeto_: string | null
    Respons_vel_para_contato: string | null
    CNPJ_: string | null
    Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba: string | null
    Metas_de_curto__m_dio_e_longo_prazo: string | null
    Causa_da_Organiza__o_: string | null
    rea: string | null
    Match: string | null
    Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_: string | null
    Atividades_que_o_projeto_desenvolve_: string | null
    Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_: string | null
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_: string | null
    Funcionamento__da_organiza__o: string | null
    endere_o: string | null
    Contato_para_divulga__o: string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__: string | null
    Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_: string | null
    Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co: string | null
    A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara: string | null
    quantidade_pessoas_assistidas: string | null
    objetivos_ods: string | null
    possui_funcionarios_quantos: string | null
    possui_produto_social_quais: string | null
    mensagem_para_voluntarios_doadores: string | null
    serve_refeicoes_cozinha_propria: string | null
    Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con: string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__: string | null
  }

  export type Tabela_ongsMaxAggregateOutputType = {
    id: number | null
    nome_ong: string | null
    motivo_criacao: string | null
    sobre: string | null
    responsavel_contato: string | null
    cnpj: string | null
    quantidade_assistidos: string | null
    metas: string | null
    causa_organizacao: string | null
    area: string | null
    match_area: string | null
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
    Nome_da_ONG_Projeto: string | null
    Motivo_da_cria__o_do_projeto_: string | null
    Respons_vel_para_contato: string | null
    CNPJ_: string | null
    Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba: string | null
    Metas_de_curto__m_dio_e_longo_prazo: string | null
    Causa_da_Organiza__o_: string | null
    rea: string | null
    Match: string | null
    Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_: string | null
    Atividades_que_o_projeto_desenvolve_: string | null
    Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_: string | null
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_: string | null
    Funcionamento__da_organiza__o: string | null
    endere_o: string | null
    Contato_para_divulga__o: string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__: string | null
    Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_: string | null
    Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co: string | null
    A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara: string | null
    quantidade_pessoas_assistidas: string | null
    objetivos_ods: string | null
    possui_funcionarios_quantos: string | null
    possui_produto_social_quais: string | null
    mensagem_para_voluntarios_doadores: string | null
    serve_refeicoes_cozinha_propria: string | null
    Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con: string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__: string | null
  }

  export type Tabela_ongsCountAggregateOutputType = {
    id: number
    nome_ong: number
    motivo_criacao: number
    sobre: number
    responsavel_contato: number
    cnpj: number
    quantidade_assistidos: number
    metas: number
    causa_organizacao: number
    area: number
    match_area: number
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
    Nome_da_ONG_Projeto: number
    Motivo_da_cria__o_do_projeto_: number
    Respons_vel_para_contato: number
    CNPJ_: number
    Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba: number
    Metas_de_curto__m_dio_e_longo_prazo: number
    Causa_da_Organiza__o_: number
    rea: number
    Match: number
    Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_: number
    Atividades_que_o_projeto_desenvolve_: number
    Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_: number
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_: number
    Funcionamento__da_organiza__o: number
    endere_o: number
    Contato_para_divulga__o: number
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__: number
    Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_: number
    Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co: number
    A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara: number
    quantidade_pessoas_assistidas: number
    objetivos_ods: number
    possui_funcionarios_quantos: number
    possui_produto_social_quais: number
    mensagem_para_voluntarios_doadores: number
    serve_refeicoes_cozinha_propria: number
    Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con: number
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__: number
    _all: number
  }


  export type Tabela_ongsAvgAggregateInputType = {
    id?: true
  }

  export type Tabela_ongsSumAggregateInputType = {
    id?: true
  }

  export type Tabela_ongsMinAggregateInputType = {
    id?: true
    nome_ong?: true
    motivo_criacao?: true
    sobre?: true
    responsavel_contato?: true
    cnpj?: true
    quantidade_assistidos?: true
    metas?: true
    causa_organizacao?: true
    area?: true
    match_area?: true
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
    Nome_da_ONG_Projeto?: true
    Motivo_da_cria__o_do_projeto_?: true
    Respons_vel_para_contato?: true
    CNPJ_?: true
    Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba?: true
    Metas_de_curto__m_dio_e_longo_prazo?: true
    Causa_da_Organiza__o_?: true
    rea?: true
    Match?: true
    Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_?: true
    Atividades_que_o_projeto_desenvolve_?: true
    Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_?: true
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: true
    Funcionamento__da_organiza__o?: true
    endere_o?: true
    Contato_para_divulga__o?: true
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: true
    Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_?: true
    Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co?: true
    A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara?: true
    quantidade_pessoas_assistidas?: true
    objetivos_ods?: true
    possui_funcionarios_quantos?: true
    possui_produto_social_quais?: true
    mensagem_para_voluntarios_doadores?: true
    serve_refeicoes_cozinha_propria?: true
    Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con?: true
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__?: true
  }

  export type Tabela_ongsMaxAggregateInputType = {
    id?: true
    nome_ong?: true
    motivo_criacao?: true
    sobre?: true
    responsavel_contato?: true
    cnpj?: true
    quantidade_assistidos?: true
    metas?: true
    causa_organizacao?: true
    area?: true
    match_area?: true
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
    Nome_da_ONG_Projeto?: true
    Motivo_da_cria__o_do_projeto_?: true
    Respons_vel_para_contato?: true
    CNPJ_?: true
    Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba?: true
    Metas_de_curto__m_dio_e_longo_prazo?: true
    Causa_da_Organiza__o_?: true
    rea?: true
    Match?: true
    Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_?: true
    Atividades_que_o_projeto_desenvolve_?: true
    Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_?: true
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: true
    Funcionamento__da_organiza__o?: true
    endere_o?: true
    Contato_para_divulga__o?: true
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: true
    Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_?: true
    Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co?: true
    A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara?: true
    quantidade_pessoas_assistidas?: true
    objetivos_ods?: true
    possui_funcionarios_quantos?: true
    possui_produto_social_quais?: true
    mensagem_para_voluntarios_doadores?: true
    serve_refeicoes_cozinha_propria?: true
    Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con?: true
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__?: true
  }

  export type Tabela_ongsCountAggregateInputType = {
    id?: true
    nome_ong?: true
    motivo_criacao?: true
    sobre?: true
    responsavel_contato?: true
    cnpj?: true
    quantidade_assistidos?: true
    metas?: true
    causa_organizacao?: true
    area?: true
    match_area?: true
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
    Nome_da_ONG_Projeto?: true
    Motivo_da_cria__o_do_projeto_?: true
    Respons_vel_para_contato?: true
    CNPJ_?: true
    Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba?: true
    Metas_de_curto__m_dio_e_longo_prazo?: true
    Causa_da_Organiza__o_?: true
    rea?: true
    Match?: true
    Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_?: true
    Atividades_que_o_projeto_desenvolve_?: true
    Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_?: true
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: true
    Funcionamento__da_organiza__o?: true
    endere_o?: true
    Contato_para_divulga__o?: true
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: true
    Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_?: true
    Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co?: true
    A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara?: true
    quantidade_pessoas_assistidas?: true
    objetivos_ods?: true
    possui_funcionarios_quantos?: true
    possui_produto_social_quais?: true
    mensagem_para_voluntarios_doadores?: true
    serve_refeicoes_cozinha_propria?: true
    Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con?: true
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__?: true
    _all?: true
  }

  export type Tabela_ongsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tabela_ongs to aggregate.
     */
    where?: tabela_ongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tabela_ongs to fetch.
     */
    orderBy?: tabela_ongsOrderByWithRelationInput | tabela_ongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tabela_ongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tabela_ongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tabela_ongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tabela_ongs
    **/
    _count?: true | Tabela_ongsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tabela_ongsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tabela_ongsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tabela_ongsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tabela_ongsMaxAggregateInputType
  }

  export type GetTabela_ongsAggregateType<T extends Tabela_ongsAggregateArgs> = {
        [P in keyof T & keyof AggregateTabela_ongs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTabela_ongs[P]>
      : GetScalarType<T[P], AggregateTabela_ongs[P]>
  }




  export type tabela_ongsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tabela_ongsWhereInput
    orderBy?: tabela_ongsOrderByWithAggregationInput | tabela_ongsOrderByWithAggregationInput[]
    by: Tabela_ongsScalarFieldEnum[] | Tabela_ongsScalarFieldEnum
    having?: tabela_ongsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tabela_ongsCountAggregateInputType | true
    _avg?: Tabela_ongsAvgAggregateInputType
    _sum?: Tabela_ongsSumAggregateInputType
    _min?: Tabela_ongsMinAggregateInputType
    _max?: Tabela_ongsMaxAggregateInputType
  }

  export type Tabela_ongsGroupByOutputType = {
    id: number
    nome_ong: string | null
    motivo_criacao: string | null
    sobre: string | null
    responsavel_contato: string | null
    cnpj: string | null
    quantidade_assistidos: string | null
    metas: string | null
    causa_organizacao: string | null
    area: string | null
    match_area: string | null
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
    Nome_da_ONG_Projeto: string | null
    Motivo_da_cria__o_do_projeto_: string | null
    Respons_vel_para_contato: string | null
    CNPJ_: string | null
    Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba: string | null
    Metas_de_curto__m_dio_e_longo_prazo: string | null
    Causa_da_Organiza__o_: string | null
    rea: string | null
    Match: string | null
    Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_: string | null
    Atividades_que_o_projeto_desenvolve_: string | null
    Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_: string | null
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_: string | null
    Funcionamento__da_organiza__o: string | null
    endere_o: string | null
    Contato_para_divulga__o: string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__: string | null
    Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_: string | null
    Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co: string | null
    A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara: string | null
    quantidade_pessoas_assistidas: string | null
    objetivos_ods: string | null
    possui_funcionarios_quantos: string | null
    possui_produto_social_quais: string | null
    mensagem_para_voluntarios_doadores: string | null
    serve_refeicoes_cozinha_propria: string | null
    Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con: string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__: string | null
    _count: Tabela_ongsCountAggregateOutputType | null
    _avg: Tabela_ongsAvgAggregateOutputType | null
    _sum: Tabela_ongsSumAggregateOutputType | null
    _min: Tabela_ongsMinAggregateOutputType | null
    _max: Tabela_ongsMaxAggregateOutputType | null
  }

  type GetTabela_ongsGroupByPayload<T extends tabela_ongsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tabela_ongsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tabela_ongsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tabela_ongsGroupByOutputType[P]>
            : GetScalarType<T[P], Tabela_ongsGroupByOutputType[P]>
        }
      >
    >


  export type tabela_ongsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_ong?: boolean
    motivo_criacao?: boolean
    sobre?: boolean
    responsavel_contato?: boolean
    cnpj?: boolean
    quantidade_assistidos?: boolean
    metas?: boolean
    causa_organizacao?: boolean
    area?: boolean
    match_area?: boolean
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
    Nome_da_ONG_Projeto?: boolean
    Motivo_da_cria__o_do_projeto_?: boolean
    Respons_vel_para_contato?: boolean
    CNPJ_?: boolean
    Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba?: boolean
    Metas_de_curto__m_dio_e_longo_prazo?: boolean
    Causa_da_Organiza__o_?: boolean
    rea?: boolean
    Match?: boolean
    Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_?: boolean
    Atividades_que_o_projeto_desenvolve_?: boolean
    Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_?: boolean
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: boolean
    Funcionamento__da_organiza__o?: boolean
    endere_o?: boolean
    Contato_para_divulga__o?: boolean
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: boolean
    Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_?: boolean
    Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co?: boolean
    A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara?: boolean
    quantidade_pessoas_assistidas?: boolean
    objetivos_ods?: boolean
    possui_funcionarios_quantos?: boolean
    possui_produto_social_quais?: boolean
    mensagem_para_voluntarios_doadores?: boolean
    serve_refeicoes_cozinha_propria?: boolean
    Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con?: boolean
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__?: boolean
  }, ExtArgs["result"]["tabela_ongs"]>

  export type tabela_ongsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_ong?: boolean
    motivo_criacao?: boolean
    sobre?: boolean
    responsavel_contato?: boolean
    cnpj?: boolean
    quantidade_assistidos?: boolean
    metas?: boolean
    causa_organizacao?: boolean
    area?: boolean
    match_area?: boolean
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
    Nome_da_ONG_Projeto?: boolean
    Motivo_da_cria__o_do_projeto_?: boolean
    Respons_vel_para_contato?: boolean
    CNPJ_?: boolean
    Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba?: boolean
    Metas_de_curto__m_dio_e_longo_prazo?: boolean
    Causa_da_Organiza__o_?: boolean
    rea?: boolean
    Match?: boolean
    Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_?: boolean
    Atividades_que_o_projeto_desenvolve_?: boolean
    Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_?: boolean
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: boolean
    Funcionamento__da_organiza__o?: boolean
    endere_o?: boolean
    Contato_para_divulga__o?: boolean
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: boolean
    Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_?: boolean
    Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co?: boolean
    A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara?: boolean
    quantidade_pessoas_assistidas?: boolean
    objetivos_ods?: boolean
    possui_funcionarios_quantos?: boolean
    possui_produto_social_quais?: boolean
    mensagem_para_voluntarios_doadores?: boolean
    serve_refeicoes_cozinha_propria?: boolean
    Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con?: boolean
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__?: boolean
  }, ExtArgs["result"]["tabela_ongs"]>

  export type tabela_ongsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_ong?: boolean
    motivo_criacao?: boolean
    sobre?: boolean
    responsavel_contato?: boolean
    cnpj?: boolean
    quantidade_assistidos?: boolean
    metas?: boolean
    causa_organizacao?: boolean
    area?: boolean
    match_area?: boolean
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
    Nome_da_ONG_Projeto?: boolean
    Motivo_da_cria__o_do_projeto_?: boolean
    Respons_vel_para_contato?: boolean
    CNPJ_?: boolean
    Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba?: boolean
    Metas_de_curto__m_dio_e_longo_prazo?: boolean
    Causa_da_Organiza__o_?: boolean
    rea?: boolean
    Match?: boolean
    Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_?: boolean
    Atividades_que_o_projeto_desenvolve_?: boolean
    Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_?: boolean
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: boolean
    Funcionamento__da_organiza__o?: boolean
    endere_o?: boolean
    Contato_para_divulga__o?: boolean
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: boolean
    Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_?: boolean
    Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co?: boolean
    A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara?: boolean
    quantidade_pessoas_assistidas?: boolean
    objetivos_ods?: boolean
    possui_funcionarios_quantos?: boolean
    possui_produto_social_quais?: boolean
    mensagem_para_voluntarios_doadores?: boolean
    serve_refeicoes_cozinha_propria?: boolean
    Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con?: boolean
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__?: boolean
  }, ExtArgs["result"]["tabela_ongs"]>

  export type tabela_ongsSelectScalar = {
    id?: boolean
    nome_ong?: boolean
    motivo_criacao?: boolean
    sobre?: boolean
    responsavel_contato?: boolean
    cnpj?: boolean
    quantidade_assistidos?: boolean
    metas?: boolean
    causa_organizacao?: boolean
    area?: boolean
    match_area?: boolean
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
    Nome_da_ONG_Projeto?: boolean
    Motivo_da_cria__o_do_projeto_?: boolean
    Respons_vel_para_contato?: boolean
    CNPJ_?: boolean
    Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba?: boolean
    Metas_de_curto__m_dio_e_longo_prazo?: boolean
    Causa_da_Organiza__o_?: boolean
    rea?: boolean
    Match?: boolean
    Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_?: boolean
    Atividades_que_o_projeto_desenvolve_?: boolean
    Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_?: boolean
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: boolean
    Funcionamento__da_organiza__o?: boolean
    endere_o?: boolean
    Contato_para_divulga__o?: boolean
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: boolean
    Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_?: boolean
    Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co?: boolean
    A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara?: boolean
    quantidade_pessoas_assistidas?: boolean
    objetivos_ods?: boolean
    possui_funcionarios_quantos?: boolean
    possui_produto_social_quais?: boolean
    mensagem_para_voluntarios_doadores?: boolean
    serve_refeicoes_cozinha_propria?: boolean
    Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con?: boolean
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__?: boolean
  }

  export type tabela_ongsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome_ong" | "motivo_criacao" | "sobre" | "responsavel_contato" | "cnpj" | "quantidade_assistidos" | "metas" | "causa_organizacao" | "area" | "match_area" | "possui_voluntarios" | "possui_funcionarios" | "funcionamento" | "endereco" | "rpa" | "contato_divulgacao" | "redes_sociais" | "produto_social" | "mensagem_convite" | "serve_refeicao" | "Nome_da_ONG_Projeto" | "Motivo_da_cria__o_do_projeto_" | "Respons_vel_para_contato" | "CNPJ_" | "Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba" | "Metas_de_curto__m_dio_e_longo_prazo" | "Causa_da_Organiza__o_" | "rea" | "Match" | "Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_" | "Atividades_que_o_projeto_desenvolve_" | "Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_" | "A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_" | "Funcionamento__da_organiza__o" | "endere_o" | "Contato_para_divulga__o" | "Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__" | "Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_" | "Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co" | "A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara" | "quantidade_pessoas_assistidas" | "objetivos_ods" | "possui_funcionarios_quantos" | "possui_produto_social_quais" | "mensagem_para_voluntarios_doadores" | "serve_refeicoes_cozinha_propria" | "Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con" | "Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__", ExtArgs["result"]["tabela_ongs"]>

  export type $tabela_ongsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tabela_ongs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome_ong: string | null
      motivo_criacao: string | null
      sobre: string | null
      responsavel_contato: string | null
      cnpj: string | null
      quantidade_assistidos: string | null
      metas: string | null
      causa_organizacao: string | null
      area: string | null
      match_area: string | null
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
      Nome_da_ONG_Projeto: string | null
      Motivo_da_cria__o_do_projeto_: string | null
      Respons_vel_para_contato: string | null
      CNPJ_: string | null
      Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba: string | null
      Metas_de_curto__m_dio_e_longo_prazo: string | null
      Causa_da_Organiza__o_: string | null
      rea: string | null
      Match: string | null
      Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_: string | null
      Atividades_que_o_projeto_desenvolve_: string | null
      Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_: string | null
      A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_: string | null
      Funcionamento__da_organiza__o: string | null
      endere_o: string | null
      Contato_para_divulga__o: string | null
      Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__: string | null
      Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_: string | null
      Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co: string | null
      A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara: string | null
      quantidade_pessoas_assistidas: string | null
      objetivos_ods: string | null
      possui_funcionarios_quantos: string | null
      possui_produto_social_quais: string | null
      mensagem_para_voluntarios_doadores: string | null
      serve_refeicoes_cozinha_propria: string | null
      Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con: string | null
      Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__: string | null
    }, ExtArgs["result"]["tabela_ongs"]>
    composites: {}
  }

  type tabela_ongsGetPayload<S extends boolean | null | undefined | tabela_ongsDefaultArgs> = $Result.GetResult<Prisma.$tabela_ongsPayload, S>

  type tabela_ongsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tabela_ongsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tabela_ongsCountAggregateInputType | true
    }

  export interface tabela_ongsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tabela_ongs'], meta: { name: 'tabela_ongs' } }
    /**
     * Find zero or one Tabela_ongs that matches the filter.
     * @param {tabela_ongsFindUniqueArgs} args - Arguments to find a Tabela_ongs
     * @example
     * // Get one Tabela_ongs
     * const tabela_ongs = await prisma.tabela_ongs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tabela_ongsFindUniqueArgs>(args: SelectSubset<T, tabela_ongsFindUniqueArgs<ExtArgs>>): Prisma__tabela_ongsClient<$Result.GetResult<Prisma.$tabela_ongsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tabela_ongs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tabela_ongsFindUniqueOrThrowArgs} args - Arguments to find a Tabela_ongs
     * @example
     * // Get one Tabela_ongs
     * const tabela_ongs = await prisma.tabela_ongs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tabela_ongsFindUniqueOrThrowArgs>(args: SelectSubset<T, tabela_ongsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tabela_ongsClient<$Result.GetResult<Prisma.$tabela_ongsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tabela_ongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tabela_ongsFindFirstArgs} args - Arguments to find a Tabela_ongs
     * @example
     * // Get one Tabela_ongs
     * const tabela_ongs = await prisma.tabela_ongs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tabela_ongsFindFirstArgs>(args?: SelectSubset<T, tabela_ongsFindFirstArgs<ExtArgs>>): Prisma__tabela_ongsClient<$Result.GetResult<Prisma.$tabela_ongsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tabela_ongs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tabela_ongsFindFirstOrThrowArgs} args - Arguments to find a Tabela_ongs
     * @example
     * // Get one Tabela_ongs
     * const tabela_ongs = await prisma.tabela_ongs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tabela_ongsFindFirstOrThrowArgs>(args?: SelectSubset<T, tabela_ongsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tabela_ongsClient<$Result.GetResult<Prisma.$tabela_ongsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tabela_ongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tabela_ongsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tabela_ongs
     * const tabela_ongs = await prisma.tabela_ongs.findMany()
     * 
     * // Get first 10 Tabela_ongs
     * const tabela_ongs = await prisma.tabela_ongs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tabela_ongsWithIdOnly = await prisma.tabela_ongs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tabela_ongsFindManyArgs>(args?: SelectSubset<T, tabela_ongsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tabela_ongsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tabela_ongs.
     * @param {tabela_ongsCreateArgs} args - Arguments to create a Tabela_ongs.
     * @example
     * // Create one Tabela_ongs
     * const Tabela_ongs = await prisma.tabela_ongs.create({
     *   data: {
     *     // ... data to create a Tabela_ongs
     *   }
     * })
     * 
     */
    create<T extends tabela_ongsCreateArgs>(args: SelectSubset<T, tabela_ongsCreateArgs<ExtArgs>>): Prisma__tabela_ongsClient<$Result.GetResult<Prisma.$tabela_ongsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tabela_ongs.
     * @param {tabela_ongsCreateManyArgs} args - Arguments to create many Tabela_ongs.
     * @example
     * // Create many Tabela_ongs
     * const tabela_ongs = await prisma.tabela_ongs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tabela_ongsCreateManyArgs>(args?: SelectSubset<T, tabela_ongsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tabela_ongs and returns the data saved in the database.
     * @param {tabela_ongsCreateManyAndReturnArgs} args - Arguments to create many Tabela_ongs.
     * @example
     * // Create many Tabela_ongs
     * const tabela_ongs = await prisma.tabela_ongs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tabela_ongs and only return the `id`
     * const tabela_ongsWithIdOnly = await prisma.tabela_ongs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tabela_ongsCreateManyAndReturnArgs>(args?: SelectSubset<T, tabela_ongsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tabela_ongsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tabela_ongs.
     * @param {tabela_ongsDeleteArgs} args - Arguments to delete one Tabela_ongs.
     * @example
     * // Delete one Tabela_ongs
     * const Tabela_ongs = await prisma.tabela_ongs.delete({
     *   where: {
     *     // ... filter to delete one Tabela_ongs
     *   }
     * })
     * 
     */
    delete<T extends tabela_ongsDeleteArgs>(args: SelectSubset<T, tabela_ongsDeleteArgs<ExtArgs>>): Prisma__tabela_ongsClient<$Result.GetResult<Prisma.$tabela_ongsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tabela_ongs.
     * @param {tabela_ongsUpdateArgs} args - Arguments to update one Tabela_ongs.
     * @example
     * // Update one Tabela_ongs
     * const tabela_ongs = await prisma.tabela_ongs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tabela_ongsUpdateArgs>(args: SelectSubset<T, tabela_ongsUpdateArgs<ExtArgs>>): Prisma__tabela_ongsClient<$Result.GetResult<Prisma.$tabela_ongsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tabela_ongs.
     * @param {tabela_ongsDeleteManyArgs} args - Arguments to filter Tabela_ongs to delete.
     * @example
     * // Delete a few Tabela_ongs
     * const { count } = await prisma.tabela_ongs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tabela_ongsDeleteManyArgs>(args?: SelectSubset<T, tabela_ongsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tabela_ongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tabela_ongsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tabela_ongs
     * const tabela_ongs = await prisma.tabela_ongs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tabela_ongsUpdateManyArgs>(args: SelectSubset<T, tabela_ongsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tabela_ongs and returns the data updated in the database.
     * @param {tabela_ongsUpdateManyAndReturnArgs} args - Arguments to update many Tabela_ongs.
     * @example
     * // Update many Tabela_ongs
     * const tabela_ongs = await prisma.tabela_ongs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tabela_ongs and only return the `id`
     * const tabela_ongsWithIdOnly = await prisma.tabela_ongs.updateManyAndReturn({
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
    updateManyAndReturn<T extends tabela_ongsUpdateManyAndReturnArgs>(args: SelectSubset<T, tabela_ongsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tabela_ongsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tabela_ongs.
     * @param {tabela_ongsUpsertArgs} args - Arguments to update or create a Tabela_ongs.
     * @example
     * // Update or create a Tabela_ongs
     * const tabela_ongs = await prisma.tabela_ongs.upsert({
     *   create: {
     *     // ... data to create a Tabela_ongs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tabela_ongs we want to update
     *   }
     * })
     */
    upsert<T extends tabela_ongsUpsertArgs>(args: SelectSubset<T, tabela_ongsUpsertArgs<ExtArgs>>): Prisma__tabela_ongsClient<$Result.GetResult<Prisma.$tabela_ongsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tabela_ongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tabela_ongsCountArgs} args - Arguments to filter Tabela_ongs to count.
     * @example
     * // Count the number of Tabela_ongs
     * const count = await prisma.tabela_ongs.count({
     *   where: {
     *     // ... the filter for the Tabela_ongs we want to count
     *   }
     * })
    **/
    count<T extends tabela_ongsCountArgs>(
      args?: Subset<T, tabela_ongsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tabela_ongsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tabela_ongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tabela_ongsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tabela_ongsAggregateArgs>(args: Subset<T, Tabela_ongsAggregateArgs>): Prisma.PrismaPromise<GetTabela_ongsAggregateType<T>>

    /**
     * Group by Tabela_ongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tabela_ongsGroupByArgs} args - Group by arguments.
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
      T extends tabela_ongsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tabela_ongsGroupByArgs['orderBy'] }
        : { orderBy?: tabela_ongsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tabela_ongsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTabela_ongsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tabela_ongs model
   */
  readonly fields: tabela_ongsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tabela_ongs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tabela_ongsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tabela_ongs model
   */
  interface tabela_ongsFieldRefs {
    readonly id: FieldRef<"tabela_ongs", 'Int'>
    readonly nome_ong: FieldRef<"tabela_ongs", 'String'>
    readonly motivo_criacao: FieldRef<"tabela_ongs", 'String'>
    readonly sobre: FieldRef<"tabela_ongs", 'String'>
    readonly responsavel_contato: FieldRef<"tabela_ongs", 'String'>
    readonly cnpj: FieldRef<"tabela_ongs", 'String'>
    readonly quantidade_assistidos: FieldRef<"tabela_ongs", 'String'>
    readonly metas: FieldRef<"tabela_ongs", 'String'>
    readonly causa_organizacao: FieldRef<"tabela_ongs", 'String'>
    readonly area: FieldRef<"tabela_ongs", 'String'>
    readonly match_area: FieldRef<"tabela_ongs", 'String'>
    readonly possui_voluntarios: FieldRef<"tabela_ongs", 'String'>
    readonly possui_funcionarios: FieldRef<"tabela_ongs", 'String'>
    readonly funcionamento: FieldRef<"tabela_ongs", 'String'>
    readonly endereco: FieldRef<"tabela_ongs", 'String'>
    readonly rpa: FieldRef<"tabela_ongs", 'String'>
    readonly contato_divulgacao: FieldRef<"tabela_ongs", 'String'>
    readonly redes_sociais: FieldRef<"tabela_ongs", 'String'>
    readonly produto_social: FieldRef<"tabela_ongs", 'String'>
    readonly mensagem_convite: FieldRef<"tabela_ongs", 'String'>
    readonly serve_refeicao: FieldRef<"tabela_ongs", 'String'>
    readonly Nome_da_ONG_Projeto: FieldRef<"tabela_ongs", 'String'>
    readonly Motivo_da_cria__o_do_projeto_: FieldRef<"tabela_ongs", 'String'>
    readonly Respons_vel_para_contato: FieldRef<"tabela_ongs", 'String'>
    readonly CNPJ_: FieldRef<"tabela_ongs", 'String'>
    readonly Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba: FieldRef<"tabela_ongs", 'String'>
    readonly Metas_de_curto__m_dio_e_longo_prazo: FieldRef<"tabela_ongs", 'String'>
    readonly Causa_da_Organiza__o_: FieldRef<"tabela_ongs", 'String'>
    readonly rea: FieldRef<"tabela_ongs", 'String'>
    readonly Match: FieldRef<"tabela_ongs", 'String'>
    readonly Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_: FieldRef<"tabela_ongs", 'String'>
    readonly Atividades_que_o_projeto_desenvolve_: FieldRef<"tabela_ongs", 'String'>
    readonly Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_: FieldRef<"tabela_ongs", 'String'>
    readonly A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_: FieldRef<"tabela_ongs", 'String'>
    readonly Funcionamento__da_organiza__o: FieldRef<"tabela_ongs", 'String'>
    readonly endere_o: FieldRef<"tabela_ongs", 'String'>
    readonly Contato_para_divulga__o: FieldRef<"tabela_ongs", 'String'>
    readonly Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__: FieldRef<"tabela_ongs", 'String'>
    readonly Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_: FieldRef<"tabela_ongs", 'String'>
    readonly Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co: FieldRef<"tabela_ongs", 'String'>
    readonly A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara: FieldRef<"tabela_ongs", 'String'>
    readonly quantidade_pessoas_assistidas: FieldRef<"tabela_ongs", 'String'>
    readonly objetivos_ods: FieldRef<"tabela_ongs", 'String'>
    readonly possui_funcionarios_quantos: FieldRef<"tabela_ongs", 'String'>
    readonly possui_produto_social_quais: FieldRef<"tabela_ongs", 'String'>
    readonly mensagem_para_voluntarios_doadores: FieldRef<"tabela_ongs", 'String'>
    readonly serve_refeicoes_cozinha_propria: FieldRef<"tabela_ongs", 'String'>
    readonly Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con: FieldRef<"tabela_ongs", 'String'>
    readonly Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__: FieldRef<"tabela_ongs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tabela_ongs findUnique
   */
  export type tabela_ongsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabela_ongs
     */
    select?: tabela_ongsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tabela_ongs
     */
    omit?: tabela_ongsOmit<ExtArgs> | null
    /**
     * Filter, which tabela_ongs to fetch.
     */
    where: tabela_ongsWhereUniqueInput
  }

  /**
   * tabela_ongs findUniqueOrThrow
   */
  export type tabela_ongsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabela_ongs
     */
    select?: tabela_ongsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tabela_ongs
     */
    omit?: tabela_ongsOmit<ExtArgs> | null
    /**
     * Filter, which tabela_ongs to fetch.
     */
    where: tabela_ongsWhereUniqueInput
  }

  /**
   * tabela_ongs findFirst
   */
  export type tabela_ongsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabela_ongs
     */
    select?: tabela_ongsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tabela_ongs
     */
    omit?: tabela_ongsOmit<ExtArgs> | null
    /**
     * Filter, which tabela_ongs to fetch.
     */
    where?: tabela_ongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tabela_ongs to fetch.
     */
    orderBy?: tabela_ongsOrderByWithRelationInput | tabela_ongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tabela_ongs.
     */
    cursor?: tabela_ongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tabela_ongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tabela_ongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tabela_ongs.
     */
    distinct?: Tabela_ongsScalarFieldEnum | Tabela_ongsScalarFieldEnum[]
  }

  /**
   * tabela_ongs findFirstOrThrow
   */
  export type tabela_ongsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabela_ongs
     */
    select?: tabela_ongsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tabela_ongs
     */
    omit?: tabela_ongsOmit<ExtArgs> | null
    /**
     * Filter, which tabela_ongs to fetch.
     */
    where?: tabela_ongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tabela_ongs to fetch.
     */
    orderBy?: tabela_ongsOrderByWithRelationInput | tabela_ongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tabela_ongs.
     */
    cursor?: tabela_ongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tabela_ongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tabela_ongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tabela_ongs.
     */
    distinct?: Tabela_ongsScalarFieldEnum | Tabela_ongsScalarFieldEnum[]
  }

  /**
   * tabela_ongs findMany
   */
  export type tabela_ongsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabela_ongs
     */
    select?: tabela_ongsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tabela_ongs
     */
    omit?: tabela_ongsOmit<ExtArgs> | null
    /**
     * Filter, which tabela_ongs to fetch.
     */
    where?: tabela_ongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tabela_ongs to fetch.
     */
    orderBy?: tabela_ongsOrderByWithRelationInput | tabela_ongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tabela_ongs.
     */
    cursor?: tabela_ongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tabela_ongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tabela_ongs.
     */
    skip?: number
    distinct?: Tabela_ongsScalarFieldEnum | Tabela_ongsScalarFieldEnum[]
  }

  /**
   * tabela_ongs create
   */
  export type tabela_ongsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabela_ongs
     */
    select?: tabela_ongsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tabela_ongs
     */
    omit?: tabela_ongsOmit<ExtArgs> | null
    /**
     * The data needed to create a tabela_ongs.
     */
    data?: XOR<tabela_ongsCreateInput, tabela_ongsUncheckedCreateInput>
  }

  /**
   * tabela_ongs createMany
   */
  export type tabela_ongsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tabela_ongs.
     */
    data: tabela_ongsCreateManyInput | tabela_ongsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tabela_ongs createManyAndReturn
   */
  export type tabela_ongsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabela_ongs
     */
    select?: tabela_ongsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tabela_ongs
     */
    omit?: tabela_ongsOmit<ExtArgs> | null
    /**
     * The data used to create many tabela_ongs.
     */
    data: tabela_ongsCreateManyInput | tabela_ongsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tabela_ongs update
   */
  export type tabela_ongsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabela_ongs
     */
    select?: tabela_ongsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tabela_ongs
     */
    omit?: tabela_ongsOmit<ExtArgs> | null
    /**
     * The data needed to update a tabela_ongs.
     */
    data: XOR<tabela_ongsUpdateInput, tabela_ongsUncheckedUpdateInput>
    /**
     * Choose, which tabela_ongs to update.
     */
    where: tabela_ongsWhereUniqueInput
  }

  /**
   * tabela_ongs updateMany
   */
  export type tabela_ongsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tabela_ongs.
     */
    data: XOR<tabela_ongsUpdateManyMutationInput, tabela_ongsUncheckedUpdateManyInput>
    /**
     * Filter which tabela_ongs to update
     */
    where?: tabela_ongsWhereInput
    /**
     * Limit how many tabela_ongs to update.
     */
    limit?: number
  }

  /**
   * tabela_ongs updateManyAndReturn
   */
  export type tabela_ongsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabela_ongs
     */
    select?: tabela_ongsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tabela_ongs
     */
    omit?: tabela_ongsOmit<ExtArgs> | null
    /**
     * The data used to update tabela_ongs.
     */
    data: XOR<tabela_ongsUpdateManyMutationInput, tabela_ongsUncheckedUpdateManyInput>
    /**
     * Filter which tabela_ongs to update
     */
    where?: tabela_ongsWhereInput
    /**
     * Limit how many tabela_ongs to update.
     */
    limit?: number
  }

  /**
   * tabela_ongs upsert
   */
  export type tabela_ongsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabela_ongs
     */
    select?: tabela_ongsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tabela_ongs
     */
    omit?: tabela_ongsOmit<ExtArgs> | null
    /**
     * The filter to search for the tabela_ongs to update in case it exists.
     */
    where: tabela_ongsWhereUniqueInput
    /**
     * In case the tabela_ongs found by the `where` argument doesn't exist, create a new tabela_ongs with this data.
     */
    create: XOR<tabela_ongsCreateInput, tabela_ongsUncheckedCreateInput>
    /**
     * In case the tabela_ongs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tabela_ongsUpdateInput, tabela_ongsUncheckedUpdateInput>
  }

  /**
   * tabela_ongs delete
   */
  export type tabela_ongsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabela_ongs
     */
    select?: tabela_ongsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tabela_ongs
     */
    omit?: tabela_ongsOmit<ExtArgs> | null
    /**
     * Filter which tabela_ongs to delete.
     */
    where: tabela_ongsWhereUniqueInput
  }

  /**
   * tabela_ongs deleteMany
   */
  export type tabela_ongsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tabela_ongs to delete
     */
    where?: tabela_ongsWhereInput
    /**
     * Limit how many tabela_ongs to delete.
     */
    limit?: number
  }

  /**
   * tabela_ongs without action
   */
  export type tabela_ongsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabela_ongs
     */
    select?: tabela_ongsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tabela_ongs
     */
    omit?: tabela_ongsOmit<ExtArgs> | null
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


  export const OngScalarFieldEnum: {
    nome_ong: 'nome_ong',
    Motivo_da_cria__o_do_projeto_: 'Motivo_da_cria__o_do_projeto_',
    Sobre: 'Sobre',
    Respons_vel_para_contato: 'Respons_vel_para_contato',
    CNPJ_: 'CNPJ_',
    quantidade_pessoas_assistidas: 'quantidade_pessoas_assistidas',
    metas: 'metas',
    Causa_da_Organiza__o_: 'Causa_da_Organiza__o_',
    area: 'area',
    match_area: 'match_area',
    objetivos_ods: 'objetivos_ods',
    Atividades_que_o_projeto_desenvolve_: 'Atividades_que_o_projeto_desenvolve_',
    possui_funcionarios: 'possui_funcionarios',
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_: 'A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_',
    Funcionamento__da_organiza__o: 'Funcionamento__da_organiza__o',
    Endere_o: 'Endere_o',
    RPA: 'RPA',
    contato_divulgacao: 'contato_divulgacao',
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__: 'Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__',
    possui_produto_social: 'possui_produto_social',
    mensagem_para_voluntarios: 'mensagem_para_voluntarios',
    serve_refeicoes_cozinha_propria: 'serve_refeicoes_cozinha_propria',
    id: 'id'
  };

  export type OngScalarFieldEnum = (typeof OngScalarFieldEnum)[keyof typeof OngScalarFieldEnum]


  export const Tabela_ongsScalarFieldEnum: {
    id: 'id',
    nome_ong: 'nome_ong',
    motivo_criacao: 'motivo_criacao',
    sobre: 'sobre',
    responsavel_contato: 'responsavel_contato',
    cnpj: 'cnpj',
    quantidade_assistidos: 'quantidade_assistidos',
    metas: 'metas',
    causa_organizacao: 'causa_organizacao',
    area: 'area',
    match_area: 'match_area',
    possui_voluntarios: 'possui_voluntarios',
    possui_funcionarios: 'possui_funcionarios',
    funcionamento: 'funcionamento',
    endereco: 'endereco',
    rpa: 'rpa',
    contato_divulgacao: 'contato_divulgacao',
    redes_sociais: 'redes_sociais',
    produto_social: 'produto_social',
    mensagem_convite: 'mensagem_convite',
    serve_refeicao: 'serve_refeicao',
    Nome_da_ONG_Projeto: 'Nome_da_ONG_Projeto',
    Motivo_da_cria__o_do_projeto_: 'Motivo_da_cria__o_do_projeto_',
    Respons_vel_para_contato: 'Respons_vel_para_contato',
    CNPJ_: 'CNPJ_',
    Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba: 'Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba',
    Metas_de_curto__m_dio_e_longo_prazo: 'Metas_de_curto__m_dio_e_longo_prazo',
    Causa_da_Organiza__o_: 'Causa_da_Organiza__o_',
    rea: 'rea',
    Match: 'Match',
    Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_: 'Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_',
    Atividades_que_o_projeto_desenvolve_: 'Atividades_que_o_projeto_desenvolve_',
    Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_: 'Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_',
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_: 'A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_',
    Funcionamento__da_organiza__o: 'Funcionamento__da_organiza__o',
    endere_o: 'endere_o',
    Contato_para_divulga__o: 'Contato_para_divulga__o',
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__: 'Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__',
    Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_: 'Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_',
    Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co: 'Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co',
    A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara: 'A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara',
    quantidade_pessoas_assistidas: 'quantidade_pessoas_assistidas',
    objetivos_ods: 'objetivos_ods',
    possui_funcionarios_quantos: 'possui_funcionarios_quantos',
    possui_produto_social_quais: 'possui_produto_social_quais',
    mensagem_para_voluntarios_doadores: 'mensagem_para_voluntarios_doadores',
    serve_refeicoes_cozinha_propria: 'serve_refeicoes_cozinha_propria',
    Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con: 'Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con',
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__: 'Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__'
  };

  export type Tabela_ongsScalarFieldEnum = (typeof Tabela_ongsScalarFieldEnum)[keyof typeof Tabela_ongsScalarFieldEnum]


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

  export type OngWhereInput = {
    AND?: OngWhereInput | OngWhereInput[]
    OR?: OngWhereInput[]
    NOT?: OngWhereInput | OngWhereInput[]
    nome_ong?: StringNullableFilter<"Ong"> | string | null
    Motivo_da_cria__o_do_projeto_?: StringNullableFilter<"Ong"> | string | null
    Sobre?: StringNullableFilter<"Ong"> | string | null
    Respons_vel_para_contato?: StringNullableFilter<"Ong"> | string | null
    CNPJ_?: StringNullableFilter<"Ong"> | string | null
    quantidade_pessoas_assistidas?: StringNullableFilter<"Ong"> | string | null
    metas?: StringNullableFilter<"Ong"> | string | null
    Causa_da_Organiza__o_?: StringNullableFilter<"Ong"> | string | null
    area?: StringNullableFilter<"Ong"> | string | null
    match_area?: StringNullableFilter<"Ong"> | string | null
    objetivos_ods?: StringNullableFilter<"Ong"> | string | null
    Atividades_que_o_projeto_desenvolve_?: StringNullableFilter<"Ong"> | string | null
    possui_funcionarios?: StringNullableFilter<"Ong"> | string | null
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: StringNullableFilter<"Ong"> | string | null
    Funcionamento__da_organiza__o?: StringNullableFilter<"Ong"> | string | null
    Endere_o?: StringNullableFilter<"Ong"> | string | null
    RPA?: FloatNullableFilter<"Ong"> | number | null
    contato_divulgacao?: StringNullableFilter<"Ong"> | string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: StringNullableFilter<"Ong"> | string | null
    possui_produto_social?: StringNullableFilter<"Ong"> | string | null
    mensagem_para_voluntarios?: StringNullableFilter<"Ong"> | string | null
    serve_refeicoes_cozinha_propria?: StringNullableFilter<"Ong"> | string | null
    id?: IntFilter<"Ong"> | number
  }

  export type OngOrderByWithRelationInput = {
    nome_ong?: SortOrderInput | SortOrder
    Motivo_da_cria__o_do_projeto_?: SortOrderInput | SortOrder
    Sobre?: SortOrderInput | SortOrder
    Respons_vel_para_contato?: SortOrderInput | SortOrder
    CNPJ_?: SortOrderInput | SortOrder
    quantidade_pessoas_assistidas?: SortOrderInput | SortOrder
    metas?: SortOrderInput | SortOrder
    Causa_da_Organiza__o_?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    match_area?: SortOrderInput | SortOrder
    objetivos_ods?: SortOrderInput | SortOrder
    Atividades_que_o_projeto_desenvolve_?: SortOrderInput | SortOrder
    possui_funcionarios?: SortOrderInput | SortOrder
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: SortOrderInput | SortOrder
    Funcionamento__da_organiza__o?: SortOrderInput | SortOrder
    Endere_o?: SortOrderInput | SortOrder
    RPA?: SortOrderInput | SortOrder
    contato_divulgacao?: SortOrderInput | SortOrder
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: SortOrderInput | SortOrder
    possui_produto_social?: SortOrderInput | SortOrder
    mensagem_para_voluntarios?: SortOrderInput | SortOrder
    serve_refeicoes_cozinha_propria?: SortOrderInput | SortOrder
    id?: SortOrder
  }

  export type OngWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OngWhereInput | OngWhereInput[]
    OR?: OngWhereInput[]
    NOT?: OngWhereInput | OngWhereInput[]
    nome_ong?: StringNullableFilter<"Ong"> | string | null
    Motivo_da_cria__o_do_projeto_?: StringNullableFilter<"Ong"> | string | null
    Sobre?: StringNullableFilter<"Ong"> | string | null
    Respons_vel_para_contato?: StringNullableFilter<"Ong"> | string | null
    CNPJ_?: StringNullableFilter<"Ong"> | string | null
    quantidade_pessoas_assistidas?: StringNullableFilter<"Ong"> | string | null
    metas?: StringNullableFilter<"Ong"> | string | null
    Causa_da_Organiza__o_?: StringNullableFilter<"Ong"> | string | null
    area?: StringNullableFilter<"Ong"> | string | null
    match_area?: StringNullableFilter<"Ong"> | string | null
    objetivos_ods?: StringNullableFilter<"Ong"> | string | null
    Atividades_que_o_projeto_desenvolve_?: StringNullableFilter<"Ong"> | string | null
    possui_funcionarios?: StringNullableFilter<"Ong"> | string | null
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: StringNullableFilter<"Ong"> | string | null
    Funcionamento__da_organiza__o?: StringNullableFilter<"Ong"> | string | null
    Endere_o?: StringNullableFilter<"Ong"> | string | null
    RPA?: FloatNullableFilter<"Ong"> | number | null
    contato_divulgacao?: StringNullableFilter<"Ong"> | string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: StringNullableFilter<"Ong"> | string | null
    possui_produto_social?: StringNullableFilter<"Ong"> | string | null
    mensagem_para_voluntarios?: StringNullableFilter<"Ong"> | string | null
    serve_refeicoes_cozinha_propria?: StringNullableFilter<"Ong"> | string | null
  }, "id">

  export type OngOrderByWithAggregationInput = {
    nome_ong?: SortOrderInput | SortOrder
    Motivo_da_cria__o_do_projeto_?: SortOrderInput | SortOrder
    Sobre?: SortOrderInput | SortOrder
    Respons_vel_para_contato?: SortOrderInput | SortOrder
    CNPJ_?: SortOrderInput | SortOrder
    quantidade_pessoas_assistidas?: SortOrderInput | SortOrder
    metas?: SortOrderInput | SortOrder
    Causa_da_Organiza__o_?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    match_area?: SortOrderInput | SortOrder
    objetivos_ods?: SortOrderInput | SortOrder
    Atividades_que_o_projeto_desenvolve_?: SortOrderInput | SortOrder
    possui_funcionarios?: SortOrderInput | SortOrder
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: SortOrderInput | SortOrder
    Funcionamento__da_organiza__o?: SortOrderInput | SortOrder
    Endere_o?: SortOrderInput | SortOrder
    RPA?: SortOrderInput | SortOrder
    contato_divulgacao?: SortOrderInput | SortOrder
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: SortOrderInput | SortOrder
    possui_produto_social?: SortOrderInput | SortOrder
    mensagem_para_voluntarios?: SortOrderInput | SortOrder
    serve_refeicoes_cozinha_propria?: SortOrderInput | SortOrder
    id?: SortOrder
    _count?: OngCountOrderByAggregateInput
    _avg?: OngAvgOrderByAggregateInput
    _max?: OngMaxOrderByAggregateInput
    _min?: OngMinOrderByAggregateInput
    _sum?: OngSumOrderByAggregateInput
  }

  export type OngScalarWhereWithAggregatesInput = {
    AND?: OngScalarWhereWithAggregatesInput | OngScalarWhereWithAggregatesInput[]
    OR?: OngScalarWhereWithAggregatesInput[]
    NOT?: OngScalarWhereWithAggregatesInput | OngScalarWhereWithAggregatesInput[]
    nome_ong?: StringNullableWithAggregatesFilter<"Ong"> | string | null
    Motivo_da_cria__o_do_projeto_?: StringNullableWithAggregatesFilter<"Ong"> | string | null
    Sobre?: StringNullableWithAggregatesFilter<"Ong"> | string | null
    Respons_vel_para_contato?: StringNullableWithAggregatesFilter<"Ong"> | string | null
    CNPJ_?: StringNullableWithAggregatesFilter<"Ong"> | string | null
    quantidade_pessoas_assistidas?: StringNullableWithAggregatesFilter<"Ong"> | string | null
    metas?: StringNullableWithAggregatesFilter<"Ong"> | string | null
    Causa_da_Organiza__o_?: StringNullableWithAggregatesFilter<"Ong"> | string | null
    area?: StringNullableWithAggregatesFilter<"Ong"> | string | null
    match_area?: StringNullableWithAggregatesFilter<"Ong"> | string | null
    objetivos_ods?: StringNullableWithAggregatesFilter<"Ong"> | string | null
    Atividades_que_o_projeto_desenvolve_?: StringNullableWithAggregatesFilter<"Ong"> | string | null
    possui_funcionarios?: StringNullableWithAggregatesFilter<"Ong"> | string | null
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: StringNullableWithAggregatesFilter<"Ong"> | string | null
    Funcionamento__da_organiza__o?: StringNullableWithAggregatesFilter<"Ong"> | string | null
    Endere_o?: StringNullableWithAggregatesFilter<"Ong"> | string | null
    RPA?: FloatNullableWithAggregatesFilter<"Ong"> | number | null
    contato_divulgacao?: StringNullableWithAggregatesFilter<"Ong"> | string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: StringNullableWithAggregatesFilter<"Ong"> | string | null
    possui_produto_social?: StringNullableWithAggregatesFilter<"Ong"> | string | null
    mensagem_para_voluntarios?: StringNullableWithAggregatesFilter<"Ong"> | string | null
    serve_refeicoes_cozinha_propria?: StringNullableWithAggregatesFilter<"Ong"> | string | null
    id?: IntWithAggregatesFilter<"Ong"> | number
  }

  export type tabela_ongsWhereInput = {
    AND?: tabela_ongsWhereInput | tabela_ongsWhereInput[]
    OR?: tabela_ongsWhereInput[]
    NOT?: tabela_ongsWhereInput | tabela_ongsWhereInput[]
    id?: IntFilter<"tabela_ongs"> | number
    nome_ong?: StringNullableFilter<"tabela_ongs"> | string | null
    motivo_criacao?: StringNullableFilter<"tabela_ongs"> | string | null
    sobre?: StringNullableFilter<"tabela_ongs"> | string | null
    responsavel_contato?: StringNullableFilter<"tabela_ongs"> | string | null
    cnpj?: StringNullableFilter<"tabela_ongs"> | string | null
    quantidade_assistidos?: StringNullableFilter<"tabela_ongs"> | string | null
    metas?: StringNullableFilter<"tabela_ongs"> | string | null
    causa_organizacao?: StringNullableFilter<"tabela_ongs"> | string | null
    area?: StringNullableFilter<"tabela_ongs"> | string | null
    match_area?: StringNullableFilter<"tabela_ongs"> | string | null
    possui_voluntarios?: StringNullableFilter<"tabela_ongs"> | string | null
    possui_funcionarios?: StringNullableFilter<"tabela_ongs"> | string | null
    funcionamento?: StringNullableFilter<"tabela_ongs"> | string | null
    endereco?: StringNullableFilter<"tabela_ongs"> | string | null
    rpa?: StringNullableFilter<"tabela_ongs"> | string | null
    contato_divulgacao?: StringNullableFilter<"tabela_ongs"> | string | null
    redes_sociais?: StringNullableFilter<"tabela_ongs"> | string | null
    produto_social?: StringNullableFilter<"tabela_ongs"> | string | null
    mensagem_convite?: StringNullableFilter<"tabela_ongs"> | string | null
    serve_refeicao?: StringNullableFilter<"tabela_ongs"> | string | null
    Nome_da_ONG_Projeto?: StringNullableFilter<"tabela_ongs"> | string | null
    Motivo_da_cria__o_do_projeto_?: StringNullableFilter<"tabela_ongs"> | string | null
    Respons_vel_para_contato?: StringNullableFilter<"tabela_ongs"> | string | null
    CNPJ_?: StringNullableFilter<"tabela_ongs"> | string | null
    Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba?: StringNullableFilter<"tabela_ongs"> | string | null
    Metas_de_curto__m_dio_e_longo_prazo?: StringNullableFilter<"tabela_ongs"> | string | null
    Causa_da_Organiza__o_?: StringNullableFilter<"tabela_ongs"> | string | null
    rea?: StringNullableFilter<"tabela_ongs"> | string | null
    Match?: StringNullableFilter<"tabela_ongs"> | string | null
    Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_?: StringNullableFilter<"tabela_ongs"> | string | null
    Atividades_que_o_projeto_desenvolve_?: StringNullableFilter<"tabela_ongs"> | string | null
    Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_?: StringNullableFilter<"tabela_ongs"> | string | null
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: StringNullableFilter<"tabela_ongs"> | string | null
    Funcionamento__da_organiza__o?: StringNullableFilter<"tabela_ongs"> | string | null
    endere_o?: StringNullableFilter<"tabela_ongs"> | string | null
    Contato_para_divulga__o?: StringNullableFilter<"tabela_ongs"> | string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: StringNullableFilter<"tabela_ongs"> | string | null
    Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_?: StringNullableFilter<"tabela_ongs"> | string | null
    Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co?: StringNullableFilter<"tabela_ongs"> | string | null
    A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara?: StringNullableFilter<"tabela_ongs"> | string | null
    quantidade_pessoas_assistidas?: StringNullableFilter<"tabela_ongs"> | string | null
    objetivos_ods?: StringNullableFilter<"tabela_ongs"> | string | null
    possui_funcionarios_quantos?: StringNullableFilter<"tabela_ongs"> | string | null
    possui_produto_social_quais?: StringNullableFilter<"tabela_ongs"> | string | null
    mensagem_para_voluntarios_doadores?: StringNullableFilter<"tabela_ongs"> | string | null
    serve_refeicoes_cozinha_propria?: StringNullableFilter<"tabela_ongs"> | string | null
    Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con?: StringNullableFilter<"tabela_ongs"> | string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__?: StringNullableFilter<"tabela_ongs"> | string | null
  }

  export type tabela_ongsOrderByWithRelationInput = {
    id?: SortOrder
    nome_ong?: SortOrderInput | SortOrder
    motivo_criacao?: SortOrderInput | SortOrder
    sobre?: SortOrderInput | SortOrder
    responsavel_contato?: SortOrderInput | SortOrder
    cnpj?: SortOrderInput | SortOrder
    quantidade_assistidos?: SortOrderInput | SortOrder
    metas?: SortOrderInput | SortOrder
    causa_organizacao?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    match_area?: SortOrderInput | SortOrder
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
    Nome_da_ONG_Projeto?: SortOrderInput | SortOrder
    Motivo_da_cria__o_do_projeto_?: SortOrderInput | SortOrder
    Respons_vel_para_contato?: SortOrderInput | SortOrder
    CNPJ_?: SortOrderInput | SortOrder
    Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba?: SortOrderInput | SortOrder
    Metas_de_curto__m_dio_e_longo_prazo?: SortOrderInput | SortOrder
    Causa_da_Organiza__o_?: SortOrderInput | SortOrder
    rea?: SortOrderInput | SortOrder
    Match?: SortOrderInput | SortOrder
    Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_?: SortOrderInput | SortOrder
    Atividades_que_o_projeto_desenvolve_?: SortOrderInput | SortOrder
    Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_?: SortOrderInput | SortOrder
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: SortOrderInput | SortOrder
    Funcionamento__da_organiza__o?: SortOrderInput | SortOrder
    endere_o?: SortOrderInput | SortOrder
    Contato_para_divulga__o?: SortOrderInput | SortOrder
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: SortOrderInput | SortOrder
    Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_?: SortOrderInput | SortOrder
    Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co?: SortOrderInput | SortOrder
    A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara?: SortOrderInput | SortOrder
    quantidade_pessoas_assistidas?: SortOrderInput | SortOrder
    objetivos_ods?: SortOrderInput | SortOrder
    possui_funcionarios_quantos?: SortOrderInput | SortOrder
    possui_produto_social_quais?: SortOrderInput | SortOrder
    mensagem_para_voluntarios_doadores?: SortOrderInput | SortOrder
    serve_refeicoes_cozinha_propria?: SortOrderInput | SortOrder
    Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con?: SortOrderInput | SortOrder
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__?: SortOrderInput | SortOrder
  }

  export type tabela_ongsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tabela_ongsWhereInput | tabela_ongsWhereInput[]
    OR?: tabela_ongsWhereInput[]
    NOT?: tabela_ongsWhereInput | tabela_ongsWhereInput[]
    nome_ong?: StringNullableFilter<"tabela_ongs"> | string | null
    motivo_criacao?: StringNullableFilter<"tabela_ongs"> | string | null
    sobre?: StringNullableFilter<"tabela_ongs"> | string | null
    responsavel_contato?: StringNullableFilter<"tabela_ongs"> | string | null
    cnpj?: StringNullableFilter<"tabela_ongs"> | string | null
    quantidade_assistidos?: StringNullableFilter<"tabela_ongs"> | string | null
    metas?: StringNullableFilter<"tabela_ongs"> | string | null
    causa_organizacao?: StringNullableFilter<"tabela_ongs"> | string | null
    area?: StringNullableFilter<"tabela_ongs"> | string | null
    match_area?: StringNullableFilter<"tabela_ongs"> | string | null
    possui_voluntarios?: StringNullableFilter<"tabela_ongs"> | string | null
    possui_funcionarios?: StringNullableFilter<"tabela_ongs"> | string | null
    funcionamento?: StringNullableFilter<"tabela_ongs"> | string | null
    endereco?: StringNullableFilter<"tabela_ongs"> | string | null
    rpa?: StringNullableFilter<"tabela_ongs"> | string | null
    contato_divulgacao?: StringNullableFilter<"tabela_ongs"> | string | null
    redes_sociais?: StringNullableFilter<"tabela_ongs"> | string | null
    produto_social?: StringNullableFilter<"tabela_ongs"> | string | null
    mensagem_convite?: StringNullableFilter<"tabela_ongs"> | string | null
    serve_refeicao?: StringNullableFilter<"tabela_ongs"> | string | null
    Nome_da_ONG_Projeto?: StringNullableFilter<"tabela_ongs"> | string | null
    Motivo_da_cria__o_do_projeto_?: StringNullableFilter<"tabela_ongs"> | string | null
    Respons_vel_para_contato?: StringNullableFilter<"tabela_ongs"> | string | null
    CNPJ_?: StringNullableFilter<"tabela_ongs"> | string | null
    Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba?: StringNullableFilter<"tabela_ongs"> | string | null
    Metas_de_curto__m_dio_e_longo_prazo?: StringNullableFilter<"tabela_ongs"> | string | null
    Causa_da_Organiza__o_?: StringNullableFilter<"tabela_ongs"> | string | null
    rea?: StringNullableFilter<"tabela_ongs"> | string | null
    Match?: StringNullableFilter<"tabela_ongs"> | string | null
    Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_?: StringNullableFilter<"tabela_ongs"> | string | null
    Atividades_que_o_projeto_desenvolve_?: StringNullableFilter<"tabela_ongs"> | string | null
    Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_?: StringNullableFilter<"tabela_ongs"> | string | null
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: StringNullableFilter<"tabela_ongs"> | string | null
    Funcionamento__da_organiza__o?: StringNullableFilter<"tabela_ongs"> | string | null
    endere_o?: StringNullableFilter<"tabela_ongs"> | string | null
    Contato_para_divulga__o?: StringNullableFilter<"tabela_ongs"> | string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: StringNullableFilter<"tabela_ongs"> | string | null
    Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_?: StringNullableFilter<"tabela_ongs"> | string | null
    Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co?: StringNullableFilter<"tabela_ongs"> | string | null
    A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara?: StringNullableFilter<"tabela_ongs"> | string | null
    quantidade_pessoas_assistidas?: StringNullableFilter<"tabela_ongs"> | string | null
    objetivos_ods?: StringNullableFilter<"tabela_ongs"> | string | null
    possui_funcionarios_quantos?: StringNullableFilter<"tabela_ongs"> | string | null
    possui_produto_social_quais?: StringNullableFilter<"tabela_ongs"> | string | null
    mensagem_para_voluntarios_doadores?: StringNullableFilter<"tabela_ongs"> | string | null
    serve_refeicoes_cozinha_propria?: StringNullableFilter<"tabela_ongs"> | string | null
    Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con?: StringNullableFilter<"tabela_ongs"> | string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__?: StringNullableFilter<"tabela_ongs"> | string | null
  }, "id">

  export type tabela_ongsOrderByWithAggregationInput = {
    id?: SortOrder
    nome_ong?: SortOrderInput | SortOrder
    motivo_criacao?: SortOrderInput | SortOrder
    sobre?: SortOrderInput | SortOrder
    responsavel_contato?: SortOrderInput | SortOrder
    cnpj?: SortOrderInput | SortOrder
    quantidade_assistidos?: SortOrderInput | SortOrder
    metas?: SortOrderInput | SortOrder
    causa_organizacao?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    match_area?: SortOrderInput | SortOrder
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
    Nome_da_ONG_Projeto?: SortOrderInput | SortOrder
    Motivo_da_cria__o_do_projeto_?: SortOrderInput | SortOrder
    Respons_vel_para_contato?: SortOrderInput | SortOrder
    CNPJ_?: SortOrderInput | SortOrder
    Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba?: SortOrderInput | SortOrder
    Metas_de_curto__m_dio_e_longo_prazo?: SortOrderInput | SortOrder
    Causa_da_Organiza__o_?: SortOrderInput | SortOrder
    rea?: SortOrderInput | SortOrder
    Match?: SortOrderInput | SortOrder
    Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_?: SortOrderInput | SortOrder
    Atividades_que_o_projeto_desenvolve_?: SortOrderInput | SortOrder
    Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_?: SortOrderInput | SortOrder
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: SortOrderInput | SortOrder
    Funcionamento__da_organiza__o?: SortOrderInput | SortOrder
    endere_o?: SortOrderInput | SortOrder
    Contato_para_divulga__o?: SortOrderInput | SortOrder
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: SortOrderInput | SortOrder
    Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_?: SortOrderInput | SortOrder
    Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co?: SortOrderInput | SortOrder
    A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara?: SortOrderInput | SortOrder
    quantidade_pessoas_assistidas?: SortOrderInput | SortOrder
    objetivos_ods?: SortOrderInput | SortOrder
    possui_funcionarios_quantos?: SortOrderInput | SortOrder
    possui_produto_social_quais?: SortOrderInput | SortOrder
    mensagem_para_voluntarios_doadores?: SortOrderInput | SortOrder
    serve_refeicoes_cozinha_propria?: SortOrderInput | SortOrder
    Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con?: SortOrderInput | SortOrder
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__?: SortOrderInput | SortOrder
    _count?: tabela_ongsCountOrderByAggregateInput
    _avg?: tabela_ongsAvgOrderByAggregateInput
    _max?: tabela_ongsMaxOrderByAggregateInput
    _min?: tabela_ongsMinOrderByAggregateInput
    _sum?: tabela_ongsSumOrderByAggregateInput
  }

  export type tabela_ongsScalarWhereWithAggregatesInput = {
    AND?: tabela_ongsScalarWhereWithAggregatesInput | tabela_ongsScalarWhereWithAggregatesInput[]
    OR?: tabela_ongsScalarWhereWithAggregatesInput[]
    NOT?: tabela_ongsScalarWhereWithAggregatesInput | tabela_ongsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tabela_ongs"> | number
    nome_ong?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    motivo_criacao?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    sobre?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    responsavel_contato?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    cnpj?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    quantidade_assistidos?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    metas?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    causa_organizacao?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    area?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    match_area?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    possui_voluntarios?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    possui_funcionarios?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    funcionamento?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    endereco?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    rpa?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    contato_divulgacao?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    redes_sociais?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    produto_social?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    mensagem_convite?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    serve_refeicao?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    Nome_da_ONG_Projeto?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    Motivo_da_cria__o_do_projeto_?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    Respons_vel_para_contato?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    CNPJ_?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    Metas_de_curto__m_dio_e_longo_prazo?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    Causa_da_Organiza__o_?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    rea?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    Match?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    Atividades_que_o_projeto_desenvolve_?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    Funcionamento__da_organiza__o?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    endere_o?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    Contato_para_divulga__o?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    quantidade_pessoas_assistidas?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    objetivos_ods?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    possui_funcionarios_quantos?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    possui_produto_social_quais?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    mensagem_para_voluntarios_doadores?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    serve_refeicoes_cozinha_propria?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__?: StringNullableWithAggregatesFilter<"tabela_ongs"> | string | null
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

  export type OngCreateInput = {
    nome_ong?: string | null
    Motivo_da_cria__o_do_projeto_?: string | null
    Sobre?: string | null
    Respons_vel_para_contato?: string | null
    CNPJ_?: string | null
    quantidade_pessoas_assistidas?: string | null
    metas?: string | null
    Causa_da_Organiza__o_?: string | null
    area?: string | null
    match_area?: string | null
    objetivos_ods?: string | null
    Atividades_que_o_projeto_desenvolve_?: string | null
    possui_funcionarios?: string | null
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: string | null
    Funcionamento__da_organiza__o?: string | null
    Endere_o?: string | null
    RPA?: number | null
    contato_divulgacao?: string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: string | null
    possui_produto_social?: string | null
    mensagem_para_voluntarios?: string | null
    serve_refeicoes_cozinha_propria?: string | null
  }

  export type OngUncheckedCreateInput = {
    nome_ong?: string | null
    Motivo_da_cria__o_do_projeto_?: string | null
    Sobre?: string | null
    Respons_vel_para_contato?: string | null
    CNPJ_?: string | null
    quantidade_pessoas_assistidas?: string | null
    metas?: string | null
    Causa_da_Organiza__o_?: string | null
    area?: string | null
    match_area?: string | null
    objetivos_ods?: string | null
    Atividades_que_o_projeto_desenvolve_?: string | null
    possui_funcionarios?: string | null
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: string | null
    Funcionamento__da_organiza__o?: string | null
    Endere_o?: string | null
    RPA?: number | null
    contato_divulgacao?: string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: string | null
    possui_produto_social?: string | null
    mensagem_para_voluntarios?: string | null
    serve_refeicoes_cozinha_propria?: string | null
    id?: number
  }

  export type OngUpdateInput = {
    nome_ong?: NullableStringFieldUpdateOperationsInput | string | null
    Motivo_da_cria__o_do_projeto_?: NullableStringFieldUpdateOperationsInput | string | null
    Sobre?: NullableStringFieldUpdateOperationsInput | string | null
    Respons_vel_para_contato?: NullableStringFieldUpdateOperationsInput | string | null
    CNPJ_?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade_pessoas_assistidas?: NullableStringFieldUpdateOperationsInput | string | null
    metas?: NullableStringFieldUpdateOperationsInput | string | null
    Causa_da_Organiza__o_?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    match_area?: NullableStringFieldUpdateOperationsInput | string | null
    objetivos_ods?: NullableStringFieldUpdateOperationsInput | string | null
    Atividades_que_o_projeto_desenvolve_?: NullableStringFieldUpdateOperationsInput | string | null
    possui_funcionarios?: NullableStringFieldUpdateOperationsInput | string | null
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: NullableStringFieldUpdateOperationsInput | string | null
    Funcionamento__da_organiza__o?: NullableStringFieldUpdateOperationsInput | string | null
    Endere_o?: NullableStringFieldUpdateOperationsInput | string | null
    RPA?: NullableFloatFieldUpdateOperationsInput | number | null
    contato_divulgacao?: NullableStringFieldUpdateOperationsInput | string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: NullableStringFieldUpdateOperationsInput | string | null
    possui_produto_social?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem_para_voluntarios?: NullableStringFieldUpdateOperationsInput | string | null
    serve_refeicoes_cozinha_propria?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OngUncheckedUpdateInput = {
    nome_ong?: NullableStringFieldUpdateOperationsInput | string | null
    Motivo_da_cria__o_do_projeto_?: NullableStringFieldUpdateOperationsInput | string | null
    Sobre?: NullableStringFieldUpdateOperationsInput | string | null
    Respons_vel_para_contato?: NullableStringFieldUpdateOperationsInput | string | null
    CNPJ_?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade_pessoas_assistidas?: NullableStringFieldUpdateOperationsInput | string | null
    metas?: NullableStringFieldUpdateOperationsInput | string | null
    Causa_da_Organiza__o_?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    match_area?: NullableStringFieldUpdateOperationsInput | string | null
    objetivos_ods?: NullableStringFieldUpdateOperationsInput | string | null
    Atividades_que_o_projeto_desenvolve_?: NullableStringFieldUpdateOperationsInput | string | null
    possui_funcionarios?: NullableStringFieldUpdateOperationsInput | string | null
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: NullableStringFieldUpdateOperationsInput | string | null
    Funcionamento__da_organiza__o?: NullableStringFieldUpdateOperationsInput | string | null
    Endere_o?: NullableStringFieldUpdateOperationsInput | string | null
    RPA?: NullableFloatFieldUpdateOperationsInput | number | null
    contato_divulgacao?: NullableStringFieldUpdateOperationsInput | string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: NullableStringFieldUpdateOperationsInput | string | null
    possui_produto_social?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem_para_voluntarios?: NullableStringFieldUpdateOperationsInput | string | null
    serve_refeicoes_cozinha_propria?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type OngCreateManyInput = {
    nome_ong?: string | null
    Motivo_da_cria__o_do_projeto_?: string | null
    Sobre?: string | null
    Respons_vel_para_contato?: string | null
    CNPJ_?: string | null
    quantidade_pessoas_assistidas?: string | null
    metas?: string | null
    Causa_da_Organiza__o_?: string | null
    area?: string | null
    match_area?: string | null
    objetivos_ods?: string | null
    Atividades_que_o_projeto_desenvolve_?: string | null
    possui_funcionarios?: string | null
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: string | null
    Funcionamento__da_organiza__o?: string | null
    Endere_o?: string | null
    RPA?: number | null
    contato_divulgacao?: string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: string | null
    possui_produto_social?: string | null
    mensagem_para_voluntarios?: string | null
    serve_refeicoes_cozinha_propria?: string | null
    id?: number
  }

  export type OngUpdateManyMutationInput = {
    nome_ong?: NullableStringFieldUpdateOperationsInput | string | null
    Motivo_da_cria__o_do_projeto_?: NullableStringFieldUpdateOperationsInput | string | null
    Sobre?: NullableStringFieldUpdateOperationsInput | string | null
    Respons_vel_para_contato?: NullableStringFieldUpdateOperationsInput | string | null
    CNPJ_?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade_pessoas_assistidas?: NullableStringFieldUpdateOperationsInput | string | null
    metas?: NullableStringFieldUpdateOperationsInput | string | null
    Causa_da_Organiza__o_?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    match_area?: NullableStringFieldUpdateOperationsInput | string | null
    objetivos_ods?: NullableStringFieldUpdateOperationsInput | string | null
    Atividades_que_o_projeto_desenvolve_?: NullableStringFieldUpdateOperationsInput | string | null
    possui_funcionarios?: NullableStringFieldUpdateOperationsInput | string | null
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: NullableStringFieldUpdateOperationsInput | string | null
    Funcionamento__da_organiza__o?: NullableStringFieldUpdateOperationsInput | string | null
    Endere_o?: NullableStringFieldUpdateOperationsInput | string | null
    RPA?: NullableFloatFieldUpdateOperationsInput | number | null
    contato_divulgacao?: NullableStringFieldUpdateOperationsInput | string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: NullableStringFieldUpdateOperationsInput | string | null
    possui_produto_social?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem_para_voluntarios?: NullableStringFieldUpdateOperationsInput | string | null
    serve_refeicoes_cozinha_propria?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OngUncheckedUpdateManyInput = {
    nome_ong?: NullableStringFieldUpdateOperationsInput | string | null
    Motivo_da_cria__o_do_projeto_?: NullableStringFieldUpdateOperationsInput | string | null
    Sobre?: NullableStringFieldUpdateOperationsInput | string | null
    Respons_vel_para_contato?: NullableStringFieldUpdateOperationsInput | string | null
    CNPJ_?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade_pessoas_assistidas?: NullableStringFieldUpdateOperationsInput | string | null
    metas?: NullableStringFieldUpdateOperationsInput | string | null
    Causa_da_Organiza__o_?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    match_area?: NullableStringFieldUpdateOperationsInput | string | null
    objetivos_ods?: NullableStringFieldUpdateOperationsInput | string | null
    Atividades_que_o_projeto_desenvolve_?: NullableStringFieldUpdateOperationsInput | string | null
    possui_funcionarios?: NullableStringFieldUpdateOperationsInput | string | null
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: NullableStringFieldUpdateOperationsInput | string | null
    Funcionamento__da_organiza__o?: NullableStringFieldUpdateOperationsInput | string | null
    Endere_o?: NullableStringFieldUpdateOperationsInput | string | null
    RPA?: NullableFloatFieldUpdateOperationsInput | number | null
    contato_divulgacao?: NullableStringFieldUpdateOperationsInput | string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: NullableStringFieldUpdateOperationsInput | string | null
    possui_produto_social?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem_para_voluntarios?: NullableStringFieldUpdateOperationsInput | string | null
    serve_refeicoes_cozinha_propria?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type tabela_ongsCreateInput = {
    nome_ong?: string | null
    motivo_criacao?: string | null
    sobre?: string | null
    responsavel_contato?: string | null
    cnpj?: string | null
    quantidade_assistidos?: string | null
    metas?: string | null
    causa_organizacao?: string | null
    area?: string | null
    match_area?: string | null
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
    Nome_da_ONG_Projeto?: string | null
    Motivo_da_cria__o_do_projeto_?: string | null
    Respons_vel_para_contato?: string | null
    CNPJ_?: string | null
    Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba?: string | null
    Metas_de_curto__m_dio_e_longo_prazo?: string | null
    Causa_da_Organiza__o_?: string | null
    rea?: string | null
    Match?: string | null
    Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_?: string | null
    Atividades_que_o_projeto_desenvolve_?: string | null
    Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_?: string | null
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: string | null
    Funcionamento__da_organiza__o?: string | null
    endere_o?: string | null
    Contato_para_divulga__o?: string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: string | null
    Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_?: string | null
    Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co?: string | null
    A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara?: string | null
    quantidade_pessoas_assistidas?: string | null
    objetivos_ods?: string | null
    possui_funcionarios_quantos?: string | null
    possui_produto_social_quais?: string | null
    mensagem_para_voluntarios_doadores?: string | null
    serve_refeicoes_cozinha_propria?: string | null
    Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con?: string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__?: string | null
  }

  export type tabela_ongsUncheckedCreateInput = {
    id?: number
    nome_ong?: string | null
    motivo_criacao?: string | null
    sobre?: string | null
    responsavel_contato?: string | null
    cnpj?: string | null
    quantidade_assistidos?: string | null
    metas?: string | null
    causa_organizacao?: string | null
    area?: string | null
    match_area?: string | null
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
    Nome_da_ONG_Projeto?: string | null
    Motivo_da_cria__o_do_projeto_?: string | null
    Respons_vel_para_contato?: string | null
    CNPJ_?: string | null
    Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba?: string | null
    Metas_de_curto__m_dio_e_longo_prazo?: string | null
    Causa_da_Organiza__o_?: string | null
    rea?: string | null
    Match?: string | null
    Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_?: string | null
    Atividades_que_o_projeto_desenvolve_?: string | null
    Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_?: string | null
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: string | null
    Funcionamento__da_organiza__o?: string | null
    endere_o?: string | null
    Contato_para_divulga__o?: string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: string | null
    Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_?: string | null
    Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co?: string | null
    A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara?: string | null
    quantidade_pessoas_assistidas?: string | null
    objetivos_ods?: string | null
    possui_funcionarios_quantos?: string | null
    possui_produto_social_quais?: string | null
    mensagem_para_voluntarios_doadores?: string | null
    serve_refeicoes_cozinha_propria?: string | null
    Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con?: string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__?: string | null
  }

  export type tabela_ongsUpdateInput = {
    nome_ong?: NullableStringFieldUpdateOperationsInput | string | null
    motivo_criacao?: NullableStringFieldUpdateOperationsInput | string | null
    sobre?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel_contato?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade_assistidos?: NullableStringFieldUpdateOperationsInput | string | null
    metas?: NullableStringFieldUpdateOperationsInput | string | null
    causa_organizacao?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    match_area?: NullableStringFieldUpdateOperationsInput | string | null
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
    Nome_da_ONG_Projeto?: NullableStringFieldUpdateOperationsInput | string | null
    Motivo_da_cria__o_do_projeto_?: NullableStringFieldUpdateOperationsInput | string | null
    Respons_vel_para_contato?: NullableStringFieldUpdateOperationsInput | string | null
    CNPJ_?: NullableStringFieldUpdateOperationsInput | string | null
    Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba?: NullableStringFieldUpdateOperationsInput | string | null
    Metas_de_curto__m_dio_e_longo_prazo?: NullableStringFieldUpdateOperationsInput | string | null
    Causa_da_Organiza__o_?: NullableStringFieldUpdateOperationsInput | string | null
    rea?: NullableStringFieldUpdateOperationsInput | string | null
    Match?: NullableStringFieldUpdateOperationsInput | string | null
    Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_?: NullableStringFieldUpdateOperationsInput | string | null
    Atividades_que_o_projeto_desenvolve_?: NullableStringFieldUpdateOperationsInput | string | null
    Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_?: NullableStringFieldUpdateOperationsInput | string | null
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: NullableStringFieldUpdateOperationsInput | string | null
    Funcionamento__da_organiza__o?: NullableStringFieldUpdateOperationsInput | string | null
    endere_o?: NullableStringFieldUpdateOperationsInput | string | null
    Contato_para_divulga__o?: NullableStringFieldUpdateOperationsInput | string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: NullableStringFieldUpdateOperationsInput | string | null
    Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_?: NullableStringFieldUpdateOperationsInput | string | null
    Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co?: NullableStringFieldUpdateOperationsInput | string | null
    A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade_pessoas_assistidas?: NullableStringFieldUpdateOperationsInput | string | null
    objetivos_ods?: NullableStringFieldUpdateOperationsInput | string | null
    possui_funcionarios_quantos?: NullableStringFieldUpdateOperationsInput | string | null
    possui_produto_social_quais?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem_para_voluntarios_doadores?: NullableStringFieldUpdateOperationsInput | string | null
    serve_refeicoes_cozinha_propria?: NullableStringFieldUpdateOperationsInput | string | null
    Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con?: NullableStringFieldUpdateOperationsInput | string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tabela_ongsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_ong?: NullableStringFieldUpdateOperationsInput | string | null
    motivo_criacao?: NullableStringFieldUpdateOperationsInput | string | null
    sobre?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel_contato?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade_assistidos?: NullableStringFieldUpdateOperationsInput | string | null
    metas?: NullableStringFieldUpdateOperationsInput | string | null
    causa_organizacao?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    match_area?: NullableStringFieldUpdateOperationsInput | string | null
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
    Nome_da_ONG_Projeto?: NullableStringFieldUpdateOperationsInput | string | null
    Motivo_da_cria__o_do_projeto_?: NullableStringFieldUpdateOperationsInput | string | null
    Respons_vel_para_contato?: NullableStringFieldUpdateOperationsInput | string | null
    CNPJ_?: NullableStringFieldUpdateOperationsInput | string | null
    Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba?: NullableStringFieldUpdateOperationsInput | string | null
    Metas_de_curto__m_dio_e_longo_prazo?: NullableStringFieldUpdateOperationsInput | string | null
    Causa_da_Organiza__o_?: NullableStringFieldUpdateOperationsInput | string | null
    rea?: NullableStringFieldUpdateOperationsInput | string | null
    Match?: NullableStringFieldUpdateOperationsInput | string | null
    Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_?: NullableStringFieldUpdateOperationsInput | string | null
    Atividades_que_o_projeto_desenvolve_?: NullableStringFieldUpdateOperationsInput | string | null
    Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_?: NullableStringFieldUpdateOperationsInput | string | null
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: NullableStringFieldUpdateOperationsInput | string | null
    Funcionamento__da_organiza__o?: NullableStringFieldUpdateOperationsInput | string | null
    endere_o?: NullableStringFieldUpdateOperationsInput | string | null
    Contato_para_divulga__o?: NullableStringFieldUpdateOperationsInput | string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: NullableStringFieldUpdateOperationsInput | string | null
    Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_?: NullableStringFieldUpdateOperationsInput | string | null
    Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co?: NullableStringFieldUpdateOperationsInput | string | null
    A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade_pessoas_assistidas?: NullableStringFieldUpdateOperationsInput | string | null
    objetivos_ods?: NullableStringFieldUpdateOperationsInput | string | null
    possui_funcionarios_quantos?: NullableStringFieldUpdateOperationsInput | string | null
    possui_produto_social_quais?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem_para_voluntarios_doadores?: NullableStringFieldUpdateOperationsInput | string | null
    serve_refeicoes_cozinha_propria?: NullableStringFieldUpdateOperationsInput | string | null
    Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con?: NullableStringFieldUpdateOperationsInput | string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tabela_ongsCreateManyInput = {
    id?: number
    nome_ong?: string | null
    motivo_criacao?: string | null
    sobre?: string | null
    responsavel_contato?: string | null
    cnpj?: string | null
    quantidade_assistidos?: string | null
    metas?: string | null
    causa_organizacao?: string | null
    area?: string | null
    match_area?: string | null
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
    Nome_da_ONG_Projeto?: string | null
    Motivo_da_cria__o_do_projeto_?: string | null
    Respons_vel_para_contato?: string | null
    CNPJ_?: string | null
    Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba?: string | null
    Metas_de_curto__m_dio_e_longo_prazo?: string | null
    Causa_da_Organiza__o_?: string | null
    rea?: string | null
    Match?: string | null
    Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_?: string | null
    Atividades_que_o_projeto_desenvolve_?: string | null
    Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_?: string | null
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: string | null
    Funcionamento__da_organiza__o?: string | null
    endere_o?: string | null
    Contato_para_divulga__o?: string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: string | null
    Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_?: string | null
    Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co?: string | null
    A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara?: string | null
    quantidade_pessoas_assistidas?: string | null
    objetivos_ods?: string | null
    possui_funcionarios_quantos?: string | null
    possui_produto_social_quais?: string | null
    mensagem_para_voluntarios_doadores?: string | null
    serve_refeicoes_cozinha_propria?: string | null
    Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con?: string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__?: string | null
  }

  export type tabela_ongsUpdateManyMutationInput = {
    nome_ong?: NullableStringFieldUpdateOperationsInput | string | null
    motivo_criacao?: NullableStringFieldUpdateOperationsInput | string | null
    sobre?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel_contato?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade_assistidos?: NullableStringFieldUpdateOperationsInput | string | null
    metas?: NullableStringFieldUpdateOperationsInput | string | null
    causa_organizacao?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    match_area?: NullableStringFieldUpdateOperationsInput | string | null
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
    Nome_da_ONG_Projeto?: NullableStringFieldUpdateOperationsInput | string | null
    Motivo_da_cria__o_do_projeto_?: NullableStringFieldUpdateOperationsInput | string | null
    Respons_vel_para_contato?: NullableStringFieldUpdateOperationsInput | string | null
    CNPJ_?: NullableStringFieldUpdateOperationsInput | string | null
    Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba?: NullableStringFieldUpdateOperationsInput | string | null
    Metas_de_curto__m_dio_e_longo_prazo?: NullableStringFieldUpdateOperationsInput | string | null
    Causa_da_Organiza__o_?: NullableStringFieldUpdateOperationsInput | string | null
    rea?: NullableStringFieldUpdateOperationsInput | string | null
    Match?: NullableStringFieldUpdateOperationsInput | string | null
    Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_?: NullableStringFieldUpdateOperationsInput | string | null
    Atividades_que_o_projeto_desenvolve_?: NullableStringFieldUpdateOperationsInput | string | null
    Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_?: NullableStringFieldUpdateOperationsInput | string | null
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: NullableStringFieldUpdateOperationsInput | string | null
    Funcionamento__da_organiza__o?: NullableStringFieldUpdateOperationsInput | string | null
    endere_o?: NullableStringFieldUpdateOperationsInput | string | null
    Contato_para_divulga__o?: NullableStringFieldUpdateOperationsInput | string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: NullableStringFieldUpdateOperationsInput | string | null
    Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_?: NullableStringFieldUpdateOperationsInput | string | null
    Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co?: NullableStringFieldUpdateOperationsInput | string | null
    A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade_pessoas_assistidas?: NullableStringFieldUpdateOperationsInput | string | null
    objetivos_ods?: NullableStringFieldUpdateOperationsInput | string | null
    possui_funcionarios_quantos?: NullableStringFieldUpdateOperationsInput | string | null
    possui_produto_social_quais?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem_para_voluntarios_doadores?: NullableStringFieldUpdateOperationsInput | string | null
    serve_refeicoes_cozinha_propria?: NullableStringFieldUpdateOperationsInput | string | null
    Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con?: NullableStringFieldUpdateOperationsInput | string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tabela_ongsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_ong?: NullableStringFieldUpdateOperationsInput | string | null
    motivo_criacao?: NullableStringFieldUpdateOperationsInput | string | null
    sobre?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel_contato?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade_assistidos?: NullableStringFieldUpdateOperationsInput | string | null
    metas?: NullableStringFieldUpdateOperationsInput | string | null
    causa_organizacao?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    match_area?: NullableStringFieldUpdateOperationsInput | string | null
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
    Nome_da_ONG_Projeto?: NullableStringFieldUpdateOperationsInput | string | null
    Motivo_da_cria__o_do_projeto_?: NullableStringFieldUpdateOperationsInput | string | null
    Respons_vel_para_contato?: NullableStringFieldUpdateOperationsInput | string | null
    CNPJ_?: NullableStringFieldUpdateOperationsInput | string | null
    Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba?: NullableStringFieldUpdateOperationsInput | string | null
    Metas_de_curto__m_dio_e_longo_prazo?: NullableStringFieldUpdateOperationsInput | string | null
    Causa_da_Organiza__o_?: NullableStringFieldUpdateOperationsInput | string | null
    rea?: NullableStringFieldUpdateOperationsInput | string | null
    Match?: NullableStringFieldUpdateOperationsInput | string | null
    Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_?: NullableStringFieldUpdateOperationsInput | string | null
    Atividades_que_o_projeto_desenvolve_?: NullableStringFieldUpdateOperationsInput | string | null
    Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_?: NullableStringFieldUpdateOperationsInput | string | null
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: NullableStringFieldUpdateOperationsInput | string | null
    Funcionamento__da_organiza__o?: NullableStringFieldUpdateOperationsInput | string | null
    endere_o?: NullableStringFieldUpdateOperationsInput | string | null
    Contato_para_divulga__o?: NullableStringFieldUpdateOperationsInput | string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: NullableStringFieldUpdateOperationsInput | string | null
    Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_?: NullableStringFieldUpdateOperationsInput | string | null
    Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co?: NullableStringFieldUpdateOperationsInput | string | null
    A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade_pessoas_assistidas?: NullableStringFieldUpdateOperationsInput | string | null
    objetivos_ods?: NullableStringFieldUpdateOperationsInput | string | null
    possui_funcionarios_quantos?: NullableStringFieldUpdateOperationsInput | string | null
    possui_produto_social_quais?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem_para_voluntarios_doadores?: NullableStringFieldUpdateOperationsInput | string | null
    serve_refeicoes_cozinha_propria?: NullableStringFieldUpdateOperationsInput | string | null
    Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con?: NullableStringFieldUpdateOperationsInput | string | null
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type OngCountOrderByAggregateInput = {
    nome_ong?: SortOrder
    Motivo_da_cria__o_do_projeto_?: SortOrder
    Sobre?: SortOrder
    Respons_vel_para_contato?: SortOrder
    CNPJ_?: SortOrder
    quantidade_pessoas_assistidas?: SortOrder
    metas?: SortOrder
    Causa_da_Organiza__o_?: SortOrder
    area?: SortOrder
    match_area?: SortOrder
    objetivos_ods?: SortOrder
    Atividades_que_o_projeto_desenvolve_?: SortOrder
    possui_funcionarios?: SortOrder
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: SortOrder
    Funcionamento__da_organiza__o?: SortOrder
    Endere_o?: SortOrder
    RPA?: SortOrder
    contato_divulgacao?: SortOrder
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: SortOrder
    possui_produto_social?: SortOrder
    mensagem_para_voluntarios?: SortOrder
    serve_refeicoes_cozinha_propria?: SortOrder
    id?: SortOrder
  }

  export type OngAvgOrderByAggregateInput = {
    RPA?: SortOrder
    id?: SortOrder
  }

  export type OngMaxOrderByAggregateInput = {
    nome_ong?: SortOrder
    Motivo_da_cria__o_do_projeto_?: SortOrder
    Sobre?: SortOrder
    Respons_vel_para_contato?: SortOrder
    CNPJ_?: SortOrder
    quantidade_pessoas_assistidas?: SortOrder
    metas?: SortOrder
    Causa_da_Organiza__o_?: SortOrder
    area?: SortOrder
    match_area?: SortOrder
    objetivos_ods?: SortOrder
    Atividades_que_o_projeto_desenvolve_?: SortOrder
    possui_funcionarios?: SortOrder
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: SortOrder
    Funcionamento__da_organiza__o?: SortOrder
    Endere_o?: SortOrder
    RPA?: SortOrder
    contato_divulgacao?: SortOrder
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: SortOrder
    possui_produto_social?: SortOrder
    mensagem_para_voluntarios?: SortOrder
    serve_refeicoes_cozinha_propria?: SortOrder
    id?: SortOrder
  }

  export type OngMinOrderByAggregateInput = {
    nome_ong?: SortOrder
    Motivo_da_cria__o_do_projeto_?: SortOrder
    Sobre?: SortOrder
    Respons_vel_para_contato?: SortOrder
    CNPJ_?: SortOrder
    quantidade_pessoas_assistidas?: SortOrder
    metas?: SortOrder
    Causa_da_Organiza__o_?: SortOrder
    area?: SortOrder
    match_area?: SortOrder
    objetivos_ods?: SortOrder
    Atividades_que_o_projeto_desenvolve_?: SortOrder
    possui_funcionarios?: SortOrder
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: SortOrder
    Funcionamento__da_organiza__o?: SortOrder
    Endere_o?: SortOrder
    RPA?: SortOrder
    contato_divulgacao?: SortOrder
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: SortOrder
    possui_produto_social?: SortOrder
    mensagem_para_voluntarios?: SortOrder
    serve_refeicoes_cozinha_propria?: SortOrder
    id?: SortOrder
  }

  export type OngSumOrderByAggregateInput = {
    RPA?: SortOrder
    id?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type tabela_ongsCountOrderByAggregateInput = {
    id?: SortOrder
    nome_ong?: SortOrder
    motivo_criacao?: SortOrder
    sobre?: SortOrder
    responsavel_contato?: SortOrder
    cnpj?: SortOrder
    quantidade_assistidos?: SortOrder
    metas?: SortOrder
    causa_organizacao?: SortOrder
    area?: SortOrder
    match_area?: SortOrder
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
    Nome_da_ONG_Projeto?: SortOrder
    Motivo_da_cria__o_do_projeto_?: SortOrder
    Respons_vel_para_contato?: SortOrder
    CNPJ_?: SortOrder
    Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba?: SortOrder
    Metas_de_curto__m_dio_e_longo_prazo?: SortOrder
    Causa_da_Organiza__o_?: SortOrder
    rea?: SortOrder
    Match?: SortOrder
    Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_?: SortOrder
    Atividades_que_o_projeto_desenvolve_?: SortOrder
    Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_?: SortOrder
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: SortOrder
    Funcionamento__da_organiza__o?: SortOrder
    endere_o?: SortOrder
    Contato_para_divulga__o?: SortOrder
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: SortOrder
    Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_?: SortOrder
    Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co?: SortOrder
    A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara?: SortOrder
    quantidade_pessoas_assistidas?: SortOrder
    objetivos_ods?: SortOrder
    possui_funcionarios_quantos?: SortOrder
    possui_produto_social_quais?: SortOrder
    mensagem_para_voluntarios_doadores?: SortOrder
    serve_refeicoes_cozinha_propria?: SortOrder
    Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con?: SortOrder
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__?: SortOrder
  }

  export type tabela_ongsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tabela_ongsMaxOrderByAggregateInput = {
    id?: SortOrder
    nome_ong?: SortOrder
    motivo_criacao?: SortOrder
    sobre?: SortOrder
    responsavel_contato?: SortOrder
    cnpj?: SortOrder
    quantidade_assistidos?: SortOrder
    metas?: SortOrder
    causa_organizacao?: SortOrder
    area?: SortOrder
    match_area?: SortOrder
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
    Nome_da_ONG_Projeto?: SortOrder
    Motivo_da_cria__o_do_projeto_?: SortOrder
    Respons_vel_para_contato?: SortOrder
    CNPJ_?: SortOrder
    Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba?: SortOrder
    Metas_de_curto__m_dio_e_longo_prazo?: SortOrder
    Causa_da_Organiza__o_?: SortOrder
    rea?: SortOrder
    Match?: SortOrder
    Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_?: SortOrder
    Atividades_que_o_projeto_desenvolve_?: SortOrder
    Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_?: SortOrder
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: SortOrder
    Funcionamento__da_organiza__o?: SortOrder
    endere_o?: SortOrder
    Contato_para_divulga__o?: SortOrder
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: SortOrder
    Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_?: SortOrder
    Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co?: SortOrder
    A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara?: SortOrder
    quantidade_pessoas_assistidas?: SortOrder
    objetivos_ods?: SortOrder
    possui_funcionarios_quantos?: SortOrder
    possui_produto_social_quais?: SortOrder
    mensagem_para_voluntarios_doadores?: SortOrder
    serve_refeicoes_cozinha_propria?: SortOrder
    Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con?: SortOrder
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__?: SortOrder
  }

  export type tabela_ongsMinOrderByAggregateInput = {
    id?: SortOrder
    nome_ong?: SortOrder
    motivo_criacao?: SortOrder
    sobre?: SortOrder
    responsavel_contato?: SortOrder
    cnpj?: SortOrder
    quantidade_assistidos?: SortOrder
    metas?: SortOrder
    causa_organizacao?: SortOrder
    area?: SortOrder
    match_area?: SortOrder
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
    Nome_da_ONG_Projeto?: SortOrder
    Motivo_da_cria__o_do_projeto_?: SortOrder
    Respons_vel_para_contato?: SortOrder
    CNPJ_?: SortOrder
    Quantidade_de_pessoas_assistidas_beneficiadas_atrav_s_do_traba?: SortOrder
    Metas_de_curto__m_dio_e_longo_prazo?: SortOrder
    Causa_da_Organiza__o_?: SortOrder
    rea?: SortOrder
    Match?: SortOrder
    Objetivos_de_Desenvolvimento_Sustent_vel_ODS_que_a_institui_?: SortOrder
    Atividades_que_o_projeto_desenvolve_?: SortOrder
    Possui_Volunt_rios_fixos__Se_sim__quantos_s_o_?: SortOrder
    A_sua_organiza__o_possui_funcion_rios__Se_sim__quantos_s_o_?: SortOrder
    Funcionamento__da_organiza__o?: SortOrder
    endere_o?: SortOrder
    Contato_para_divulga__o?: SortOrder
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__o__?: SortOrder
    Voc_s_possuem_algum_produto_social__Explicando_melhor__Voc_s_?: SortOrder
    Qual_mensagem_voc__mandaria_para_as_pessoas_que_ainda_n_o_co?: SortOrder
    A_sua_entidade_serve_refei__es__se_sim__a_cozinha_que_prepara?: SortOrder
    quantidade_pessoas_assistidas?: SortOrder
    objetivos_ods?: SortOrder
    possui_funcionarios_quantos?: SortOrder
    possui_produto_social_quais?: SortOrder
    mensagem_para_voluntarios_doadores?: SortOrder
    serve_refeicoes_cozinha_propria?: SortOrder
    Motivo_da_cria__o_do_projeto__Sobre__Respons_vel_para_con?: SortOrder
    Espa_o_para_informarem_as_redes_sociais_da_sua_Organiza__?: SortOrder
  }

  export type tabela_ongsSumOrderByAggregateInput = {
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

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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