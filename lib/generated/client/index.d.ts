
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Branch
 * 
 */
export type Branch = $Result.DefaultSelection<Prisma.$BranchPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Captain
 * 
 */
export type Captain = $Result.DefaultSelection<Prisma.$CaptainPayload>
/**
 * Model DeliveryZone
 * 
 */
export type DeliveryZone = $Result.DefaultSelection<Prisma.$DeliveryZonePayload>
/**
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>
/**
 * Model Purchase
 * 
 */
export type Purchase = $Result.DefaultSelection<Prisma.$PurchasePayload>
/**
 * Model SupplierPayment
 * 
 */
export type SupplierPayment = $Result.DefaultSelection<Prisma.$SupplierPaymentPayload>
/**
 * Model StockMovement
 * 
 */
export type StockMovement = $Result.DefaultSelection<Prisma.$StockMovementPayload>
/**
 * Model ReturnRecord
 * 
 */
export type ReturnRecord = $Result.DefaultSelection<Prisma.$ReturnRecordPayload>
/**
 * Model TreasuryTransaction
 * 
 */
export type TreasuryTransaction = $Result.DefaultSelection<Prisma.$TreasuryTransactionPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model SystemSettings
 * 
 */
export type SystemSettings = $Result.DefaultSelection<Prisma.$SystemSettingsPayload>
/**
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>

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

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.branch`: Exposes CRUD operations for the **Branch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Branches
    * const branches = await prisma.branch.findMany()
    * ```
    */
  get branch(): Prisma.BranchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.captain`: Exposes CRUD operations for the **Captain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Captains
    * const captains = await prisma.captain.findMany()
    * ```
    */
  get captain(): Prisma.CaptainDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deliveryZone`: Exposes CRUD operations for the **DeliveryZone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeliveryZones
    * const deliveryZones = await prisma.deliveryZone.findMany()
    * ```
    */
  get deliveryZone(): Prisma.DeliveryZoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchase`: Exposes CRUD operations for the **Purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchase.findMany()
    * ```
    */
  get purchase(): Prisma.PurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplierPayment`: Exposes CRUD operations for the **SupplierPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupplierPayments
    * const supplierPayments = await prisma.supplierPayment.findMany()
    * ```
    */
  get supplierPayment(): Prisma.SupplierPaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stockMovement`: Exposes CRUD operations for the **StockMovement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockMovements
    * const stockMovements = await prisma.stockMovement.findMany()
    * ```
    */
  get stockMovement(): Prisma.StockMovementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.returnRecord`: Exposes CRUD operations for the **ReturnRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReturnRecords
    * const returnRecords = await prisma.returnRecord.findMany()
    * ```
    */
  get returnRecord(): Prisma.ReturnRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.treasuryTransaction`: Exposes CRUD operations for the **TreasuryTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TreasuryTransactions
    * const treasuryTransactions = await prisma.treasuryTransaction.findMany()
    * ```
    */
  get treasuryTransaction(): Prisma.TreasuryTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemSettings`: Exposes CRUD operations for the **SystemSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemSettings
    * const systemSettings = await prisma.systemSettings.findMany()
    * ```
    */
  get systemSettings(): Prisma.SystemSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    User: 'User',
    Branch: 'Branch',
    Category: 'Category',
    Product: 'Product',
    Order: 'Order',
    Customer: 'Customer',
    Captain: 'Captain',
    DeliveryZone: 'DeliveryZone',
    Supplier: 'Supplier',
    Purchase: 'Purchase',
    SupplierPayment: 'SupplierPayment',
    StockMovement: 'StockMovement',
    ReturnRecord: 'ReturnRecord',
    TreasuryTransaction: 'TreasuryTransaction',
    ChatMessage: 'ChatMessage',
    SystemSettings: 'SystemSettings',
    Expense: 'Expense'
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
      modelProps: "user" | "branch" | "category" | "product" | "order" | "customer" | "captain" | "deliveryZone" | "supplier" | "purchase" | "supplierPayment" | "stockMovement" | "returnRecord" | "treasuryTransaction" | "chatMessage" | "systemSettings" | "expense"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Branch: {
        payload: Prisma.$BranchPayload<ExtArgs>
        fields: Prisma.BranchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BranchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BranchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findFirst: {
            args: Prisma.BranchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BranchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findMany: {
            args: Prisma.BranchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          create: {
            args: Prisma.BranchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          createMany: {
            args: Prisma.BranchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BranchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          delete: {
            args: Prisma.BranchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          update: {
            args: Prisma.BranchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          deleteMany: {
            args: Prisma.BranchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BranchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BranchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          upsert: {
            args: Prisma.BranchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          aggregate: {
            args: Prisma.BranchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBranch>
          }
          groupBy: {
            args: Prisma.BranchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BranchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BranchCountArgs<ExtArgs>
            result: $Utils.Optional<BranchCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Captain: {
        payload: Prisma.$CaptainPayload<ExtArgs>
        fields: Prisma.CaptainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaptainFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaptainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaptainFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaptainPayload>
          }
          findFirst: {
            args: Prisma.CaptainFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaptainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaptainFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaptainPayload>
          }
          findMany: {
            args: Prisma.CaptainFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaptainPayload>[]
          }
          create: {
            args: Prisma.CaptainCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaptainPayload>
          }
          createMany: {
            args: Prisma.CaptainCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CaptainCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaptainPayload>[]
          }
          delete: {
            args: Prisma.CaptainDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaptainPayload>
          }
          update: {
            args: Prisma.CaptainUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaptainPayload>
          }
          deleteMany: {
            args: Prisma.CaptainDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaptainUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CaptainUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaptainPayload>[]
          }
          upsert: {
            args: Prisma.CaptainUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaptainPayload>
          }
          aggregate: {
            args: Prisma.CaptainAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaptain>
          }
          groupBy: {
            args: Prisma.CaptainGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaptainGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaptainCountArgs<ExtArgs>
            result: $Utils.Optional<CaptainCountAggregateOutputType> | number
          }
        }
      }
      DeliveryZone: {
        payload: Prisma.$DeliveryZonePayload<ExtArgs>
        fields: Prisma.DeliveryZoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveryZoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryZonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveryZoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryZonePayload>
          }
          findFirst: {
            args: Prisma.DeliveryZoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryZonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveryZoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryZonePayload>
          }
          findMany: {
            args: Prisma.DeliveryZoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryZonePayload>[]
          }
          create: {
            args: Prisma.DeliveryZoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryZonePayload>
          }
          createMany: {
            args: Prisma.DeliveryZoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliveryZoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryZonePayload>[]
          }
          delete: {
            args: Prisma.DeliveryZoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryZonePayload>
          }
          update: {
            args: Prisma.DeliveryZoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryZonePayload>
          }
          deleteMany: {
            args: Prisma.DeliveryZoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveryZoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeliveryZoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryZonePayload>[]
          }
          upsert: {
            args: Prisma.DeliveryZoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryZonePayload>
          }
          aggregate: {
            args: Prisma.DeliveryZoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeliveryZone>
          }
          groupBy: {
            args: Prisma.DeliveryZoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveryZoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveryZoneCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveryZoneCountAggregateOutputType> | number
          }
        }
      }
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      Purchase: {
        payload: Prisma.$PurchasePayload<ExtArgs>
        fields: Prisma.PurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findFirst: {
            args: Prisma.PurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findMany: {
            args: Prisma.PurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          create: {
            args: Prisma.PurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          createMany: {
            args: Prisma.PurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          delete: {
            args: Prisma.PurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          update: {
            args: Prisma.PurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          deleteMany: {
            args: Prisma.PurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          upsert: {
            args: Prisma.PurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          aggregate: {
            args: Prisma.PurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchase>
          }
          groupBy: {
            args: Prisma.PurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseCountAggregateOutputType> | number
          }
        }
      }
      SupplierPayment: {
        payload: Prisma.$SupplierPaymentPayload<ExtArgs>
        fields: Prisma.SupplierPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload>
          }
          findFirst: {
            args: Prisma.SupplierPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload>
          }
          findMany: {
            args: Prisma.SupplierPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload>[]
          }
          create: {
            args: Prisma.SupplierPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload>
          }
          createMany: {
            args: Prisma.SupplierPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierPaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload>[]
          }
          delete: {
            args: Prisma.SupplierPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload>
          }
          update: {
            args: Prisma.SupplierPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload>
          }
          deleteMany: {
            args: Prisma.SupplierPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplierPaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload>[]
          }
          upsert: {
            args: Prisma.SupplierPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload>
          }
          aggregate: {
            args: Prisma.SupplierPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplierPayment>
          }
          groupBy: {
            args: Prisma.SupplierPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierPaymentCountAggregateOutputType> | number
          }
        }
      }
      StockMovement: {
        payload: Prisma.$StockMovementPayload<ExtArgs>
        fields: Prisma.StockMovementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockMovementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockMovementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          findFirst: {
            args: Prisma.StockMovementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockMovementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          findMany: {
            args: Prisma.StockMovementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>[]
          }
          create: {
            args: Prisma.StockMovementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          createMany: {
            args: Prisma.StockMovementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockMovementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>[]
          }
          delete: {
            args: Prisma.StockMovementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          update: {
            args: Prisma.StockMovementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          deleteMany: {
            args: Prisma.StockMovementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockMovementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StockMovementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>[]
          }
          upsert: {
            args: Prisma.StockMovementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          aggregate: {
            args: Prisma.StockMovementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockMovement>
          }
          groupBy: {
            args: Prisma.StockMovementGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockMovementGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockMovementCountArgs<ExtArgs>
            result: $Utils.Optional<StockMovementCountAggregateOutputType> | number
          }
        }
      }
      ReturnRecord: {
        payload: Prisma.$ReturnRecordPayload<ExtArgs>
        fields: Prisma.ReturnRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReturnRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReturnRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnRecordPayload>
          }
          findFirst: {
            args: Prisma.ReturnRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReturnRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnRecordPayload>
          }
          findMany: {
            args: Prisma.ReturnRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnRecordPayload>[]
          }
          create: {
            args: Prisma.ReturnRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnRecordPayload>
          }
          createMany: {
            args: Prisma.ReturnRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReturnRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnRecordPayload>[]
          }
          delete: {
            args: Prisma.ReturnRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnRecordPayload>
          }
          update: {
            args: Prisma.ReturnRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnRecordPayload>
          }
          deleteMany: {
            args: Prisma.ReturnRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReturnRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReturnRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnRecordPayload>[]
          }
          upsert: {
            args: Prisma.ReturnRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnRecordPayload>
          }
          aggregate: {
            args: Prisma.ReturnRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReturnRecord>
          }
          groupBy: {
            args: Prisma.ReturnRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReturnRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReturnRecordCountArgs<ExtArgs>
            result: $Utils.Optional<ReturnRecordCountAggregateOutputType> | number
          }
        }
      }
      TreasuryTransaction: {
        payload: Prisma.$TreasuryTransactionPayload<ExtArgs>
        fields: Prisma.TreasuryTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TreasuryTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TreasuryTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryTransactionPayload>
          }
          findFirst: {
            args: Prisma.TreasuryTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TreasuryTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryTransactionPayload>
          }
          findMany: {
            args: Prisma.TreasuryTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryTransactionPayload>[]
          }
          create: {
            args: Prisma.TreasuryTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryTransactionPayload>
          }
          createMany: {
            args: Prisma.TreasuryTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TreasuryTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryTransactionPayload>[]
          }
          delete: {
            args: Prisma.TreasuryTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryTransactionPayload>
          }
          update: {
            args: Prisma.TreasuryTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryTransactionPayload>
          }
          deleteMany: {
            args: Prisma.TreasuryTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TreasuryTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TreasuryTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryTransactionPayload>[]
          }
          upsert: {
            args: Prisma.TreasuryTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryTransactionPayload>
          }
          aggregate: {
            args: Prisma.TreasuryTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTreasuryTransaction>
          }
          groupBy: {
            args: Prisma.TreasuryTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreasuryTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TreasuryTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TreasuryTransactionCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      SystemSettings: {
        payload: Prisma.$SystemSettingsPayload<ExtArgs>
        fields: Prisma.SystemSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          findFirst: {
            args: Prisma.SystemSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          findMany: {
            args: Prisma.SystemSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>[]
          }
          create: {
            args: Prisma.SystemSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          createMany: {
            args: Prisma.SystemSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>[]
          }
          delete: {
            args: Prisma.SystemSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          update: {
            args: Prisma.SystemSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          deleteMany: {
            args: Prisma.SystemSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>[]
          }
          upsert: {
            args: Prisma.SystemSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          aggregate: {
            args: Prisma.SystemSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemSettings>
          }
          groupBy: {
            args: Prisma.SystemSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingsCountAggregateOutputType> | number
          }
        }
      }
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>
        fields: Prisma.ExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
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
    user?: UserOmit
    branch?: BranchOmit
    category?: CategoryOmit
    product?: ProductOmit
    order?: OrderOmit
    customer?: CustomerOmit
    captain?: CaptainOmit
    deliveryZone?: DeliveryZoneOmit
    supplier?: SupplierOmit
    purchase?: PurchaseOmit
    supplierPayment?: SupplierPaymentOmit
    stockMovement?: StockMovementOmit
    returnRecord?: ReturnRecordOmit
    treasuryTransaction?: TreasuryTransactionOmit
    chatMessage?: ChatMessageOmit
    systemSettings?: SystemSettingsOmit
    expense?: ExpenseOmit
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
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    purchases: number
    payments: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | SupplierCountOutputTypeCountPurchasesArgs
    payments?: boolean | SupplierCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierPaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    passwordHash: string | null
    phone: string | null
    pin: string | null
    role: string | null
    avatar: string | null
    branch: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    passwordHash: string | null
    phone: string | null
    pin: string | null
    role: string | null
    avatar: string | null
    branch: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    passwordHash: number
    phone: number
    pin: number
    role: number
    avatar: number
    branch: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    passwordHash?: true
    phone?: true
    pin?: true
    role?: true
    avatar?: true
    branch?: true
    isActive?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    passwordHash?: true
    phone?: true
    pin?: true
    role?: true
    avatar?: true
    branch?: true
    isActive?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    passwordHash?: true
    phone?: true
    pin?: true
    role?: true
    avatar?: true
    branch?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    username: string | null
    passwordHash: string | null
    phone: string
    pin: string
    role: string
    avatar: string | null
    branch: string
    isActive: boolean
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    passwordHash?: boolean
    phone?: boolean
    pin?: boolean
    role?: boolean
    avatar?: boolean
    branch?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    passwordHash?: boolean
    phone?: boolean
    pin?: boolean
    role?: boolean
    avatar?: boolean
    branch?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    passwordHash?: boolean
    phone?: boolean
    pin?: boolean
    role?: boolean
    avatar?: boolean
    branch?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    passwordHash?: boolean
    phone?: boolean
    pin?: boolean
    role?: boolean
    avatar?: boolean
    branch?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "passwordHash" | "phone" | "pin" | "role" | "avatar" | "branch" | "isActive" | "createdAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      username: string | null
      passwordHash: string | null
      phone: string
      pin: string
      role: string
      avatar: string | null
      branch: string
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly pin: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly branch: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Branch
   */

  export type AggregateBranch = {
    _count: BranchCountAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  export type BranchMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    address: string | null
    phone: string | null
    isOpen: boolean | null
    deliveryActive: boolean | null
    createdAt: Date | null
  }

  export type BranchMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    address: string | null
    phone: string | null
    isOpen: boolean | null
    deliveryActive: boolean | null
    createdAt: Date | null
  }

  export type BranchCountAggregateOutputType = {
    id: number
    code: number
    name: number
    address: number
    phone: number
    isOpen: number
    deliveryActive: number
    createdAt: number
    _all: number
  }


  export type BranchMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    address?: true
    phone?: true
    isOpen?: true
    deliveryActive?: true
    createdAt?: true
  }

  export type BranchMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    address?: true
    phone?: true
    isOpen?: true
    deliveryActive?: true
    createdAt?: true
  }

  export type BranchCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    address?: true
    phone?: true
    isOpen?: true
    deliveryActive?: true
    createdAt?: true
    _all?: true
  }

  export type BranchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branch to aggregate.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Branches
    **/
    _count?: true | BranchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchMaxAggregateInputType
  }

  export type GetBranchAggregateType<T extends BranchAggregateArgs> = {
        [P in keyof T & keyof AggregateBranch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranch[P]>
      : GetScalarType<T[P], AggregateBranch[P]>
  }




  export type BranchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithAggregationInput | BranchOrderByWithAggregationInput[]
    by: BranchScalarFieldEnum[] | BranchScalarFieldEnum
    having?: BranchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchCountAggregateInputType | true
    _min?: BranchMinAggregateInputType
    _max?: BranchMaxAggregateInputType
  }

  export type BranchGroupByOutputType = {
    id: string
    code: string
    name: string
    address: string
    phone: string
    isOpen: boolean
    deliveryActive: boolean
    createdAt: Date
    _count: BranchCountAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  type GetBranchGroupByPayload<T extends BranchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BranchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchGroupByOutputType[P]>
            : GetScalarType<T[P], BranchGroupByOutputType[P]>
        }
      >
    >


  export type BranchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    isOpen?: boolean
    deliveryActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    isOpen?: boolean
    deliveryActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    isOpen?: boolean
    deliveryActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    isOpen?: boolean
    deliveryActive?: boolean
    createdAt?: boolean
  }

  export type BranchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "address" | "phone" | "isOpen" | "deliveryActive" | "createdAt", ExtArgs["result"]["branch"]>

  export type $BranchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Branch"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      address: string
      phone: string
      isOpen: boolean
      deliveryActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["branch"]>
    composites: {}
  }

  type BranchGetPayload<S extends boolean | null | undefined | BranchDefaultArgs> = $Result.GetResult<Prisma.$BranchPayload, S>

  type BranchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BranchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BranchCountAggregateInputType | true
    }

  export interface BranchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Branch'], meta: { name: 'Branch' } }
    /**
     * Find zero or one Branch that matches the filter.
     * @param {BranchFindUniqueArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BranchFindUniqueArgs>(args: SelectSubset<T, BranchFindUniqueArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Branch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BranchFindUniqueOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BranchFindUniqueOrThrowArgs>(args: SelectSubset<T, BranchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BranchFindFirstArgs>(args?: SelectSubset<T, BranchFindFirstArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BranchFindFirstOrThrowArgs>(args?: SelectSubset<T, BranchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Branches
     * const branches = await prisma.branch.findMany()
     * 
     * // Get first 10 Branches
     * const branches = await prisma.branch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchWithIdOnly = await prisma.branch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BranchFindManyArgs>(args?: SelectSubset<T, BranchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Branch.
     * @param {BranchCreateArgs} args - Arguments to create a Branch.
     * @example
     * // Create one Branch
     * const Branch = await prisma.branch.create({
     *   data: {
     *     // ... data to create a Branch
     *   }
     * })
     * 
     */
    create<T extends BranchCreateArgs>(args: SelectSubset<T, BranchCreateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Branches.
     * @param {BranchCreateManyArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BranchCreateManyArgs>(args?: SelectSubset<T, BranchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Branches and returns the data saved in the database.
     * @param {BranchCreateManyAndReturnArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Branches and only return the `id`
     * const branchWithIdOnly = await prisma.branch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BranchCreateManyAndReturnArgs>(args?: SelectSubset<T, BranchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Branch.
     * @param {BranchDeleteArgs} args - Arguments to delete one Branch.
     * @example
     * // Delete one Branch
     * const Branch = await prisma.branch.delete({
     *   where: {
     *     // ... filter to delete one Branch
     *   }
     * })
     * 
     */
    delete<T extends BranchDeleteArgs>(args: SelectSubset<T, BranchDeleteArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Branch.
     * @param {BranchUpdateArgs} args - Arguments to update one Branch.
     * @example
     * // Update one Branch
     * const branch = await prisma.branch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BranchUpdateArgs>(args: SelectSubset<T, BranchUpdateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Branches.
     * @param {BranchDeleteManyArgs} args - Arguments to filter Branches to delete.
     * @example
     * // Delete a few Branches
     * const { count } = await prisma.branch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BranchDeleteManyArgs>(args?: SelectSubset<T, BranchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BranchUpdateManyArgs>(args: SelectSubset<T, BranchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches and returns the data updated in the database.
     * @param {BranchUpdateManyAndReturnArgs} args - Arguments to update many Branches.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Branches and only return the `id`
     * const branchWithIdOnly = await prisma.branch.updateManyAndReturn({
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
    updateManyAndReturn<T extends BranchUpdateManyAndReturnArgs>(args: SelectSubset<T, BranchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Branch.
     * @param {BranchUpsertArgs} args - Arguments to update or create a Branch.
     * @example
     * // Update or create a Branch
     * const branch = await prisma.branch.upsert({
     *   create: {
     *     // ... data to create a Branch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Branch we want to update
     *   }
     * })
     */
    upsert<T extends BranchUpsertArgs>(args: SelectSubset<T, BranchUpsertArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchCountArgs} args - Arguments to filter Branches to count.
     * @example
     * // Count the number of Branches
     * const count = await prisma.branch.count({
     *   where: {
     *     // ... the filter for the Branches we want to count
     *   }
     * })
    **/
    count<T extends BranchCountArgs>(
      args?: Subset<T, BranchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BranchAggregateArgs>(args: Subset<T, BranchAggregateArgs>): Prisma.PrismaPromise<GetBranchAggregateType<T>>

    /**
     * Group by Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchGroupByArgs} args - Group by arguments.
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
      T extends BranchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchGroupByArgs['orderBy'] }
        : { orderBy?: BranchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BranchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Branch model
   */
  readonly fields: BranchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Branch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BranchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Branch model
   */
  interface BranchFieldRefs {
    readonly id: FieldRef<"Branch", 'String'>
    readonly code: FieldRef<"Branch", 'String'>
    readonly name: FieldRef<"Branch", 'String'>
    readonly address: FieldRef<"Branch", 'String'>
    readonly phone: FieldRef<"Branch", 'String'>
    readonly isOpen: FieldRef<"Branch", 'Boolean'>
    readonly deliveryActive: FieldRef<"Branch", 'Boolean'>
    readonly createdAt: FieldRef<"Branch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Branch findUnique
   */
  export type BranchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findUniqueOrThrow
   */
  export type BranchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findFirst
   */
  export type BranchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findFirstOrThrow
   */
  export type BranchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findMany
   */
  export type BranchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Filter, which Branches to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch create
   */
  export type BranchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * The data needed to create a Branch.
     */
    data: XOR<BranchCreateInput, BranchUncheckedCreateInput>
  }

  /**
   * Branch createMany
   */
  export type BranchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Branch createManyAndReturn
   */
  export type BranchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Branch update
   */
  export type BranchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * The data needed to update a Branch.
     */
    data: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
    /**
     * Choose, which Branch to update.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch updateMany
   */
  export type BranchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to update.
     */
    limit?: number
  }

  /**
   * Branch updateManyAndReturn
   */
  export type BranchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to update.
     */
    limit?: number
  }

  /**
   * Branch upsert
   */
  export type BranchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * The filter to search for the Branch to update in case it exists.
     */
    where: BranchWhereUniqueInput
    /**
     * In case the Branch found by the `where` argument doesn't exist, create a new Branch with this data.
     */
    create: XOR<BranchCreateInput, BranchUncheckedCreateInput>
    /**
     * In case the Branch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
  }

  /**
   * Branch delete
   */
  export type BranchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Filter which Branch to delete.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch deleteMany
   */
  export type BranchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branches to delete
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to delete.
     */
    limit?: number
  }

  /**
   * Branch without action
   */
  export type BranchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type CategorySumAggregateOutputType = {
    sortOrder: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    nameAr: string | null
    nameEn: string | null
    icon: string | null
    image: string | null
    badge: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    nameAr: string | null
    nameEn: string | null
    icon: string | null
    image: string | null
    badge: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    nameAr: number
    nameEn: number
    icon: number
    image: number
    badge: number
    sortOrder: number
    createdAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    sortOrder?: true
  }

  export type CategorySumAggregateInputType = {
    sortOrder?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    nameAr?: true
    nameEn?: true
    icon?: true
    image?: true
    badge?: true
    sortOrder?: true
    createdAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    nameAr?: true
    nameEn?: true
    icon?: true
    image?: true
    badge?: true
    sortOrder?: true
    createdAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    nameAr?: true
    nameEn?: true
    icon?: true
    image?: true
    badge?: true
    sortOrder?: true
    createdAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
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




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    nameAr: string
    nameEn: string | null
    icon: string | null
    image: string | null
    badge: string | null
    sortOrder: number
    createdAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
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


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameAr?: boolean
    nameEn?: boolean
    icon?: boolean
    image?: boolean
    badge?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameAr?: boolean
    nameEn?: boolean
    icon?: boolean
    image?: boolean
    badge?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameAr?: boolean
    nameEn?: boolean
    icon?: boolean
    image?: boolean
    badge?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    nameAr?: boolean
    nameEn?: boolean
    icon?: boolean
    image?: boolean
    badge?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nameAr" | "nameEn" | "icon" | "image" | "badge" | "sortOrder" | "createdAt", ExtArgs["result"]["category"]>

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nameAr: string
      nameEn: string | null
      icon: string | null
      image: string | null
      badge: string | null
      sortOrder: number
      createdAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
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
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
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
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
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
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
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
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly nameAr: FieldRef<"Category", 'String'>
    readonly nameEn: FieldRef<"Category", 'String'>
    readonly icon: FieldRef<"Category", 'String'>
    readonly image: FieldRef<"Category", 'String'>
    readonly badge: FieldRef<"Category", 'String'>
    readonly sortOrder: FieldRef<"Category", 'Int'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    costPrice: number | null
    basePrice: number | null
    originalPrice: number | null
    discountPercent: number | null
    shelfLifeDays: number | null
    scaleTareWeight: number | null
    stockQty: number | null
    minStockQty: number | null
    openingStock: number | null
    sortOrder: number | null
  }

  export type ProductSumAggregateOutputType = {
    costPrice: number | null
    basePrice: number | null
    originalPrice: number | null
    discountPercent: number | null
    shelfLifeDays: number | null
    scaleTareWeight: number | null
    stockQty: number | null
    minStockQty: number | null
    openingStock: number | null
    sortOrder: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    nameAr: string | null
    brand: string | null
    category: string | null
    unit: string | null
    barcode: string | null
    costPrice: number | null
    basePrice: number | null
    originalPrice: number | null
    discountPercent: number | null
    isOffer: boolean | null
    isExpress: boolean | null
    isWeighted: boolean | null
    scaleItemCode: string | null
    shelfLifeDays: number | null
    scaleTareWeight: number | null
    inStock: boolean | null
    stockQty: number | null
    minStockQty: number | null
    openingStock: number | null
    image: string | null
    description: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    nameAr: string | null
    brand: string | null
    category: string | null
    unit: string | null
    barcode: string | null
    costPrice: number | null
    basePrice: number | null
    originalPrice: number | null
    discountPercent: number | null
    isOffer: boolean | null
    isExpress: boolean | null
    isWeighted: boolean | null
    scaleItemCode: string | null
    shelfLifeDays: number | null
    scaleTareWeight: number | null
    inStock: boolean | null
    stockQty: number | null
    minStockQty: number | null
    openingStock: number | null
    image: string | null
    description: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    nameAr: number
    brand: number
    category: number
    unit: number
    barcode: number
    costPrice: number
    basePrice: number
    originalPrice: number
    discountPercent: number
    isOffer: number
    isExpress: number
    isWeighted: number
    scaleItemCode: number
    shelfLifeDays: number
    scaleTareWeight: number
    inStock: number
    stockQty: number
    minStockQty: number
    openingStock: number
    image: number
    description: number
    sortOrder: number
    createdAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    costPrice?: true
    basePrice?: true
    originalPrice?: true
    discountPercent?: true
    shelfLifeDays?: true
    scaleTareWeight?: true
    stockQty?: true
    minStockQty?: true
    openingStock?: true
    sortOrder?: true
  }

  export type ProductSumAggregateInputType = {
    costPrice?: true
    basePrice?: true
    originalPrice?: true
    discountPercent?: true
    shelfLifeDays?: true
    scaleTareWeight?: true
    stockQty?: true
    minStockQty?: true
    openingStock?: true
    sortOrder?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    nameAr?: true
    brand?: true
    category?: true
    unit?: true
    barcode?: true
    costPrice?: true
    basePrice?: true
    originalPrice?: true
    discountPercent?: true
    isOffer?: true
    isExpress?: true
    isWeighted?: true
    scaleItemCode?: true
    shelfLifeDays?: true
    scaleTareWeight?: true
    inStock?: true
    stockQty?: true
    minStockQty?: true
    openingStock?: true
    image?: true
    description?: true
    sortOrder?: true
    createdAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    nameAr?: true
    brand?: true
    category?: true
    unit?: true
    barcode?: true
    costPrice?: true
    basePrice?: true
    originalPrice?: true
    discountPercent?: true
    isOffer?: true
    isExpress?: true
    isWeighted?: true
    scaleItemCode?: true
    shelfLifeDays?: true
    scaleTareWeight?: true
    inStock?: true
    stockQty?: true
    minStockQty?: true
    openingStock?: true
    image?: true
    description?: true
    sortOrder?: true
    createdAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    nameAr?: true
    brand?: true
    category?: true
    unit?: true
    barcode?: true
    costPrice?: true
    basePrice?: true
    originalPrice?: true
    discountPercent?: true
    isOffer?: true
    isExpress?: true
    isWeighted?: true
    scaleItemCode?: true
    shelfLifeDays?: true
    scaleTareWeight?: true
    inStock?: true
    stockQty?: true
    minStockQty?: true
    openingStock?: true
    image?: true
    description?: true
    sortOrder?: true
    createdAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    nameAr: string
    brand: string | null
    category: string
    unit: string
    barcode: string | null
    costPrice: number
    basePrice: number
    originalPrice: number | null
    discountPercent: number | null
    isOffer: boolean
    isExpress: boolean
    isWeighted: boolean
    scaleItemCode: string | null
    shelfLifeDays: number
    scaleTareWeight: number
    inStock: boolean
    stockQty: number
    minStockQty: number
    openingStock: number
    image: string | null
    description: string | null
    sortOrder: number
    createdAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameAr?: boolean
    brand?: boolean
    category?: boolean
    unit?: boolean
    barcode?: boolean
    costPrice?: boolean
    basePrice?: boolean
    originalPrice?: boolean
    discountPercent?: boolean
    isOffer?: boolean
    isExpress?: boolean
    isWeighted?: boolean
    scaleItemCode?: boolean
    shelfLifeDays?: boolean
    scaleTareWeight?: boolean
    inStock?: boolean
    stockQty?: boolean
    minStockQty?: boolean
    openingStock?: boolean
    image?: boolean
    description?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameAr?: boolean
    brand?: boolean
    category?: boolean
    unit?: boolean
    barcode?: boolean
    costPrice?: boolean
    basePrice?: boolean
    originalPrice?: boolean
    discountPercent?: boolean
    isOffer?: boolean
    isExpress?: boolean
    isWeighted?: boolean
    scaleItemCode?: boolean
    shelfLifeDays?: boolean
    scaleTareWeight?: boolean
    inStock?: boolean
    stockQty?: boolean
    minStockQty?: boolean
    openingStock?: boolean
    image?: boolean
    description?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameAr?: boolean
    brand?: boolean
    category?: boolean
    unit?: boolean
    barcode?: boolean
    costPrice?: boolean
    basePrice?: boolean
    originalPrice?: boolean
    discountPercent?: boolean
    isOffer?: boolean
    isExpress?: boolean
    isWeighted?: boolean
    scaleItemCode?: boolean
    shelfLifeDays?: boolean
    scaleTareWeight?: boolean
    inStock?: boolean
    stockQty?: boolean
    minStockQty?: boolean
    openingStock?: boolean
    image?: boolean
    description?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    nameAr?: boolean
    brand?: boolean
    category?: boolean
    unit?: boolean
    barcode?: boolean
    costPrice?: boolean
    basePrice?: boolean
    originalPrice?: boolean
    discountPercent?: boolean
    isOffer?: boolean
    isExpress?: boolean
    isWeighted?: boolean
    scaleItemCode?: boolean
    shelfLifeDays?: boolean
    scaleTareWeight?: boolean
    inStock?: boolean
    stockQty?: boolean
    minStockQty?: boolean
    openingStock?: boolean
    image?: boolean
    description?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nameAr" | "brand" | "category" | "unit" | "barcode" | "costPrice" | "basePrice" | "originalPrice" | "discountPercent" | "isOffer" | "isExpress" | "isWeighted" | "scaleItemCode" | "shelfLifeDays" | "scaleTareWeight" | "inStock" | "stockQty" | "minStockQty" | "openingStock" | "image" | "description" | "sortOrder" | "createdAt", ExtArgs["result"]["product"]>

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nameAr: string
      brand: string | null
      category: string
      unit: string
      barcode: string | null
      costPrice: number
      basePrice: number
      originalPrice: number | null
      discountPercent: number | null
      isOffer: boolean
      isExpress: boolean
      isWeighted: boolean
      scaleItemCode: string | null
      shelfLifeDays: number
      scaleTareWeight: number
      inStock: boolean
      stockQty: number
      minStockQty: number
      openingStock: number
      image: string | null
      description: string | null
      sortOrder: number
      createdAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly nameAr: FieldRef<"Product", 'String'>
    readonly brand: FieldRef<"Product", 'String'>
    readonly category: FieldRef<"Product", 'String'>
    readonly unit: FieldRef<"Product", 'String'>
    readonly barcode: FieldRef<"Product", 'String'>
    readonly costPrice: FieldRef<"Product", 'Float'>
    readonly basePrice: FieldRef<"Product", 'Float'>
    readonly originalPrice: FieldRef<"Product", 'Float'>
    readonly discountPercent: FieldRef<"Product", 'Int'>
    readonly isOffer: FieldRef<"Product", 'Boolean'>
    readonly isExpress: FieldRef<"Product", 'Boolean'>
    readonly isWeighted: FieldRef<"Product", 'Boolean'>
    readonly scaleItemCode: FieldRef<"Product", 'String'>
    readonly shelfLifeDays: FieldRef<"Product", 'Int'>
    readonly scaleTareWeight: FieldRef<"Product", 'Float'>
    readonly inStock: FieldRef<"Product", 'Boolean'>
    readonly stockQty: FieldRef<"Product", 'Int'>
    readonly minStockQty: FieldRef<"Product", 'Int'>
    readonly openingStock: FieldRef<"Product", 'Int'>
    readonly image: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly sortOrder: FieldRef<"Product", 'Int'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    subtotal: number | null
    deliveryFee: number | null
    discount: number | null
    total: number | null
  }

  export type OrderSumAggregateOutputType = {
    subtotal: number | null
    deliveryFee: number | null
    discount: number | null
    total: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    customerName: string | null
    phone: string | null
    address: string | null
    zone: string | null
    branchName: string | null
    orderType: string | null
    status: string | null
    items: string | null
    subtotal: number | null
    deliveryFee: number | null
    discount: number | null
    total: number | null
    paymentMethod: string | null
    notes: string | null
    captainId: string | null
    captainName: string | null
    captainPhone: string | null
    assignedPicker: string | null
    timeline: string | null
    isSettled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    customerName: string | null
    phone: string | null
    address: string | null
    zone: string | null
    branchName: string | null
    orderType: string | null
    status: string | null
    items: string | null
    subtotal: number | null
    deliveryFee: number | null
    discount: number | null
    total: number | null
    paymentMethod: string | null
    notes: string | null
    captainId: string | null
    captainName: string | null
    captainPhone: string | null
    assignedPicker: string | null
    timeline: string | null
    isSettled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    orderNumber: number
    customerName: number
    phone: number
    address: number
    zone: number
    branchName: number
    orderType: number
    status: number
    items: number
    subtotal: number
    deliveryFee: number
    discount: number
    total: number
    paymentMethod: number
    notes: number
    captainId: number
    captainName: number
    captainPhone: number
    assignedPicker: number
    timeline: number
    isSettled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    subtotal?: true
    deliveryFee?: true
    discount?: true
    total?: true
  }

  export type OrderSumAggregateInputType = {
    subtotal?: true
    deliveryFee?: true
    discount?: true
    total?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    orderNumber?: true
    customerName?: true
    phone?: true
    address?: true
    zone?: true
    branchName?: true
    orderType?: true
    status?: true
    items?: true
    subtotal?: true
    deliveryFee?: true
    discount?: true
    total?: true
    paymentMethod?: true
    notes?: true
    captainId?: true
    captainName?: true
    captainPhone?: true
    assignedPicker?: true
    timeline?: true
    isSettled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    orderNumber?: true
    customerName?: true
    phone?: true
    address?: true
    zone?: true
    branchName?: true
    orderType?: true
    status?: true
    items?: true
    subtotal?: true
    deliveryFee?: true
    discount?: true
    total?: true
    paymentMethod?: true
    notes?: true
    captainId?: true
    captainName?: true
    captainPhone?: true
    assignedPicker?: true
    timeline?: true
    isSettled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    orderNumber?: true
    customerName?: true
    phone?: true
    address?: true
    zone?: true
    branchName?: true
    orderType?: true
    status?: true
    items?: true
    subtotal?: true
    deliveryFee?: true
    discount?: true
    total?: true
    paymentMethod?: true
    notes?: true
    captainId?: true
    captainName?: true
    captainPhone?: true
    assignedPicker?: true
    timeline?: true
    isSettled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
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




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    orderNumber: string
    customerName: string
    phone: string
    address: string
    zone: string
    branchName: string
    orderType: string
    status: string
    items: string
    subtotal: number
    deliveryFee: number
    discount: number
    total: number
    paymentMethod: string
    notes: string | null
    captainId: string | null
    captainName: string | null
    captainPhone: string | null
    assignedPicker: string | null
    timeline: string
    isSettled: boolean
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
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


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    customerName?: boolean
    phone?: boolean
    address?: boolean
    zone?: boolean
    branchName?: boolean
    orderType?: boolean
    status?: boolean
    items?: boolean
    subtotal?: boolean
    deliveryFee?: boolean
    discount?: boolean
    total?: boolean
    paymentMethod?: boolean
    notes?: boolean
    captainId?: boolean
    captainName?: boolean
    captainPhone?: boolean
    assignedPicker?: boolean
    timeline?: boolean
    isSettled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    customerName?: boolean
    phone?: boolean
    address?: boolean
    zone?: boolean
    branchName?: boolean
    orderType?: boolean
    status?: boolean
    items?: boolean
    subtotal?: boolean
    deliveryFee?: boolean
    discount?: boolean
    total?: boolean
    paymentMethod?: boolean
    notes?: boolean
    captainId?: boolean
    captainName?: boolean
    captainPhone?: boolean
    assignedPicker?: boolean
    timeline?: boolean
    isSettled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    customerName?: boolean
    phone?: boolean
    address?: boolean
    zone?: boolean
    branchName?: boolean
    orderType?: boolean
    status?: boolean
    items?: boolean
    subtotal?: boolean
    deliveryFee?: boolean
    discount?: boolean
    total?: boolean
    paymentMethod?: boolean
    notes?: boolean
    captainId?: boolean
    captainName?: boolean
    captainPhone?: boolean
    assignedPicker?: boolean
    timeline?: boolean
    isSettled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    orderNumber?: boolean
    customerName?: boolean
    phone?: boolean
    address?: boolean
    zone?: boolean
    branchName?: boolean
    orderType?: boolean
    status?: boolean
    items?: boolean
    subtotal?: boolean
    deliveryFee?: boolean
    discount?: boolean
    total?: boolean
    paymentMethod?: boolean
    notes?: boolean
    captainId?: boolean
    captainName?: boolean
    captainPhone?: boolean
    assignedPicker?: boolean
    timeline?: boolean
    isSettled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderNumber" | "customerName" | "phone" | "address" | "zone" | "branchName" | "orderType" | "status" | "items" | "subtotal" | "deliveryFee" | "discount" | "total" | "paymentMethod" | "notes" | "captainId" | "captainName" | "captainPhone" | "assignedPicker" | "timeline" | "isSettled" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderNumber: string
      customerName: string
      phone: string
      address: string
      zone: string
      branchName: string
      orderType: string
      status: string
      items: string
      subtotal: number
      deliveryFee: number
      discount: number
      total: number
      paymentMethod: string
      notes: string | null
      captainId: string | null
      captainName: string | null
      captainPhone: string | null
      assignedPicker: string | null
      timeline: string
      isSettled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
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
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
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
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
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
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
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
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly orderNumber: FieldRef<"Order", 'String'>
    readonly customerName: FieldRef<"Order", 'String'>
    readonly phone: FieldRef<"Order", 'String'>
    readonly address: FieldRef<"Order", 'String'>
    readonly zone: FieldRef<"Order", 'String'>
    readonly branchName: FieldRef<"Order", 'String'>
    readonly orderType: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'String'>
    readonly items: FieldRef<"Order", 'String'>
    readonly subtotal: FieldRef<"Order", 'Float'>
    readonly deliveryFee: FieldRef<"Order", 'Float'>
    readonly discount: FieldRef<"Order", 'Float'>
    readonly total: FieldRef<"Order", 'Float'>
    readonly paymentMethod: FieldRef<"Order", 'String'>
    readonly notes: FieldRef<"Order", 'String'>
    readonly captainId: FieldRef<"Order", 'String'>
    readonly captainName: FieldRef<"Order", 'String'>
    readonly captainPhone: FieldRef<"Order", 'String'>
    readonly assignedPicker: FieldRef<"Order", 'String'>
    readonly timeline: FieldRef<"Order", 'String'>
    readonly isSettled: FieldRef<"Order", 'Boolean'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    totalOrders: number | null
    totalSpend: number | null
  }

  export type CustomerSumAggregateOutputType = {
    totalOrders: number | null
    totalSpend: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    address: string | null
    zone: string | null
    totalOrders: number | null
    totalSpend: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    address: string | null
    zone: string | null
    totalOrders: number | null
    totalSpend: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    address: number
    zone: number
    totalOrders: number
    totalSpend: number
    notes: number
    createdAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    totalOrders?: true
    totalSpend?: true
  }

  export type CustomerSumAggregateInputType = {
    totalOrders?: true
    totalSpend?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    zone?: true
    totalOrders?: true
    totalSpend?: true
    notes?: true
    createdAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    zone?: true
    totalOrders?: true
    totalSpend?: true
    notes?: true
    createdAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    zone?: true
    totalOrders?: true
    totalSpend?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string
    phone: string
    address: string | null
    zone: string | null
    totalOrders: number
    totalSpend: number
    notes: string | null
    createdAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    zone?: boolean
    totalOrders?: boolean
    totalSpend?: boolean
    notes?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    zone?: boolean
    totalOrders?: boolean
    totalSpend?: boolean
    notes?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    zone?: boolean
    totalOrders?: boolean
    totalSpend?: boolean
    notes?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    zone?: boolean
    totalOrders?: boolean
    totalSpend?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "address" | "zone" | "totalOrders" | "totalSpend" | "notes" | "createdAt", ExtArgs["result"]["customer"]>

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string
      address: string | null
      zone: string | null
      totalOrders: number
      totalSpend: number
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly zone: FieldRef<"Customer", 'String'>
    readonly totalOrders: FieldRef<"Customer", 'Int'>
    readonly totalSpend: FieldRef<"Customer", 'Float'>
    readonly notes: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
  }


  /**
   * Model Captain
   */

  export type AggregateCaptain = {
    _count: CaptainCountAggregateOutputType | null
    _avg: CaptainAvgAggregateOutputType | null
    _sum: CaptainSumAggregateOutputType | null
    _min: CaptainMinAggregateOutputType | null
    _max: CaptainMaxAggregateOutputType | null
  }

  export type CaptainAvgAggregateOutputType = {
    pendingBalance: number | null
  }

  export type CaptainSumAggregateOutputType = {
    pendingBalance: number | null
  }

  export type CaptainMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    vehicle: string | null
    zone: string | null
    pendingBalance: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type CaptainMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    vehicle: string | null
    zone: string | null
    pendingBalance: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type CaptainCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    vehicle: number
    zone: number
    pendingBalance: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type CaptainAvgAggregateInputType = {
    pendingBalance?: true
  }

  export type CaptainSumAggregateInputType = {
    pendingBalance?: true
  }

  export type CaptainMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    vehicle?: true
    zone?: true
    pendingBalance?: true
    isActive?: true
    createdAt?: true
  }

  export type CaptainMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    vehicle?: true
    zone?: true
    pendingBalance?: true
    isActive?: true
    createdAt?: true
  }

  export type CaptainCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    vehicle?: true
    zone?: true
    pendingBalance?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type CaptainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Captain to aggregate.
     */
    where?: CaptainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Captains to fetch.
     */
    orderBy?: CaptainOrderByWithRelationInput | CaptainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaptainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Captains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Captains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Captains
    **/
    _count?: true | CaptainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CaptainAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CaptainSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaptainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaptainMaxAggregateInputType
  }

  export type GetCaptainAggregateType<T extends CaptainAggregateArgs> = {
        [P in keyof T & keyof AggregateCaptain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaptain[P]>
      : GetScalarType<T[P], AggregateCaptain[P]>
  }




  export type CaptainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaptainWhereInput
    orderBy?: CaptainOrderByWithAggregationInput | CaptainOrderByWithAggregationInput[]
    by: CaptainScalarFieldEnum[] | CaptainScalarFieldEnum
    having?: CaptainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaptainCountAggregateInputType | true
    _avg?: CaptainAvgAggregateInputType
    _sum?: CaptainSumAggregateInputType
    _min?: CaptainMinAggregateInputType
    _max?: CaptainMaxAggregateInputType
  }

  export type CaptainGroupByOutputType = {
    id: string
    name: string
    phone: string
    vehicle: string
    zone: string
    pendingBalance: number
    isActive: boolean
    createdAt: Date
    _count: CaptainCountAggregateOutputType | null
    _avg: CaptainAvgAggregateOutputType | null
    _sum: CaptainSumAggregateOutputType | null
    _min: CaptainMinAggregateOutputType | null
    _max: CaptainMaxAggregateOutputType | null
  }

  type GetCaptainGroupByPayload<T extends CaptainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaptainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaptainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaptainGroupByOutputType[P]>
            : GetScalarType<T[P], CaptainGroupByOutputType[P]>
        }
      >
    >


  export type CaptainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    vehicle?: boolean
    zone?: boolean
    pendingBalance?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["captain"]>

  export type CaptainSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    vehicle?: boolean
    zone?: boolean
    pendingBalance?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["captain"]>

  export type CaptainSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    vehicle?: boolean
    zone?: boolean
    pendingBalance?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["captain"]>

  export type CaptainSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    vehicle?: boolean
    zone?: boolean
    pendingBalance?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type CaptainOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "vehicle" | "zone" | "pendingBalance" | "isActive" | "createdAt", ExtArgs["result"]["captain"]>

  export type $CaptainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Captain"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string
      vehicle: string
      zone: string
      pendingBalance: number
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["captain"]>
    composites: {}
  }

  type CaptainGetPayload<S extends boolean | null | undefined | CaptainDefaultArgs> = $Result.GetResult<Prisma.$CaptainPayload, S>

  type CaptainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CaptainFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CaptainCountAggregateInputType | true
    }

  export interface CaptainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Captain'], meta: { name: 'Captain' } }
    /**
     * Find zero or one Captain that matches the filter.
     * @param {CaptainFindUniqueArgs} args - Arguments to find a Captain
     * @example
     * // Get one Captain
     * const captain = await prisma.captain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaptainFindUniqueArgs>(args: SelectSubset<T, CaptainFindUniqueArgs<ExtArgs>>): Prisma__CaptainClient<$Result.GetResult<Prisma.$CaptainPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Captain that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CaptainFindUniqueOrThrowArgs} args - Arguments to find a Captain
     * @example
     * // Get one Captain
     * const captain = await prisma.captain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaptainFindUniqueOrThrowArgs>(args: SelectSubset<T, CaptainFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaptainClient<$Result.GetResult<Prisma.$CaptainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Captain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaptainFindFirstArgs} args - Arguments to find a Captain
     * @example
     * // Get one Captain
     * const captain = await prisma.captain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaptainFindFirstArgs>(args?: SelectSubset<T, CaptainFindFirstArgs<ExtArgs>>): Prisma__CaptainClient<$Result.GetResult<Prisma.$CaptainPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Captain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaptainFindFirstOrThrowArgs} args - Arguments to find a Captain
     * @example
     * // Get one Captain
     * const captain = await prisma.captain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaptainFindFirstOrThrowArgs>(args?: SelectSubset<T, CaptainFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaptainClient<$Result.GetResult<Prisma.$CaptainPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Captains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaptainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Captains
     * const captains = await prisma.captain.findMany()
     * 
     * // Get first 10 Captains
     * const captains = await prisma.captain.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const captainWithIdOnly = await prisma.captain.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CaptainFindManyArgs>(args?: SelectSubset<T, CaptainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaptainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Captain.
     * @param {CaptainCreateArgs} args - Arguments to create a Captain.
     * @example
     * // Create one Captain
     * const Captain = await prisma.captain.create({
     *   data: {
     *     // ... data to create a Captain
     *   }
     * })
     * 
     */
    create<T extends CaptainCreateArgs>(args: SelectSubset<T, CaptainCreateArgs<ExtArgs>>): Prisma__CaptainClient<$Result.GetResult<Prisma.$CaptainPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Captains.
     * @param {CaptainCreateManyArgs} args - Arguments to create many Captains.
     * @example
     * // Create many Captains
     * const captain = await prisma.captain.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaptainCreateManyArgs>(args?: SelectSubset<T, CaptainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Captains and returns the data saved in the database.
     * @param {CaptainCreateManyAndReturnArgs} args - Arguments to create many Captains.
     * @example
     * // Create many Captains
     * const captain = await prisma.captain.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Captains and only return the `id`
     * const captainWithIdOnly = await prisma.captain.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CaptainCreateManyAndReturnArgs>(args?: SelectSubset<T, CaptainCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaptainPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Captain.
     * @param {CaptainDeleteArgs} args - Arguments to delete one Captain.
     * @example
     * // Delete one Captain
     * const Captain = await prisma.captain.delete({
     *   where: {
     *     // ... filter to delete one Captain
     *   }
     * })
     * 
     */
    delete<T extends CaptainDeleteArgs>(args: SelectSubset<T, CaptainDeleteArgs<ExtArgs>>): Prisma__CaptainClient<$Result.GetResult<Prisma.$CaptainPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Captain.
     * @param {CaptainUpdateArgs} args - Arguments to update one Captain.
     * @example
     * // Update one Captain
     * const captain = await prisma.captain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaptainUpdateArgs>(args: SelectSubset<T, CaptainUpdateArgs<ExtArgs>>): Prisma__CaptainClient<$Result.GetResult<Prisma.$CaptainPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Captains.
     * @param {CaptainDeleteManyArgs} args - Arguments to filter Captains to delete.
     * @example
     * // Delete a few Captains
     * const { count } = await prisma.captain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaptainDeleteManyArgs>(args?: SelectSubset<T, CaptainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Captains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaptainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Captains
     * const captain = await prisma.captain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaptainUpdateManyArgs>(args: SelectSubset<T, CaptainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Captains and returns the data updated in the database.
     * @param {CaptainUpdateManyAndReturnArgs} args - Arguments to update many Captains.
     * @example
     * // Update many Captains
     * const captain = await prisma.captain.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Captains and only return the `id`
     * const captainWithIdOnly = await prisma.captain.updateManyAndReturn({
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
    updateManyAndReturn<T extends CaptainUpdateManyAndReturnArgs>(args: SelectSubset<T, CaptainUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaptainPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Captain.
     * @param {CaptainUpsertArgs} args - Arguments to update or create a Captain.
     * @example
     * // Update or create a Captain
     * const captain = await prisma.captain.upsert({
     *   create: {
     *     // ... data to create a Captain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Captain we want to update
     *   }
     * })
     */
    upsert<T extends CaptainUpsertArgs>(args: SelectSubset<T, CaptainUpsertArgs<ExtArgs>>): Prisma__CaptainClient<$Result.GetResult<Prisma.$CaptainPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Captains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaptainCountArgs} args - Arguments to filter Captains to count.
     * @example
     * // Count the number of Captains
     * const count = await prisma.captain.count({
     *   where: {
     *     // ... the filter for the Captains we want to count
     *   }
     * })
    **/
    count<T extends CaptainCountArgs>(
      args?: Subset<T, CaptainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaptainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Captain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaptainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CaptainAggregateArgs>(args: Subset<T, CaptainAggregateArgs>): Prisma.PrismaPromise<GetCaptainAggregateType<T>>

    /**
     * Group by Captain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaptainGroupByArgs} args - Group by arguments.
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
      T extends CaptainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaptainGroupByArgs['orderBy'] }
        : { orderBy?: CaptainGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CaptainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaptainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Captain model
   */
  readonly fields: CaptainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Captain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaptainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Captain model
   */
  interface CaptainFieldRefs {
    readonly id: FieldRef<"Captain", 'String'>
    readonly name: FieldRef<"Captain", 'String'>
    readonly phone: FieldRef<"Captain", 'String'>
    readonly vehicle: FieldRef<"Captain", 'String'>
    readonly zone: FieldRef<"Captain", 'String'>
    readonly pendingBalance: FieldRef<"Captain", 'Float'>
    readonly isActive: FieldRef<"Captain", 'Boolean'>
    readonly createdAt: FieldRef<"Captain", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Captain findUnique
   */
  export type CaptainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Captain
     */
    select?: CaptainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Captain
     */
    omit?: CaptainOmit<ExtArgs> | null
    /**
     * Filter, which Captain to fetch.
     */
    where: CaptainWhereUniqueInput
  }

  /**
   * Captain findUniqueOrThrow
   */
  export type CaptainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Captain
     */
    select?: CaptainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Captain
     */
    omit?: CaptainOmit<ExtArgs> | null
    /**
     * Filter, which Captain to fetch.
     */
    where: CaptainWhereUniqueInput
  }

  /**
   * Captain findFirst
   */
  export type CaptainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Captain
     */
    select?: CaptainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Captain
     */
    omit?: CaptainOmit<ExtArgs> | null
    /**
     * Filter, which Captain to fetch.
     */
    where?: CaptainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Captains to fetch.
     */
    orderBy?: CaptainOrderByWithRelationInput | CaptainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Captains.
     */
    cursor?: CaptainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Captains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Captains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Captains.
     */
    distinct?: CaptainScalarFieldEnum | CaptainScalarFieldEnum[]
  }

  /**
   * Captain findFirstOrThrow
   */
  export type CaptainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Captain
     */
    select?: CaptainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Captain
     */
    omit?: CaptainOmit<ExtArgs> | null
    /**
     * Filter, which Captain to fetch.
     */
    where?: CaptainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Captains to fetch.
     */
    orderBy?: CaptainOrderByWithRelationInput | CaptainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Captains.
     */
    cursor?: CaptainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Captains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Captains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Captains.
     */
    distinct?: CaptainScalarFieldEnum | CaptainScalarFieldEnum[]
  }

  /**
   * Captain findMany
   */
  export type CaptainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Captain
     */
    select?: CaptainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Captain
     */
    omit?: CaptainOmit<ExtArgs> | null
    /**
     * Filter, which Captains to fetch.
     */
    where?: CaptainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Captains to fetch.
     */
    orderBy?: CaptainOrderByWithRelationInput | CaptainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Captains.
     */
    cursor?: CaptainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Captains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Captains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Captains.
     */
    distinct?: CaptainScalarFieldEnum | CaptainScalarFieldEnum[]
  }

  /**
   * Captain create
   */
  export type CaptainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Captain
     */
    select?: CaptainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Captain
     */
    omit?: CaptainOmit<ExtArgs> | null
    /**
     * The data needed to create a Captain.
     */
    data: XOR<CaptainCreateInput, CaptainUncheckedCreateInput>
  }

  /**
   * Captain createMany
   */
  export type CaptainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Captains.
     */
    data: CaptainCreateManyInput | CaptainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Captain createManyAndReturn
   */
  export type CaptainCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Captain
     */
    select?: CaptainSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Captain
     */
    omit?: CaptainOmit<ExtArgs> | null
    /**
     * The data used to create many Captains.
     */
    data: CaptainCreateManyInput | CaptainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Captain update
   */
  export type CaptainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Captain
     */
    select?: CaptainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Captain
     */
    omit?: CaptainOmit<ExtArgs> | null
    /**
     * The data needed to update a Captain.
     */
    data: XOR<CaptainUpdateInput, CaptainUncheckedUpdateInput>
    /**
     * Choose, which Captain to update.
     */
    where: CaptainWhereUniqueInput
  }

  /**
   * Captain updateMany
   */
  export type CaptainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Captains.
     */
    data: XOR<CaptainUpdateManyMutationInput, CaptainUncheckedUpdateManyInput>
    /**
     * Filter which Captains to update
     */
    where?: CaptainWhereInput
    /**
     * Limit how many Captains to update.
     */
    limit?: number
  }

  /**
   * Captain updateManyAndReturn
   */
  export type CaptainUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Captain
     */
    select?: CaptainSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Captain
     */
    omit?: CaptainOmit<ExtArgs> | null
    /**
     * The data used to update Captains.
     */
    data: XOR<CaptainUpdateManyMutationInput, CaptainUncheckedUpdateManyInput>
    /**
     * Filter which Captains to update
     */
    where?: CaptainWhereInput
    /**
     * Limit how many Captains to update.
     */
    limit?: number
  }

  /**
   * Captain upsert
   */
  export type CaptainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Captain
     */
    select?: CaptainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Captain
     */
    omit?: CaptainOmit<ExtArgs> | null
    /**
     * The filter to search for the Captain to update in case it exists.
     */
    where: CaptainWhereUniqueInput
    /**
     * In case the Captain found by the `where` argument doesn't exist, create a new Captain with this data.
     */
    create: XOR<CaptainCreateInput, CaptainUncheckedCreateInput>
    /**
     * In case the Captain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaptainUpdateInput, CaptainUncheckedUpdateInput>
  }

  /**
   * Captain delete
   */
  export type CaptainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Captain
     */
    select?: CaptainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Captain
     */
    omit?: CaptainOmit<ExtArgs> | null
    /**
     * Filter which Captain to delete.
     */
    where: CaptainWhereUniqueInput
  }

  /**
   * Captain deleteMany
   */
  export type CaptainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Captains to delete
     */
    where?: CaptainWhereInput
    /**
     * Limit how many Captains to delete.
     */
    limit?: number
  }

  /**
   * Captain without action
   */
  export type CaptainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Captain
     */
    select?: CaptainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Captain
     */
    omit?: CaptainOmit<ExtArgs> | null
  }


  /**
   * Model DeliveryZone
   */

  export type AggregateDeliveryZone = {
    _count: DeliveryZoneCountAggregateOutputType | null
    _avg: DeliveryZoneAvgAggregateOutputType | null
    _sum: DeliveryZoneSumAggregateOutputType | null
    _min: DeliveryZoneMinAggregateOutputType | null
    _max: DeliveryZoneMaxAggregateOutputType | null
  }

  export type DeliveryZoneAvgAggregateOutputType = {
    fee: number | null
    timeMinutes: number | null
    minOrder: number | null
  }

  export type DeliveryZoneSumAggregateOutputType = {
    fee: number | null
    timeMinutes: number | null
    minOrder: number | null
  }

  export type DeliveryZoneMinAggregateOutputType = {
    id: string | null
    nameAr: string | null
    fee: number | null
    timeMinutes: number | null
    minOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type DeliveryZoneMaxAggregateOutputType = {
    id: string | null
    nameAr: string | null
    fee: number | null
    timeMinutes: number | null
    minOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type DeliveryZoneCountAggregateOutputType = {
    id: number
    nameAr: number
    fee: number
    timeMinutes: number
    minOrder: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type DeliveryZoneAvgAggregateInputType = {
    fee?: true
    timeMinutes?: true
    minOrder?: true
  }

  export type DeliveryZoneSumAggregateInputType = {
    fee?: true
    timeMinutes?: true
    minOrder?: true
  }

  export type DeliveryZoneMinAggregateInputType = {
    id?: true
    nameAr?: true
    fee?: true
    timeMinutes?: true
    minOrder?: true
    isActive?: true
    createdAt?: true
  }

  export type DeliveryZoneMaxAggregateInputType = {
    id?: true
    nameAr?: true
    fee?: true
    timeMinutes?: true
    minOrder?: true
    isActive?: true
    createdAt?: true
  }

  export type DeliveryZoneCountAggregateInputType = {
    id?: true
    nameAr?: true
    fee?: true
    timeMinutes?: true
    minOrder?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type DeliveryZoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryZone to aggregate.
     */
    where?: DeliveryZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryZones to fetch.
     */
    orderBy?: DeliveryZoneOrderByWithRelationInput | DeliveryZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryZones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeliveryZones
    **/
    _count?: true | DeliveryZoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeliveryZoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeliveryZoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryZoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryZoneMaxAggregateInputType
  }

  export type GetDeliveryZoneAggregateType<T extends DeliveryZoneAggregateArgs> = {
        [P in keyof T & keyof AggregateDeliveryZone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeliveryZone[P]>
      : GetScalarType<T[P], AggregateDeliveryZone[P]>
  }




  export type DeliveryZoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryZoneWhereInput
    orderBy?: DeliveryZoneOrderByWithAggregationInput | DeliveryZoneOrderByWithAggregationInput[]
    by: DeliveryZoneScalarFieldEnum[] | DeliveryZoneScalarFieldEnum
    having?: DeliveryZoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryZoneCountAggregateInputType | true
    _avg?: DeliveryZoneAvgAggregateInputType
    _sum?: DeliveryZoneSumAggregateInputType
    _min?: DeliveryZoneMinAggregateInputType
    _max?: DeliveryZoneMaxAggregateInputType
  }

  export type DeliveryZoneGroupByOutputType = {
    id: string
    nameAr: string
    fee: number
    timeMinutes: number
    minOrder: number
    isActive: boolean
    createdAt: Date
    _count: DeliveryZoneCountAggregateOutputType | null
    _avg: DeliveryZoneAvgAggregateOutputType | null
    _sum: DeliveryZoneSumAggregateOutputType | null
    _min: DeliveryZoneMinAggregateOutputType | null
    _max: DeliveryZoneMaxAggregateOutputType | null
  }

  type GetDeliveryZoneGroupByPayload<T extends DeliveryZoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryZoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryZoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryZoneGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryZoneGroupByOutputType[P]>
        }
      >
    >


  export type DeliveryZoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameAr?: boolean
    fee?: boolean
    timeMinutes?: boolean
    minOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["deliveryZone"]>

  export type DeliveryZoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameAr?: boolean
    fee?: boolean
    timeMinutes?: boolean
    minOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["deliveryZone"]>

  export type DeliveryZoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameAr?: boolean
    fee?: boolean
    timeMinutes?: boolean
    minOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["deliveryZone"]>

  export type DeliveryZoneSelectScalar = {
    id?: boolean
    nameAr?: boolean
    fee?: boolean
    timeMinutes?: boolean
    minOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type DeliveryZoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nameAr" | "fee" | "timeMinutes" | "minOrder" | "isActive" | "createdAt", ExtArgs["result"]["deliveryZone"]>

  export type $DeliveryZonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeliveryZone"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nameAr: string
      fee: number
      timeMinutes: number
      minOrder: number
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["deliveryZone"]>
    composites: {}
  }

  type DeliveryZoneGetPayload<S extends boolean | null | undefined | DeliveryZoneDefaultArgs> = $Result.GetResult<Prisma.$DeliveryZonePayload, S>

  type DeliveryZoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeliveryZoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveryZoneCountAggregateInputType | true
    }

  export interface DeliveryZoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeliveryZone'], meta: { name: 'DeliveryZone' } }
    /**
     * Find zero or one DeliveryZone that matches the filter.
     * @param {DeliveryZoneFindUniqueArgs} args - Arguments to find a DeliveryZone
     * @example
     * // Get one DeliveryZone
     * const deliveryZone = await prisma.deliveryZone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveryZoneFindUniqueArgs>(args: SelectSubset<T, DeliveryZoneFindUniqueArgs<ExtArgs>>): Prisma__DeliveryZoneClient<$Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeliveryZone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeliveryZoneFindUniqueOrThrowArgs} args - Arguments to find a DeliveryZone
     * @example
     * // Get one DeliveryZone
     * const deliveryZone = await prisma.deliveryZone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveryZoneFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveryZoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveryZoneClient<$Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeliveryZone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryZoneFindFirstArgs} args - Arguments to find a DeliveryZone
     * @example
     * // Get one DeliveryZone
     * const deliveryZone = await prisma.deliveryZone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveryZoneFindFirstArgs>(args?: SelectSubset<T, DeliveryZoneFindFirstArgs<ExtArgs>>): Prisma__DeliveryZoneClient<$Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeliveryZone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryZoneFindFirstOrThrowArgs} args - Arguments to find a DeliveryZone
     * @example
     * // Get one DeliveryZone
     * const deliveryZone = await prisma.deliveryZone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveryZoneFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveryZoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveryZoneClient<$Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeliveryZones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryZoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeliveryZones
     * const deliveryZones = await prisma.deliveryZone.findMany()
     * 
     * // Get first 10 DeliveryZones
     * const deliveryZones = await prisma.deliveryZone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveryZoneWithIdOnly = await prisma.deliveryZone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliveryZoneFindManyArgs>(args?: SelectSubset<T, DeliveryZoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeliveryZone.
     * @param {DeliveryZoneCreateArgs} args - Arguments to create a DeliveryZone.
     * @example
     * // Create one DeliveryZone
     * const DeliveryZone = await prisma.deliveryZone.create({
     *   data: {
     *     // ... data to create a DeliveryZone
     *   }
     * })
     * 
     */
    create<T extends DeliveryZoneCreateArgs>(args: SelectSubset<T, DeliveryZoneCreateArgs<ExtArgs>>): Prisma__DeliveryZoneClient<$Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeliveryZones.
     * @param {DeliveryZoneCreateManyArgs} args - Arguments to create many DeliveryZones.
     * @example
     * // Create many DeliveryZones
     * const deliveryZone = await prisma.deliveryZone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveryZoneCreateManyArgs>(args?: SelectSubset<T, DeliveryZoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeliveryZones and returns the data saved in the database.
     * @param {DeliveryZoneCreateManyAndReturnArgs} args - Arguments to create many DeliveryZones.
     * @example
     * // Create many DeliveryZones
     * const deliveryZone = await prisma.deliveryZone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeliveryZones and only return the `id`
     * const deliveryZoneWithIdOnly = await prisma.deliveryZone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliveryZoneCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliveryZoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeliveryZone.
     * @param {DeliveryZoneDeleteArgs} args - Arguments to delete one DeliveryZone.
     * @example
     * // Delete one DeliveryZone
     * const DeliveryZone = await prisma.deliveryZone.delete({
     *   where: {
     *     // ... filter to delete one DeliveryZone
     *   }
     * })
     * 
     */
    delete<T extends DeliveryZoneDeleteArgs>(args: SelectSubset<T, DeliveryZoneDeleteArgs<ExtArgs>>): Prisma__DeliveryZoneClient<$Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeliveryZone.
     * @param {DeliveryZoneUpdateArgs} args - Arguments to update one DeliveryZone.
     * @example
     * // Update one DeliveryZone
     * const deliveryZone = await prisma.deliveryZone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveryZoneUpdateArgs>(args: SelectSubset<T, DeliveryZoneUpdateArgs<ExtArgs>>): Prisma__DeliveryZoneClient<$Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeliveryZones.
     * @param {DeliveryZoneDeleteManyArgs} args - Arguments to filter DeliveryZones to delete.
     * @example
     * // Delete a few DeliveryZones
     * const { count } = await prisma.deliveryZone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveryZoneDeleteManyArgs>(args?: SelectSubset<T, DeliveryZoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryZones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryZoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeliveryZones
     * const deliveryZone = await prisma.deliveryZone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveryZoneUpdateManyArgs>(args: SelectSubset<T, DeliveryZoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryZones and returns the data updated in the database.
     * @param {DeliveryZoneUpdateManyAndReturnArgs} args - Arguments to update many DeliveryZones.
     * @example
     * // Update many DeliveryZones
     * const deliveryZone = await prisma.deliveryZone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeliveryZones and only return the `id`
     * const deliveryZoneWithIdOnly = await prisma.deliveryZone.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeliveryZoneUpdateManyAndReturnArgs>(args: SelectSubset<T, DeliveryZoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeliveryZone.
     * @param {DeliveryZoneUpsertArgs} args - Arguments to update or create a DeliveryZone.
     * @example
     * // Update or create a DeliveryZone
     * const deliveryZone = await prisma.deliveryZone.upsert({
     *   create: {
     *     // ... data to create a DeliveryZone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeliveryZone we want to update
     *   }
     * })
     */
    upsert<T extends DeliveryZoneUpsertArgs>(args: SelectSubset<T, DeliveryZoneUpsertArgs<ExtArgs>>): Prisma__DeliveryZoneClient<$Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeliveryZones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryZoneCountArgs} args - Arguments to filter DeliveryZones to count.
     * @example
     * // Count the number of DeliveryZones
     * const count = await prisma.deliveryZone.count({
     *   where: {
     *     // ... the filter for the DeliveryZones we want to count
     *   }
     * })
    **/
    count<T extends DeliveryZoneCountArgs>(
      args?: Subset<T, DeliveryZoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryZoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeliveryZone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryZoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeliveryZoneAggregateArgs>(args: Subset<T, DeliveryZoneAggregateArgs>): Prisma.PrismaPromise<GetDeliveryZoneAggregateType<T>>

    /**
     * Group by DeliveryZone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryZoneGroupByArgs} args - Group by arguments.
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
      T extends DeliveryZoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryZoneGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryZoneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeliveryZoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryZoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeliveryZone model
   */
  readonly fields: DeliveryZoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeliveryZone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveryZoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DeliveryZone model
   */
  interface DeliveryZoneFieldRefs {
    readonly id: FieldRef<"DeliveryZone", 'String'>
    readonly nameAr: FieldRef<"DeliveryZone", 'String'>
    readonly fee: FieldRef<"DeliveryZone", 'Float'>
    readonly timeMinutes: FieldRef<"DeliveryZone", 'Int'>
    readonly minOrder: FieldRef<"DeliveryZone", 'Float'>
    readonly isActive: FieldRef<"DeliveryZone", 'Boolean'>
    readonly createdAt: FieldRef<"DeliveryZone", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeliveryZone findUnique
   */
  export type DeliveryZoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: DeliveryZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: DeliveryZoneOmit<ExtArgs> | null
    /**
     * Filter, which DeliveryZone to fetch.
     */
    where: DeliveryZoneWhereUniqueInput
  }

  /**
   * DeliveryZone findUniqueOrThrow
   */
  export type DeliveryZoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: DeliveryZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: DeliveryZoneOmit<ExtArgs> | null
    /**
     * Filter, which DeliveryZone to fetch.
     */
    where: DeliveryZoneWhereUniqueInput
  }

  /**
   * DeliveryZone findFirst
   */
  export type DeliveryZoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: DeliveryZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: DeliveryZoneOmit<ExtArgs> | null
    /**
     * Filter, which DeliveryZone to fetch.
     */
    where?: DeliveryZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryZones to fetch.
     */
    orderBy?: DeliveryZoneOrderByWithRelationInput | DeliveryZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryZones.
     */
    cursor?: DeliveryZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryZones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryZones.
     */
    distinct?: DeliveryZoneScalarFieldEnum | DeliveryZoneScalarFieldEnum[]
  }

  /**
   * DeliveryZone findFirstOrThrow
   */
  export type DeliveryZoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: DeliveryZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: DeliveryZoneOmit<ExtArgs> | null
    /**
     * Filter, which DeliveryZone to fetch.
     */
    where?: DeliveryZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryZones to fetch.
     */
    orderBy?: DeliveryZoneOrderByWithRelationInput | DeliveryZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryZones.
     */
    cursor?: DeliveryZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryZones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryZones.
     */
    distinct?: DeliveryZoneScalarFieldEnum | DeliveryZoneScalarFieldEnum[]
  }

  /**
   * DeliveryZone findMany
   */
  export type DeliveryZoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: DeliveryZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: DeliveryZoneOmit<ExtArgs> | null
    /**
     * Filter, which DeliveryZones to fetch.
     */
    where?: DeliveryZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryZones to fetch.
     */
    orderBy?: DeliveryZoneOrderByWithRelationInput | DeliveryZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeliveryZones.
     */
    cursor?: DeliveryZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryZones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryZones.
     */
    distinct?: DeliveryZoneScalarFieldEnum | DeliveryZoneScalarFieldEnum[]
  }

  /**
   * DeliveryZone create
   */
  export type DeliveryZoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: DeliveryZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: DeliveryZoneOmit<ExtArgs> | null
    /**
     * The data needed to create a DeliveryZone.
     */
    data: XOR<DeliveryZoneCreateInput, DeliveryZoneUncheckedCreateInput>
  }

  /**
   * DeliveryZone createMany
   */
  export type DeliveryZoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeliveryZones.
     */
    data: DeliveryZoneCreateManyInput | DeliveryZoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeliveryZone createManyAndReturn
   */
  export type DeliveryZoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: DeliveryZoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: DeliveryZoneOmit<ExtArgs> | null
    /**
     * The data used to create many DeliveryZones.
     */
    data: DeliveryZoneCreateManyInput | DeliveryZoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeliveryZone update
   */
  export type DeliveryZoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: DeliveryZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: DeliveryZoneOmit<ExtArgs> | null
    /**
     * The data needed to update a DeliveryZone.
     */
    data: XOR<DeliveryZoneUpdateInput, DeliveryZoneUncheckedUpdateInput>
    /**
     * Choose, which DeliveryZone to update.
     */
    where: DeliveryZoneWhereUniqueInput
  }

  /**
   * DeliveryZone updateMany
   */
  export type DeliveryZoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeliveryZones.
     */
    data: XOR<DeliveryZoneUpdateManyMutationInput, DeliveryZoneUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryZones to update
     */
    where?: DeliveryZoneWhereInput
    /**
     * Limit how many DeliveryZones to update.
     */
    limit?: number
  }

  /**
   * DeliveryZone updateManyAndReturn
   */
  export type DeliveryZoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: DeliveryZoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: DeliveryZoneOmit<ExtArgs> | null
    /**
     * The data used to update DeliveryZones.
     */
    data: XOR<DeliveryZoneUpdateManyMutationInput, DeliveryZoneUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryZones to update
     */
    where?: DeliveryZoneWhereInput
    /**
     * Limit how many DeliveryZones to update.
     */
    limit?: number
  }

  /**
   * DeliveryZone upsert
   */
  export type DeliveryZoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: DeliveryZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: DeliveryZoneOmit<ExtArgs> | null
    /**
     * The filter to search for the DeliveryZone to update in case it exists.
     */
    where: DeliveryZoneWhereUniqueInput
    /**
     * In case the DeliveryZone found by the `where` argument doesn't exist, create a new DeliveryZone with this data.
     */
    create: XOR<DeliveryZoneCreateInput, DeliveryZoneUncheckedCreateInput>
    /**
     * In case the DeliveryZone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryZoneUpdateInput, DeliveryZoneUncheckedUpdateInput>
  }

  /**
   * DeliveryZone delete
   */
  export type DeliveryZoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: DeliveryZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: DeliveryZoneOmit<ExtArgs> | null
    /**
     * Filter which DeliveryZone to delete.
     */
    where: DeliveryZoneWhereUniqueInput
  }

  /**
   * DeliveryZone deleteMany
   */
  export type DeliveryZoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryZones to delete
     */
    where?: DeliveryZoneWhereInput
    /**
     * Limit how many DeliveryZones to delete.
     */
    limit?: number
  }

  /**
   * DeliveryZone without action
   */
  export type DeliveryZoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: DeliveryZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: DeliveryZoneOmit<ExtArgs> | null
  }


  /**
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierAvgAggregateOutputType = {
    openingBalance: number | null
    currentBalance: number | null
  }

  export type SupplierSumAggregateOutputType = {
    openingBalance: number | null
    currentBalance: number | null
  }

  export type SupplierMinAggregateOutputType = {
    id: string | null
    name: string | null
    contactPerson: string | null
    phone: string | null
    address: string | null
    category: string | null
    openingBalance: number | null
    currentBalance: number | null
    isActive: boolean | null
    notes: string | null
    createdAt: Date | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: string | null
    name: string | null
    contactPerson: string | null
    phone: string | null
    address: string | null
    category: string | null
    openingBalance: number | null
    currentBalance: number | null
    isActive: boolean | null
    notes: string | null
    createdAt: Date | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    name: number
    contactPerson: number
    phone: number
    address: number
    category: number
    openingBalance: number
    currentBalance: number
    isActive: number
    notes: number
    createdAt: number
    _all: number
  }


  export type SupplierAvgAggregateInputType = {
    openingBalance?: true
    currentBalance?: true
  }

  export type SupplierSumAggregateInputType = {
    openingBalance?: true
    currentBalance?: true
  }

  export type SupplierMinAggregateInputType = {
    id?: true
    name?: true
    contactPerson?: true
    phone?: true
    address?: true
    category?: true
    openingBalance?: true
    currentBalance?: true
    isActive?: true
    notes?: true
    createdAt?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    name?: true
    contactPerson?: true
    phone?: true
    address?: true
    category?: true
    openingBalance?: true
    currentBalance?: true
    isActive?: true
    notes?: true
    createdAt?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    name?: true
    contactPerson?: true
    phone?: true
    address?: true
    category?: true
    openingBalance?: true
    currentBalance?: true
    isActive?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _avg?: SupplierAvgAggregateInputType
    _sum?: SupplierSumAggregateInputType
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: string
    name: string
    contactPerson: string | null
    phone: string
    address: string | null
    category: string | null
    openingBalance: number
    currentBalance: number
    isActive: boolean
    notes: string | null
    createdAt: Date
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contactPerson?: boolean
    phone?: boolean
    address?: boolean
    category?: boolean
    openingBalance?: boolean
    currentBalance?: boolean
    isActive?: boolean
    notes?: boolean
    createdAt?: boolean
    purchases?: boolean | Supplier$purchasesArgs<ExtArgs>
    payments?: boolean | Supplier$paymentsArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contactPerson?: boolean
    phone?: boolean
    address?: boolean
    category?: boolean
    openingBalance?: boolean
    currentBalance?: boolean
    isActive?: boolean
    notes?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contactPerson?: boolean
    phone?: boolean
    address?: boolean
    category?: boolean
    openingBalance?: boolean
    currentBalance?: boolean
    isActive?: boolean
    notes?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectScalar = {
    id?: boolean
    name?: boolean
    contactPerson?: boolean
    phone?: boolean
    address?: boolean
    category?: boolean
    openingBalance?: boolean
    currentBalance?: boolean
    isActive?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type SupplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "contactPerson" | "phone" | "address" | "category" | "openingBalance" | "currentBalance" | "isActive" | "notes" | "createdAt", ExtArgs["result"]["supplier"]>
  export type SupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | Supplier$purchasesArgs<ExtArgs>
    payments?: boolean | Supplier$paymentsArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SupplierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {
      purchases: Prisma.$PurchasePayload<ExtArgs>[]
      payments: Prisma.$SupplierPaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      contactPerson: string | null
      phone: string
      address: string | null
      category: string | null
      openingBalance: number
      currentBalance: number
      isActive: boolean
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SupplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {SupplierUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.updateManyAndReturn({
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
    updateManyAndReturn<T extends SupplierUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
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
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchases<T extends Supplier$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Supplier$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Supplier model
   */
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'String'>
    readonly name: FieldRef<"Supplier", 'String'>
    readonly contactPerson: FieldRef<"Supplier", 'String'>
    readonly phone: FieldRef<"Supplier", 'String'>
    readonly address: FieldRef<"Supplier", 'String'>
    readonly category: FieldRef<"Supplier", 'String'>
    readonly openingBalance: FieldRef<"Supplier", 'Float'>
    readonly currentBalance: FieldRef<"Supplier", 'Float'>
    readonly isActive: FieldRef<"Supplier", 'Boolean'>
    readonly notes: FieldRef<"Supplier", 'String'>
    readonly createdAt: FieldRef<"Supplier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier createManyAndReturn
   */
  export type SupplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier updateManyAndReturn
   */
  export type SupplierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to delete.
     */
    limit?: number
  }

  /**
   * Supplier.purchases
   */
  export type Supplier$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Supplier.payments
   */
  export type Supplier$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierPayment
     */
    omit?: SupplierPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    where?: SupplierPaymentWhereInput
    orderBy?: SupplierPaymentOrderByWithRelationInput | SupplierPaymentOrderByWithRelationInput[]
    cursor?: SupplierPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupplierPaymentScalarFieldEnum | SupplierPaymentScalarFieldEnum[]
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
  }


  /**
   * Model Purchase
   */

  export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  export type PurchaseAvgAggregateOutputType = {
    totalAmount: number | null
    paidAmount: number | null
    remainingAmount: number | null
  }

  export type PurchaseSumAggregateOutputType = {
    totalAmount: number | null
    paidAmount: number | null
    remainingAmount: number | null
  }

  export type PurchaseMinAggregateOutputType = {
    id: string | null
    invoiceNumber: string | null
    supplierId: string | null
    supplierName: string | null
    invoiceDate: string | null
    items: string | null
    totalAmount: number | null
    paidAmount: number | null
    remainingAmount: number | null
    paymentType: string | null
    status: string | null
    notes: string | null
    receivedBy: string | null
    createdAt: Date | null
  }

  export type PurchaseMaxAggregateOutputType = {
    id: string | null
    invoiceNumber: string | null
    supplierId: string | null
    supplierName: string | null
    invoiceDate: string | null
    items: string | null
    totalAmount: number | null
    paidAmount: number | null
    remainingAmount: number | null
    paymentType: string | null
    status: string | null
    notes: string | null
    receivedBy: string | null
    createdAt: Date | null
  }

  export type PurchaseCountAggregateOutputType = {
    id: number
    invoiceNumber: number
    supplierId: number
    supplierName: number
    invoiceDate: number
    items: number
    totalAmount: number
    paidAmount: number
    remainingAmount: number
    paymentType: number
    status: number
    notes: number
    receivedBy: number
    createdAt: number
    _all: number
  }


  export type PurchaseAvgAggregateInputType = {
    totalAmount?: true
    paidAmount?: true
    remainingAmount?: true
  }

  export type PurchaseSumAggregateInputType = {
    totalAmount?: true
    paidAmount?: true
    remainingAmount?: true
  }

  export type PurchaseMinAggregateInputType = {
    id?: true
    invoiceNumber?: true
    supplierId?: true
    supplierName?: true
    invoiceDate?: true
    items?: true
    totalAmount?: true
    paidAmount?: true
    remainingAmount?: true
    paymentType?: true
    status?: true
    notes?: true
    receivedBy?: true
    createdAt?: true
  }

  export type PurchaseMaxAggregateInputType = {
    id?: true
    invoiceNumber?: true
    supplierId?: true
    supplierName?: true
    invoiceDate?: true
    items?: true
    totalAmount?: true
    paidAmount?: true
    remainingAmount?: true
    paymentType?: true
    status?: true
    notes?: true
    receivedBy?: true
    createdAt?: true
  }

  export type PurchaseCountAggregateInputType = {
    id?: true
    invoiceNumber?: true
    supplierId?: true
    supplierName?: true
    invoiceDate?: true
    items?: true
    totalAmount?: true
    paidAmount?: true
    remainingAmount?: true
    paymentType?: true
    status?: true
    notes?: true
    receivedBy?: true
    createdAt?: true
    _all?: true
  }

  export type PurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchase to aggregate.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchases
    **/
    _count?: true | PurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseMaxAggregateInputType
  }

  export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase[P]>
      : GetScalarType<T[P], AggregatePurchase[P]>
  }




  export type PurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithAggregationInput | PurchaseOrderByWithAggregationInput[]
    by: PurchaseScalarFieldEnum[] | PurchaseScalarFieldEnum
    having?: PurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseCountAggregateInputType | true
    _avg?: PurchaseAvgAggregateInputType
    _sum?: PurchaseSumAggregateInputType
    _min?: PurchaseMinAggregateInputType
    _max?: PurchaseMaxAggregateInputType
  }

  export type PurchaseGroupByOutputType = {
    id: string
    invoiceNumber: string
    supplierId: string
    supplierName: string
    invoiceDate: string
    items: string
    totalAmount: number
    paidAmount: number
    remainingAmount: number
    paymentType: string
    status: string
    notes: string | null
    receivedBy: string | null
    createdAt: Date
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNumber?: boolean
    supplierId?: boolean
    supplierName?: boolean
    invoiceDate?: boolean
    items?: boolean
    totalAmount?: boolean
    paidAmount?: boolean
    remainingAmount?: boolean
    paymentType?: boolean
    status?: boolean
    notes?: boolean
    receivedBy?: boolean
    createdAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNumber?: boolean
    supplierId?: boolean
    supplierName?: boolean
    invoiceDate?: boolean
    items?: boolean
    totalAmount?: boolean
    paidAmount?: boolean
    remainingAmount?: boolean
    paymentType?: boolean
    status?: boolean
    notes?: boolean
    receivedBy?: boolean
    createdAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNumber?: boolean
    supplierId?: boolean
    supplierName?: boolean
    invoiceDate?: boolean
    items?: boolean
    totalAmount?: boolean
    paidAmount?: boolean
    remainingAmount?: boolean
    paymentType?: boolean
    status?: boolean
    notes?: boolean
    receivedBy?: boolean
    createdAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectScalar = {
    id?: boolean
    invoiceNumber?: boolean
    supplierId?: boolean
    supplierName?: boolean
    invoiceDate?: boolean
    items?: boolean
    totalAmount?: boolean
    paidAmount?: boolean
    remainingAmount?: boolean
    paymentType?: boolean
    status?: boolean
    notes?: boolean
    receivedBy?: boolean
    createdAt?: boolean
  }

  export type PurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceNumber" | "supplierId" | "supplierName" | "invoiceDate" | "items" | "totalAmount" | "paidAmount" | "remainingAmount" | "paymentType" | "status" | "notes" | "receivedBy" | "createdAt", ExtArgs["result"]["purchase"]>
  export type PurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }

  export type $PurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purchase"
    objects: {
      supplier: Prisma.$SupplierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceNumber: string
      supplierId: string
      supplierName: string
      invoiceDate: string
      items: string
      totalAmount: number
      paidAmount: number
      remainingAmount: number
      paymentType: string
      status: string
      notes: string | null
      receivedBy: string | null
      createdAt: Date
    }, ExtArgs["result"]["purchase"]>
    composites: {}
  }

  type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseDefaultArgs> = $Result.GetResult<Prisma.$PurchasePayload, S>

  type PurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseCountAggregateInputType | true
    }

  export interface PurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purchase'], meta: { name: 'Purchase' } }
    /**
     * Find zero or one Purchase that matches the filter.
     * @param {PurchaseFindUniqueArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseFindUniqueArgs>(args: SelectSubset<T, PurchaseFindUniqueArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseFindUniqueOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseFindFirstArgs>(args?: SelectSubset<T, PurchaseFindFirstArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchase.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseWithIdOnly = await prisma.purchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseFindManyArgs>(args?: SelectSubset<T, PurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchase.
     * @param {PurchaseCreateArgs} args - Arguments to create a Purchase.
     * @example
     * // Create one Purchase
     * const Purchase = await prisma.purchase.create({
     *   data: {
     *     // ... data to create a Purchase
     *   }
     * })
     * 
     */
    create<T extends PurchaseCreateArgs>(args: SelectSubset<T, PurchaseCreateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchases.
     * @param {PurchaseCreateManyArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseCreateManyArgs>(args?: SelectSubset<T, PurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Purchases and returns the data saved in the database.
     * @param {PurchaseCreateManyAndReturnArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Purchase.
     * @param {PurchaseDeleteArgs} args - Arguments to delete one Purchase.
     * @example
     * // Delete one Purchase
     * const Purchase = await prisma.purchase.delete({
     *   where: {
     *     // ... filter to delete one Purchase
     *   }
     * })
     * 
     */
    delete<T extends PurchaseDeleteArgs>(args: SelectSubset<T, PurchaseDeleteArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchase.
     * @param {PurchaseUpdateArgs} args - Arguments to update one Purchase.
     * @example
     * // Update one Purchase
     * const purchase = await prisma.purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseUpdateArgs>(args: SelectSubset<T, PurchaseUpdateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchases.
     * @param {PurchaseDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseDeleteManyArgs>(args?: SelectSubset<T, PurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseUpdateManyArgs>(args: SelectSubset<T, PurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases and returns the data updated in the database.
     * @param {PurchaseUpdateManyAndReturnArgs} args - Arguments to update many Purchases.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.updateManyAndReturn({
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
    updateManyAndReturn<T extends PurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Purchase.
     * @param {PurchaseUpsertArgs} args - Arguments to update or create a Purchase.
     * @example
     * // Update or create a Purchase
     * const purchase = await prisma.purchase.upsert({
     *   create: {
     *     // ... data to create a Purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseUpsertArgs>(args: SelectSubset<T, PurchaseUpsertArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchase.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchaseCountArgs>(
      args?: Subset<T, PurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PurchaseAggregateArgs>(args: Subset<T, PurchaseAggregateArgs>): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>

    /**
     * Group by Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseGroupByArgs} args - Group by arguments.
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
      T extends PurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purchase model
   */
  readonly fields: PurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Purchase model
   */
  interface PurchaseFieldRefs {
    readonly id: FieldRef<"Purchase", 'String'>
    readonly invoiceNumber: FieldRef<"Purchase", 'String'>
    readonly supplierId: FieldRef<"Purchase", 'String'>
    readonly supplierName: FieldRef<"Purchase", 'String'>
    readonly invoiceDate: FieldRef<"Purchase", 'String'>
    readonly items: FieldRef<"Purchase", 'String'>
    readonly totalAmount: FieldRef<"Purchase", 'Float'>
    readonly paidAmount: FieldRef<"Purchase", 'Float'>
    readonly remainingAmount: FieldRef<"Purchase", 'Float'>
    readonly paymentType: FieldRef<"Purchase", 'String'>
    readonly status: FieldRef<"Purchase", 'String'>
    readonly notes: FieldRef<"Purchase", 'String'>
    readonly receivedBy: FieldRef<"Purchase", 'String'>
    readonly createdAt: FieldRef<"Purchase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Purchase findUnique
   */
  export type PurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findUniqueOrThrow
   */
  export type PurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findFirst
   */
  export type PurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findFirstOrThrow
   */
  export type PurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findMany
   */
  export type PurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase create
   */
  export type PurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Purchase.
     */
    data: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
  }

  /**
   * Purchase createMany
   */
  export type PurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Purchase createManyAndReturn
   */
  export type PurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchase update
   */
  export type PurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Purchase.
     */
    data: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
    /**
     * Choose, which Purchase to update.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase updateMany
   */
  export type PurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
  }

  /**
   * Purchase updateManyAndReturn
   */
  export type PurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchase upsert
   */
  export type PurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Purchase to update in case it exists.
     */
    where: PurchaseWhereUniqueInput
    /**
     * In case the Purchase found by the `where` argument doesn't exist, create a new Purchase with this data.
     */
    create: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
    /**
     * In case the Purchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
  }

  /**
   * Purchase delete
   */
  export type PurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter which Purchase to delete.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase deleteMany
   */
  export type PurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to delete
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to delete.
     */
    limit?: number
  }

  /**
   * Purchase without action
   */
  export type PurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
  }


  /**
   * Model SupplierPayment
   */

  export type AggregateSupplierPayment = {
    _count: SupplierPaymentCountAggregateOutputType | null
    _avg: SupplierPaymentAvgAggregateOutputType | null
    _sum: SupplierPaymentSumAggregateOutputType | null
    _min: SupplierPaymentMinAggregateOutputType | null
    _max: SupplierPaymentMaxAggregateOutputType | null
  }

  export type SupplierPaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type SupplierPaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type SupplierPaymentMinAggregateOutputType = {
    id: string | null
    paymentNumber: string | null
    supplierId: string | null
    supplierName: string | null
    amount: number | null
    paymentDate: string | null
    paymentMethod: string | null
    treasury: string | null
    notes: string | null
    recordedBy: string | null
    createdAt: Date | null
  }

  export type SupplierPaymentMaxAggregateOutputType = {
    id: string | null
    paymentNumber: string | null
    supplierId: string | null
    supplierName: string | null
    amount: number | null
    paymentDate: string | null
    paymentMethod: string | null
    treasury: string | null
    notes: string | null
    recordedBy: string | null
    createdAt: Date | null
  }

  export type SupplierPaymentCountAggregateOutputType = {
    id: number
    paymentNumber: number
    supplierId: number
    supplierName: number
    amount: number
    paymentDate: number
    paymentMethod: number
    treasury: number
    notes: number
    recordedBy: number
    createdAt: number
    _all: number
  }


  export type SupplierPaymentAvgAggregateInputType = {
    amount?: true
  }

  export type SupplierPaymentSumAggregateInputType = {
    amount?: true
  }

  export type SupplierPaymentMinAggregateInputType = {
    id?: true
    paymentNumber?: true
    supplierId?: true
    supplierName?: true
    amount?: true
    paymentDate?: true
    paymentMethod?: true
    treasury?: true
    notes?: true
    recordedBy?: true
    createdAt?: true
  }

  export type SupplierPaymentMaxAggregateInputType = {
    id?: true
    paymentNumber?: true
    supplierId?: true
    supplierName?: true
    amount?: true
    paymentDate?: true
    paymentMethod?: true
    treasury?: true
    notes?: true
    recordedBy?: true
    createdAt?: true
  }

  export type SupplierPaymentCountAggregateInputType = {
    id?: true
    paymentNumber?: true
    supplierId?: true
    supplierName?: true
    amount?: true
    paymentDate?: true
    paymentMethod?: true
    treasury?: true
    notes?: true
    recordedBy?: true
    createdAt?: true
    _all?: true
  }

  export type SupplierPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierPayment to aggregate.
     */
    where?: SupplierPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierPayments to fetch.
     */
    orderBy?: SupplierPaymentOrderByWithRelationInput | SupplierPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupplierPayments
    **/
    _count?: true | SupplierPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierPaymentMaxAggregateInputType
  }

  export type GetSupplierPaymentAggregateType<T extends SupplierPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplierPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplierPayment[P]>
      : GetScalarType<T[P], AggregateSupplierPayment[P]>
  }




  export type SupplierPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierPaymentWhereInput
    orderBy?: SupplierPaymentOrderByWithAggregationInput | SupplierPaymentOrderByWithAggregationInput[]
    by: SupplierPaymentScalarFieldEnum[] | SupplierPaymentScalarFieldEnum
    having?: SupplierPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierPaymentCountAggregateInputType | true
    _avg?: SupplierPaymentAvgAggregateInputType
    _sum?: SupplierPaymentSumAggregateInputType
    _min?: SupplierPaymentMinAggregateInputType
    _max?: SupplierPaymentMaxAggregateInputType
  }

  export type SupplierPaymentGroupByOutputType = {
    id: string
    paymentNumber: string
    supplierId: string
    supplierName: string
    amount: number
    paymentDate: string
    paymentMethod: string
    treasury: string
    notes: string | null
    recordedBy: string | null
    createdAt: Date
    _count: SupplierPaymentCountAggregateOutputType | null
    _avg: SupplierPaymentAvgAggregateOutputType | null
    _sum: SupplierPaymentSumAggregateOutputType | null
    _min: SupplierPaymentMinAggregateOutputType | null
    _max: SupplierPaymentMaxAggregateOutputType | null
  }

  type GetSupplierPaymentGroupByPayload<T extends SupplierPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierPaymentGroupByOutputType[P]>
        }
      >
    >


  export type SupplierPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentNumber?: boolean
    supplierId?: boolean
    supplierName?: boolean
    amount?: boolean
    paymentDate?: boolean
    paymentMethod?: boolean
    treasury?: boolean
    notes?: boolean
    recordedBy?: boolean
    createdAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierPayment"]>

  export type SupplierPaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentNumber?: boolean
    supplierId?: boolean
    supplierName?: boolean
    amount?: boolean
    paymentDate?: boolean
    paymentMethod?: boolean
    treasury?: boolean
    notes?: boolean
    recordedBy?: boolean
    createdAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierPayment"]>

  export type SupplierPaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentNumber?: boolean
    supplierId?: boolean
    supplierName?: boolean
    amount?: boolean
    paymentDate?: boolean
    paymentMethod?: boolean
    treasury?: boolean
    notes?: boolean
    recordedBy?: boolean
    createdAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierPayment"]>

  export type SupplierPaymentSelectScalar = {
    id?: boolean
    paymentNumber?: boolean
    supplierId?: boolean
    supplierName?: boolean
    amount?: boolean
    paymentDate?: boolean
    paymentMethod?: boolean
    treasury?: boolean
    notes?: boolean
    recordedBy?: boolean
    createdAt?: boolean
  }

  export type SupplierPaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paymentNumber" | "supplierId" | "supplierName" | "amount" | "paymentDate" | "paymentMethod" | "treasury" | "notes" | "recordedBy" | "createdAt", ExtArgs["result"]["supplierPayment"]>
  export type SupplierPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type SupplierPaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type SupplierPaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }

  export type $SupplierPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupplierPayment"
    objects: {
      supplier: Prisma.$SupplierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      paymentNumber: string
      supplierId: string
      supplierName: string
      amount: number
      paymentDate: string
      paymentMethod: string
      treasury: string
      notes: string | null
      recordedBy: string | null
      createdAt: Date
    }, ExtArgs["result"]["supplierPayment"]>
    composites: {}
  }

  type SupplierPaymentGetPayload<S extends boolean | null | undefined | SupplierPaymentDefaultArgs> = $Result.GetResult<Prisma.$SupplierPaymentPayload, S>

  type SupplierPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierPaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierPaymentCountAggregateInputType | true
    }

  export interface SupplierPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupplierPayment'], meta: { name: 'SupplierPayment' } }
    /**
     * Find zero or one SupplierPayment that matches the filter.
     * @param {SupplierPaymentFindUniqueArgs} args - Arguments to find a SupplierPayment
     * @example
     * // Get one SupplierPayment
     * const supplierPayment = await prisma.supplierPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierPaymentFindUniqueArgs>(args: SelectSubset<T, SupplierPaymentFindUniqueArgs<ExtArgs>>): Prisma__SupplierPaymentClient<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SupplierPayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierPaymentFindUniqueOrThrowArgs} args - Arguments to find a SupplierPayment
     * @example
     * // Get one SupplierPayment
     * const supplierPayment = await prisma.supplierPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierPaymentClient<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupplierPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPaymentFindFirstArgs} args - Arguments to find a SupplierPayment
     * @example
     * // Get one SupplierPayment
     * const supplierPayment = await prisma.supplierPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierPaymentFindFirstArgs>(args?: SelectSubset<T, SupplierPaymentFindFirstArgs<ExtArgs>>): Prisma__SupplierPaymentClient<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupplierPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPaymentFindFirstOrThrowArgs} args - Arguments to find a SupplierPayment
     * @example
     * // Get one SupplierPayment
     * const supplierPayment = await prisma.supplierPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierPaymentClient<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SupplierPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierPayments
     * const supplierPayments = await prisma.supplierPayment.findMany()
     * 
     * // Get first 10 SupplierPayments
     * const supplierPayments = await prisma.supplierPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierPaymentWithIdOnly = await prisma.supplierPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierPaymentFindManyArgs>(args?: SelectSubset<T, SupplierPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SupplierPayment.
     * @param {SupplierPaymentCreateArgs} args - Arguments to create a SupplierPayment.
     * @example
     * // Create one SupplierPayment
     * const SupplierPayment = await prisma.supplierPayment.create({
     *   data: {
     *     // ... data to create a SupplierPayment
     *   }
     * })
     * 
     */
    create<T extends SupplierPaymentCreateArgs>(args: SelectSubset<T, SupplierPaymentCreateArgs<ExtArgs>>): Prisma__SupplierPaymentClient<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SupplierPayments.
     * @param {SupplierPaymentCreateManyArgs} args - Arguments to create many SupplierPayments.
     * @example
     * // Create many SupplierPayments
     * const supplierPayment = await prisma.supplierPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierPaymentCreateManyArgs>(args?: SelectSubset<T, SupplierPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupplierPayments and returns the data saved in the database.
     * @param {SupplierPaymentCreateManyAndReturnArgs} args - Arguments to create many SupplierPayments.
     * @example
     * // Create many SupplierPayments
     * const supplierPayment = await prisma.supplierPayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupplierPayments and only return the `id`
     * const supplierPaymentWithIdOnly = await prisma.supplierPayment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierPaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierPaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SupplierPayment.
     * @param {SupplierPaymentDeleteArgs} args - Arguments to delete one SupplierPayment.
     * @example
     * // Delete one SupplierPayment
     * const SupplierPayment = await prisma.supplierPayment.delete({
     *   where: {
     *     // ... filter to delete one SupplierPayment
     *   }
     * })
     * 
     */
    delete<T extends SupplierPaymentDeleteArgs>(args: SelectSubset<T, SupplierPaymentDeleteArgs<ExtArgs>>): Prisma__SupplierPaymentClient<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SupplierPayment.
     * @param {SupplierPaymentUpdateArgs} args - Arguments to update one SupplierPayment.
     * @example
     * // Update one SupplierPayment
     * const supplierPayment = await prisma.supplierPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierPaymentUpdateArgs>(args: SelectSubset<T, SupplierPaymentUpdateArgs<ExtArgs>>): Prisma__SupplierPaymentClient<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SupplierPayments.
     * @param {SupplierPaymentDeleteManyArgs} args - Arguments to filter SupplierPayments to delete.
     * @example
     * // Delete a few SupplierPayments
     * const { count } = await prisma.supplierPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierPaymentDeleteManyArgs>(args?: SelectSubset<T, SupplierPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplierPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierPayments
     * const supplierPayment = await prisma.supplierPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierPaymentUpdateManyArgs>(args: SelectSubset<T, SupplierPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplierPayments and returns the data updated in the database.
     * @param {SupplierPaymentUpdateManyAndReturnArgs} args - Arguments to update many SupplierPayments.
     * @example
     * // Update many SupplierPayments
     * const supplierPayment = await prisma.supplierPayment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SupplierPayments and only return the `id`
     * const supplierPaymentWithIdOnly = await prisma.supplierPayment.updateManyAndReturn({
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
    updateManyAndReturn<T extends SupplierPaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplierPaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SupplierPayment.
     * @param {SupplierPaymentUpsertArgs} args - Arguments to update or create a SupplierPayment.
     * @example
     * // Update or create a SupplierPayment
     * const supplierPayment = await prisma.supplierPayment.upsert({
     *   create: {
     *     // ... data to create a SupplierPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierPayment we want to update
     *   }
     * })
     */
    upsert<T extends SupplierPaymentUpsertArgs>(args: SelectSubset<T, SupplierPaymentUpsertArgs<ExtArgs>>): Prisma__SupplierPaymentClient<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SupplierPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPaymentCountArgs} args - Arguments to filter SupplierPayments to count.
     * @example
     * // Count the number of SupplierPayments
     * const count = await prisma.supplierPayment.count({
     *   where: {
     *     // ... the filter for the SupplierPayments we want to count
     *   }
     * })
    **/
    count<T extends SupplierPaymentCountArgs>(
      args?: Subset<T, SupplierPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupplierPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierPaymentAggregateArgs>(args: Subset<T, SupplierPaymentAggregateArgs>): Prisma.PrismaPromise<GetSupplierPaymentAggregateType<T>>

    /**
     * Group by SupplierPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPaymentGroupByArgs} args - Group by arguments.
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
      T extends SupplierPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierPaymentGroupByArgs['orderBy'] }
        : { orderBy?: SupplierPaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplierPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupplierPayment model
   */
  readonly fields: SupplierPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupplierPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SupplierPayment model
   */
  interface SupplierPaymentFieldRefs {
    readonly id: FieldRef<"SupplierPayment", 'String'>
    readonly paymentNumber: FieldRef<"SupplierPayment", 'String'>
    readonly supplierId: FieldRef<"SupplierPayment", 'String'>
    readonly supplierName: FieldRef<"SupplierPayment", 'String'>
    readonly amount: FieldRef<"SupplierPayment", 'Float'>
    readonly paymentDate: FieldRef<"SupplierPayment", 'String'>
    readonly paymentMethod: FieldRef<"SupplierPayment", 'String'>
    readonly treasury: FieldRef<"SupplierPayment", 'String'>
    readonly notes: FieldRef<"SupplierPayment", 'String'>
    readonly recordedBy: FieldRef<"SupplierPayment", 'String'>
    readonly createdAt: FieldRef<"SupplierPayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupplierPayment findUnique
   */
  export type SupplierPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierPayment
     */
    omit?: SupplierPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SupplierPayment to fetch.
     */
    where: SupplierPaymentWhereUniqueInput
  }

  /**
   * SupplierPayment findUniqueOrThrow
   */
  export type SupplierPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierPayment
     */
    omit?: SupplierPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SupplierPayment to fetch.
     */
    where: SupplierPaymentWhereUniqueInput
  }

  /**
   * SupplierPayment findFirst
   */
  export type SupplierPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierPayment
     */
    omit?: SupplierPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SupplierPayment to fetch.
     */
    where?: SupplierPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierPayments to fetch.
     */
    orderBy?: SupplierPaymentOrderByWithRelationInput | SupplierPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierPayments.
     */
    cursor?: SupplierPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierPayments.
     */
    distinct?: SupplierPaymentScalarFieldEnum | SupplierPaymentScalarFieldEnum[]
  }

  /**
   * SupplierPayment findFirstOrThrow
   */
  export type SupplierPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierPayment
     */
    omit?: SupplierPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SupplierPayment to fetch.
     */
    where?: SupplierPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierPayments to fetch.
     */
    orderBy?: SupplierPaymentOrderByWithRelationInput | SupplierPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierPayments.
     */
    cursor?: SupplierPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierPayments.
     */
    distinct?: SupplierPaymentScalarFieldEnum | SupplierPaymentScalarFieldEnum[]
  }

  /**
   * SupplierPayment findMany
   */
  export type SupplierPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierPayment
     */
    omit?: SupplierPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SupplierPayments to fetch.
     */
    where?: SupplierPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierPayments to fetch.
     */
    orderBy?: SupplierPaymentOrderByWithRelationInput | SupplierPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupplierPayments.
     */
    cursor?: SupplierPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierPayments.
     */
    distinct?: SupplierPaymentScalarFieldEnum | SupplierPaymentScalarFieldEnum[]
  }

  /**
   * SupplierPayment create
   */
  export type SupplierPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierPayment
     */
    omit?: SupplierPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a SupplierPayment.
     */
    data: XOR<SupplierPaymentCreateInput, SupplierPaymentUncheckedCreateInput>
  }

  /**
   * SupplierPayment createMany
   */
  export type SupplierPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplierPayments.
     */
    data: SupplierPaymentCreateManyInput | SupplierPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupplierPayment createManyAndReturn
   */
  export type SupplierPaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierPayment
     */
    omit?: SupplierPaymentOmit<ExtArgs> | null
    /**
     * The data used to create many SupplierPayments.
     */
    data: SupplierPaymentCreateManyInput | SupplierPaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupplierPayment update
   */
  export type SupplierPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierPayment
     */
    omit?: SupplierPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a SupplierPayment.
     */
    data: XOR<SupplierPaymentUpdateInput, SupplierPaymentUncheckedUpdateInput>
    /**
     * Choose, which SupplierPayment to update.
     */
    where: SupplierPaymentWhereUniqueInput
  }

  /**
   * SupplierPayment updateMany
   */
  export type SupplierPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplierPayments.
     */
    data: XOR<SupplierPaymentUpdateManyMutationInput, SupplierPaymentUncheckedUpdateManyInput>
    /**
     * Filter which SupplierPayments to update
     */
    where?: SupplierPaymentWhereInput
    /**
     * Limit how many SupplierPayments to update.
     */
    limit?: number
  }

  /**
   * SupplierPayment updateManyAndReturn
   */
  export type SupplierPaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierPayment
     */
    omit?: SupplierPaymentOmit<ExtArgs> | null
    /**
     * The data used to update SupplierPayments.
     */
    data: XOR<SupplierPaymentUpdateManyMutationInput, SupplierPaymentUncheckedUpdateManyInput>
    /**
     * Filter which SupplierPayments to update
     */
    where?: SupplierPaymentWhereInput
    /**
     * Limit how many SupplierPayments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupplierPayment upsert
   */
  export type SupplierPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierPayment
     */
    omit?: SupplierPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the SupplierPayment to update in case it exists.
     */
    where: SupplierPaymentWhereUniqueInput
    /**
     * In case the SupplierPayment found by the `where` argument doesn't exist, create a new SupplierPayment with this data.
     */
    create: XOR<SupplierPaymentCreateInput, SupplierPaymentUncheckedCreateInput>
    /**
     * In case the SupplierPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierPaymentUpdateInput, SupplierPaymentUncheckedUpdateInput>
  }

  /**
   * SupplierPayment delete
   */
  export type SupplierPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierPayment
     */
    omit?: SupplierPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    /**
     * Filter which SupplierPayment to delete.
     */
    where: SupplierPaymentWhereUniqueInput
  }

  /**
   * SupplierPayment deleteMany
   */
  export type SupplierPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierPayments to delete
     */
    where?: SupplierPaymentWhereInput
    /**
     * Limit how many SupplierPayments to delete.
     */
    limit?: number
  }

  /**
   * SupplierPayment without action
   */
  export type SupplierPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierPayment
     */
    omit?: SupplierPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
  }


  /**
   * Model StockMovement
   */

  export type AggregateStockMovement = {
    _count: StockMovementCountAggregateOutputType | null
    _avg: StockMovementAvgAggregateOutputType | null
    _sum: StockMovementSumAggregateOutputType | null
    _min: StockMovementMinAggregateOutputType | null
    _max: StockMovementMaxAggregateOutputType | null
  }

  export type StockMovementAvgAggregateOutputType = {
    quantity: number | null
    balanceAfter: number | null
    unitCost: number | null
  }

  export type StockMovementSumAggregateOutputType = {
    quantity: number | null
    balanceAfter: number | null
    unitCost: number | null
  }

  export type StockMovementMinAggregateOutputType = {
    id: string | null
    productId: string | null
    productName: string | null
    movementType: string | null
    quantity: number | null
    balanceAfter: number | null
    unitCost: number | null
    reference: string | null
    notes: string | null
    performedBy: string | null
    createdAt: Date | null
  }

  export type StockMovementMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    productName: string | null
    movementType: string | null
    quantity: number | null
    balanceAfter: number | null
    unitCost: number | null
    reference: string | null
    notes: string | null
    performedBy: string | null
    createdAt: Date | null
  }

  export type StockMovementCountAggregateOutputType = {
    id: number
    productId: number
    productName: number
    movementType: number
    quantity: number
    balanceAfter: number
    unitCost: number
    reference: number
    notes: number
    performedBy: number
    createdAt: number
    _all: number
  }


  export type StockMovementAvgAggregateInputType = {
    quantity?: true
    balanceAfter?: true
    unitCost?: true
  }

  export type StockMovementSumAggregateInputType = {
    quantity?: true
    balanceAfter?: true
    unitCost?: true
  }

  export type StockMovementMinAggregateInputType = {
    id?: true
    productId?: true
    productName?: true
    movementType?: true
    quantity?: true
    balanceAfter?: true
    unitCost?: true
    reference?: true
    notes?: true
    performedBy?: true
    createdAt?: true
  }

  export type StockMovementMaxAggregateInputType = {
    id?: true
    productId?: true
    productName?: true
    movementType?: true
    quantity?: true
    balanceAfter?: true
    unitCost?: true
    reference?: true
    notes?: true
    performedBy?: true
    createdAt?: true
  }

  export type StockMovementCountAggregateInputType = {
    id?: true
    productId?: true
    productName?: true
    movementType?: true
    quantity?: true
    balanceAfter?: true
    unitCost?: true
    reference?: true
    notes?: true
    performedBy?: true
    createdAt?: true
    _all?: true
  }

  export type StockMovementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockMovement to aggregate.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockMovements
    **/
    _count?: true | StockMovementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockMovementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockMovementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockMovementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockMovementMaxAggregateInputType
  }

  export type GetStockMovementAggregateType<T extends StockMovementAggregateArgs> = {
        [P in keyof T & keyof AggregateStockMovement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockMovement[P]>
      : GetScalarType<T[P], AggregateStockMovement[P]>
  }




  export type StockMovementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMovementWhereInput
    orderBy?: StockMovementOrderByWithAggregationInput | StockMovementOrderByWithAggregationInput[]
    by: StockMovementScalarFieldEnum[] | StockMovementScalarFieldEnum
    having?: StockMovementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockMovementCountAggregateInputType | true
    _avg?: StockMovementAvgAggregateInputType
    _sum?: StockMovementSumAggregateInputType
    _min?: StockMovementMinAggregateInputType
    _max?: StockMovementMaxAggregateInputType
  }

  export type StockMovementGroupByOutputType = {
    id: string
    productId: string
    productName: string
    movementType: string
    quantity: number
    balanceAfter: number
    unitCost: number | null
    reference: string | null
    notes: string | null
    performedBy: string | null
    createdAt: Date
    _count: StockMovementCountAggregateOutputType | null
    _avg: StockMovementAvgAggregateOutputType | null
    _sum: StockMovementSumAggregateOutputType | null
    _min: StockMovementMinAggregateOutputType | null
    _max: StockMovementMaxAggregateOutputType | null
  }

  type GetStockMovementGroupByPayload<T extends StockMovementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockMovementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockMovementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockMovementGroupByOutputType[P]>
            : GetScalarType<T[P], StockMovementGroupByOutputType[P]>
        }
      >
    >


  export type StockMovementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    productName?: boolean
    movementType?: boolean
    quantity?: boolean
    balanceAfter?: boolean
    unitCost?: boolean
    reference?: boolean
    notes?: boolean
    performedBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["stockMovement"]>

  export type StockMovementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    productName?: boolean
    movementType?: boolean
    quantity?: boolean
    balanceAfter?: boolean
    unitCost?: boolean
    reference?: boolean
    notes?: boolean
    performedBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["stockMovement"]>

  export type StockMovementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    productName?: boolean
    movementType?: boolean
    quantity?: boolean
    balanceAfter?: boolean
    unitCost?: boolean
    reference?: boolean
    notes?: boolean
    performedBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["stockMovement"]>

  export type StockMovementSelectScalar = {
    id?: boolean
    productId?: boolean
    productName?: boolean
    movementType?: boolean
    quantity?: boolean
    balanceAfter?: boolean
    unitCost?: boolean
    reference?: boolean
    notes?: boolean
    performedBy?: boolean
    createdAt?: boolean
  }

  export type StockMovementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "productName" | "movementType" | "quantity" | "balanceAfter" | "unitCost" | "reference" | "notes" | "performedBy" | "createdAt", ExtArgs["result"]["stockMovement"]>

  export type $StockMovementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockMovement"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      productName: string
      movementType: string
      quantity: number
      balanceAfter: number
      unitCost: number | null
      reference: string | null
      notes: string | null
      performedBy: string | null
      createdAt: Date
    }, ExtArgs["result"]["stockMovement"]>
    composites: {}
  }

  type StockMovementGetPayload<S extends boolean | null | undefined | StockMovementDefaultArgs> = $Result.GetResult<Prisma.$StockMovementPayload, S>

  type StockMovementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockMovementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockMovementCountAggregateInputType | true
    }

  export interface StockMovementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockMovement'], meta: { name: 'StockMovement' } }
    /**
     * Find zero or one StockMovement that matches the filter.
     * @param {StockMovementFindUniqueArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockMovementFindUniqueArgs>(args: SelectSubset<T, StockMovementFindUniqueArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StockMovement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockMovementFindUniqueOrThrowArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockMovementFindUniqueOrThrowArgs>(args: SelectSubset<T, StockMovementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockMovement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementFindFirstArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockMovementFindFirstArgs>(args?: SelectSubset<T, StockMovementFindFirstArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockMovement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementFindFirstOrThrowArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockMovementFindFirstOrThrowArgs>(args?: SelectSubset<T, StockMovementFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StockMovements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockMovements
     * const stockMovements = await prisma.stockMovement.findMany()
     * 
     * // Get first 10 StockMovements
     * const stockMovements = await prisma.stockMovement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockMovementWithIdOnly = await prisma.stockMovement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockMovementFindManyArgs>(args?: SelectSubset<T, StockMovementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StockMovement.
     * @param {StockMovementCreateArgs} args - Arguments to create a StockMovement.
     * @example
     * // Create one StockMovement
     * const StockMovement = await prisma.stockMovement.create({
     *   data: {
     *     // ... data to create a StockMovement
     *   }
     * })
     * 
     */
    create<T extends StockMovementCreateArgs>(args: SelectSubset<T, StockMovementCreateArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StockMovements.
     * @param {StockMovementCreateManyArgs} args - Arguments to create many StockMovements.
     * @example
     * // Create many StockMovements
     * const stockMovement = await prisma.stockMovement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockMovementCreateManyArgs>(args?: SelectSubset<T, StockMovementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockMovements and returns the data saved in the database.
     * @param {StockMovementCreateManyAndReturnArgs} args - Arguments to create many StockMovements.
     * @example
     * // Create many StockMovements
     * const stockMovement = await prisma.stockMovement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockMovements and only return the `id`
     * const stockMovementWithIdOnly = await prisma.stockMovement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockMovementCreateManyAndReturnArgs>(args?: SelectSubset<T, StockMovementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StockMovement.
     * @param {StockMovementDeleteArgs} args - Arguments to delete one StockMovement.
     * @example
     * // Delete one StockMovement
     * const StockMovement = await prisma.stockMovement.delete({
     *   where: {
     *     // ... filter to delete one StockMovement
     *   }
     * })
     * 
     */
    delete<T extends StockMovementDeleteArgs>(args: SelectSubset<T, StockMovementDeleteArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StockMovement.
     * @param {StockMovementUpdateArgs} args - Arguments to update one StockMovement.
     * @example
     * // Update one StockMovement
     * const stockMovement = await prisma.stockMovement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockMovementUpdateArgs>(args: SelectSubset<T, StockMovementUpdateArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StockMovements.
     * @param {StockMovementDeleteManyArgs} args - Arguments to filter StockMovements to delete.
     * @example
     * // Delete a few StockMovements
     * const { count } = await prisma.stockMovement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockMovementDeleteManyArgs>(args?: SelectSubset<T, StockMovementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockMovements
     * const stockMovement = await prisma.stockMovement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockMovementUpdateManyArgs>(args: SelectSubset<T, StockMovementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockMovements and returns the data updated in the database.
     * @param {StockMovementUpdateManyAndReturnArgs} args - Arguments to update many StockMovements.
     * @example
     * // Update many StockMovements
     * const stockMovement = await prisma.stockMovement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StockMovements and only return the `id`
     * const stockMovementWithIdOnly = await prisma.stockMovement.updateManyAndReturn({
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
    updateManyAndReturn<T extends StockMovementUpdateManyAndReturnArgs>(args: SelectSubset<T, StockMovementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StockMovement.
     * @param {StockMovementUpsertArgs} args - Arguments to update or create a StockMovement.
     * @example
     * // Update or create a StockMovement
     * const stockMovement = await prisma.stockMovement.upsert({
     *   create: {
     *     // ... data to create a StockMovement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockMovement we want to update
     *   }
     * })
     */
    upsert<T extends StockMovementUpsertArgs>(args: SelectSubset<T, StockMovementUpsertArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StockMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementCountArgs} args - Arguments to filter StockMovements to count.
     * @example
     * // Count the number of StockMovements
     * const count = await prisma.stockMovement.count({
     *   where: {
     *     // ... the filter for the StockMovements we want to count
     *   }
     * })
    **/
    count<T extends StockMovementCountArgs>(
      args?: Subset<T, StockMovementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockMovementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockMovementAggregateArgs>(args: Subset<T, StockMovementAggregateArgs>): Prisma.PrismaPromise<GetStockMovementAggregateType<T>>

    /**
     * Group by StockMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementGroupByArgs} args - Group by arguments.
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
      T extends StockMovementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockMovementGroupByArgs['orderBy'] }
        : { orderBy?: StockMovementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StockMovementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockMovementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockMovement model
   */
  readonly fields: StockMovementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockMovement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockMovementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the StockMovement model
   */
  interface StockMovementFieldRefs {
    readonly id: FieldRef<"StockMovement", 'String'>
    readonly productId: FieldRef<"StockMovement", 'String'>
    readonly productName: FieldRef<"StockMovement", 'String'>
    readonly movementType: FieldRef<"StockMovement", 'String'>
    readonly quantity: FieldRef<"StockMovement", 'Float'>
    readonly balanceAfter: FieldRef<"StockMovement", 'Float'>
    readonly unitCost: FieldRef<"StockMovement", 'Float'>
    readonly reference: FieldRef<"StockMovement", 'String'>
    readonly notes: FieldRef<"StockMovement", 'String'>
    readonly performedBy: FieldRef<"StockMovement", 'String'>
    readonly createdAt: FieldRef<"StockMovement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StockMovement findUnique
   */
  export type StockMovementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement findUniqueOrThrow
   */
  export type StockMovementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement findFirst
   */
  export type StockMovementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockMovements.
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockMovements.
     */
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockMovement findFirstOrThrow
   */
  export type StockMovementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockMovements.
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockMovements.
     */
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockMovement findMany
   */
  export type StockMovementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Filter, which StockMovements to fetch.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockMovements.
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockMovements.
     */
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockMovement create
   */
  export type StockMovementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * The data needed to create a StockMovement.
     */
    data: XOR<StockMovementCreateInput, StockMovementUncheckedCreateInput>
  }

  /**
   * StockMovement createMany
   */
  export type StockMovementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockMovements.
     */
    data: StockMovementCreateManyInput | StockMovementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockMovement createManyAndReturn
   */
  export type StockMovementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * The data used to create many StockMovements.
     */
    data: StockMovementCreateManyInput | StockMovementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockMovement update
   */
  export type StockMovementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * The data needed to update a StockMovement.
     */
    data: XOR<StockMovementUpdateInput, StockMovementUncheckedUpdateInput>
    /**
     * Choose, which StockMovement to update.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement updateMany
   */
  export type StockMovementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockMovements.
     */
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyInput>
    /**
     * Filter which StockMovements to update
     */
    where?: StockMovementWhereInput
    /**
     * Limit how many StockMovements to update.
     */
    limit?: number
  }

  /**
   * StockMovement updateManyAndReturn
   */
  export type StockMovementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * The data used to update StockMovements.
     */
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyInput>
    /**
     * Filter which StockMovements to update
     */
    where?: StockMovementWhereInput
    /**
     * Limit how many StockMovements to update.
     */
    limit?: number
  }

  /**
   * StockMovement upsert
   */
  export type StockMovementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * The filter to search for the StockMovement to update in case it exists.
     */
    where: StockMovementWhereUniqueInput
    /**
     * In case the StockMovement found by the `where` argument doesn't exist, create a new StockMovement with this data.
     */
    create: XOR<StockMovementCreateInput, StockMovementUncheckedCreateInput>
    /**
     * In case the StockMovement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockMovementUpdateInput, StockMovementUncheckedUpdateInput>
  }

  /**
   * StockMovement delete
   */
  export type StockMovementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Filter which StockMovement to delete.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement deleteMany
   */
  export type StockMovementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockMovements to delete
     */
    where?: StockMovementWhereInput
    /**
     * Limit how many StockMovements to delete.
     */
    limit?: number
  }

  /**
   * StockMovement without action
   */
  export type StockMovementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
  }


  /**
   * Model ReturnRecord
   */

  export type AggregateReturnRecord = {
    _count: ReturnRecordCountAggregateOutputType | null
    _avg: ReturnRecordAvgAggregateOutputType | null
    _sum: ReturnRecordSumAggregateOutputType | null
    _min: ReturnRecordMinAggregateOutputType | null
    _max: ReturnRecordMaxAggregateOutputType | null
  }

  export type ReturnRecordAvgAggregateOutputType = {
    totalAmount: number | null
  }

  export type ReturnRecordSumAggregateOutputType = {
    totalAmount: number | null
  }

  export type ReturnRecordMinAggregateOutputType = {
    id: string | null
    returnNumber: string | null
    type: string | null
    referenceNumber: string | null
    customerOrSupplier: string | null
    items: string | null
    totalAmount: number | null
    reason: string | null
    recordedBy: string | null
    createdAt: Date | null
  }

  export type ReturnRecordMaxAggregateOutputType = {
    id: string | null
    returnNumber: string | null
    type: string | null
    referenceNumber: string | null
    customerOrSupplier: string | null
    items: string | null
    totalAmount: number | null
    reason: string | null
    recordedBy: string | null
    createdAt: Date | null
  }

  export type ReturnRecordCountAggregateOutputType = {
    id: number
    returnNumber: number
    type: number
    referenceNumber: number
    customerOrSupplier: number
    items: number
    totalAmount: number
    reason: number
    recordedBy: number
    createdAt: number
    _all: number
  }


  export type ReturnRecordAvgAggregateInputType = {
    totalAmount?: true
  }

  export type ReturnRecordSumAggregateInputType = {
    totalAmount?: true
  }

  export type ReturnRecordMinAggregateInputType = {
    id?: true
    returnNumber?: true
    type?: true
    referenceNumber?: true
    customerOrSupplier?: true
    items?: true
    totalAmount?: true
    reason?: true
    recordedBy?: true
    createdAt?: true
  }

  export type ReturnRecordMaxAggregateInputType = {
    id?: true
    returnNumber?: true
    type?: true
    referenceNumber?: true
    customerOrSupplier?: true
    items?: true
    totalAmount?: true
    reason?: true
    recordedBy?: true
    createdAt?: true
  }

  export type ReturnRecordCountAggregateInputType = {
    id?: true
    returnNumber?: true
    type?: true
    referenceNumber?: true
    customerOrSupplier?: true
    items?: true
    totalAmount?: true
    reason?: true
    recordedBy?: true
    createdAt?: true
    _all?: true
  }

  export type ReturnRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReturnRecord to aggregate.
     */
    where?: ReturnRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnRecords to fetch.
     */
    orderBy?: ReturnRecordOrderByWithRelationInput | ReturnRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReturnRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReturnRecords
    **/
    _count?: true | ReturnRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReturnRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReturnRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReturnRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReturnRecordMaxAggregateInputType
  }

  export type GetReturnRecordAggregateType<T extends ReturnRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateReturnRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReturnRecord[P]>
      : GetScalarType<T[P], AggregateReturnRecord[P]>
  }




  export type ReturnRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReturnRecordWhereInput
    orderBy?: ReturnRecordOrderByWithAggregationInput | ReturnRecordOrderByWithAggregationInput[]
    by: ReturnRecordScalarFieldEnum[] | ReturnRecordScalarFieldEnum
    having?: ReturnRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReturnRecordCountAggregateInputType | true
    _avg?: ReturnRecordAvgAggregateInputType
    _sum?: ReturnRecordSumAggregateInputType
    _min?: ReturnRecordMinAggregateInputType
    _max?: ReturnRecordMaxAggregateInputType
  }

  export type ReturnRecordGroupByOutputType = {
    id: string
    returnNumber: string
    type: string
    referenceNumber: string
    customerOrSupplier: string
    items: string
    totalAmount: number
    reason: string | null
    recordedBy: string | null
    createdAt: Date
    _count: ReturnRecordCountAggregateOutputType | null
    _avg: ReturnRecordAvgAggregateOutputType | null
    _sum: ReturnRecordSumAggregateOutputType | null
    _min: ReturnRecordMinAggregateOutputType | null
    _max: ReturnRecordMaxAggregateOutputType | null
  }

  type GetReturnRecordGroupByPayload<T extends ReturnRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReturnRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReturnRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReturnRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ReturnRecordGroupByOutputType[P]>
        }
      >
    >


  export type ReturnRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    returnNumber?: boolean
    type?: boolean
    referenceNumber?: boolean
    customerOrSupplier?: boolean
    items?: boolean
    totalAmount?: boolean
    reason?: boolean
    recordedBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["returnRecord"]>

  export type ReturnRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    returnNumber?: boolean
    type?: boolean
    referenceNumber?: boolean
    customerOrSupplier?: boolean
    items?: boolean
    totalAmount?: boolean
    reason?: boolean
    recordedBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["returnRecord"]>

  export type ReturnRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    returnNumber?: boolean
    type?: boolean
    referenceNumber?: boolean
    customerOrSupplier?: boolean
    items?: boolean
    totalAmount?: boolean
    reason?: boolean
    recordedBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["returnRecord"]>

  export type ReturnRecordSelectScalar = {
    id?: boolean
    returnNumber?: boolean
    type?: boolean
    referenceNumber?: boolean
    customerOrSupplier?: boolean
    items?: boolean
    totalAmount?: boolean
    reason?: boolean
    recordedBy?: boolean
    createdAt?: boolean
  }

  export type ReturnRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "returnNumber" | "type" | "referenceNumber" | "customerOrSupplier" | "items" | "totalAmount" | "reason" | "recordedBy" | "createdAt", ExtArgs["result"]["returnRecord"]>

  export type $ReturnRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReturnRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      returnNumber: string
      type: string
      referenceNumber: string
      customerOrSupplier: string
      items: string
      totalAmount: number
      reason: string | null
      recordedBy: string | null
      createdAt: Date
    }, ExtArgs["result"]["returnRecord"]>
    composites: {}
  }

  type ReturnRecordGetPayload<S extends boolean | null | undefined | ReturnRecordDefaultArgs> = $Result.GetResult<Prisma.$ReturnRecordPayload, S>

  type ReturnRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReturnRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReturnRecordCountAggregateInputType | true
    }

  export interface ReturnRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReturnRecord'], meta: { name: 'ReturnRecord' } }
    /**
     * Find zero or one ReturnRecord that matches the filter.
     * @param {ReturnRecordFindUniqueArgs} args - Arguments to find a ReturnRecord
     * @example
     * // Get one ReturnRecord
     * const returnRecord = await prisma.returnRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReturnRecordFindUniqueArgs>(args: SelectSubset<T, ReturnRecordFindUniqueArgs<ExtArgs>>): Prisma__ReturnRecordClient<$Result.GetResult<Prisma.$ReturnRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReturnRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReturnRecordFindUniqueOrThrowArgs} args - Arguments to find a ReturnRecord
     * @example
     * // Get one ReturnRecord
     * const returnRecord = await prisma.returnRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReturnRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, ReturnRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReturnRecordClient<$Result.GetResult<Prisma.$ReturnRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReturnRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnRecordFindFirstArgs} args - Arguments to find a ReturnRecord
     * @example
     * // Get one ReturnRecord
     * const returnRecord = await prisma.returnRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReturnRecordFindFirstArgs>(args?: SelectSubset<T, ReturnRecordFindFirstArgs<ExtArgs>>): Prisma__ReturnRecordClient<$Result.GetResult<Prisma.$ReturnRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReturnRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnRecordFindFirstOrThrowArgs} args - Arguments to find a ReturnRecord
     * @example
     * // Get one ReturnRecord
     * const returnRecord = await prisma.returnRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReturnRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, ReturnRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReturnRecordClient<$Result.GetResult<Prisma.$ReturnRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReturnRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReturnRecords
     * const returnRecords = await prisma.returnRecord.findMany()
     * 
     * // Get first 10 ReturnRecords
     * const returnRecords = await prisma.returnRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const returnRecordWithIdOnly = await prisma.returnRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReturnRecordFindManyArgs>(args?: SelectSubset<T, ReturnRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReturnRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReturnRecord.
     * @param {ReturnRecordCreateArgs} args - Arguments to create a ReturnRecord.
     * @example
     * // Create one ReturnRecord
     * const ReturnRecord = await prisma.returnRecord.create({
     *   data: {
     *     // ... data to create a ReturnRecord
     *   }
     * })
     * 
     */
    create<T extends ReturnRecordCreateArgs>(args: SelectSubset<T, ReturnRecordCreateArgs<ExtArgs>>): Prisma__ReturnRecordClient<$Result.GetResult<Prisma.$ReturnRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReturnRecords.
     * @param {ReturnRecordCreateManyArgs} args - Arguments to create many ReturnRecords.
     * @example
     * // Create many ReturnRecords
     * const returnRecord = await prisma.returnRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReturnRecordCreateManyArgs>(args?: SelectSubset<T, ReturnRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReturnRecords and returns the data saved in the database.
     * @param {ReturnRecordCreateManyAndReturnArgs} args - Arguments to create many ReturnRecords.
     * @example
     * // Create many ReturnRecords
     * const returnRecord = await prisma.returnRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReturnRecords and only return the `id`
     * const returnRecordWithIdOnly = await prisma.returnRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReturnRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, ReturnRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReturnRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReturnRecord.
     * @param {ReturnRecordDeleteArgs} args - Arguments to delete one ReturnRecord.
     * @example
     * // Delete one ReturnRecord
     * const ReturnRecord = await prisma.returnRecord.delete({
     *   where: {
     *     // ... filter to delete one ReturnRecord
     *   }
     * })
     * 
     */
    delete<T extends ReturnRecordDeleteArgs>(args: SelectSubset<T, ReturnRecordDeleteArgs<ExtArgs>>): Prisma__ReturnRecordClient<$Result.GetResult<Prisma.$ReturnRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReturnRecord.
     * @param {ReturnRecordUpdateArgs} args - Arguments to update one ReturnRecord.
     * @example
     * // Update one ReturnRecord
     * const returnRecord = await prisma.returnRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReturnRecordUpdateArgs>(args: SelectSubset<T, ReturnRecordUpdateArgs<ExtArgs>>): Prisma__ReturnRecordClient<$Result.GetResult<Prisma.$ReturnRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReturnRecords.
     * @param {ReturnRecordDeleteManyArgs} args - Arguments to filter ReturnRecords to delete.
     * @example
     * // Delete a few ReturnRecords
     * const { count } = await prisma.returnRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReturnRecordDeleteManyArgs>(args?: SelectSubset<T, ReturnRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReturnRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReturnRecords
     * const returnRecord = await prisma.returnRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReturnRecordUpdateManyArgs>(args: SelectSubset<T, ReturnRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReturnRecords and returns the data updated in the database.
     * @param {ReturnRecordUpdateManyAndReturnArgs} args - Arguments to update many ReturnRecords.
     * @example
     * // Update many ReturnRecords
     * const returnRecord = await prisma.returnRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReturnRecords and only return the `id`
     * const returnRecordWithIdOnly = await prisma.returnRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReturnRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, ReturnRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReturnRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReturnRecord.
     * @param {ReturnRecordUpsertArgs} args - Arguments to update or create a ReturnRecord.
     * @example
     * // Update or create a ReturnRecord
     * const returnRecord = await prisma.returnRecord.upsert({
     *   create: {
     *     // ... data to create a ReturnRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReturnRecord we want to update
     *   }
     * })
     */
    upsert<T extends ReturnRecordUpsertArgs>(args: SelectSubset<T, ReturnRecordUpsertArgs<ExtArgs>>): Prisma__ReturnRecordClient<$Result.GetResult<Prisma.$ReturnRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReturnRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnRecordCountArgs} args - Arguments to filter ReturnRecords to count.
     * @example
     * // Count the number of ReturnRecords
     * const count = await prisma.returnRecord.count({
     *   where: {
     *     // ... the filter for the ReturnRecords we want to count
     *   }
     * })
    **/
    count<T extends ReturnRecordCountArgs>(
      args?: Subset<T, ReturnRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReturnRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReturnRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReturnRecordAggregateArgs>(args: Subset<T, ReturnRecordAggregateArgs>): Prisma.PrismaPromise<GetReturnRecordAggregateType<T>>

    /**
     * Group by ReturnRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnRecordGroupByArgs} args - Group by arguments.
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
      T extends ReturnRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReturnRecordGroupByArgs['orderBy'] }
        : { orderBy?: ReturnRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReturnRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReturnRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReturnRecord model
   */
  readonly fields: ReturnRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReturnRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReturnRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ReturnRecord model
   */
  interface ReturnRecordFieldRefs {
    readonly id: FieldRef<"ReturnRecord", 'String'>
    readonly returnNumber: FieldRef<"ReturnRecord", 'String'>
    readonly type: FieldRef<"ReturnRecord", 'String'>
    readonly referenceNumber: FieldRef<"ReturnRecord", 'String'>
    readonly customerOrSupplier: FieldRef<"ReturnRecord", 'String'>
    readonly items: FieldRef<"ReturnRecord", 'String'>
    readonly totalAmount: FieldRef<"ReturnRecord", 'Float'>
    readonly reason: FieldRef<"ReturnRecord", 'String'>
    readonly recordedBy: FieldRef<"ReturnRecord", 'String'>
    readonly createdAt: FieldRef<"ReturnRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReturnRecord findUnique
   */
  export type ReturnRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnRecord
     */
    select?: ReturnRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnRecord
     */
    omit?: ReturnRecordOmit<ExtArgs> | null
    /**
     * Filter, which ReturnRecord to fetch.
     */
    where: ReturnRecordWhereUniqueInput
  }

  /**
   * ReturnRecord findUniqueOrThrow
   */
  export type ReturnRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnRecord
     */
    select?: ReturnRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnRecord
     */
    omit?: ReturnRecordOmit<ExtArgs> | null
    /**
     * Filter, which ReturnRecord to fetch.
     */
    where: ReturnRecordWhereUniqueInput
  }

  /**
   * ReturnRecord findFirst
   */
  export type ReturnRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnRecord
     */
    select?: ReturnRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnRecord
     */
    omit?: ReturnRecordOmit<ExtArgs> | null
    /**
     * Filter, which ReturnRecord to fetch.
     */
    where?: ReturnRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnRecords to fetch.
     */
    orderBy?: ReturnRecordOrderByWithRelationInput | ReturnRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReturnRecords.
     */
    cursor?: ReturnRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReturnRecords.
     */
    distinct?: ReturnRecordScalarFieldEnum | ReturnRecordScalarFieldEnum[]
  }

  /**
   * ReturnRecord findFirstOrThrow
   */
  export type ReturnRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnRecord
     */
    select?: ReturnRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnRecord
     */
    omit?: ReturnRecordOmit<ExtArgs> | null
    /**
     * Filter, which ReturnRecord to fetch.
     */
    where?: ReturnRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnRecords to fetch.
     */
    orderBy?: ReturnRecordOrderByWithRelationInput | ReturnRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReturnRecords.
     */
    cursor?: ReturnRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReturnRecords.
     */
    distinct?: ReturnRecordScalarFieldEnum | ReturnRecordScalarFieldEnum[]
  }

  /**
   * ReturnRecord findMany
   */
  export type ReturnRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnRecord
     */
    select?: ReturnRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnRecord
     */
    omit?: ReturnRecordOmit<ExtArgs> | null
    /**
     * Filter, which ReturnRecords to fetch.
     */
    where?: ReturnRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnRecords to fetch.
     */
    orderBy?: ReturnRecordOrderByWithRelationInput | ReturnRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReturnRecords.
     */
    cursor?: ReturnRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReturnRecords.
     */
    distinct?: ReturnRecordScalarFieldEnum | ReturnRecordScalarFieldEnum[]
  }

  /**
   * ReturnRecord create
   */
  export type ReturnRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnRecord
     */
    select?: ReturnRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnRecord
     */
    omit?: ReturnRecordOmit<ExtArgs> | null
    /**
     * The data needed to create a ReturnRecord.
     */
    data: XOR<ReturnRecordCreateInput, ReturnRecordUncheckedCreateInput>
  }

  /**
   * ReturnRecord createMany
   */
  export type ReturnRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReturnRecords.
     */
    data: ReturnRecordCreateManyInput | ReturnRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReturnRecord createManyAndReturn
   */
  export type ReturnRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnRecord
     */
    select?: ReturnRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnRecord
     */
    omit?: ReturnRecordOmit<ExtArgs> | null
    /**
     * The data used to create many ReturnRecords.
     */
    data: ReturnRecordCreateManyInput | ReturnRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReturnRecord update
   */
  export type ReturnRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnRecord
     */
    select?: ReturnRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnRecord
     */
    omit?: ReturnRecordOmit<ExtArgs> | null
    /**
     * The data needed to update a ReturnRecord.
     */
    data: XOR<ReturnRecordUpdateInput, ReturnRecordUncheckedUpdateInput>
    /**
     * Choose, which ReturnRecord to update.
     */
    where: ReturnRecordWhereUniqueInput
  }

  /**
   * ReturnRecord updateMany
   */
  export type ReturnRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReturnRecords.
     */
    data: XOR<ReturnRecordUpdateManyMutationInput, ReturnRecordUncheckedUpdateManyInput>
    /**
     * Filter which ReturnRecords to update
     */
    where?: ReturnRecordWhereInput
    /**
     * Limit how many ReturnRecords to update.
     */
    limit?: number
  }

  /**
   * ReturnRecord updateManyAndReturn
   */
  export type ReturnRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnRecord
     */
    select?: ReturnRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnRecord
     */
    omit?: ReturnRecordOmit<ExtArgs> | null
    /**
     * The data used to update ReturnRecords.
     */
    data: XOR<ReturnRecordUpdateManyMutationInput, ReturnRecordUncheckedUpdateManyInput>
    /**
     * Filter which ReturnRecords to update
     */
    where?: ReturnRecordWhereInput
    /**
     * Limit how many ReturnRecords to update.
     */
    limit?: number
  }

  /**
   * ReturnRecord upsert
   */
  export type ReturnRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnRecord
     */
    select?: ReturnRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnRecord
     */
    omit?: ReturnRecordOmit<ExtArgs> | null
    /**
     * The filter to search for the ReturnRecord to update in case it exists.
     */
    where: ReturnRecordWhereUniqueInput
    /**
     * In case the ReturnRecord found by the `where` argument doesn't exist, create a new ReturnRecord with this data.
     */
    create: XOR<ReturnRecordCreateInput, ReturnRecordUncheckedCreateInput>
    /**
     * In case the ReturnRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReturnRecordUpdateInput, ReturnRecordUncheckedUpdateInput>
  }

  /**
   * ReturnRecord delete
   */
  export type ReturnRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnRecord
     */
    select?: ReturnRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnRecord
     */
    omit?: ReturnRecordOmit<ExtArgs> | null
    /**
     * Filter which ReturnRecord to delete.
     */
    where: ReturnRecordWhereUniqueInput
  }

  /**
   * ReturnRecord deleteMany
   */
  export type ReturnRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReturnRecords to delete
     */
    where?: ReturnRecordWhereInput
    /**
     * Limit how many ReturnRecords to delete.
     */
    limit?: number
  }

  /**
   * ReturnRecord without action
   */
  export type ReturnRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnRecord
     */
    select?: ReturnRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReturnRecord
     */
    omit?: ReturnRecordOmit<ExtArgs> | null
  }


  /**
   * Model TreasuryTransaction
   */

  export type AggregateTreasuryTransaction = {
    _count: TreasuryTransactionCountAggregateOutputType | null
    _avg: TreasuryTransactionAvgAggregateOutputType | null
    _sum: TreasuryTransactionSumAggregateOutputType | null
    _min: TreasuryTransactionMinAggregateOutputType | null
    _max: TreasuryTransactionMaxAggregateOutputType | null
  }

  export type TreasuryTransactionAvgAggregateOutputType = {
    amount: number | null
    balanceAfter: number | null
  }

  export type TreasuryTransactionSumAggregateOutputType = {
    amount: number | null
    balanceAfter: number | null
  }

  export type TreasuryTransactionMinAggregateOutputType = {
    id: string | null
    type: string | null
    category: string | null
    amount: number | null
    balanceAfter: number | null
    description: string | null
    reference: string | null
    recordedBy: string | null
    createdAt: Date | null
  }

  export type TreasuryTransactionMaxAggregateOutputType = {
    id: string | null
    type: string | null
    category: string | null
    amount: number | null
    balanceAfter: number | null
    description: string | null
    reference: string | null
    recordedBy: string | null
    createdAt: Date | null
  }

  export type TreasuryTransactionCountAggregateOutputType = {
    id: number
    type: number
    category: number
    amount: number
    balanceAfter: number
    description: number
    reference: number
    recordedBy: number
    createdAt: number
    _all: number
  }


  export type TreasuryTransactionAvgAggregateInputType = {
    amount?: true
    balanceAfter?: true
  }

  export type TreasuryTransactionSumAggregateInputType = {
    amount?: true
    balanceAfter?: true
  }

  export type TreasuryTransactionMinAggregateInputType = {
    id?: true
    type?: true
    category?: true
    amount?: true
    balanceAfter?: true
    description?: true
    reference?: true
    recordedBy?: true
    createdAt?: true
  }

  export type TreasuryTransactionMaxAggregateInputType = {
    id?: true
    type?: true
    category?: true
    amount?: true
    balanceAfter?: true
    description?: true
    reference?: true
    recordedBy?: true
    createdAt?: true
  }

  export type TreasuryTransactionCountAggregateInputType = {
    id?: true
    type?: true
    category?: true
    amount?: true
    balanceAfter?: true
    description?: true
    reference?: true
    recordedBy?: true
    createdAt?: true
    _all?: true
  }

  export type TreasuryTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreasuryTransaction to aggregate.
     */
    where?: TreasuryTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreasuryTransactions to fetch.
     */
    orderBy?: TreasuryTransactionOrderByWithRelationInput | TreasuryTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TreasuryTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreasuryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreasuryTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TreasuryTransactions
    **/
    _count?: true | TreasuryTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TreasuryTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TreasuryTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreasuryTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreasuryTransactionMaxAggregateInputType
  }

  export type GetTreasuryTransactionAggregateType<T extends TreasuryTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTreasuryTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTreasuryTransaction[P]>
      : GetScalarType<T[P], AggregateTreasuryTransaction[P]>
  }




  export type TreasuryTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreasuryTransactionWhereInput
    orderBy?: TreasuryTransactionOrderByWithAggregationInput | TreasuryTransactionOrderByWithAggregationInput[]
    by: TreasuryTransactionScalarFieldEnum[] | TreasuryTransactionScalarFieldEnum
    having?: TreasuryTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreasuryTransactionCountAggregateInputType | true
    _avg?: TreasuryTransactionAvgAggregateInputType
    _sum?: TreasuryTransactionSumAggregateInputType
    _min?: TreasuryTransactionMinAggregateInputType
    _max?: TreasuryTransactionMaxAggregateInputType
  }

  export type TreasuryTransactionGroupByOutputType = {
    id: string
    type: string
    category: string
    amount: number
    balanceAfter: number
    description: string
    reference: string | null
    recordedBy: string | null
    createdAt: Date
    _count: TreasuryTransactionCountAggregateOutputType | null
    _avg: TreasuryTransactionAvgAggregateOutputType | null
    _sum: TreasuryTransactionSumAggregateOutputType | null
    _min: TreasuryTransactionMinAggregateOutputType | null
    _max: TreasuryTransactionMaxAggregateOutputType | null
  }

  type GetTreasuryTransactionGroupByPayload<T extends TreasuryTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreasuryTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreasuryTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreasuryTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TreasuryTransactionGroupByOutputType[P]>
        }
      >
    >


  export type TreasuryTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    category?: boolean
    amount?: boolean
    balanceAfter?: boolean
    description?: boolean
    reference?: boolean
    recordedBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["treasuryTransaction"]>

  export type TreasuryTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    category?: boolean
    amount?: boolean
    balanceAfter?: boolean
    description?: boolean
    reference?: boolean
    recordedBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["treasuryTransaction"]>

  export type TreasuryTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    category?: boolean
    amount?: boolean
    balanceAfter?: boolean
    description?: boolean
    reference?: boolean
    recordedBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["treasuryTransaction"]>

  export type TreasuryTransactionSelectScalar = {
    id?: boolean
    type?: boolean
    category?: boolean
    amount?: boolean
    balanceAfter?: boolean
    description?: boolean
    reference?: boolean
    recordedBy?: boolean
    createdAt?: boolean
  }

  export type TreasuryTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "category" | "amount" | "balanceAfter" | "description" | "reference" | "recordedBy" | "createdAt", ExtArgs["result"]["treasuryTransaction"]>

  export type $TreasuryTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TreasuryTransaction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      category: string
      amount: number
      balanceAfter: number
      description: string
      reference: string | null
      recordedBy: string | null
      createdAt: Date
    }, ExtArgs["result"]["treasuryTransaction"]>
    composites: {}
  }

  type TreasuryTransactionGetPayload<S extends boolean | null | undefined | TreasuryTransactionDefaultArgs> = $Result.GetResult<Prisma.$TreasuryTransactionPayload, S>

  type TreasuryTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TreasuryTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TreasuryTransactionCountAggregateInputType | true
    }

  export interface TreasuryTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TreasuryTransaction'], meta: { name: 'TreasuryTransaction' } }
    /**
     * Find zero or one TreasuryTransaction that matches the filter.
     * @param {TreasuryTransactionFindUniqueArgs} args - Arguments to find a TreasuryTransaction
     * @example
     * // Get one TreasuryTransaction
     * const treasuryTransaction = await prisma.treasuryTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TreasuryTransactionFindUniqueArgs>(args: SelectSubset<T, TreasuryTransactionFindUniqueArgs<ExtArgs>>): Prisma__TreasuryTransactionClient<$Result.GetResult<Prisma.$TreasuryTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TreasuryTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TreasuryTransactionFindUniqueOrThrowArgs} args - Arguments to find a TreasuryTransaction
     * @example
     * // Get one TreasuryTransaction
     * const treasuryTransaction = await prisma.treasuryTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TreasuryTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TreasuryTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TreasuryTransactionClient<$Result.GetResult<Prisma.$TreasuryTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TreasuryTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryTransactionFindFirstArgs} args - Arguments to find a TreasuryTransaction
     * @example
     * // Get one TreasuryTransaction
     * const treasuryTransaction = await prisma.treasuryTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TreasuryTransactionFindFirstArgs>(args?: SelectSubset<T, TreasuryTransactionFindFirstArgs<ExtArgs>>): Prisma__TreasuryTransactionClient<$Result.GetResult<Prisma.$TreasuryTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TreasuryTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryTransactionFindFirstOrThrowArgs} args - Arguments to find a TreasuryTransaction
     * @example
     * // Get one TreasuryTransaction
     * const treasuryTransaction = await prisma.treasuryTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TreasuryTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TreasuryTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TreasuryTransactionClient<$Result.GetResult<Prisma.$TreasuryTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TreasuryTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TreasuryTransactions
     * const treasuryTransactions = await prisma.treasuryTransaction.findMany()
     * 
     * // Get first 10 TreasuryTransactions
     * const treasuryTransactions = await prisma.treasuryTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const treasuryTransactionWithIdOnly = await prisma.treasuryTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TreasuryTransactionFindManyArgs>(args?: SelectSubset<T, TreasuryTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreasuryTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TreasuryTransaction.
     * @param {TreasuryTransactionCreateArgs} args - Arguments to create a TreasuryTransaction.
     * @example
     * // Create one TreasuryTransaction
     * const TreasuryTransaction = await prisma.treasuryTransaction.create({
     *   data: {
     *     // ... data to create a TreasuryTransaction
     *   }
     * })
     * 
     */
    create<T extends TreasuryTransactionCreateArgs>(args: SelectSubset<T, TreasuryTransactionCreateArgs<ExtArgs>>): Prisma__TreasuryTransactionClient<$Result.GetResult<Prisma.$TreasuryTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TreasuryTransactions.
     * @param {TreasuryTransactionCreateManyArgs} args - Arguments to create many TreasuryTransactions.
     * @example
     * // Create many TreasuryTransactions
     * const treasuryTransaction = await prisma.treasuryTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TreasuryTransactionCreateManyArgs>(args?: SelectSubset<T, TreasuryTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TreasuryTransactions and returns the data saved in the database.
     * @param {TreasuryTransactionCreateManyAndReturnArgs} args - Arguments to create many TreasuryTransactions.
     * @example
     * // Create many TreasuryTransactions
     * const treasuryTransaction = await prisma.treasuryTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TreasuryTransactions and only return the `id`
     * const treasuryTransactionWithIdOnly = await prisma.treasuryTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TreasuryTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TreasuryTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreasuryTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TreasuryTransaction.
     * @param {TreasuryTransactionDeleteArgs} args - Arguments to delete one TreasuryTransaction.
     * @example
     * // Delete one TreasuryTransaction
     * const TreasuryTransaction = await prisma.treasuryTransaction.delete({
     *   where: {
     *     // ... filter to delete one TreasuryTransaction
     *   }
     * })
     * 
     */
    delete<T extends TreasuryTransactionDeleteArgs>(args: SelectSubset<T, TreasuryTransactionDeleteArgs<ExtArgs>>): Prisma__TreasuryTransactionClient<$Result.GetResult<Prisma.$TreasuryTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TreasuryTransaction.
     * @param {TreasuryTransactionUpdateArgs} args - Arguments to update one TreasuryTransaction.
     * @example
     * // Update one TreasuryTransaction
     * const treasuryTransaction = await prisma.treasuryTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TreasuryTransactionUpdateArgs>(args: SelectSubset<T, TreasuryTransactionUpdateArgs<ExtArgs>>): Prisma__TreasuryTransactionClient<$Result.GetResult<Prisma.$TreasuryTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TreasuryTransactions.
     * @param {TreasuryTransactionDeleteManyArgs} args - Arguments to filter TreasuryTransactions to delete.
     * @example
     * // Delete a few TreasuryTransactions
     * const { count } = await prisma.treasuryTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TreasuryTransactionDeleteManyArgs>(args?: SelectSubset<T, TreasuryTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TreasuryTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TreasuryTransactions
     * const treasuryTransaction = await prisma.treasuryTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TreasuryTransactionUpdateManyArgs>(args: SelectSubset<T, TreasuryTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TreasuryTransactions and returns the data updated in the database.
     * @param {TreasuryTransactionUpdateManyAndReturnArgs} args - Arguments to update many TreasuryTransactions.
     * @example
     * // Update many TreasuryTransactions
     * const treasuryTransaction = await prisma.treasuryTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TreasuryTransactions and only return the `id`
     * const treasuryTransactionWithIdOnly = await prisma.treasuryTransaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TreasuryTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TreasuryTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreasuryTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TreasuryTransaction.
     * @param {TreasuryTransactionUpsertArgs} args - Arguments to update or create a TreasuryTransaction.
     * @example
     * // Update or create a TreasuryTransaction
     * const treasuryTransaction = await prisma.treasuryTransaction.upsert({
     *   create: {
     *     // ... data to create a TreasuryTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TreasuryTransaction we want to update
     *   }
     * })
     */
    upsert<T extends TreasuryTransactionUpsertArgs>(args: SelectSubset<T, TreasuryTransactionUpsertArgs<ExtArgs>>): Prisma__TreasuryTransactionClient<$Result.GetResult<Prisma.$TreasuryTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TreasuryTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryTransactionCountArgs} args - Arguments to filter TreasuryTransactions to count.
     * @example
     * // Count the number of TreasuryTransactions
     * const count = await prisma.treasuryTransaction.count({
     *   where: {
     *     // ... the filter for the TreasuryTransactions we want to count
     *   }
     * })
    **/
    count<T extends TreasuryTransactionCountArgs>(
      args?: Subset<T, TreasuryTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreasuryTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TreasuryTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TreasuryTransactionAggregateArgs>(args: Subset<T, TreasuryTransactionAggregateArgs>): Prisma.PrismaPromise<GetTreasuryTransactionAggregateType<T>>

    /**
     * Group by TreasuryTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryTransactionGroupByArgs} args - Group by arguments.
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
      T extends TreasuryTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TreasuryTransactionGroupByArgs['orderBy'] }
        : { orderBy?: TreasuryTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TreasuryTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreasuryTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TreasuryTransaction model
   */
  readonly fields: TreasuryTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TreasuryTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TreasuryTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TreasuryTransaction model
   */
  interface TreasuryTransactionFieldRefs {
    readonly id: FieldRef<"TreasuryTransaction", 'String'>
    readonly type: FieldRef<"TreasuryTransaction", 'String'>
    readonly category: FieldRef<"TreasuryTransaction", 'String'>
    readonly amount: FieldRef<"TreasuryTransaction", 'Float'>
    readonly balanceAfter: FieldRef<"TreasuryTransaction", 'Float'>
    readonly description: FieldRef<"TreasuryTransaction", 'String'>
    readonly reference: FieldRef<"TreasuryTransaction", 'String'>
    readonly recordedBy: FieldRef<"TreasuryTransaction", 'String'>
    readonly createdAt: FieldRef<"TreasuryTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TreasuryTransaction findUnique
   */
  export type TreasuryTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryTransaction
     */
    select?: TreasuryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryTransaction
     */
    omit?: TreasuryTransactionOmit<ExtArgs> | null
    /**
     * Filter, which TreasuryTransaction to fetch.
     */
    where: TreasuryTransactionWhereUniqueInput
  }

  /**
   * TreasuryTransaction findUniqueOrThrow
   */
  export type TreasuryTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryTransaction
     */
    select?: TreasuryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryTransaction
     */
    omit?: TreasuryTransactionOmit<ExtArgs> | null
    /**
     * Filter, which TreasuryTransaction to fetch.
     */
    where: TreasuryTransactionWhereUniqueInput
  }

  /**
   * TreasuryTransaction findFirst
   */
  export type TreasuryTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryTransaction
     */
    select?: TreasuryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryTransaction
     */
    omit?: TreasuryTransactionOmit<ExtArgs> | null
    /**
     * Filter, which TreasuryTransaction to fetch.
     */
    where?: TreasuryTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreasuryTransactions to fetch.
     */
    orderBy?: TreasuryTransactionOrderByWithRelationInput | TreasuryTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreasuryTransactions.
     */
    cursor?: TreasuryTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreasuryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreasuryTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreasuryTransactions.
     */
    distinct?: TreasuryTransactionScalarFieldEnum | TreasuryTransactionScalarFieldEnum[]
  }

  /**
   * TreasuryTransaction findFirstOrThrow
   */
  export type TreasuryTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryTransaction
     */
    select?: TreasuryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryTransaction
     */
    omit?: TreasuryTransactionOmit<ExtArgs> | null
    /**
     * Filter, which TreasuryTransaction to fetch.
     */
    where?: TreasuryTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreasuryTransactions to fetch.
     */
    orderBy?: TreasuryTransactionOrderByWithRelationInput | TreasuryTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreasuryTransactions.
     */
    cursor?: TreasuryTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreasuryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreasuryTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreasuryTransactions.
     */
    distinct?: TreasuryTransactionScalarFieldEnum | TreasuryTransactionScalarFieldEnum[]
  }

  /**
   * TreasuryTransaction findMany
   */
  export type TreasuryTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryTransaction
     */
    select?: TreasuryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryTransaction
     */
    omit?: TreasuryTransactionOmit<ExtArgs> | null
    /**
     * Filter, which TreasuryTransactions to fetch.
     */
    where?: TreasuryTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreasuryTransactions to fetch.
     */
    orderBy?: TreasuryTransactionOrderByWithRelationInput | TreasuryTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TreasuryTransactions.
     */
    cursor?: TreasuryTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreasuryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreasuryTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreasuryTransactions.
     */
    distinct?: TreasuryTransactionScalarFieldEnum | TreasuryTransactionScalarFieldEnum[]
  }

  /**
   * TreasuryTransaction create
   */
  export type TreasuryTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryTransaction
     */
    select?: TreasuryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryTransaction
     */
    omit?: TreasuryTransactionOmit<ExtArgs> | null
    /**
     * The data needed to create a TreasuryTransaction.
     */
    data: XOR<TreasuryTransactionCreateInput, TreasuryTransactionUncheckedCreateInput>
  }

  /**
   * TreasuryTransaction createMany
   */
  export type TreasuryTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TreasuryTransactions.
     */
    data: TreasuryTransactionCreateManyInput | TreasuryTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TreasuryTransaction createManyAndReturn
   */
  export type TreasuryTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryTransaction
     */
    select?: TreasuryTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryTransaction
     */
    omit?: TreasuryTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many TreasuryTransactions.
     */
    data: TreasuryTransactionCreateManyInput | TreasuryTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TreasuryTransaction update
   */
  export type TreasuryTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryTransaction
     */
    select?: TreasuryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryTransaction
     */
    omit?: TreasuryTransactionOmit<ExtArgs> | null
    /**
     * The data needed to update a TreasuryTransaction.
     */
    data: XOR<TreasuryTransactionUpdateInput, TreasuryTransactionUncheckedUpdateInput>
    /**
     * Choose, which TreasuryTransaction to update.
     */
    where: TreasuryTransactionWhereUniqueInput
  }

  /**
   * TreasuryTransaction updateMany
   */
  export type TreasuryTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TreasuryTransactions.
     */
    data: XOR<TreasuryTransactionUpdateManyMutationInput, TreasuryTransactionUncheckedUpdateManyInput>
    /**
     * Filter which TreasuryTransactions to update
     */
    where?: TreasuryTransactionWhereInput
    /**
     * Limit how many TreasuryTransactions to update.
     */
    limit?: number
  }

  /**
   * TreasuryTransaction updateManyAndReturn
   */
  export type TreasuryTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryTransaction
     */
    select?: TreasuryTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryTransaction
     */
    omit?: TreasuryTransactionOmit<ExtArgs> | null
    /**
     * The data used to update TreasuryTransactions.
     */
    data: XOR<TreasuryTransactionUpdateManyMutationInput, TreasuryTransactionUncheckedUpdateManyInput>
    /**
     * Filter which TreasuryTransactions to update
     */
    where?: TreasuryTransactionWhereInput
    /**
     * Limit how many TreasuryTransactions to update.
     */
    limit?: number
  }

  /**
   * TreasuryTransaction upsert
   */
  export type TreasuryTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryTransaction
     */
    select?: TreasuryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryTransaction
     */
    omit?: TreasuryTransactionOmit<ExtArgs> | null
    /**
     * The filter to search for the TreasuryTransaction to update in case it exists.
     */
    where: TreasuryTransactionWhereUniqueInput
    /**
     * In case the TreasuryTransaction found by the `where` argument doesn't exist, create a new TreasuryTransaction with this data.
     */
    create: XOR<TreasuryTransactionCreateInput, TreasuryTransactionUncheckedCreateInput>
    /**
     * In case the TreasuryTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TreasuryTransactionUpdateInput, TreasuryTransactionUncheckedUpdateInput>
  }

  /**
   * TreasuryTransaction delete
   */
  export type TreasuryTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryTransaction
     */
    select?: TreasuryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryTransaction
     */
    omit?: TreasuryTransactionOmit<ExtArgs> | null
    /**
     * Filter which TreasuryTransaction to delete.
     */
    where: TreasuryTransactionWhereUniqueInput
  }

  /**
   * TreasuryTransaction deleteMany
   */
  export type TreasuryTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreasuryTransactions to delete
     */
    where?: TreasuryTransactionWhereInput
    /**
     * Limit how many TreasuryTransactions to delete.
     */
    limit?: number
  }

  /**
   * TreasuryTransaction without action
   */
  export type TreasuryTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryTransaction
     */
    select?: TreasuryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreasuryTransaction
     */
    omit?: TreasuryTransactionOmit<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    senderId: string | null
    senderName: string | null
    senderRole: string | null
    text: string | null
    orderNumber: string | null
    customerPhone: string | null
    isStaff: boolean | null
    createdAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    senderId: string | null
    senderName: string | null
    senderRole: string | null
    text: string | null
    orderNumber: string | null
    customerPhone: string | null
    isStaff: boolean | null
    createdAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    senderId: number
    senderName: number
    senderRole: number
    text: number
    orderNumber: number
    customerPhone: number
    isStaff: number
    createdAt: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    senderId?: true
    senderName?: true
    senderRole?: true
    text?: true
    orderNumber?: true
    customerPhone?: true
    isStaff?: true
    createdAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    senderId?: true
    senderName?: true
    senderRole?: true
    text?: true
    orderNumber?: true
    customerPhone?: true
    isStaff?: true
    createdAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    senderId?: true
    senderName?: true
    senderRole?: true
    text?: true
    orderNumber?: true
    customerPhone?: true
    isStaff?: true
    createdAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    senderId: string | null
    senderName: string
    senderRole: string | null
    text: string
    orderNumber: string | null
    customerPhone: string | null
    isStaff: boolean
    createdAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    senderName?: boolean
    senderRole?: boolean
    text?: boolean
    orderNumber?: boolean
    customerPhone?: boolean
    isStaff?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    senderName?: boolean
    senderRole?: boolean
    text?: boolean
    orderNumber?: boolean
    customerPhone?: boolean
    isStaff?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    senderName?: boolean
    senderRole?: boolean
    text?: boolean
    orderNumber?: boolean
    customerPhone?: boolean
    isStaff?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    senderId?: boolean
    senderName?: boolean
    senderRole?: boolean
    text?: boolean
    orderNumber?: boolean
    customerPhone?: boolean
    isStaff?: boolean
    createdAt?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "senderName" | "senderRole" | "text" | "orderNumber" | "customerPhone" | "isStaff" | "createdAt", ExtArgs["result"]["chatMessage"]>

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderId: string | null
      senderName: string
      senderRole: string | null
      text: string
      orderNumber: string | null
      customerPhone: string | null
      isStaff: boolean
      createdAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
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
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly senderId: FieldRef<"ChatMessage", 'String'>
    readonly senderName: FieldRef<"ChatMessage", 'String'>
    readonly senderRole: FieldRef<"ChatMessage", 'String'>
    readonly text: FieldRef<"ChatMessage", 'String'>
    readonly orderNumber: FieldRef<"ChatMessage", 'String'>
    readonly customerPhone: FieldRef<"ChatMessage", 'String'>
    readonly isStaff: FieldRef<"ChatMessage", 'Boolean'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
  }


  /**
   * Model SystemSettings
   */

  export type AggregateSystemSettings = {
    _count: SystemSettingsCountAggregateOutputType | null
    _avg: SystemSettingsAvgAggregateOutputType | null
    _sum: SystemSettingsSumAggregateOutputType | null
    _min: SystemSettingsMinAggregateOutputType | null
    _max: SystemSettingsMaxAggregateOutputType | null
  }

  export type SystemSettingsAvgAggregateOutputType = {
    freeDeliveryThreshold: number | null
    expressMinutes: number | null
    pluDigits: number | null
  }

  export type SystemSettingsSumAggregateOutputType = {
    freeDeliveryThreshold: number | null
    expressMinutes: number | null
    pluDigits: number | null
  }

  export type SystemSettingsMinAggregateOutputType = {
    id: string | null
    storeName: string | null
    tagline: string | null
    mainBranch: string | null
    phone: string | null
    hotlines: string | null
    whatsapp: string | null
    address: string | null
    taxNumber: string | null
    commercialReg: string | null
    freeDeliveryThreshold: number | null
    expressDeliveryEnabled: boolean | null
    expressMinutes: number | null
    isLockedDown: boolean | null
    bannerNotice: string | null
    weightPrefixes: string | null
    pricePrefixes: string | null
    pluDigits: number | null
    updatedAt: Date | null
  }

  export type SystemSettingsMaxAggregateOutputType = {
    id: string | null
    storeName: string | null
    tagline: string | null
    mainBranch: string | null
    phone: string | null
    hotlines: string | null
    whatsapp: string | null
    address: string | null
    taxNumber: string | null
    commercialReg: string | null
    freeDeliveryThreshold: number | null
    expressDeliveryEnabled: boolean | null
    expressMinutes: number | null
    isLockedDown: boolean | null
    bannerNotice: string | null
    weightPrefixes: string | null
    pricePrefixes: string | null
    pluDigits: number | null
    updatedAt: Date | null
  }

  export type SystemSettingsCountAggregateOutputType = {
    id: number
    storeName: number
    tagline: number
    mainBranch: number
    phone: number
    hotlines: number
    whatsapp: number
    address: number
    taxNumber: number
    commercialReg: number
    freeDeliveryThreshold: number
    expressDeliveryEnabled: number
    expressMinutes: number
    isLockedDown: number
    bannerNotice: number
    weightPrefixes: number
    pricePrefixes: number
    pluDigits: number
    updatedAt: number
    _all: number
  }


  export type SystemSettingsAvgAggregateInputType = {
    freeDeliveryThreshold?: true
    expressMinutes?: true
    pluDigits?: true
  }

  export type SystemSettingsSumAggregateInputType = {
    freeDeliveryThreshold?: true
    expressMinutes?: true
    pluDigits?: true
  }

  export type SystemSettingsMinAggregateInputType = {
    id?: true
    storeName?: true
    tagline?: true
    mainBranch?: true
    phone?: true
    hotlines?: true
    whatsapp?: true
    address?: true
    taxNumber?: true
    commercialReg?: true
    freeDeliveryThreshold?: true
    expressDeliveryEnabled?: true
    expressMinutes?: true
    isLockedDown?: true
    bannerNotice?: true
    weightPrefixes?: true
    pricePrefixes?: true
    pluDigits?: true
    updatedAt?: true
  }

  export type SystemSettingsMaxAggregateInputType = {
    id?: true
    storeName?: true
    tagline?: true
    mainBranch?: true
    phone?: true
    hotlines?: true
    whatsapp?: true
    address?: true
    taxNumber?: true
    commercialReg?: true
    freeDeliveryThreshold?: true
    expressDeliveryEnabled?: true
    expressMinutes?: true
    isLockedDown?: true
    bannerNotice?: true
    weightPrefixes?: true
    pricePrefixes?: true
    pluDigits?: true
    updatedAt?: true
  }

  export type SystemSettingsCountAggregateInputType = {
    id?: true
    storeName?: true
    tagline?: true
    mainBranch?: true
    phone?: true
    hotlines?: true
    whatsapp?: true
    address?: true
    taxNumber?: true
    commercialReg?: true
    freeDeliveryThreshold?: true
    expressDeliveryEnabled?: true
    expressMinutes?: true
    isLockedDown?: true
    bannerNotice?: true
    weightPrefixes?: true
    pricePrefixes?: true
    pluDigits?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSettings to aggregate.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemSettings
    **/
    _count?: true | SystemSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemSettingsMaxAggregateInputType
  }

  export type GetSystemSettingsAggregateType<T extends SystemSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemSettings[P]>
      : GetScalarType<T[P], AggregateSystemSettings[P]>
  }




  export type SystemSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemSettingsWhereInput
    orderBy?: SystemSettingsOrderByWithAggregationInput | SystemSettingsOrderByWithAggregationInput[]
    by: SystemSettingsScalarFieldEnum[] | SystemSettingsScalarFieldEnum
    having?: SystemSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemSettingsCountAggregateInputType | true
    _avg?: SystemSettingsAvgAggregateInputType
    _sum?: SystemSettingsSumAggregateInputType
    _min?: SystemSettingsMinAggregateInputType
    _max?: SystemSettingsMaxAggregateInputType
  }

  export type SystemSettingsGroupByOutputType = {
    id: string
    storeName: string
    tagline: string
    mainBranch: string
    phone: string
    hotlines: string
    whatsapp: string
    address: string
    taxNumber: string
    commercialReg: string
    freeDeliveryThreshold: number
    expressDeliveryEnabled: boolean
    expressMinutes: number
    isLockedDown: boolean
    bannerNotice: string | null
    weightPrefixes: string
    pricePrefixes: string
    pluDigits: number
    updatedAt: Date
    _count: SystemSettingsCountAggregateOutputType | null
    _avg: SystemSettingsAvgAggregateOutputType | null
    _sum: SystemSettingsSumAggregateOutputType | null
    _min: SystemSettingsMinAggregateOutputType | null
    _max: SystemSettingsMaxAggregateOutputType | null
  }

  type GetSystemSettingsGroupByPayload<T extends SystemSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SystemSettingsGroupByOutputType[P]>
        }
      >
    >


  export type SystemSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeName?: boolean
    tagline?: boolean
    mainBranch?: boolean
    phone?: boolean
    hotlines?: boolean
    whatsapp?: boolean
    address?: boolean
    taxNumber?: boolean
    commercialReg?: boolean
    freeDeliveryThreshold?: boolean
    expressDeliveryEnabled?: boolean
    expressMinutes?: boolean
    isLockedDown?: boolean
    bannerNotice?: boolean
    weightPrefixes?: boolean
    pricePrefixes?: boolean
    pluDigits?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSettings"]>

  export type SystemSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeName?: boolean
    tagline?: boolean
    mainBranch?: boolean
    phone?: boolean
    hotlines?: boolean
    whatsapp?: boolean
    address?: boolean
    taxNumber?: boolean
    commercialReg?: boolean
    freeDeliveryThreshold?: boolean
    expressDeliveryEnabled?: boolean
    expressMinutes?: boolean
    isLockedDown?: boolean
    bannerNotice?: boolean
    weightPrefixes?: boolean
    pricePrefixes?: boolean
    pluDigits?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSettings"]>

  export type SystemSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeName?: boolean
    tagline?: boolean
    mainBranch?: boolean
    phone?: boolean
    hotlines?: boolean
    whatsapp?: boolean
    address?: boolean
    taxNumber?: boolean
    commercialReg?: boolean
    freeDeliveryThreshold?: boolean
    expressDeliveryEnabled?: boolean
    expressMinutes?: boolean
    isLockedDown?: boolean
    bannerNotice?: boolean
    weightPrefixes?: boolean
    pricePrefixes?: boolean
    pluDigits?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSettings"]>

  export type SystemSettingsSelectScalar = {
    id?: boolean
    storeName?: boolean
    tagline?: boolean
    mainBranch?: boolean
    phone?: boolean
    hotlines?: boolean
    whatsapp?: boolean
    address?: boolean
    taxNumber?: boolean
    commercialReg?: boolean
    freeDeliveryThreshold?: boolean
    expressDeliveryEnabled?: boolean
    expressMinutes?: boolean
    isLockedDown?: boolean
    bannerNotice?: boolean
    weightPrefixes?: boolean
    pricePrefixes?: boolean
    pluDigits?: boolean
    updatedAt?: boolean
  }

  export type SystemSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeName" | "tagline" | "mainBranch" | "phone" | "hotlines" | "whatsapp" | "address" | "taxNumber" | "commercialReg" | "freeDeliveryThreshold" | "expressDeliveryEnabled" | "expressMinutes" | "isLockedDown" | "bannerNotice" | "weightPrefixes" | "pricePrefixes" | "pluDigits" | "updatedAt", ExtArgs["result"]["systemSettings"]>

  export type $SystemSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeName: string
      tagline: string
      mainBranch: string
      phone: string
      hotlines: string
      whatsapp: string
      address: string
      taxNumber: string
      commercialReg: string
      freeDeliveryThreshold: number
      expressDeliveryEnabled: boolean
      expressMinutes: number
      isLockedDown: boolean
      bannerNotice: string | null
      weightPrefixes: string
      pricePrefixes: string
      pluDigits: number
      updatedAt: Date
    }, ExtArgs["result"]["systemSettings"]>
    composites: {}
  }

  type SystemSettingsGetPayload<S extends boolean | null | undefined | SystemSettingsDefaultArgs> = $Result.GetResult<Prisma.$SystemSettingsPayload, S>

  type SystemSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemSettingsCountAggregateInputType | true
    }

  export interface SystemSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemSettings'], meta: { name: 'SystemSettings' } }
    /**
     * Find zero or one SystemSettings that matches the filter.
     * @param {SystemSettingsFindUniqueArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemSettingsFindUniqueArgs>(args: SelectSubset<T, SystemSettingsFindUniqueArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemSettingsFindUniqueOrThrowArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsFindFirstArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemSettingsFindFirstArgs>(args?: SelectSubset<T, SystemSettingsFindFirstArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsFindFirstOrThrowArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemSettings
     * const systemSettings = await prisma.systemSettings.findMany()
     * 
     * // Get first 10 SystemSettings
     * const systemSettings = await prisma.systemSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemSettingsWithIdOnly = await prisma.systemSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemSettingsFindManyArgs>(args?: SelectSubset<T, SystemSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemSettings.
     * @param {SystemSettingsCreateArgs} args - Arguments to create a SystemSettings.
     * @example
     * // Create one SystemSettings
     * const SystemSettings = await prisma.systemSettings.create({
     *   data: {
     *     // ... data to create a SystemSettings
     *   }
     * })
     * 
     */
    create<T extends SystemSettingsCreateArgs>(args: SelectSubset<T, SystemSettingsCreateArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemSettings.
     * @param {SystemSettingsCreateManyArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSettings = await prisma.systemSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemSettingsCreateManyArgs>(args?: SelectSubset<T, SystemSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemSettings and returns the data saved in the database.
     * @param {SystemSettingsCreateManyAndReturnArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSettings = await prisma.systemSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemSettings and only return the `id`
     * const systemSettingsWithIdOnly = await prisma.systemSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemSettings.
     * @param {SystemSettingsDeleteArgs} args - Arguments to delete one SystemSettings.
     * @example
     * // Delete one SystemSettings
     * const SystemSettings = await prisma.systemSettings.delete({
     *   where: {
     *     // ... filter to delete one SystemSettings
     *   }
     * })
     * 
     */
    delete<T extends SystemSettingsDeleteArgs>(args: SelectSubset<T, SystemSettingsDeleteArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemSettings.
     * @param {SystemSettingsUpdateArgs} args - Arguments to update one SystemSettings.
     * @example
     * // Update one SystemSettings
     * const systemSettings = await prisma.systemSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemSettingsUpdateArgs>(args: SelectSubset<T, SystemSettingsUpdateArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemSettings.
     * @param {SystemSettingsDeleteManyArgs} args - Arguments to filter SystemSettings to delete.
     * @example
     * // Delete a few SystemSettings
     * const { count } = await prisma.systemSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemSettingsDeleteManyArgs>(args?: SelectSubset<T, SystemSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemSettings
     * const systemSettings = await prisma.systemSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemSettingsUpdateManyArgs>(args: SelectSubset<T, SystemSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings and returns the data updated in the database.
     * @param {SystemSettingsUpdateManyAndReturnArgs} args - Arguments to update many SystemSettings.
     * @example
     * // Update many SystemSettings
     * const systemSettings = await prisma.systemSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemSettings and only return the `id`
     * const systemSettingsWithIdOnly = await prisma.systemSettings.updateManyAndReturn({
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
    updateManyAndReturn<T extends SystemSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemSettings.
     * @param {SystemSettingsUpsertArgs} args - Arguments to update or create a SystemSettings.
     * @example
     * // Update or create a SystemSettings
     * const systemSettings = await prisma.systemSettings.upsert({
     *   create: {
     *     // ... data to create a SystemSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemSettings we want to update
     *   }
     * })
     */
    upsert<T extends SystemSettingsUpsertArgs>(args: SelectSubset<T, SystemSettingsUpsertArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsCountArgs} args - Arguments to filter SystemSettings to count.
     * @example
     * // Count the number of SystemSettings
     * const count = await prisma.systemSettings.count({
     *   where: {
     *     // ... the filter for the SystemSettings we want to count
     *   }
     * })
    **/
    count<T extends SystemSettingsCountArgs>(
      args?: Subset<T, SystemSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemSettingsAggregateArgs>(args: Subset<T, SystemSettingsAggregateArgs>): Prisma.PrismaPromise<GetSystemSettingsAggregateType<T>>

    /**
     * Group by SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsGroupByArgs} args - Group by arguments.
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
      T extends SystemSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemSettingsGroupByArgs['orderBy'] }
        : { orderBy?: SystemSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemSettings model
   */
  readonly fields: SystemSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SystemSettings model
   */
  interface SystemSettingsFieldRefs {
    readonly id: FieldRef<"SystemSettings", 'String'>
    readonly storeName: FieldRef<"SystemSettings", 'String'>
    readonly tagline: FieldRef<"SystemSettings", 'String'>
    readonly mainBranch: FieldRef<"SystemSettings", 'String'>
    readonly phone: FieldRef<"SystemSettings", 'String'>
    readonly hotlines: FieldRef<"SystemSettings", 'String'>
    readonly whatsapp: FieldRef<"SystemSettings", 'String'>
    readonly address: FieldRef<"SystemSettings", 'String'>
    readonly taxNumber: FieldRef<"SystemSettings", 'String'>
    readonly commercialReg: FieldRef<"SystemSettings", 'String'>
    readonly freeDeliveryThreshold: FieldRef<"SystemSettings", 'Float'>
    readonly expressDeliveryEnabled: FieldRef<"SystemSettings", 'Boolean'>
    readonly expressMinutes: FieldRef<"SystemSettings", 'Int'>
    readonly isLockedDown: FieldRef<"SystemSettings", 'Boolean'>
    readonly bannerNotice: FieldRef<"SystemSettings", 'String'>
    readonly weightPrefixes: FieldRef<"SystemSettings", 'String'>
    readonly pricePrefixes: FieldRef<"SystemSettings", 'String'>
    readonly pluDigits: FieldRef<"SystemSettings", 'Int'>
    readonly updatedAt: FieldRef<"SystemSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemSettings findUnique
   */
  export type SystemSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings findUniqueOrThrow
   */
  export type SystemSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings findFirst
   */
  export type SystemSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingsScalarFieldEnum | SystemSettingsScalarFieldEnum[]
  }

  /**
   * SystemSettings findFirstOrThrow
   */
  export type SystemSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingsScalarFieldEnum | SystemSettingsScalarFieldEnum[]
  }

  /**
   * SystemSettings findMany
   */
  export type SystemSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemSettings.
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingsScalarFieldEnum | SystemSettingsScalarFieldEnum[]
  }

  /**
   * SystemSettings create
   */
  export type SystemSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemSettings.
     */
    data: XOR<SystemSettingsCreateInput, SystemSettingsUncheckedCreateInput>
  }

  /**
   * SystemSettings createMany
   */
  export type SystemSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingsCreateManyInput | SystemSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemSettings createManyAndReturn
   */
  export type SystemSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingsCreateManyInput | SystemSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemSettings update
   */
  export type SystemSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemSettings.
     */
    data: XOR<SystemSettingsUpdateInput, SystemSettingsUncheckedUpdateInput>
    /**
     * Choose, which SystemSettings to update.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings updateMany
   */
  export type SystemSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingsUpdateManyMutationInput, SystemSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingsWhereInput
    /**
     * Limit how many SystemSettings to update.
     */
    limit?: number
  }

  /**
   * SystemSettings updateManyAndReturn
   */
  export type SystemSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingsUpdateManyMutationInput, SystemSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingsWhereInput
    /**
     * Limit how many SystemSettings to update.
     */
    limit?: number
  }

  /**
   * SystemSettings upsert
   */
  export type SystemSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemSettings to update in case it exists.
     */
    where: SystemSettingsWhereUniqueInput
    /**
     * In case the SystemSettings found by the `where` argument doesn't exist, create a new SystemSettings with this data.
     */
    create: XOR<SystemSettingsCreateInput, SystemSettingsUncheckedCreateInput>
    /**
     * In case the SystemSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemSettingsUpdateInput, SystemSettingsUncheckedUpdateInput>
  }

  /**
   * SystemSettings delete
   */
  export type SystemSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter which SystemSettings to delete.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings deleteMany
   */
  export type SystemSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSettings to delete
     */
    where?: SystemSettingsWhereInput
    /**
     * Limit how many SystemSettings to delete.
     */
    limit?: number
  }

  /**
   * SystemSettings without action
   */
  export type SystemSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
  }


  /**
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    amount: number | null
  }

  export type ExpenseSumAggregateOutputType = {
    amount: number | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: string | null
    description: string | null
    amount: number | null
    expenseDate: string | null
    category: string | null
    recordedBy: string | null
    createdAt: Date | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: string | null
    description: string | null
    amount: number | null
    expenseDate: string | null
    category: string | null
    recordedBy: string | null
    createdAt: Date | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    description: number
    amount: number
    expenseDate: number
    category: number
    recordedBy: number
    createdAt: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    amount?: true
  }

  export type ExpenseSumAggregateInputType = {
    amount?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    expenseDate?: true
    category?: true
    recordedBy?: true
    createdAt?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    expenseDate?: true
    category?: true
    recordedBy?: true
    createdAt?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    expenseDate?: true
    category?: true
    recordedBy?: true
    createdAt?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: string
    description: string
    amount: number
    expenseDate: string
    category: string
    recordedBy: string | null
    createdAt: Date
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    expenseDate?: boolean
    category?: boolean
    recordedBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    expenseDate?: boolean
    category?: boolean
    recordedBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    expenseDate?: boolean
    category?: boolean
    recordedBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectScalar = {
    id?: boolean
    description?: boolean
    amount?: boolean
    expenseDate?: boolean
    category?: boolean
    recordedBy?: boolean
    createdAt?: boolean
  }

  export type ExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "amount" | "expenseDate" | "category" | "recordedBy" | "createdAt", ExtArgs["result"]["expense"]>

  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      amount: number
      expenseDate: string
      category: string
      recordedBy: string | null
      createdAt: Date
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseFindUniqueArgs>(args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseFindFirstArgs>(args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseFindManyArgs>(args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends ExpenseCreateArgs>(args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseCreateManyArgs>(args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends ExpenseDeleteArgs>(args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseUpdateArgs>(args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseUpdateManyArgs>(args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {ExpenseUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExpenseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseUpsertArgs>(args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
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
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expense model
   */
  readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Expense model
   */
  interface ExpenseFieldRefs {
    readonly id: FieldRef<"Expense", 'String'>
    readonly description: FieldRef<"Expense", 'String'>
    readonly amount: FieldRef<"Expense", 'Float'>
    readonly expenseDate: FieldRef<"Expense", 'String'>
    readonly category: FieldRef<"Expense", 'String'>
    readonly recordedBy: FieldRef<"Expense", 'String'>
    readonly createdAt: FieldRef<"Expense", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }

  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expense createManyAndReturn
   */
  export type ExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expense updateManyAndReturn
   */
  export type ExpenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }

  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to delete.
     */
    limit?: number
  }

  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
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
    username: 'username',
    passwordHash: 'passwordHash',
    phone: 'phone',
    pin: 'pin',
    role: 'role',
    avatar: 'avatar',
    branch: 'branch',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BranchScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    address: 'address',
    phone: 'phone',
    isOpen: 'isOpen',
    deliveryActive: 'deliveryActive',
    createdAt: 'createdAt'
  };

  export type BranchScalarFieldEnum = (typeof BranchScalarFieldEnum)[keyof typeof BranchScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    nameAr: 'nameAr',
    nameEn: 'nameEn',
    icon: 'icon',
    image: 'image',
    badge: 'badge',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    nameAr: 'nameAr',
    brand: 'brand',
    category: 'category',
    unit: 'unit',
    barcode: 'barcode',
    costPrice: 'costPrice',
    basePrice: 'basePrice',
    originalPrice: 'originalPrice',
    discountPercent: 'discountPercent',
    isOffer: 'isOffer',
    isExpress: 'isExpress',
    isWeighted: 'isWeighted',
    scaleItemCode: 'scaleItemCode',
    shelfLifeDays: 'shelfLifeDays',
    scaleTareWeight: 'scaleTareWeight',
    inStock: 'inStock',
    stockQty: 'stockQty',
    minStockQty: 'minStockQty',
    openingStock: 'openingStock',
    image: 'image',
    description: 'description',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    orderNumber: 'orderNumber',
    customerName: 'customerName',
    phone: 'phone',
    address: 'address',
    zone: 'zone',
    branchName: 'branchName',
    orderType: 'orderType',
    status: 'status',
    items: 'items',
    subtotal: 'subtotal',
    deliveryFee: 'deliveryFee',
    discount: 'discount',
    total: 'total',
    paymentMethod: 'paymentMethod',
    notes: 'notes',
    captainId: 'captainId',
    captainName: 'captainName',
    captainPhone: 'captainPhone',
    assignedPicker: 'assignedPicker',
    timeline: 'timeline',
    isSettled: 'isSettled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    address: 'address',
    zone: 'zone',
    totalOrders: 'totalOrders',
    totalSpend: 'totalSpend',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const CaptainScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    vehicle: 'vehicle',
    zone: 'zone',
    pendingBalance: 'pendingBalance',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type CaptainScalarFieldEnum = (typeof CaptainScalarFieldEnum)[keyof typeof CaptainScalarFieldEnum]


  export const DeliveryZoneScalarFieldEnum: {
    id: 'id',
    nameAr: 'nameAr',
    fee: 'fee',
    timeMinutes: 'timeMinutes',
    minOrder: 'minOrder',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type DeliveryZoneScalarFieldEnum = (typeof DeliveryZoneScalarFieldEnum)[keyof typeof DeliveryZoneScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    contactPerson: 'contactPerson',
    phone: 'phone',
    address: 'address',
    category: 'category',
    openingBalance: 'openingBalance',
    currentBalance: 'currentBalance',
    isActive: 'isActive',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const PurchaseScalarFieldEnum: {
    id: 'id',
    invoiceNumber: 'invoiceNumber',
    supplierId: 'supplierId',
    supplierName: 'supplierName',
    invoiceDate: 'invoiceDate',
    items: 'items',
    totalAmount: 'totalAmount',
    paidAmount: 'paidAmount',
    remainingAmount: 'remainingAmount',
    paymentType: 'paymentType',
    status: 'status',
    notes: 'notes',
    receivedBy: 'receivedBy',
    createdAt: 'createdAt'
  };

  export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum]


  export const SupplierPaymentScalarFieldEnum: {
    id: 'id',
    paymentNumber: 'paymentNumber',
    supplierId: 'supplierId',
    supplierName: 'supplierName',
    amount: 'amount',
    paymentDate: 'paymentDate',
    paymentMethod: 'paymentMethod',
    treasury: 'treasury',
    notes: 'notes',
    recordedBy: 'recordedBy',
    createdAt: 'createdAt'
  };

  export type SupplierPaymentScalarFieldEnum = (typeof SupplierPaymentScalarFieldEnum)[keyof typeof SupplierPaymentScalarFieldEnum]


  export const StockMovementScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    productName: 'productName',
    movementType: 'movementType',
    quantity: 'quantity',
    balanceAfter: 'balanceAfter',
    unitCost: 'unitCost',
    reference: 'reference',
    notes: 'notes',
    performedBy: 'performedBy',
    createdAt: 'createdAt'
  };

  export type StockMovementScalarFieldEnum = (typeof StockMovementScalarFieldEnum)[keyof typeof StockMovementScalarFieldEnum]


  export const ReturnRecordScalarFieldEnum: {
    id: 'id',
    returnNumber: 'returnNumber',
    type: 'type',
    referenceNumber: 'referenceNumber',
    customerOrSupplier: 'customerOrSupplier',
    items: 'items',
    totalAmount: 'totalAmount',
    reason: 'reason',
    recordedBy: 'recordedBy',
    createdAt: 'createdAt'
  };

  export type ReturnRecordScalarFieldEnum = (typeof ReturnRecordScalarFieldEnum)[keyof typeof ReturnRecordScalarFieldEnum]


  export const TreasuryTransactionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    category: 'category',
    amount: 'amount',
    balanceAfter: 'balanceAfter',
    description: 'description',
    reference: 'reference',
    recordedBy: 'recordedBy',
    createdAt: 'createdAt'
  };

  export type TreasuryTransactionScalarFieldEnum = (typeof TreasuryTransactionScalarFieldEnum)[keyof typeof TreasuryTransactionScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    senderName: 'senderName',
    senderRole: 'senderRole',
    text: 'text',
    orderNumber: 'orderNumber',
    customerPhone: 'customerPhone',
    isStaff: 'isStaff',
    createdAt: 'createdAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const SystemSettingsScalarFieldEnum: {
    id: 'id',
    storeName: 'storeName',
    tagline: 'tagline',
    mainBranch: 'mainBranch',
    phone: 'phone',
    hotlines: 'hotlines',
    whatsapp: 'whatsapp',
    address: 'address',
    taxNumber: 'taxNumber',
    commercialReg: 'commercialReg',
    freeDeliveryThreshold: 'freeDeliveryThreshold',
    expressDeliveryEnabled: 'expressDeliveryEnabled',
    expressMinutes: 'expressMinutes',
    isLockedDown: 'isLockedDown',
    bannerNotice: 'bannerNotice',
    weightPrefixes: 'weightPrefixes',
    pricePrefixes: 'pricePrefixes',
    pluDigits: 'pluDigits',
    updatedAt: 'updatedAt'
  };

  export type SystemSettingsScalarFieldEnum = (typeof SystemSettingsScalarFieldEnum)[keyof typeof SystemSettingsScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    description: 'description',
    amount: 'amount',
    expenseDate: 'expenseDate',
    category: 'category',
    recordedBy: 'recordedBy',
    createdAt: 'createdAt'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    phone?: StringFilter<"User"> | string
    pin?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    branch?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    phone?: SortOrder
    pin?: SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    branch?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    pin?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    branch?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    phone?: SortOrder
    pin?: SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    branch?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringWithAggregatesFilter<"User"> | string
    pin?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    branch?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BranchWhereInput = {
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    id?: StringFilter<"Branch"> | string
    code?: StringFilter<"Branch"> | string
    name?: StringFilter<"Branch"> | string
    address?: StringFilter<"Branch"> | string
    phone?: StringFilter<"Branch"> | string
    isOpen?: BoolFilter<"Branch"> | boolean
    deliveryActive?: BoolFilter<"Branch"> | boolean
    createdAt?: DateTimeFilter<"Branch"> | Date | string
  }

  export type BranchOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    isOpen?: SortOrder
    deliveryActive?: SortOrder
    createdAt?: SortOrder
  }

  export type BranchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    name?: StringFilter<"Branch"> | string
    address?: StringFilter<"Branch"> | string
    phone?: StringFilter<"Branch"> | string
    isOpen?: BoolFilter<"Branch"> | boolean
    deliveryActive?: BoolFilter<"Branch"> | boolean
    createdAt?: DateTimeFilter<"Branch"> | Date | string
  }, "id" | "code">

  export type BranchOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    isOpen?: SortOrder
    deliveryActive?: SortOrder
    createdAt?: SortOrder
    _count?: BranchCountOrderByAggregateInput
    _max?: BranchMaxOrderByAggregateInput
    _min?: BranchMinOrderByAggregateInput
  }

  export type BranchScalarWhereWithAggregatesInput = {
    AND?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    OR?: BranchScalarWhereWithAggregatesInput[]
    NOT?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Branch"> | string
    code?: StringWithAggregatesFilter<"Branch"> | string
    name?: StringWithAggregatesFilter<"Branch"> | string
    address?: StringWithAggregatesFilter<"Branch"> | string
    phone?: StringWithAggregatesFilter<"Branch"> | string
    isOpen?: BoolWithAggregatesFilter<"Branch"> | boolean
    deliveryActive?: BoolWithAggregatesFilter<"Branch"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Branch"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    nameAr?: StringFilter<"Category"> | string
    nameEn?: StringNullableFilter<"Category"> | string | null
    icon?: StringNullableFilter<"Category"> | string | null
    image?: StringNullableFilter<"Category"> | string | null
    badge?: StringNullableFilter<"Category"> | string | null
    sortOrder?: IntFilter<"Category"> | number
    createdAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    nameAr?: SortOrder
    nameEn?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    badge?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nameAr?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    nameEn?: StringNullableFilter<"Category"> | string | null
    icon?: StringNullableFilter<"Category"> | string | null
    image?: StringNullableFilter<"Category"> | string | null
    badge?: StringNullableFilter<"Category"> | string | null
    sortOrder?: IntFilter<"Category"> | number
    createdAt?: DateTimeFilter<"Category"> | Date | string
  }, "id" | "nameAr">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    nameAr?: SortOrder
    nameEn?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    badge?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    nameAr?: StringWithAggregatesFilter<"Category"> | string
    nameEn?: StringNullableWithAggregatesFilter<"Category"> | string | null
    icon?: StringNullableWithAggregatesFilter<"Category"> | string | null
    image?: StringNullableWithAggregatesFilter<"Category"> | string | null
    badge?: StringNullableWithAggregatesFilter<"Category"> | string | null
    sortOrder?: IntWithAggregatesFilter<"Category"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    nameAr?: StringFilter<"Product"> | string
    brand?: StringNullableFilter<"Product"> | string | null
    category?: StringFilter<"Product"> | string
    unit?: StringFilter<"Product"> | string
    barcode?: StringNullableFilter<"Product"> | string | null
    costPrice?: FloatFilter<"Product"> | number
    basePrice?: FloatFilter<"Product"> | number
    originalPrice?: FloatNullableFilter<"Product"> | number | null
    discountPercent?: IntNullableFilter<"Product"> | number | null
    isOffer?: BoolFilter<"Product"> | boolean
    isExpress?: BoolFilter<"Product"> | boolean
    isWeighted?: BoolFilter<"Product"> | boolean
    scaleItemCode?: StringNullableFilter<"Product"> | string | null
    shelfLifeDays?: IntFilter<"Product"> | number
    scaleTareWeight?: FloatFilter<"Product"> | number
    inStock?: BoolFilter<"Product"> | boolean
    stockQty?: IntFilter<"Product"> | number
    minStockQty?: IntFilter<"Product"> | number
    openingStock?: IntFilter<"Product"> | number
    image?: StringNullableFilter<"Product"> | string | null
    description?: StringNullableFilter<"Product"> | string | null
    sortOrder?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    nameAr?: SortOrder
    brand?: SortOrderInput | SortOrder
    category?: SortOrder
    unit?: SortOrder
    barcode?: SortOrderInput | SortOrder
    costPrice?: SortOrder
    basePrice?: SortOrder
    originalPrice?: SortOrderInput | SortOrder
    discountPercent?: SortOrderInput | SortOrder
    isOffer?: SortOrder
    isExpress?: SortOrder
    isWeighted?: SortOrder
    scaleItemCode?: SortOrderInput | SortOrder
    shelfLifeDays?: SortOrder
    scaleTareWeight?: SortOrder
    inStock?: SortOrder
    stockQty?: SortOrder
    minStockQty?: SortOrder
    openingStock?: SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    nameAr?: StringFilter<"Product"> | string
    brand?: StringNullableFilter<"Product"> | string | null
    category?: StringFilter<"Product"> | string
    unit?: StringFilter<"Product"> | string
    barcode?: StringNullableFilter<"Product"> | string | null
    costPrice?: FloatFilter<"Product"> | number
    basePrice?: FloatFilter<"Product"> | number
    originalPrice?: FloatNullableFilter<"Product"> | number | null
    discountPercent?: IntNullableFilter<"Product"> | number | null
    isOffer?: BoolFilter<"Product"> | boolean
    isExpress?: BoolFilter<"Product"> | boolean
    isWeighted?: BoolFilter<"Product"> | boolean
    scaleItemCode?: StringNullableFilter<"Product"> | string | null
    shelfLifeDays?: IntFilter<"Product"> | number
    scaleTareWeight?: FloatFilter<"Product"> | number
    inStock?: BoolFilter<"Product"> | boolean
    stockQty?: IntFilter<"Product"> | number
    minStockQty?: IntFilter<"Product"> | number
    openingStock?: IntFilter<"Product"> | number
    image?: StringNullableFilter<"Product"> | string | null
    description?: StringNullableFilter<"Product"> | string | null
    sortOrder?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    nameAr?: SortOrder
    brand?: SortOrderInput | SortOrder
    category?: SortOrder
    unit?: SortOrder
    barcode?: SortOrderInput | SortOrder
    costPrice?: SortOrder
    basePrice?: SortOrder
    originalPrice?: SortOrderInput | SortOrder
    discountPercent?: SortOrderInput | SortOrder
    isOffer?: SortOrder
    isExpress?: SortOrder
    isWeighted?: SortOrder
    scaleItemCode?: SortOrderInput | SortOrder
    shelfLifeDays?: SortOrder
    scaleTareWeight?: SortOrder
    inStock?: SortOrder
    stockQty?: SortOrder
    minStockQty?: SortOrder
    openingStock?: SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    nameAr?: StringWithAggregatesFilter<"Product"> | string
    brand?: StringNullableWithAggregatesFilter<"Product"> | string | null
    category?: StringWithAggregatesFilter<"Product"> | string
    unit?: StringWithAggregatesFilter<"Product"> | string
    barcode?: StringNullableWithAggregatesFilter<"Product"> | string | null
    costPrice?: FloatWithAggregatesFilter<"Product"> | number
    basePrice?: FloatWithAggregatesFilter<"Product"> | number
    originalPrice?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    discountPercent?: IntNullableWithAggregatesFilter<"Product"> | number | null
    isOffer?: BoolWithAggregatesFilter<"Product"> | boolean
    isExpress?: BoolWithAggregatesFilter<"Product"> | boolean
    isWeighted?: BoolWithAggregatesFilter<"Product"> | boolean
    scaleItemCode?: StringNullableWithAggregatesFilter<"Product"> | string | null
    shelfLifeDays?: IntWithAggregatesFilter<"Product"> | number
    scaleTareWeight?: FloatWithAggregatesFilter<"Product"> | number
    inStock?: BoolWithAggregatesFilter<"Product"> | boolean
    stockQty?: IntWithAggregatesFilter<"Product"> | number
    minStockQty?: IntWithAggregatesFilter<"Product"> | number
    openingStock?: IntWithAggregatesFilter<"Product"> | number
    image?: StringNullableWithAggregatesFilter<"Product"> | string | null
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    sortOrder?: IntWithAggregatesFilter<"Product"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    orderNumber?: StringFilter<"Order"> | string
    customerName?: StringFilter<"Order"> | string
    phone?: StringFilter<"Order"> | string
    address?: StringFilter<"Order"> | string
    zone?: StringFilter<"Order"> | string
    branchName?: StringFilter<"Order"> | string
    orderType?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    items?: StringFilter<"Order"> | string
    subtotal?: FloatFilter<"Order"> | number
    deliveryFee?: FloatFilter<"Order"> | number
    discount?: FloatFilter<"Order"> | number
    total?: FloatFilter<"Order"> | number
    paymentMethod?: StringFilter<"Order"> | string
    notes?: StringNullableFilter<"Order"> | string | null
    captainId?: StringNullableFilter<"Order"> | string | null
    captainName?: StringNullableFilter<"Order"> | string | null
    captainPhone?: StringNullableFilter<"Order"> | string | null
    assignedPicker?: StringNullableFilter<"Order"> | string | null
    timeline?: StringFilter<"Order"> | string
    isSettled?: BoolFilter<"Order"> | boolean
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    customerName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    zone?: SortOrder
    branchName?: SortOrder
    orderType?: SortOrder
    status?: SortOrder
    items?: SortOrder
    subtotal?: SortOrder
    deliveryFee?: SortOrder
    discount?: SortOrder
    total?: SortOrder
    paymentMethod?: SortOrder
    notes?: SortOrderInput | SortOrder
    captainId?: SortOrderInput | SortOrder
    captainName?: SortOrderInput | SortOrder
    captainPhone?: SortOrderInput | SortOrder
    assignedPicker?: SortOrderInput | SortOrder
    timeline?: SortOrder
    isSettled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderNumber?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    customerName?: StringFilter<"Order"> | string
    phone?: StringFilter<"Order"> | string
    address?: StringFilter<"Order"> | string
    zone?: StringFilter<"Order"> | string
    branchName?: StringFilter<"Order"> | string
    orderType?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    items?: StringFilter<"Order"> | string
    subtotal?: FloatFilter<"Order"> | number
    deliveryFee?: FloatFilter<"Order"> | number
    discount?: FloatFilter<"Order"> | number
    total?: FloatFilter<"Order"> | number
    paymentMethod?: StringFilter<"Order"> | string
    notes?: StringNullableFilter<"Order"> | string | null
    captainId?: StringNullableFilter<"Order"> | string | null
    captainName?: StringNullableFilter<"Order"> | string | null
    captainPhone?: StringNullableFilter<"Order"> | string | null
    assignedPicker?: StringNullableFilter<"Order"> | string | null
    timeline?: StringFilter<"Order"> | string
    isSettled?: BoolFilter<"Order"> | boolean
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }, "id" | "orderNumber">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    customerName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    zone?: SortOrder
    branchName?: SortOrder
    orderType?: SortOrder
    status?: SortOrder
    items?: SortOrder
    subtotal?: SortOrder
    deliveryFee?: SortOrder
    discount?: SortOrder
    total?: SortOrder
    paymentMethod?: SortOrder
    notes?: SortOrderInput | SortOrder
    captainId?: SortOrderInput | SortOrder
    captainName?: SortOrderInput | SortOrder
    captainPhone?: SortOrderInput | SortOrder
    assignedPicker?: SortOrderInput | SortOrder
    timeline?: SortOrder
    isSettled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    orderNumber?: StringWithAggregatesFilter<"Order"> | string
    customerName?: StringWithAggregatesFilter<"Order"> | string
    phone?: StringWithAggregatesFilter<"Order"> | string
    address?: StringWithAggregatesFilter<"Order"> | string
    zone?: StringWithAggregatesFilter<"Order"> | string
    branchName?: StringWithAggregatesFilter<"Order"> | string
    orderType?: StringWithAggregatesFilter<"Order"> | string
    status?: StringWithAggregatesFilter<"Order"> | string
    items?: StringWithAggregatesFilter<"Order"> | string
    subtotal?: FloatWithAggregatesFilter<"Order"> | number
    deliveryFee?: FloatWithAggregatesFilter<"Order"> | number
    discount?: FloatWithAggregatesFilter<"Order"> | number
    total?: FloatWithAggregatesFilter<"Order"> | number
    paymentMethod?: StringWithAggregatesFilter<"Order"> | string
    notes?: StringNullableWithAggregatesFilter<"Order"> | string | null
    captainId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    captainName?: StringNullableWithAggregatesFilter<"Order"> | string | null
    captainPhone?: StringNullableWithAggregatesFilter<"Order"> | string | null
    assignedPicker?: StringNullableWithAggregatesFilter<"Order"> | string | null
    timeline?: StringWithAggregatesFilter<"Order"> | string
    isSettled?: BoolWithAggregatesFilter<"Order"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    address?: StringNullableFilter<"Customer"> | string | null
    zone?: StringNullableFilter<"Customer"> | string | null
    totalOrders?: IntFilter<"Customer"> | number
    totalSpend?: FloatFilter<"Customer"> | number
    notes?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrderInput | SortOrder
    zone?: SortOrderInput | SortOrder
    totalOrders?: SortOrder
    totalSpend?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    address?: StringNullableFilter<"Customer"> | string | null
    zone?: StringNullableFilter<"Customer"> | string | null
    totalOrders?: IntFilter<"Customer"> | number
    totalSpend?: FloatFilter<"Customer"> | number
    notes?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
  }, "id" | "phone">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrderInput | SortOrder
    zone?: SortOrderInput | SortOrder
    totalOrders?: SortOrder
    totalSpend?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringWithAggregatesFilter<"Customer"> | string
    address?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    zone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    totalOrders?: IntWithAggregatesFilter<"Customer"> | number
    totalSpend?: FloatWithAggregatesFilter<"Customer"> | number
    notes?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type CaptainWhereInput = {
    AND?: CaptainWhereInput | CaptainWhereInput[]
    OR?: CaptainWhereInput[]
    NOT?: CaptainWhereInput | CaptainWhereInput[]
    id?: StringFilter<"Captain"> | string
    name?: StringFilter<"Captain"> | string
    phone?: StringFilter<"Captain"> | string
    vehicle?: StringFilter<"Captain"> | string
    zone?: StringFilter<"Captain"> | string
    pendingBalance?: FloatFilter<"Captain"> | number
    isActive?: BoolFilter<"Captain"> | boolean
    createdAt?: DateTimeFilter<"Captain"> | Date | string
  }

  export type CaptainOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    vehicle?: SortOrder
    zone?: SortOrder
    pendingBalance?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type CaptainWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: CaptainWhereInput | CaptainWhereInput[]
    OR?: CaptainWhereInput[]
    NOT?: CaptainWhereInput | CaptainWhereInput[]
    name?: StringFilter<"Captain"> | string
    vehicle?: StringFilter<"Captain"> | string
    zone?: StringFilter<"Captain"> | string
    pendingBalance?: FloatFilter<"Captain"> | number
    isActive?: BoolFilter<"Captain"> | boolean
    createdAt?: DateTimeFilter<"Captain"> | Date | string
  }, "id" | "phone">

  export type CaptainOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    vehicle?: SortOrder
    zone?: SortOrder
    pendingBalance?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: CaptainCountOrderByAggregateInput
    _avg?: CaptainAvgOrderByAggregateInput
    _max?: CaptainMaxOrderByAggregateInput
    _min?: CaptainMinOrderByAggregateInput
    _sum?: CaptainSumOrderByAggregateInput
  }

  export type CaptainScalarWhereWithAggregatesInput = {
    AND?: CaptainScalarWhereWithAggregatesInput | CaptainScalarWhereWithAggregatesInput[]
    OR?: CaptainScalarWhereWithAggregatesInput[]
    NOT?: CaptainScalarWhereWithAggregatesInput | CaptainScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Captain"> | string
    name?: StringWithAggregatesFilter<"Captain"> | string
    phone?: StringWithAggregatesFilter<"Captain"> | string
    vehicle?: StringWithAggregatesFilter<"Captain"> | string
    zone?: StringWithAggregatesFilter<"Captain"> | string
    pendingBalance?: FloatWithAggregatesFilter<"Captain"> | number
    isActive?: BoolWithAggregatesFilter<"Captain"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Captain"> | Date | string
  }

  export type DeliveryZoneWhereInput = {
    AND?: DeliveryZoneWhereInput | DeliveryZoneWhereInput[]
    OR?: DeliveryZoneWhereInput[]
    NOT?: DeliveryZoneWhereInput | DeliveryZoneWhereInput[]
    id?: StringFilter<"DeliveryZone"> | string
    nameAr?: StringFilter<"DeliveryZone"> | string
    fee?: FloatFilter<"DeliveryZone"> | number
    timeMinutes?: IntFilter<"DeliveryZone"> | number
    minOrder?: FloatFilter<"DeliveryZone"> | number
    isActive?: BoolFilter<"DeliveryZone"> | boolean
    createdAt?: DateTimeFilter<"DeliveryZone"> | Date | string
  }

  export type DeliveryZoneOrderByWithRelationInput = {
    id?: SortOrder
    nameAr?: SortOrder
    fee?: SortOrder
    timeMinutes?: SortOrder
    minOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type DeliveryZoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nameAr?: string
    AND?: DeliveryZoneWhereInput | DeliveryZoneWhereInput[]
    OR?: DeliveryZoneWhereInput[]
    NOT?: DeliveryZoneWhereInput | DeliveryZoneWhereInput[]
    fee?: FloatFilter<"DeliveryZone"> | number
    timeMinutes?: IntFilter<"DeliveryZone"> | number
    minOrder?: FloatFilter<"DeliveryZone"> | number
    isActive?: BoolFilter<"DeliveryZone"> | boolean
    createdAt?: DateTimeFilter<"DeliveryZone"> | Date | string
  }, "id" | "nameAr">

  export type DeliveryZoneOrderByWithAggregationInput = {
    id?: SortOrder
    nameAr?: SortOrder
    fee?: SortOrder
    timeMinutes?: SortOrder
    minOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: DeliveryZoneCountOrderByAggregateInput
    _avg?: DeliveryZoneAvgOrderByAggregateInput
    _max?: DeliveryZoneMaxOrderByAggregateInput
    _min?: DeliveryZoneMinOrderByAggregateInput
    _sum?: DeliveryZoneSumOrderByAggregateInput
  }

  export type DeliveryZoneScalarWhereWithAggregatesInput = {
    AND?: DeliveryZoneScalarWhereWithAggregatesInput | DeliveryZoneScalarWhereWithAggregatesInput[]
    OR?: DeliveryZoneScalarWhereWithAggregatesInput[]
    NOT?: DeliveryZoneScalarWhereWithAggregatesInput | DeliveryZoneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DeliveryZone"> | string
    nameAr?: StringWithAggregatesFilter<"DeliveryZone"> | string
    fee?: FloatWithAggregatesFilter<"DeliveryZone"> | number
    timeMinutes?: IntWithAggregatesFilter<"DeliveryZone"> | number
    minOrder?: FloatWithAggregatesFilter<"DeliveryZone"> | number
    isActive?: BoolWithAggregatesFilter<"DeliveryZone"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DeliveryZone"> | Date | string
  }

  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: StringFilter<"Supplier"> | string
    name?: StringFilter<"Supplier"> | string
    contactPerson?: StringNullableFilter<"Supplier"> | string | null
    phone?: StringFilter<"Supplier"> | string
    address?: StringNullableFilter<"Supplier"> | string | null
    category?: StringNullableFilter<"Supplier"> | string | null
    openingBalance?: FloatFilter<"Supplier"> | number
    currentBalance?: FloatFilter<"Supplier"> | number
    isActive?: BoolFilter<"Supplier"> | boolean
    notes?: StringNullableFilter<"Supplier"> | string | null
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    purchases?: PurchaseListRelationFilter
    payments?: SupplierPaymentListRelationFilter
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    contactPerson?: SortOrderInput | SortOrder
    phone?: SortOrder
    address?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    openingBalance?: SortOrder
    currentBalance?: SortOrder
    isActive?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    purchases?: PurchaseOrderByRelationAggregateInput
    payments?: SupplierPaymentOrderByRelationAggregateInput
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    name?: StringFilter<"Supplier"> | string
    contactPerson?: StringNullableFilter<"Supplier"> | string | null
    address?: StringNullableFilter<"Supplier"> | string | null
    category?: StringNullableFilter<"Supplier"> | string | null
    openingBalance?: FloatFilter<"Supplier"> | number
    currentBalance?: FloatFilter<"Supplier"> | number
    isActive?: BoolFilter<"Supplier"> | boolean
    notes?: StringNullableFilter<"Supplier"> | string | null
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    purchases?: PurchaseListRelationFilter
    payments?: SupplierPaymentListRelationFilter
  }, "id" | "phone">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    contactPerson?: SortOrderInput | SortOrder
    phone?: SortOrder
    address?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    openingBalance?: SortOrder
    currentBalance?: SortOrder
    isActive?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _avg?: SupplierAvgOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
    _sum?: SupplierSumOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Supplier"> | string
    name?: StringWithAggregatesFilter<"Supplier"> | string
    contactPerson?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    phone?: StringWithAggregatesFilter<"Supplier"> | string
    address?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    category?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    openingBalance?: FloatWithAggregatesFilter<"Supplier"> | number
    currentBalance?: FloatWithAggregatesFilter<"Supplier"> | number
    isActive?: BoolWithAggregatesFilter<"Supplier"> | boolean
    notes?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
  }

  export type PurchaseWhereInput = {
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    id?: StringFilter<"Purchase"> | string
    invoiceNumber?: StringFilter<"Purchase"> | string
    supplierId?: StringFilter<"Purchase"> | string
    supplierName?: StringFilter<"Purchase"> | string
    invoiceDate?: StringFilter<"Purchase"> | string
    items?: StringFilter<"Purchase"> | string
    totalAmount?: FloatFilter<"Purchase"> | number
    paidAmount?: FloatFilter<"Purchase"> | number
    remainingAmount?: FloatFilter<"Purchase"> | number
    paymentType?: StringFilter<"Purchase"> | string
    status?: StringFilter<"Purchase"> | string
    notes?: StringNullableFilter<"Purchase"> | string | null
    receivedBy?: StringNullableFilter<"Purchase"> | string | null
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }

  export type PurchaseOrderByWithRelationInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    supplierId?: SortOrder
    supplierName?: SortOrder
    invoiceDate?: SortOrder
    items?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    remainingAmount?: SortOrder
    paymentType?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    receivedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    supplier?: SupplierOrderByWithRelationInput
  }

  export type PurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    invoiceNumber?: string
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    supplierId?: StringFilter<"Purchase"> | string
    supplierName?: StringFilter<"Purchase"> | string
    invoiceDate?: StringFilter<"Purchase"> | string
    items?: StringFilter<"Purchase"> | string
    totalAmount?: FloatFilter<"Purchase"> | number
    paidAmount?: FloatFilter<"Purchase"> | number
    remainingAmount?: FloatFilter<"Purchase"> | number
    paymentType?: StringFilter<"Purchase"> | string
    status?: StringFilter<"Purchase"> | string
    notes?: StringNullableFilter<"Purchase"> | string | null
    receivedBy?: StringNullableFilter<"Purchase"> | string | null
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }, "id" | "invoiceNumber">

  export type PurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    supplierId?: SortOrder
    supplierName?: SortOrder
    invoiceDate?: SortOrder
    items?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    remainingAmount?: SortOrder
    paymentType?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    receivedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PurchaseCountOrderByAggregateInput
    _avg?: PurchaseAvgOrderByAggregateInput
    _max?: PurchaseMaxOrderByAggregateInput
    _min?: PurchaseMinOrderByAggregateInput
    _sum?: PurchaseSumOrderByAggregateInput
  }

  export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    OR?: PurchaseScalarWhereWithAggregatesInput[]
    NOT?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Purchase"> | string
    invoiceNumber?: StringWithAggregatesFilter<"Purchase"> | string
    supplierId?: StringWithAggregatesFilter<"Purchase"> | string
    supplierName?: StringWithAggregatesFilter<"Purchase"> | string
    invoiceDate?: StringWithAggregatesFilter<"Purchase"> | string
    items?: StringWithAggregatesFilter<"Purchase"> | string
    totalAmount?: FloatWithAggregatesFilter<"Purchase"> | number
    paidAmount?: FloatWithAggregatesFilter<"Purchase"> | number
    remainingAmount?: FloatWithAggregatesFilter<"Purchase"> | number
    paymentType?: StringWithAggregatesFilter<"Purchase"> | string
    status?: StringWithAggregatesFilter<"Purchase"> | string
    notes?: StringNullableWithAggregatesFilter<"Purchase"> | string | null
    receivedBy?: StringNullableWithAggregatesFilter<"Purchase"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
  }

  export type SupplierPaymentWhereInput = {
    AND?: SupplierPaymentWhereInput | SupplierPaymentWhereInput[]
    OR?: SupplierPaymentWhereInput[]
    NOT?: SupplierPaymentWhereInput | SupplierPaymentWhereInput[]
    id?: StringFilter<"SupplierPayment"> | string
    paymentNumber?: StringFilter<"SupplierPayment"> | string
    supplierId?: StringFilter<"SupplierPayment"> | string
    supplierName?: StringFilter<"SupplierPayment"> | string
    amount?: FloatFilter<"SupplierPayment"> | number
    paymentDate?: StringFilter<"SupplierPayment"> | string
    paymentMethod?: StringFilter<"SupplierPayment"> | string
    treasury?: StringFilter<"SupplierPayment"> | string
    notes?: StringNullableFilter<"SupplierPayment"> | string | null
    recordedBy?: StringNullableFilter<"SupplierPayment"> | string | null
    createdAt?: DateTimeFilter<"SupplierPayment"> | Date | string
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }

  export type SupplierPaymentOrderByWithRelationInput = {
    id?: SortOrder
    paymentNumber?: SortOrder
    supplierId?: SortOrder
    supplierName?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
    treasury?: SortOrder
    notes?: SortOrderInput | SortOrder
    recordedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    supplier?: SupplierOrderByWithRelationInput
  }

  export type SupplierPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    paymentNumber?: string
    AND?: SupplierPaymentWhereInput | SupplierPaymentWhereInput[]
    OR?: SupplierPaymentWhereInput[]
    NOT?: SupplierPaymentWhereInput | SupplierPaymentWhereInput[]
    supplierId?: StringFilter<"SupplierPayment"> | string
    supplierName?: StringFilter<"SupplierPayment"> | string
    amount?: FloatFilter<"SupplierPayment"> | number
    paymentDate?: StringFilter<"SupplierPayment"> | string
    paymentMethod?: StringFilter<"SupplierPayment"> | string
    treasury?: StringFilter<"SupplierPayment"> | string
    notes?: StringNullableFilter<"SupplierPayment"> | string | null
    recordedBy?: StringNullableFilter<"SupplierPayment"> | string | null
    createdAt?: DateTimeFilter<"SupplierPayment"> | Date | string
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }, "id" | "paymentNumber">

  export type SupplierPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    paymentNumber?: SortOrder
    supplierId?: SortOrder
    supplierName?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
    treasury?: SortOrder
    notes?: SortOrderInput | SortOrder
    recordedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SupplierPaymentCountOrderByAggregateInput
    _avg?: SupplierPaymentAvgOrderByAggregateInput
    _max?: SupplierPaymentMaxOrderByAggregateInput
    _min?: SupplierPaymentMinOrderByAggregateInput
    _sum?: SupplierPaymentSumOrderByAggregateInput
  }

  export type SupplierPaymentScalarWhereWithAggregatesInput = {
    AND?: SupplierPaymentScalarWhereWithAggregatesInput | SupplierPaymentScalarWhereWithAggregatesInput[]
    OR?: SupplierPaymentScalarWhereWithAggregatesInput[]
    NOT?: SupplierPaymentScalarWhereWithAggregatesInput | SupplierPaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupplierPayment"> | string
    paymentNumber?: StringWithAggregatesFilter<"SupplierPayment"> | string
    supplierId?: StringWithAggregatesFilter<"SupplierPayment"> | string
    supplierName?: StringWithAggregatesFilter<"SupplierPayment"> | string
    amount?: FloatWithAggregatesFilter<"SupplierPayment"> | number
    paymentDate?: StringWithAggregatesFilter<"SupplierPayment"> | string
    paymentMethod?: StringWithAggregatesFilter<"SupplierPayment"> | string
    treasury?: StringWithAggregatesFilter<"SupplierPayment"> | string
    notes?: StringNullableWithAggregatesFilter<"SupplierPayment"> | string | null
    recordedBy?: StringNullableWithAggregatesFilter<"SupplierPayment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SupplierPayment"> | Date | string
  }

  export type StockMovementWhereInput = {
    AND?: StockMovementWhereInput | StockMovementWhereInput[]
    OR?: StockMovementWhereInput[]
    NOT?: StockMovementWhereInput | StockMovementWhereInput[]
    id?: StringFilter<"StockMovement"> | string
    productId?: StringFilter<"StockMovement"> | string
    productName?: StringFilter<"StockMovement"> | string
    movementType?: StringFilter<"StockMovement"> | string
    quantity?: FloatFilter<"StockMovement"> | number
    balanceAfter?: FloatFilter<"StockMovement"> | number
    unitCost?: FloatNullableFilter<"StockMovement"> | number | null
    reference?: StringNullableFilter<"StockMovement"> | string | null
    notes?: StringNullableFilter<"StockMovement"> | string | null
    performedBy?: StringNullableFilter<"StockMovement"> | string | null
    createdAt?: DateTimeFilter<"StockMovement"> | Date | string
  }

  export type StockMovementOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    movementType?: SortOrder
    quantity?: SortOrder
    balanceAfter?: SortOrder
    unitCost?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    performedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type StockMovementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StockMovementWhereInput | StockMovementWhereInput[]
    OR?: StockMovementWhereInput[]
    NOT?: StockMovementWhereInput | StockMovementWhereInput[]
    productId?: StringFilter<"StockMovement"> | string
    productName?: StringFilter<"StockMovement"> | string
    movementType?: StringFilter<"StockMovement"> | string
    quantity?: FloatFilter<"StockMovement"> | number
    balanceAfter?: FloatFilter<"StockMovement"> | number
    unitCost?: FloatNullableFilter<"StockMovement"> | number | null
    reference?: StringNullableFilter<"StockMovement"> | string | null
    notes?: StringNullableFilter<"StockMovement"> | string | null
    performedBy?: StringNullableFilter<"StockMovement"> | string | null
    createdAt?: DateTimeFilter<"StockMovement"> | Date | string
  }, "id">

  export type StockMovementOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    movementType?: SortOrder
    quantity?: SortOrder
    balanceAfter?: SortOrder
    unitCost?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    performedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: StockMovementCountOrderByAggregateInput
    _avg?: StockMovementAvgOrderByAggregateInput
    _max?: StockMovementMaxOrderByAggregateInput
    _min?: StockMovementMinOrderByAggregateInput
    _sum?: StockMovementSumOrderByAggregateInput
  }

  export type StockMovementScalarWhereWithAggregatesInput = {
    AND?: StockMovementScalarWhereWithAggregatesInput | StockMovementScalarWhereWithAggregatesInput[]
    OR?: StockMovementScalarWhereWithAggregatesInput[]
    NOT?: StockMovementScalarWhereWithAggregatesInput | StockMovementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StockMovement"> | string
    productId?: StringWithAggregatesFilter<"StockMovement"> | string
    productName?: StringWithAggregatesFilter<"StockMovement"> | string
    movementType?: StringWithAggregatesFilter<"StockMovement"> | string
    quantity?: FloatWithAggregatesFilter<"StockMovement"> | number
    balanceAfter?: FloatWithAggregatesFilter<"StockMovement"> | number
    unitCost?: FloatNullableWithAggregatesFilter<"StockMovement"> | number | null
    reference?: StringNullableWithAggregatesFilter<"StockMovement"> | string | null
    notes?: StringNullableWithAggregatesFilter<"StockMovement"> | string | null
    performedBy?: StringNullableWithAggregatesFilter<"StockMovement"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StockMovement"> | Date | string
  }

  export type ReturnRecordWhereInput = {
    AND?: ReturnRecordWhereInput | ReturnRecordWhereInput[]
    OR?: ReturnRecordWhereInput[]
    NOT?: ReturnRecordWhereInput | ReturnRecordWhereInput[]
    id?: StringFilter<"ReturnRecord"> | string
    returnNumber?: StringFilter<"ReturnRecord"> | string
    type?: StringFilter<"ReturnRecord"> | string
    referenceNumber?: StringFilter<"ReturnRecord"> | string
    customerOrSupplier?: StringFilter<"ReturnRecord"> | string
    items?: StringFilter<"ReturnRecord"> | string
    totalAmount?: FloatFilter<"ReturnRecord"> | number
    reason?: StringNullableFilter<"ReturnRecord"> | string | null
    recordedBy?: StringNullableFilter<"ReturnRecord"> | string | null
    createdAt?: DateTimeFilter<"ReturnRecord"> | Date | string
  }

  export type ReturnRecordOrderByWithRelationInput = {
    id?: SortOrder
    returnNumber?: SortOrder
    type?: SortOrder
    referenceNumber?: SortOrder
    customerOrSupplier?: SortOrder
    items?: SortOrder
    totalAmount?: SortOrder
    reason?: SortOrderInput | SortOrder
    recordedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ReturnRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    returnNumber?: string
    AND?: ReturnRecordWhereInput | ReturnRecordWhereInput[]
    OR?: ReturnRecordWhereInput[]
    NOT?: ReturnRecordWhereInput | ReturnRecordWhereInput[]
    type?: StringFilter<"ReturnRecord"> | string
    referenceNumber?: StringFilter<"ReturnRecord"> | string
    customerOrSupplier?: StringFilter<"ReturnRecord"> | string
    items?: StringFilter<"ReturnRecord"> | string
    totalAmount?: FloatFilter<"ReturnRecord"> | number
    reason?: StringNullableFilter<"ReturnRecord"> | string | null
    recordedBy?: StringNullableFilter<"ReturnRecord"> | string | null
    createdAt?: DateTimeFilter<"ReturnRecord"> | Date | string
  }, "id" | "returnNumber">

  export type ReturnRecordOrderByWithAggregationInput = {
    id?: SortOrder
    returnNumber?: SortOrder
    type?: SortOrder
    referenceNumber?: SortOrder
    customerOrSupplier?: SortOrder
    items?: SortOrder
    totalAmount?: SortOrder
    reason?: SortOrderInput | SortOrder
    recordedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReturnRecordCountOrderByAggregateInput
    _avg?: ReturnRecordAvgOrderByAggregateInput
    _max?: ReturnRecordMaxOrderByAggregateInput
    _min?: ReturnRecordMinOrderByAggregateInput
    _sum?: ReturnRecordSumOrderByAggregateInput
  }

  export type ReturnRecordScalarWhereWithAggregatesInput = {
    AND?: ReturnRecordScalarWhereWithAggregatesInput | ReturnRecordScalarWhereWithAggregatesInput[]
    OR?: ReturnRecordScalarWhereWithAggregatesInput[]
    NOT?: ReturnRecordScalarWhereWithAggregatesInput | ReturnRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReturnRecord"> | string
    returnNumber?: StringWithAggregatesFilter<"ReturnRecord"> | string
    type?: StringWithAggregatesFilter<"ReturnRecord"> | string
    referenceNumber?: StringWithAggregatesFilter<"ReturnRecord"> | string
    customerOrSupplier?: StringWithAggregatesFilter<"ReturnRecord"> | string
    items?: StringWithAggregatesFilter<"ReturnRecord"> | string
    totalAmount?: FloatWithAggregatesFilter<"ReturnRecord"> | number
    reason?: StringNullableWithAggregatesFilter<"ReturnRecord"> | string | null
    recordedBy?: StringNullableWithAggregatesFilter<"ReturnRecord"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ReturnRecord"> | Date | string
  }

  export type TreasuryTransactionWhereInput = {
    AND?: TreasuryTransactionWhereInput | TreasuryTransactionWhereInput[]
    OR?: TreasuryTransactionWhereInput[]
    NOT?: TreasuryTransactionWhereInput | TreasuryTransactionWhereInput[]
    id?: StringFilter<"TreasuryTransaction"> | string
    type?: StringFilter<"TreasuryTransaction"> | string
    category?: StringFilter<"TreasuryTransaction"> | string
    amount?: FloatFilter<"TreasuryTransaction"> | number
    balanceAfter?: FloatFilter<"TreasuryTransaction"> | number
    description?: StringFilter<"TreasuryTransaction"> | string
    reference?: StringNullableFilter<"TreasuryTransaction"> | string | null
    recordedBy?: StringNullableFilter<"TreasuryTransaction"> | string | null
    createdAt?: DateTimeFilter<"TreasuryTransaction"> | Date | string
  }

  export type TreasuryTransactionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    balanceAfter?: SortOrder
    description?: SortOrder
    reference?: SortOrderInput | SortOrder
    recordedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type TreasuryTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TreasuryTransactionWhereInput | TreasuryTransactionWhereInput[]
    OR?: TreasuryTransactionWhereInput[]
    NOT?: TreasuryTransactionWhereInput | TreasuryTransactionWhereInput[]
    type?: StringFilter<"TreasuryTransaction"> | string
    category?: StringFilter<"TreasuryTransaction"> | string
    amount?: FloatFilter<"TreasuryTransaction"> | number
    balanceAfter?: FloatFilter<"TreasuryTransaction"> | number
    description?: StringFilter<"TreasuryTransaction"> | string
    reference?: StringNullableFilter<"TreasuryTransaction"> | string | null
    recordedBy?: StringNullableFilter<"TreasuryTransaction"> | string | null
    createdAt?: DateTimeFilter<"TreasuryTransaction"> | Date | string
  }, "id">

  export type TreasuryTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    balanceAfter?: SortOrder
    description?: SortOrder
    reference?: SortOrderInput | SortOrder
    recordedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TreasuryTransactionCountOrderByAggregateInput
    _avg?: TreasuryTransactionAvgOrderByAggregateInput
    _max?: TreasuryTransactionMaxOrderByAggregateInput
    _min?: TreasuryTransactionMinOrderByAggregateInput
    _sum?: TreasuryTransactionSumOrderByAggregateInput
  }

  export type TreasuryTransactionScalarWhereWithAggregatesInput = {
    AND?: TreasuryTransactionScalarWhereWithAggregatesInput | TreasuryTransactionScalarWhereWithAggregatesInput[]
    OR?: TreasuryTransactionScalarWhereWithAggregatesInput[]
    NOT?: TreasuryTransactionScalarWhereWithAggregatesInput | TreasuryTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TreasuryTransaction"> | string
    type?: StringWithAggregatesFilter<"TreasuryTransaction"> | string
    category?: StringWithAggregatesFilter<"TreasuryTransaction"> | string
    amount?: FloatWithAggregatesFilter<"TreasuryTransaction"> | number
    balanceAfter?: FloatWithAggregatesFilter<"TreasuryTransaction"> | number
    description?: StringWithAggregatesFilter<"TreasuryTransaction"> | string
    reference?: StringNullableWithAggregatesFilter<"TreasuryTransaction"> | string | null
    recordedBy?: StringNullableWithAggregatesFilter<"TreasuryTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TreasuryTransaction"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    senderId?: StringNullableFilter<"ChatMessage"> | string | null
    senderName?: StringFilter<"ChatMessage"> | string
    senderRole?: StringNullableFilter<"ChatMessage"> | string | null
    text?: StringFilter<"ChatMessage"> | string
    orderNumber?: StringNullableFilter<"ChatMessage"> | string | null
    customerPhone?: StringNullableFilter<"ChatMessage"> | string | null
    isStaff?: BoolFilter<"ChatMessage"> | boolean
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrderInput | SortOrder
    senderName?: SortOrder
    senderRole?: SortOrderInput | SortOrder
    text?: SortOrder
    orderNumber?: SortOrderInput | SortOrder
    customerPhone?: SortOrderInput | SortOrder
    isStaff?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    senderId?: StringNullableFilter<"ChatMessage"> | string | null
    senderName?: StringFilter<"ChatMessage"> | string
    senderRole?: StringNullableFilter<"ChatMessage"> | string | null
    text?: StringFilter<"ChatMessage"> | string
    orderNumber?: StringNullableFilter<"ChatMessage"> | string | null
    customerPhone?: StringNullableFilter<"ChatMessage"> | string | null
    isStaff?: BoolFilter<"ChatMessage"> | boolean
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrderInput | SortOrder
    senderName?: SortOrder
    senderRole?: SortOrderInput | SortOrder
    text?: SortOrder
    orderNumber?: SortOrderInput | SortOrder
    customerPhone?: SortOrderInput | SortOrder
    isStaff?: SortOrder
    createdAt?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    senderId?: StringNullableWithAggregatesFilter<"ChatMessage"> | string | null
    senderName?: StringWithAggregatesFilter<"ChatMessage"> | string
    senderRole?: StringNullableWithAggregatesFilter<"ChatMessage"> | string | null
    text?: StringWithAggregatesFilter<"ChatMessage"> | string
    orderNumber?: StringNullableWithAggregatesFilter<"ChatMessage"> | string | null
    customerPhone?: StringNullableWithAggregatesFilter<"ChatMessage"> | string | null
    isStaff?: BoolWithAggregatesFilter<"ChatMessage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type SystemSettingsWhereInput = {
    AND?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    OR?: SystemSettingsWhereInput[]
    NOT?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    id?: StringFilter<"SystemSettings"> | string
    storeName?: StringFilter<"SystemSettings"> | string
    tagline?: StringFilter<"SystemSettings"> | string
    mainBranch?: StringFilter<"SystemSettings"> | string
    phone?: StringFilter<"SystemSettings"> | string
    hotlines?: StringFilter<"SystemSettings"> | string
    whatsapp?: StringFilter<"SystemSettings"> | string
    address?: StringFilter<"SystemSettings"> | string
    taxNumber?: StringFilter<"SystemSettings"> | string
    commercialReg?: StringFilter<"SystemSettings"> | string
    freeDeliveryThreshold?: FloatFilter<"SystemSettings"> | number
    expressDeliveryEnabled?: BoolFilter<"SystemSettings"> | boolean
    expressMinutes?: IntFilter<"SystemSettings"> | number
    isLockedDown?: BoolFilter<"SystemSettings"> | boolean
    bannerNotice?: StringNullableFilter<"SystemSettings"> | string | null
    weightPrefixes?: StringFilter<"SystemSettings"> | string
    pricePrefixes?: StringFilter<"SystemSettings"> | string
    pluDigits?: IntFilter<"SystemSettings"> | number
    updatedAt?: DateTimeFilter<"SystemSettings"> | Date | string
  }

  export type SystemSettingsOrderByWithRelationInput = {
    id?: SortOrder
    storeName?: SortOrder
    tagline?: SortOrder
    mainBranch?: SortOrder
    phone?: SortOrder
    hotlines?: SortOrder
    whatsapp?: SortOrder
    address?: SortOrder
    taxNumber?: SortOrder
    commercialReg?: SortOrder
    freeDeliveryThreshold?: SortOrder
    expressDeliveryEnabled?: SortOrder
    expressMinutes?: SortOrder
    isLockedDown?: SortOrder
    bannerNotice?: SortOrderInput | SortOrder
    weightPrefixes?: SortOrder
    pricePrefixes?: SortOrder
    pluDigits?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    OR?: SystemSettingsWhereInput[]
    NOT?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    storeName?: StringFilter<"SystemSettings"> | string
    tagline?: StringFilter<"SystemSettings"> | string
    mainBranch?: StringFilter<"SystemSettings"> | string
    phone?: StringFilter<"SystemSettings"> | string
    hotlines?: StringFilter<"SystemSettings"> | string
    whatsapp?: StringFilter<"SystemSettings"> | string
    address?: StringFilter<"SystemSettings"> | string
    taxNumber?: StringFilter<"SystemSettings"> | string
    commercialReg?: StringFilter<"SystemSettings"> | string
    freeDeliveryThreshold?: FloatFilter<"SystemSettings"> | number
    expressDeliveryEnabled?: BoolFilter<"SystemSettings"> | boolean
    expressMinutes?: IntFilter<"SystemSettings"> | number
    isLockedDown?: BoolFilter<"SystemSettings"> | boolean
    bannerNotice?: StringNullableFilter<"SystemSettings"> | string | null
    weightPrefixes?: StringFilter<"SystemSettings"> | string
    pricePrefixes?: StringFilter<"SystemSettings"> | string
    pluDigits?: IntFilter<"SystemSettings"> | number
    updatedAt?: DateTimeFilter<"SystemSettings"> | Date | string
  }, "id">

  export type SystemSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    storeName?: SortOrder
    tagline?: SortOrder
    mainBranch?: SortOrder
    phone?: SortOrder
    hotlines?: SortOrder
    whatsapp?: SortOrder
    address?: SortOrder
    taxNumber?: SortOrder
    commercialReg?: SortOrder
    freeDeliveryThreshold?: SortOrder
    expressDeliveryEnabled?: SortOrder
    expressMinutes?: SortOrder
    isLockedDown?: SortOrder
    bannerNotice?: SortOrderInput | SortOrder
    weightPrefixes?: SortOrder
    pricePrefixes?: SortOrder
    pluDigits?: SortOrder
    updatedAt?: SortOrder
    _count?: SystemSettingsCountOrderByAggregateInput
    _avg?: SystemSettingsAvgOrderByAggregateInput
    _max?: SystemSettingsMaxOrderByAggregateInput
    _min?: SystemSettingsMinOrderByAggregateInput
    _sum?: SystemSettingsSumOrderByAggregateInput
  }

  export type SystemSettingsScalarWhereWithAggregatesInput = {
    AND?: SystemSettingsScalarWhereWithAggregatesInput | SystemSettingsScalarWhereWithAggregatesInput[]
    OR?: SystemSettingsScalarWhereWithAggregatesInput[]
    NOT?: SystemSettingsScalarWhereWithAggregatesInput | SystemSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemSettings"> | string
    storeName?: StringWithAggregatesFilter<"SystemSettings"> | string
    tagline?: StringWithAggregatesFilter<"SystemSettings"> | string
    mainBranch?: StringWithAggregatesFilter<"SystemSettings"> | string
    phone?: StringWithAggregatesFilter<"SystemSettings"> | string
    hotlines?: StringWithAggregatesFilter<"SystemSettings"> | string
    whatsapp?: StringWithAggregatesFilter<"SystemSettings"> | string
    address?: StringWithAggregatesFilter<"SystemSettings"> | string
    taxNumber?: StringWithAggregatesFilter<"SystemSettings"> | string
    commercialReg?: StringWithAggregatesFilter<"SystemSettings"> | string
    freeDeliveryThreshold?: FloatWithAggregatesFilter<"SystemSettings"> | number
    expressDeliveryEnabled?: BoolWithAggregatesFilter<"SystemSettings"> | boolean
    expressMinutes?: IntWithAggregatesFilter<"SystemSettings"> | number
    isLockedDown?: BoolWithAggregatesFilter<"SystemSettings"> | boolean
    bannerNotice?: StringNullableWithAggregatesFilter<"SystemSettings"> | string | null
    weightPrefixes?: StringWithAggregatesFilter<"SystemSettings"> | string
    pricePrefixes?: StringWithAggregatesFilter<"SystemSettings"> | string
    pluDigits?: IntWithAggregatesFilter<"SystemSettings"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"SystemSettings"> | Date | string
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    id?: StringFilter<"Expense"> | string
    description?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    expenseDate?: StringFilter<"Expense"> | string
    category?: StringFilter<"Expense"> | string
    recordedBy?: StringNullableFilter<"Expense"> | string | null
    createdAt?: DateTimeFilter<"Expense"> | Date | string
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    expenseDate?: SortOrder
    category?: SortOrder
    recordedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    description?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    expenseDate?: StringFilter<"Expense"> | string
    category?: StringFilter<"Expense"> | string
    recordedBy?: StringNullableFilter<"Expense"> | string | null
    createdAt?: DateTimeFilter<"Expense"> | Date | string
  }, "id">

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    expenseDate?: SortOrder
    category?: SortOrder
    recordedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _avg?: ExpenseAvgOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
    _sum?: ExpenseSumOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    OR?: ExpenseScalarWhereWithAggregatesInput[]
    NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Expense"> | string
    description?: StringWithAggregatesFilter<"Expense"> | string
    amount?: FloatWithAggregatesFilter<"Expense"> | number
    expenseDate?: StringWithAggregatesFilter<"Expense"> | string
    category?: StringWithAggregatesFilter<"Expense"> | string
    recordedBy?: StringNullableWithAggregatesFilter<"Expense"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    username?: string | null
    passwordHash?: string | null
    phone: string
    pin?: string
    role?: string
    avatar?: string | null
    branch?: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    username?: string | null
    passwordHash?: string | null
    phone: string
    pin?: string
    role?: string
    avatar?: string | null
    branch?: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    username?: string | null
    passwordHash?: string | null
    phone: string
    pin?: string
    role?: string
    avatar?: string | null
    branch?: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchCreateInput = {
    id?: string
    code: string
    name: string
    address: string
    phone?: string
    isOpen?: boolean
    deliveryActive?: boolean
    createdAt?: Date | string
  }

  export type BranchUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    address: string
    phone?: string
    isOpen?: boolean
    deliveryActive?: boolean
    createdAt?: Date | string
  }

  export type BranchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    deliveryActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    deliveryActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchCreateManyInput = {
    id?: string
    code: string
    name: string
    address: string
    phone?: string
    isOpen?: boolean
    deliveryActive?: boolean
    createdAt?: Date | string
  }

  export type BranchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    deliveryActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    deliveryActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    nameAr: string
    nameEn?: string | null
    icon?: string | null
    image?: string | null
    badge?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    nameAr: string
    nameEn?: string | null
    icon?: string | null
    image?: string | null
    badge?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateManyInput = {
    id?: string
    nameAr: string
    nameEn?: string | null
    icon?: string | null
    image?: string | null
    badge?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    nameAr: string
    brand?: string | null
    category: string
    unit?: string
    barcode?: string | null
    costPrice?: number
    basePrice: number
    originalPrice?: number | null
    discountPercent?: number | null
    isOffer?: boolean
    isExpress?: boolean
    isWeighted?: boolean
    scaleItemCode?: string | null
    shelfLifeDays?: number
    scaleTareWeight?: number
    inStock?: boolean
    stockQty?: number
    minStockQty?: number
    openingStock?: number
    image?: string | null
    description?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    nameAr: string
    brand?: string | null
    category: string
    unit?: string
    barcode?: string | null
    costPrice?: number
    basePrice: number
    originalPrice?: number | null
    discountPercent?: number | null
    isOffer?: boolean
    isExpress?: boolean
    isWeighted?: boolean
    scaleItemCode?: string | null
    shelfLifeDays?: number
    scaleTareWeight?: number
    inStock?: boolean
    stockQty?: number
    minStockQty?: number
    openingStock?: number
    image?: string | null
    description?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: FloatFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
    originalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercent?: NullableIntFieldUpdateOperationsInput | number | null
    isOffer?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    isWeighted?: BoolFieldUpdateOperationsInput | boolean
    scaleItemCode?: NullableStringFieldUpdateOperationsInput | string | null
    shelfLifeDays?: IntFieldUpdateOperationsInput | number
    scaleTareWeight?: FloatFieldUpdateOperationsInput | number
    inStock?: BoolFieldUpdateOperationsInput | boolean
    stockQty?: IntFieldUpdateOperationsInput | number
    minStockQty?: IntFieldUpdateOperationsInput | number
    openingStock?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: FloatFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
    originalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercent?: NullableIntFieldUpdateOperationsInput | number | null
    isOffer?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    isWeighted?: BoolFieldUpdateOperationsInput | boolean
    scaleItemCode?: NullableStringFieldUpdateOperationsInput | string | null
    shelfLifeDays?: IntFieldUpdateOperationsInput | number
    scaleTareWeight?: FloatFieldUpdateOperationsInput | number
    inStock?: BoolFieldUpdateOperationsInput | boolean
    stockQty?: IntFieldUpdateOperationsInput | number
    minStockQty?: IntFieldUpdateOperationsInput | number
    openingStock?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyInput = {
    id?: string
    nameAr: string
    brand?: string | null
    category: string
    unit?: string
    barcode?: string | null
    costPrice?: number
    basePrice: number
    originalPrice?: number | null
    discountPercent?: number | null
    isOffer?: boolean
    isExpress?: boolean
    isWeighted?: boolean
    scaleItemCode?: string | null
    shelfLifeDays?: number
    scaleTareWeight?: number
    inStock?: boolean
    stockQty?: number
    minStockQty?: number
    openingStock?: number
    image?: string | null
    description?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: FloatFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
    originalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercent?: NullableIntFieldUpdateOperationsInput | number | null
    isOffer?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    isWeighted?: BoolFieldUpdateOperationsInput | boolean
    scaleItemCode?: NullableStringFieldUpdateOperationsInput | string | null
    shelfLifeDays?: IntFieldUpdateOperationsInput | number
    scaleTareWeight?: FloatFieldUpdateOperationsInput | number
    inStock?: BoolFieldUpdateOperationsInput | boolean
    stockQty?: IntFieldUpdateOperationsInput | number
    minStockQty?: IntFieldUpdateOperationsInput | number
    openingStock?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: FloatFieldUpdateOperationsInput | number
    basePrice?: FloatFieldUpdateOperationsInput | number
    originalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercent?: NullableIntFieldUpdateOperationsInput | number | null
    isOffer?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    isWeighted?: BoolFieldUpdateOperationsInput | boolean
    scaleItemCode?: NullableStringFieldUpdateOperationsInput | string | null
    shelfLifeDays?: IntFieldUpdateOperationsInput | number
    scaleTareWeight?: FloatFieldUpdateOperationsInput | number
    inStock?: BoolFieldUpdateOperationsInput | boolean
    stockQty?: IntFieldUpdateOperationsInput | number
    minStockQty?: IntFieldUpdateOperationsInput | number
    openingStock?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    orderNumber: string
    customerName: string
    phone: string
    address: string
    zone?: string
    branchName?: string
    orderType?: string
    status?: string
    items: string
    subtotal: number
    deliveryFee?: number
    discount?: number
    total: number
    paymentMethod?: string
    notes?: string | null
    captainId?: string | null
    captainName?: string | null
    captainPhone?: string | null
    assignedPicker?: string | null
    timeline?: string
    isSettled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    orderNumber: string
    customerName: string
    phone: string
    address: string
    zone?: string
    branchName?: string
    orderType?: string
    status?: string
    items: string
    subtotal: number
    deliveryFee?: number
    discount?: number
    total: number
    paymentMethod?: string
    notes?: string | null
    captainId?: string | null
    captainName?: string | null
    captainPhone?: string | null
    assignedPicker?: string | null
    timeline?: string
    isSettled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zone?: StringFieldUpdateOperationsInput | string
    branchName?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    subtotal?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    captainId?: NullableStringFieldUpdateOperationsInput | string | null
    captainName?: NullableStringFieldUpdateOperationsInput | string | null
    captainPhone?: NullableStringFieldUpdateOperationsInput | string | null
    assignedPicker?: NullableStringFieldUpdateOperationsInput | string | null
    timeline?: StringFieldUpdateOperationsInput | string
    isSettled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zone?: StringFieldUpdateOperationsInput | string
    branchName?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    subtotal?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    captainId?: NullableStringFieldUpdateOperationsInput | string | null
    captainName?: NullableStringFieldUpdateOperationsInput | string | null
    captainPhone?: NullableStringFieldUpdateOperationsInput | string | null
    assignedPicker?: NullableStringFieldUpdateOperationsInput | string | null
    timeline?: StringFieldUpdateOperationsInput | string
    isSettled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    id?: string
    orderNumber: string
    customerName: string
    phone: string
    address: string
    zone?: string
    branchName?: string
    orderType?: string
    status?: string
    items: string
    subtotal: number
    deliveryFee?: number
    discount?: number
    total: number
    paymentMethod?: string
    notes?: string | null
    captainId?: string | null
    captainName?: string | null
    captainPhone?: string | null
    assignedPicker?: string | null
    timeline?: string
    isSettled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zone?: StringFieldUpdateOperationsInput | string
    branchName?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    subtotal?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    captainId?: NullableStringFieldUpdateOperationsInput | string | null
    captainName?: NullableStringFieldUpdateOperationsInput | string | null
    captainPhone?: NullableStringFieldUpdateOperationsInput | string | null
    assignedPicker?: NullableStringFieldUpdateOperationsInput | string | null
    timeline?: StringFieldUpdateOperationsInput | string
    isSettled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zone?: StringFieldUpdateOperationsInput | string
    branchName?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    subtotal?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    captainId?: NullableStringFieldUpdateOperationsInput | string | null
    captainName?: NullableStringFieldUpdateOperationsInput | string | null
    captainPhone?: NullableStringFieldUpdateOperationsInput | string | null
    assignedPicker?: NullableStringFieldUpdateOperationsInput | string | null
    timeline?: StringFieldUpdateOperationsInput | string
    isSettled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    name: string
    phone: string
    address?: string | null
    zone?: string | null
    totalOrders?: number
    totalSpend?: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    address?: string | null
    zone?: string | null
    totalOrders?: number
    totalSpend?: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    totalOrders?: IntFieldUpdateOperationsInput | number
    totalSpend?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    totalOrders?: IntFieldUpdateOperationsInput | number
    totalSpend?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateManyInput = {
    id?: string
    name: string
    phone: string
    address?: string | null
    zone?: string | null
    totalOrders?: number
    totalSpend?: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    totalOrders?: IntFieldUpdateOperationsInput | number
    totalSpend?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    totalOrders?: IntFieldUpdateOperationsInput | number
    totalSpend?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaptainCreateInput = {
    id?: string
    name: string
    phone: string
    vehicle?: string
    zone?: string
    pendingBalance?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type CaptainUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    vehicle?: string
    zone?: string
    pendingBalance?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type CaptainUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicle?: StringFieldUpdateOperationsInput | string
    zone?: StringFieldUpdateOperationsInput | string
    pendingBalance?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaptainUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicle?: StringFieldUpdateOperationsInput | string
    zone?: StringFieldUpdateOperationsInput | string
    pendingBalance?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaptainCreateManyInput = {
    id?: string
    name: string
    phone: string
    vehicle?: string
    zone?: string
    pendingBalance?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type CaptainUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicle?: StringFieldUpdateOperationsInput | string
    zone?: StringFieldUpdateOperationsInput | string
    pendingBalance?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaptainUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicle?: StringFieldUpdateOperationsInput | string
    zone?: StringFieldUpdateOperationsInput | string
    pendingBalance?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryZoneCreateInput = {
    id?: string
    nameAr: string
    fee: number
    timeMinutes?: number
    minOrder?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type DeliveryZoneUncheckedCreateInput = {
    id?: string
    nameAr: string
    fee: number
    timeMinutes?: number
    minOrder?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type DeliveryZoneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    fee?: FloatFieldUpdateOperationsInput | number
    timeMinutes?: IntFieldUpdateOperationsInput | number
    minOrder?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryZoneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    fee?: FloatFieldUpdateOperationsInput | number
    timeMinutes?: IntFieldUpdateOperationsInput | number
    minOrder?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryZoneCreateManyInput = {
    id?: string
    nameAr: string
    fee: number
    timeMinutes?: number
    minOrder?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type DeliveryZoneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    fee?: FloatFieldUpdateOperationsInput | number
    timeMinutes?: IntFieldUpdateOperationsInput | number
    minOrder?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryZoneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    fee?: FloatFieldUpdateOperationsInput | number
    timeMinutes?: IntFieldUpdateOperationsInput | number
    minOrder?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierCreateInput = {
    id?: string
    name: string
    contactPerson?: string | null
    phone: string
    address?: string | null
    category?: string | null
    openingBalance?: number
    currentBalance?: number
    isActive?: boolean
    notes?: string | null
    createdAt?: Date | string
    purchases?: PurchaseCreateNestedManyWithoutSupplierInput
    payments?: SupplierPaymentCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateInput = {
    id?: string
    name: string
    contactPerson?: string | null
    phone: string
    address?: string | null
    category?: string | null
    openingBalance?: number
    currentBalance?: number
    isActive?: boolean
    notes?: string | null
    createdAt?: Date | string
    purchases?: PurchaseUncheckedCreateNestedManyWithoutSupplierInput
    payments?: SupplierPaymentUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    openingBalance?: FloatFieldUpdateOperationsInput | number
    currentBalance?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUpdateManyWithoutSupplierNestedInput
    payments?: SupplierPaymentUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    openingBalance?: FloatFieldUpdateOperationsInput | number
    currentBalance?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUncheckedUpdateManyWithoutSupplierNestedInput
    payments?: SupplierPaymentUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateManyInput = {
    id?: string
    name: string
    contactPerson?: string | null
    phone: string
    address?: string | null
    category?: string | null
    openingBalance?: number
    currentBalance?: number
    isActive?: boolean
    notes?: string | null
    createdAt?: Date | string
  }

  export type SupplierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    openingBalance?: FloatFieldUpdateOperationsInput | number
    currentBalance?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    openingBalance?: FloatFieldUpdateOperationsInput | number
    currentBalance?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateInput = {
    id?: string
    invoiceNumber: string
    supplierName: string
    invoiceDate: string
    items: string
    totalAmount: number
    paidAmount?: number
    remainingAmount?: number
    paymentType?: string
    status?: string
    notes?: string | null
    receivedBy?: string | null
    createdAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutPurchasesInput
  }

  export type PurchaseUncheckedCreateInput = {
    id?: string
    invoiceNumber: string
    supplierId: string
    supplierName: string
    invoiceDate: string
    items: string
    totalAmount: number
    paidAmount?: number
    remainingAmount?: number
    paymentType?: string
    status?: string
    notes?: string | null
    receivedBy?: string | null
    createdAt?: Date | string
  }

  export type PurchaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    invoiceDate?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    remainingAmount?: FloatFieldUpdateOperationsInput | number
    paymentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receivedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    invoiceDate?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    remainingAmount?: FloatFieldUpdateOperationsInput | number
    paymentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receivedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateManyInput = {
    id?: string
    invoiceNumber: string
    supplierId: string
    supplierName: string
    invoiceDate: string
    items: string
    totalAmount: number
    paidAmount?: number
    remainingAmount?: number
    paymentType?: string
    status?: string
    notes?: string | null
    receivedBy?: string | null
    createdAt?: Date | string
  }

  export type PurchaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    invoiceDate?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    remainingAmount?: FloatFieldUpdateOperationsInput | number
    paymentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receivedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    invoiceDate?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    remainingAmount?: FloatFieldUpdateOperationsInput | number
    paymentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receivedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierPaymentCreateInput = {
    id?: string
    paymentNumber: string
    supplierName: string
    amount: number
    paymentDate: string
    paymentMethod?: string
    treasury?: string
    notes?: string | null
    recordedBy?: string | null
    createdAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutPaymentsInput
  }

  export type SupplierPaymentUncheckedCreateInput = {
    id?: string
    paymentNumber: string
    supplierId: string
    supplierName: string
    amount: number
    paymentDate: string
    paymentMethod?: string
    treasury?: string
    notes?: string | null
    recordedBy?: string | null
    createdAt?: Date | string
  }

  export type SupplierPaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentNumber?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    treasury?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type SupplierPaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    treasury?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierPaymentCreateManyInput = {
    id?: string
    paymentNumber: string
    supplierId: string
    supplierName: string
    amount: number
    paymentDate: string
    paymentMethod?: string
    treasury?: string
    notes?: string | null
    recordedBy?: string | null
    createdAt?: Date | string
  }

  export type SupplierPaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentNumber?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    treasury?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierPaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    treasury?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementCreateInput = {
    id?: string
    productId: string
    productName: string
    movementType: string
    quantity: number
    balanceAfter: number
    unitCost?: number | null
    reference?: string | null
    notes?: string | null
    performedBy?: string | null
    createdAt?: Date | string
  }

  export type StockMovementUncheckedCreateInput = {
    id?: string
    productId: string
    productName: string
    movementType: string
    quantity: number
    balanceAfter: number
    unitCost?: number | null
    reference?: string | null
    notes?: string | null
    performedBy?: string | null
    createdAt?: Date | string
  }

  export type StockMovementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    movementType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    balanceAfter?: FloatFieldUpdateOperationsInput | number
    unitCost?: NullableFloatFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    movementType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    balanceAfter?: FloatFieldUpdateOperationsInput | number
    unitCost?: NullableFloatFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementCreateManyInput = {
    id?: string
    productId: string
    productName: string
    movementType: string
    quantity: number
    balanceAfter: number
    unitCost?: number | null
    reference?: string | null
    notes?: string | null
    performedBy?: string | null
    createdAt?: Date | string
  }

  export type StockMovementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    movementType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    balanceAfter?: FloatFieldUpdateOperationsInput | number
    unitCost?: NullableFloatFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    movementType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    balanceAfter?: FloatFieldUpdateOperationsInput | number
    unitCost?: NullableFloatFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReturnRecordCreateInput = {
    id?: string
    returnNumber: string
    type: string
    referenceNumber: string
    customerOrSupplier: string
    items: string
    totalAmount: number
    reason?: string | null
    recordedBy?: string | null
    createdAt?: Date | string
  }

  export type ReturnRecordUncheckedCreateInput = {
    id?: string
    returnNumber: string
    type: string
    referenceNumber: string
    customerOrSupplier: string
    items: string
    totalAmount: number
    reason?: string | null
    recordedBy?: string | null
    createdAt?: Date | string
  }

  export type ReturnRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    returnNumber?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    referenceNumber?: StringFieldUpdateOperationsInput | string
    customerOrSupplier?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    recordedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReturnRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    returnNumber?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    referenceNumber?: StringFieldUpdateOperationsInput | string
    customerOrSupplier?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    recordedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReturnRecordCreateManyInput = {
    id?: string
    returnNumber: string
    type: string
    referenceNumber: string
    customerOrSupplier: string
    items: string
    totalAmount: number
    reason?: string | null
    recordedBy?: string | null
    createdAt?: Date | string
  }

  export type ReturnRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    returnNumber?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    referenceNumber?: StringFieldUpdateOperationsInput | string
    customerOrSupplier?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    recordedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReturnRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    returnNumber?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    referenceNumber?: StringFieldUpdateOperationsInput | string
    customerOrSupplier?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    recordedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreasuryTransactionCreateInput = {
    id?: string
    type: string
    category: string
    amount: number
    balanceAfter?: number
    description: string
    reference?: string | null
    recordedBy?: string | null
    createdAt?: Date | string
  }

  export type TreasuryTransactionUncheckedCreateInput = {
    id?: string
    type: string
    category: string
    amount: number
    balanceAfter?: number
    description: string
    reference?: string | null
    recordedBy?: string | null
    createdAt?: Date | string
  }

  export type TreasuryTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    balanceAfter?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    recordedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreasuryTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    balanceAfter?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    recordedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreasuryTransactionCreateManyInput = {
    id?: string
    type: string
    category: string
    amount: number
    balanceAfter?: number
    description: string
    reference?: string | null
    recordedBy?: string | null
    createdAt?: Date | string
  }

  export type TreasuryTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    balanceAfter?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    recordedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreasuryTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    balanceAfter?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    recordedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    id?: string
    senderId?: string | null
    senderName: string
    senderRole?: string | null
    text: string
    orderNumber?: string | null
    customerPhone?: string | null
    isStaff?: boolean
    createdAt?: Date | string
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    senderId?: string | null
    senderName: string
    senderRole?: string | null
    text: string
    orderNumber?: string | null
    customerPhone?: string | null
    isStaff?: boolean
    createdAt?: Date | string
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    senderName?: StringFieldUpdateOperationsInput | string
    senderRole?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    orderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    senderName?: StringFieldUpdateOperationsInput | string
    senderRole?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    orderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    senderId?: string | null
    senderName: string
    senderRole?: string | null
    text: string
    orderNumber?: string | null
    customerPhone?: string | null
    isStaff?: boolean
    createdAt?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    senderName?: StringFieldUpdateOperationsInput | string
    senderRole?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    orderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    senderName?: StringFieldUpdateOperationsInput | string
    senderRole?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    orderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsCreateInput = {
    id?: string
    storeName?: string
    tagline?: string
    mainBranch?: string
    phone?: string
    hotlines?: string
    whatsapp?: string
    address?: string
    taxNumber?: string
    commercialReg?: string
    freeDeliveryThreshold?: number
    expressDeliveryEnabled?: boolean
    expressMinutes?: number
    isLockedDown?: boolean
    bannerNotice?: string | null
    weightPrefixes?: string
    pricePrefixes?: string
    pluDigits?: number
    updatedAt?: Date | string
  }

  export type SystemSettingsUncheckedCreateInput = {
    id?: string
    storeName?: string
    tagline?: string
    mainBranch?: string
    phone?: string
    hotlines?: string
    whatsapp?: string
    address?: string
    taxNumber?: string
    commercialReg?: string
    freeDeliveryThreshold?: number
    expressDeliveryEnabled?: boolean
    expressMinutes?: number
    isLockedDown?: boolean
    bannerNotice?: string | null
    weightPrefixes?: string
    pricePrefixes?: string
    pluDigits?: number
    updatedAt?: Date | string
  }

  export type SystemSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    mainBranch?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hotlines?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    taxNumber?: StringFieldUpdateOperationsInput | string
    commercialReg?: StringFieldUpdateOperationsInput | string
    freeDeliveryThreshold?: FloatFieldUpdateOperationsInput | number
    expressDeliveryEnabled?: BoolFieldUpdateOperationsInput | boolean
    expressMinutes?: IntFieldUpdateOperationsInput | number
    isLockedDown?: BoolFieldUpdateOperationsInput | boolean
    bannerNotice?: NullableStringFieldUpdateOperationsInput | string | null
    weightPrefixes?: StringFieldUpdateOperationsInput | string
    pricePrefixes?: StringFieldUpdateOperationsInput | string
    pluDigits?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    mainBranch?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hotlines?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    taxNumber?: StringFieldUpdateOperationsInput | string
    commercialReg?: StringFieldUpdateOperationsInput | string
    freeDeliveryThreshold?: FloatFieldUpdateOperationsInput | number
    expressDeliveryEnabled?: BoolFieldUpdateOperationsInput | boolean
    expressMinutes?: IntFieldUpdateOperationsInput | number
    isLockedDown?: BoolFieldUpdateOperationsInput | boolean
    bannerNotice?: NullableStringFieldUpdateOperationsInput | string | null
    weightPrefixes?: StringFieldUpdateOperationsInput | string
    pricePrefixes?: StringFieldUpdateOperationsInput | string
    pluDigits?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsCreateManyInput = {
    id?: string
    storeName?: string
    tagline?: string
    mainBranch?: string
    phone?: string
    hotlines?: string
    whatsapp?: string
    address?: string
    taxNumber?: string
    commercialReg?: string
    freeDeliveryThreshold?: number
    expressDeliveryEnabled?: boolean
    expressMinutes?: number
    isLockedDown?: boolean
    bannerNotice?: string | null
    weightPrefixes?: string
    pricePrefixes?: string
    pluDigits?: number
    updatedAt?: Date | string
  }

  export type SystemSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    mainBranch?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hotlines?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    taxNumber?: StringFieldUpdateOperationsInput | string
    commercialReg?: StringFieldUpdateOperationsInput | string
    freeDeliveryThreshold?: FloatFieldUpdateOperationsInput | number
    expressDeliveryEnabled?: BoolFieldUpdateOperationsInput | boolean
    expressMinutes?: IntFieldUpdateOperationsInput | number
    isLockedDown?: BoolFieldUpdateOperationsInput | boolean
    bannerNotice?: NullableStringFieldUpdateOperationsInput | string | null
    weightPrefixes?: StringFieldUpdateOperationsInput | string
    pricePrefixes?: StringFieldUpdateOperationsInput | string
    pluDigits?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    mainBranch?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hotlines?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    taxNumber?: StringFieldUpdateOperationsInput | string
    commercialReg?: StringFieldUpdateOperationsInput | string
    freeDeliveryThreshold?: FloatFieldUpdateOperationsInput | number
    expressDeliveryEnabled?: BoolFieldUpdateOperationsInput | boolean
    expressMinutes?: IntFieldUpdateOperationsInput | number
    isLockedDown?: BoolFieldUpdateOperationsInput | boolean
    bannerNotice?: NullableStringFieldUpdateOperationsInput | string | null
    weightPrefixes?: StringFieldUpdateOperationsInput | string
    pricePrefixes?: StringFieldUpdateOperationsInput | string
    pluDigits?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseCreateInput = {
    id?: string
    description: string
    amount: number
    expenseDate: string
    category?: string
    recordedBy?: string | null
    createdAt?: Date | string
  }

  export type ExpenseUncheckedCreateInput = {
    id?: string
    description: string
    amount: number
    expenseDate: string
    category?: string
    recordedBy?: string | null
    createdAt?: Date | string
  }

  export type ExpenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    expenseDate?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    recordedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    expenseDate?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    recordedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseCreateManyInput = {
    id?: string
    description: string
    amount: number
    expenseDate: string
    category?: string
    recordedBy?: string | null
    createdAt?: Date | string
  }

  export type ExpenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    expenseDate?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    recordedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    expenseDate?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    recordedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    pin?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    branch?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    pin?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    branch?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    pin?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    branch?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
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

  export type BranchCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    isOpen?: SortOrder
    deliveryActive?: SortOrder
    createdAt?: SortOrder
  }

  export type BranchMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    isOpen?: SortOrder
    deliveryActive?: SortOrder
    createdAt?: SortOrder
  }

  export type BranchMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    isOpen?: SortOrder
    deliveryActive?: SortOrder
    createdAt?: SortOrder
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

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    nameAr?: SortOrder
    nameEn?: SortOrder
    icon?: SortOrder
    image?: SortOrder
    badge?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    nameAr?: SortOrder
    nameEn?: SortOrder
    icon?: SortOrder
    image?: SortOrder
    badge?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    nameAr?: SortOrder
    nameEn?: SortOrder
    icon?: SortOrder
    image?: SortOrder
    badge?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    sortOrder?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    nameAr?: SortOrder
    brand?: SortOrder
    category?: SortOrder
    unit?: SortOrder
    barcode?: SortOrder
    costPrice?: SortOrder
    basePrice?: SortOrder
    originalPrice?: SortOrder
    discountPercent?: SortOrder
    isOffer?: SortOrder
    isExpress?: SortOrder
    isWeighted?: SortOrder
    scaleItemCode?: SortOrder
    shelfLifeDays?: SortOrder
    scaleTareWeight?: SortOrder
    inStock?: SortOrder
    stockQty?: SortOrder
    minStockQty?: SortOrder
    openingStock?: SortOrder
    image?: SortOrder
    description?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    costPrice?: SortOrder
    basePrice?: SortOrder
    originalPrice?: SortOrder
    discountPercent?: SortOrder
    shelfLifeDays?: SortOrder
    scaleTareWeight?: SortOrder
    stockQty?: SortOrder
    minStockQty?: SortOrder
    openingStock?: SortOrder
    sortOrder?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    nameAr?: SortOrder
    brand?: SortOrder
    category?: SortOrder
    unit?: SortOrder
    barcode?: SortOrder
    costPrice?: SortOrder
    basePrice?: SortOrder
    originalPrice?: SortOrder
    discountPercent?: SortOrder
    isOffer?: SortOrder
    isExpress?: SortOrder
    isWeighted?: SortOrder
    scaleItemCode?: SortOrder
    shelfLifeDays?: SortOrder
    scaleTareWeight?: SortOrder
    inStock?: SortOrder
    stockQty?: SortOrder
    minStockQty?: SortOrder
    openingStock?: SortOrder
    image?: SortOrder
    description?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    nameAr?: SortOrder
    brand?: SortOrder
    category?: SortOrder
    unit?: SortOrder
    barcode?: SortOrder
    costPrice?: SortOrder
    basePrice?: SortOrder
    originalPrice?: SortOrder
    discountPercent?: SortOrder
    isOffer?: SortOrder
    isExpress?: SortOrder
    isWeighted?: SortOrder
    scaleItemCode?: SortOrder
    shelfLifeDays?: SortOrder
    scaleTareWeight?: SortOrder
    inStock?: SortOrder
    stockQty?: SortOrder
    minStockQty?: SortOrder
    openingStock?: SortOrder
    image?: SortOrder
    description?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    costPrice?: SortOrder
    basePrice?: SortOrder
    originalPrice?: SortOrder
    discountPercent?: SortOrder
    shelfLifeDays?: SortOrder
    scaleTareWeight?: SortOrder
    stockQty?: SortOrder
    minStockQty?: SortOrder
    openingStock?: SortOrder
    sortOrder?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    customerName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    zone?: SortOrder
    branchName?: SortOrder
    orderType?: SortOrder
    status?: SortOrder
    items?: SortOrder
    subtotal?: SortOrder
    deliveryFee?: SortOrder
    discount?: SortOrder
    total?: SortOrder
    paymentMethod?: SortOrder
    notes?: SortOrder
    captainId?: SortOrder
    captainName?: SortOrder
    captainPhone?: SortOrder
    assignedPicker?: SortOrder
    timeline?: SortOrder
    isSettled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    subtotal?: SortOrder
    deliveryFee?: SortOrder
    discount?: SortOrder
    total?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    customerName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    zone?: SortOrder
    branchName?: SortOrder
    orderType?: SortOrder
    status?: SortOrder
    items?: SortOrder
    subtotal?: SortOrder
    deliveryFee?: SortOrder
    discount?: SortOrder
    total?: SortOrder
    paymentMethod?: SortOrder
    notes?: SortOrder
    captainId?: SortOrder
    captainName?: SortOrder
    captainPhone?: SortOrder
    assignedPicker?: SortOrder
    timeline?: SortOrder
    isSettled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    customerName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    zone?: SortOrder
    branchName?: SortOrder
    orderType?: SortOrder
    status?: SortOrder
    items?: SortOrder
    subtotal?: SortOrder
    deliveryFee?: SortOrder
    discount?: SortOrder
    total?: SortOrder
    paymentMethod?: SortOrder
    notes?: SortOrder
    captainId?: SortOrder
    captainName?: SortOrder
    captainPhone?: SortOrder
    assignedPicker?: SortOrder
    timeline?: SortOrder
    isSettled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    subtotal?: SortOrder
    deliveryFee?: SortOrder
    discount?: SortOrder
    total?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    zone?: SortOrder
    totalOrders?: SortOrder
    totalSpend?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    totalOrders?: SortOrder
    totalSpend?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    zone?: SortOrder
    totalOrders?: SortOrder
    totalSpend?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    zone?: SortOrder
    totalOrders?: SortOrder
    totalSpend?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    totalOrders?: SortOrder
    totalSpend?: SortOrder
  }

  export type CaptainCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    vehicle?: SortOrder
    zone?: SortOrder
    pendingBalance?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type CaptainAvgOrderByAggregateInput = {
    pendingBalance?: SortOrder
  }

  export type CaptainMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    vehicle?: SortOrder
    zone?: SortOrder
    pendingBalance?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type CaptainMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    vehicle?: SortOrder
    zone?: SortOrder
    pendingBalance?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type CaptainSumOrderByAggregateInput = {
    pendingBalance?: SortOrder
  }

  export type DeliveryZoneCountOrderByAggregateInput = {
    id?: SortOrder
    nameAr?: SortOrder
    fee?: SortOrder
    timeMinutes?: SortOrder
    minOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type DeliveryZoneAvgOrderByAggregateInput = {
    fee?: SortOrder
    timeMinutes?: SortOrder
    minOrder?: SortOrder
  }

  export type DeliveryZoneMaxOrderByAggregateInput = {
    id?: SortOrder
    nameAr?: SortOrder
    fee?: SortOrder
    timeMinutes?: SortOrder
    minOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type DeliveryZoneMinOrderByAggregateInput = {
    id?: SortOrder
    nameAr?: SortOrder
    fee?: SortOrder
    timeMinutes?: SortOrder
    minOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type DeliveryZoneSumOrderByAggregateInput = {
    fee?: SortOrder
    timeMinutes?: SortOrder
    minOrder?: SortOrder
  }

  export type PurchaseListRelationFilter = {
    every?: PurchaseWhereInput
    some?: PurchaseWhereInput
    none?: PurchaseWhereInput
  }

  export type SupplierPaymentListRelationFilter = {
    every?: SupplierPaymentWhereInput
    some?: SupplierPaymentWhereInput
    none?: SupplierPaymentWhereInput
  }

  export type PurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contactPerson?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    category?: SortOrder
    openingBalance?: SortOrder
    currentBalance?: SortOrder
    isActive?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierAvgOrderByAggregateInput = {
    openingBalance?: SortOrder
    currentBalance?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contactPerson?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    category?: SortOrder
    openingBalance?: SortOrder
    currentBalance?: SortOrder
    isActive?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contactPerson?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    category?: SortOrder
    openingBalance?: SortOrder
    currentBalance?: SortOrder
    isActive?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierSumOrderByAggregateInput = {
    openingBalance?: SortOrder
    currentBalance?: SortOrder
  }

  export type SupplierScalarRelationFilter = {
    is?: SupplierWhereInput
    isNot?: SupplierWhereInput
  }

  export type PurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    supplierId?: SortOrder
    supplierName?: SortOrder
    invoiceDate?: SortOrder
    items?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    remainingAmount?: SortOrder
    paymentType?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    receivedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    remainingAmount?: SortOrder
  }

  export type PurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    supplierId?: SortOrder
    supplierName?: SortOrder
    invoiceDate?: SortOrder
    items?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    remainingAmount?: SortOrder
    paymentType?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    receivedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    supplierId?: SortOrder
    supplierName?: SortOrder
    invoiceDate?: SortOrder
    items?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    remainingAmount?: SortOrder
    paymentType?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    receivedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseSumOrderByAggregateInput = {
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    remainingAmount?: SortOrder
  }

  export type SupplierPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    paymentNumber?: SortOrder
    supplierId?: SortOrder
    supplierName?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
    treasury?: SortOrder
    notes?: SortOrder
    recordedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierPaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SupplierPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentNumber?: SortOrder
    supplierId?: SortOrder
    supplierName?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
    treasury?: SortOrder
    notes?: SortOrder
    recordedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    paymentNumber?: SortOrder
    supplierId?: SortOrder
    supplierName?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
    treasury?: SortOrder
    notes?: SortOrder
    recordedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierPaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StockMovementCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    movementType?: SortOrder
    quantity?: SortOrder
    balanceAfter?: SortOrder
    unitCost?: SortOrder
    reference?: SortOrder
    notes?: SortOrder
    performedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type StockMovementAvgOrderByAggregateInput = {
    quantity?: SortOrder
    balanceAfter?: SortOrder
    unitCost?: SortOrder
  }

  export type StockMovementMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    movementType?: SortOrder
    quantity?: SortOrder
    balanceAfter?: SortOrder
    unitCost?: SortOrder
    reference?: SortOrder
    notes?: SortOrder
    performedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type StockMovementMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    movementType?: SortOrder
    quantity?: SortOrder
    balanceAfter?: SortOrder
    unitCost?: SortOrder
    reference?: SortOrder
    notes?: SortOrder
    performedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type StockMovementSumOrderByAggregateInput = {
    quantity?: SortOrder
    balanceAfter?: SortOrder
    unitCost?: SortOrder
  }

  export type ReturnRecordCountOrderByAggregateInput = {
    id?: SortOrder
    returnNumber?: SortOrder
    type?: SortOrder
    referenceNumber?: SortOrder
    customerOrSupplier?: SortOrder
    items?: SortOrder
    totalAmount?: SortOrder
    reason?: SortOrder
    recordedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ReturnRecordAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type ReturnRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    returnNumber?: SortOrder
    type?: SortOrder
    referenceNumber?: SortOrder
    customerOrSupplier?: SortOrder
    items?: SortOrder
    totalAmount?: SortOrder
    reason?: SortOrder
    recordedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ReturnRecordMinOrderByAggregateInput = {
    id?: SortOrder
    returnNumber?: SortOrder
    type?: SortOrder
    referenceNumber?: SortOrder
    customerOrSupplier?: SortOrder
    items?: SortOrder
    totalAmount?: SortOrder
    reason?: SortOrder
    recordedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ReturnRecordSumOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type TreasuryTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    balanceAfter?: SortOrder
    description?: SortOrder
    reference?: SortOrder
    recordedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type TreasuryTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
    balanceAfter?: SortOrder
  }

  export type TreasuryTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    balanceAfter?: SortOrder
    description?: SortOrder
    reference?: SortOrder
    recordedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type TreasuryTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    balanceAfter?: SortOrder
    description?: SortOrder
    reference?: SortOrder
    recordedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type TreasuryTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
    balanceAfter?: SortOrder
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    senderName?: SortOrder
    senderRole?: SortOrder
    text?: SortOrder
    orderNumber?: SortOrder
    customerPhone?: SortOrder
    isStaff?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    senderName?: SortOrder
    senderRole?: SortOrder
    text?: SortOrder
    orderNumber?: SortOrder
    customerPhone?: SortOrder
    isStaff?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    senderName?: SortOrder
    senderRole?: SortOrder
    text?: SortOrder
    orderNumber?: SortOrder
    customerPhone?: SortOrder
    isStaff?: SortOrder
    createdAt?: SortOrder
  }

  export type SystemSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    storeName?: SortOrder
    tagline?: SortOrder
    mainBranch?: SortOrder
    phone?: SortOrder
    hotlines?: SortOrder
    whatsapp?: SortOrder
    address?: SortOrder
    taxNumber?: SortOrder
    commercialReg?: SortOrder
    freeDeliveryThreshold?: SortOrder
    expressDeliveryEnabled?: SortOrder
    expressMinutes?: SortOrder
    isLockedDown?: SortOrder
    bannerNotice?: SortOrder
    weightPrefixes?: SortOrder
    pricePrefixes?: SortOrder
    pluDigits?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingsAvgOrderByAggregateInput = {
    freeDeliveryThreshold?: SortOrder
    expressMinutes?: SortOrder
    pluDigits?: SortOrder
  }

  export type SystemSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    storeName?: SortOrder
    tagline?: SortOrder
    mainBranch?: SortOrder
    phone?: SortOrder
    hotlines?: SortOrder
    whatsapp?: SortOrder
    address?: SortOrder
    taxNumber?: SortOrder
    commercialReg?: SortOrder
    freeDeliveryThreshold?: SortOrder
    expressDeliveryEnabled?: SortOrder
    expressMinutes?: SortOrder
    isLockedDown?: SortOrder
    bannerNotice?: SortOrder
    weightPrefixes?: SortOrder
    pricePrefixes?: SortOrder
    pluDigits?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    storeName?: SortOrder
    tagline?: SortOrder
    mainBranch?: SortOrder
    phone?: SortOrder
    hotlines?: SortOrder
    whatsapp?: SortOrder
    address?: SortOrder
    taxNumber?: SortOrder
    commercialReg?: SortOrder
    freeDeliveryThreshold?: SortOrder
    expressDeliveryEnabled?: SortOrder
    expressMinutes?: SortOrder
    isLockedDown?: SortOrder
    bannerNotice?: SortOrder
    weightPrefixes?: SortOrder
    pricePrefixes?: SortOrder
    pluDigits?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingsSumOrderByAggregateInput = {
    freeDeliveryThreshold?: SortOrder
    expressMinutes?: SortOrder
    pluDigits?: SortOrder
  }

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    expenseDate?: SortOrder
    category?: SortOrder
    recordedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    expenseDate?: SortOrder
    category?: SortOrder
    recordedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    expenseDate?: SortOrder
    category?: SortOrder
    recordedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PurchaseCreateNestedManyWithoutSupplierInput = {
    create?: XOR<PurchaseCreateWithoutSupplierInput, PurchaseUncheckedCreateWithoutSupplierInput> | PurchaseCreateWithoutSupplierInput[] | PurchaseUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutSupplierInput | PurchaseCreateOrConnectWithoutSupplierInput[]
    createMany?: PurchaseCreateManySupplierInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type SupplierPaymentCreateNestedManyWithoutSupplierInput = {
    create?: XOR<SupplierPaymentCreateWithoutSupplierInput, SupplierPaymentUncheckedCreateWithoutSupplierInput> | SupplierPaymentCreateWithoutSupplierInput[] | SupplierPaymentUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierPaymentCreateOrConnectWithoutSupplierInput | SupplierPaymentCreateOrConnectWithoutSupplierInput[]
    createMany?: SupplierPaymentCreateManySupplierInputEnvelope
    connect?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<PurchaseCreateWithoutSupplierInput, PurchaseUncheckedCreateWithoutSupplierInput> | PurchaseCreateWithoutSupplierInput[] | PurchaseUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutSupplierInput | PurchaseCreateOrConnectWithoutSupplierInput[]
    createMany?: PurchaseCreateManySupplierInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type SupplierPaymentUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<SupplierPaymentCreateWithoutSupplierInput, SupplierPaymentUncheckedCreateWithoutSupplierInput> | SupplierPaymentCreateWithoutSupplierInput[] | SupplierPaymentUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierPaymentCreateOrConnectWithoutSupplierInput | SupplierPaymentCreateOrConnectWithoutSupplierInput[]
    createMany?: SupplierPaymentCreateManySupplierInputEnvelope
    connect?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
  }

  export type PurchaseUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<PurchaseCreateWithoutSupplierInput, PurchaseUncheckedCreateWithoutSupplierInput> | PurchaseCreateWithoutSupplierInput[] | PurchaseUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutSupplierInput | PurchaseCreateOrConnectWithoutSupplierInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutSupplierInput | PurchaseUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: PurchaseCreateManySupplierInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutSupplierInput | PurchaseUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutSupplierInput | PurchaseUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type SupplierPaymentUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<SupplierPaymentCreateWithoutSupplierInput, SupplierPaymentUncheckedCreateWithoutSupplierInput> | SupplierPaymentCreateWithoutSupplierInput[] | SupplierPaymentUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierPaymentCreateOrConnectWithoutSupplierInput | SupplierPaymentCreateOrConnectWithoutSupplierInput[]
    upsert?: SupplierPaymentUpsertWithWhereUniqueWithoutSupplierInput | SupplierPaymentUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: SupplierPaymentCreateManySupplierInputEnvelope
    set?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    disconnect?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    delete?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    connect?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    update?: SupplierPaymentUpdateWithWhereUniqueWithoutSupplierInput | SupplierPaymentUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: SupplierPaymentUpdateManyWithWhereWithoutSupplierInput | SupplierPaymentUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: SupplierPaymentScalarWhereInput | SupplierPaymentScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<PurchaseCreateWithoutSupplierInput, PurchaseUncheckedCreateWithoutSupplierInput> | PurchaseCreateWithoutSupplierInput[] | PurchaseUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutSupplierInput | PurchaseCreateOrConnectWithoutSupplierInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutSupplierInput | PurchaseUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: PurchaseCreateManySupplierInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutSupplierInput | PurchaseUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutSupplierInput | PurchaseUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type SupplierPaymentUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<SupplierPaymentCreateWithoutSupplierInput, SupplierPaymentUncheckedCreateWithoutSupplierInput> | SupplierPaymentCreateWithoutSupplierInput[] | SupplierPaymentUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierPaymentCreateOrConnectWithoutSupplierInput | SupplierPaymentCreateOrConnectWithoutSupplierInput[]
    upsert?: SupplierPaymentUpsertWithWhereUniqueWithoutSupplierInput | SupplierPaymentUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: SupplierPaymentCreateManySupplierInputEnvelope
    set?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    disconnect?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    delete?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    connect?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    update?: SupplierPaymentUpdateWithWhereUniqueWithoutSupplierInput | SupplierPaymentUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: SupplierPaymentUpdateManyWithWhereWithoutSupplierInput | SupplierPaymentUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: SupplierPaymentScalarWhereInput | SupplierPaymentScalarWhereInput[]
  }

  export type SupplierCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<SupplierCreateWithoutPurchasesInput, SupplierUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutPurchasesInput
    connect?: SupplierWhereUniqueInput
  }

  export type SupplierUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<SupplierCreateWithoutPurchasesInput, SupplierUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutPurchasesInput
    upsert?: SupplierUpsertWithoutPurchasesInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutPurchasesInput, SupplierUpdateWithoutPurchasesInput>, SupplierUncheckedUpdateWithoutPurchasesInput>
  }

  export type SupplierCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<SupplierCreateWithoutPaymentsInput, SupplierUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutPaymentsInput
    connect?: SupplierWhereUniqueInput
  }

  export type SupplierUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<SupplierCreateWithoutPaymentsInput, SupplierUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutPaymentsInput
    upsert?: SupplierUpsertWithoutPaymentsInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutPaymentsInput, SupplierUpdateWithoutPaymentsInput>, SupplierUncheckedUpdateWithoutPaymentsInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PurchaseCreateWithoutSupplierInput = {
    id?: string
    invoiceNumber: string
    supplierName: string
    invoiceDate: string
    items: string
    totalAmount: number
    paidAmount?: number
    remainingAmount?: number
    paymentType?: string
    status?: string
    notes?: string | null
    receivedBy?: string | null
    createdAt?: Date | string
  }

  export type PurchaseUncheckedCreateWithoutSupplierInput = {
    id?: string
    invoiceNumber: string
    supplierName: string
    invoiceDate: string
    items: string
    totalAmount: number
    paidAmount?: number
    remainingAmount?: number
    paymentType?: string
    status?: string
    notes?: string | null
    receivedBy?: string | null
    createdAt?: Date | string
  }

  export type PurchaseCreateOrConnectWithoutSupplierInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutSupplierInput, PurchaseUncheckedCreateWithoutSupplierInput>
  }

  export type PurchaseCreateManySupplierInputEnvelope = {
    data: PurchaseCreateManySupplierInput | PurchaseCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type SupplierPaymentCreateWithoutSupplierInput = {
    id?: string
    paymentNumber: string
    supplierName: string
    amount: number
    paymentDate: string
    paymentMethod?: string
    treasury?: string
    notes?: string | null
    recordedBy?: string | null
    createdAt?: Date | string
  }

  export type SupplierPaymentUncheckedCreateWithoutSupplierInput = {
    id?: string
    paymentNumber: string
    supplierName: string
    amount: number
    paymentDate: string
    paymentMethod?: string
    treasury?: string
    notes?: string | null
    recordedBy?: string | null
    createdAt?: Date | string
  }

  export type SupplierPaymentCreateOrConnectWithoutSupplierInput = {
    where: SupplierPaymentWhereUniqueInput
    create: XOR<SupplierPaymentCreateWithoutSupplierInput, SupplierPaymentUncheckedCreateWithoutSupplierInput>
  }

  export type SupplierPaymentCreateManySupplierInputEnvelope = {
    data: SupplierPaymentCreateManySupplierInput | SupplierPaymentCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseUpsertWithWhereUniqueWithoutSupplierInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutSupplierInput, PurchaseUncheckedUpdateWithoutSupplierInput>
    create: XOR<PurchaseCreateWithoutSupplierInput, PurchaseUncheckedCreateWithoutSupplierInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutSupplierInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutSupplierInput, PurchaseUncheckedUpdateWithoutSupplierInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutSupplierInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutSupplierInput>
  }

  export type PurchaseScalarWhereInput = {
    AND?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    OR?: PurchaseScalarWhereInput[]
    NOT?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    id?: StringFilter<"Purchase"> | string
    invoiceNumber?: StringFilter<"Purchase"> | string
    supplierId?: StringFilter<"Purchase"> | string
    supplierName?: StringFilter<"Purchase"> | string
    invoiceDate?: StringFilter<"Purchase"> | string
    items?: StringFilter<"Purchase"> | string
    totalAmount?: FloatFilter<"Purchase"> | number
    paidAmount?: FloatFilter<"Purchase"> | number
    remainingAmount?: FloatFilter<"Purchase"> | number
    paymentType?: StringFilter<"Purchase"> | string
    status?: StringFilter<"Purchase"> | string
    notes?: StringNullableFilter<"Purchase"> | string | null
    receivedBy?: StringNullableFilter<"Purchase"> | string | null
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
  }

  export type SupplierPaymentUpsertWithWhereUniqueWithoutSupplierInput = {
    where: SupplierPaymentWhereUniqueInput
    update: XOR<SupplierPaymentUpdateWithoutSupplierInput, SupplierPaymentUncheckedUpdateWithoutSupplierInput>
    create: XOR<SupplierPaymentCreateWithoutSupplierInput, SupplierPaymentUncheckedCreateWithoutSupplierInput>
  }

  export type SupplierPaymentUpdateWithWhereUniqueWithoutSupplierInput = {
    where: SupplierPaymentWhereUniqueInput
    data: XOR<SupplierPaymentUpdateWithoutSupplierInput, SupplierPaymentUncheckedUpdateWithoutSupplierInput>
  }

  export type SupplierPaymentUpdateManyWithWhereWithoutSupplierInput = {
    where: SupplierPaymentScalarWhereInput
    data: XOR<SupplierPaymentUpdateManyMutationInput, SupplierPaymentUncheckedUpdateManyWithoutSupplierInput>
  }

  export type SupplierPaymentScalarWhereInput = {
    AND?: SupplierPaymentScalarWhereInput | SupplierPaymentScalarWhereInput[]
    OR?: SupplierPaymentScalarWhereInput[]
    NOT?: SupplierPaymentScalarWhereInput | SupplierPaymentScalarWhereInput[]
    id?: StringFilter<"SupplierPayment"> | string
    paymentNumber?: StringFilter<"SupplierPayment"> | string
    supplierId?: StringFilter<"SupplierPayment"> | string
    supplierName?: StringFilter<"SupplierPayment"> | string
    amount?: FloatFilter<"SupplierPayment"> | number
    paymentDate?: StringFilter<"SupplierPayment"> | string
    paymentMethod?: StringFilter<"SupplierPayment"> | string
    treasury?: StringFilter<"SupplierPayment"> | string
    notes?: StringNullableFilter<"SupplierPayment"> | string | null
    recordedBy?: StringNullableFilter<"SupplierPayment"> | string | null
    createdAt?: DateTimeFilter<"SupplierPayment"> | Date | string
  }

  export type SupplierCreateWithoutPurchasesInput = {
    id?: string
    name: string
    contactPerson?: string | null
    phone: string
    address?: string | null
    category?: string | null
    openingBalance?: number
    currentBalance?: number
    isActive?: boolean
    notes?: string | null
    createdAt?: Date | string
    payments?: SupplierPaymentCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateWithoutPurchasesInput = {
    id?: string
    name: string
    contactPerson?: string | null
    phone: string
    address?: string | null
    category?: string | null
    openingBalance?: number
    currentBalance?: number
    isActive?: boolean
    notes?: string | null
    createdAt?: Date | string
    payments?: SupplierPaymentUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierCreateOrConnectWithoutPurchasesInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutPurchasesInput, SupplierUncheckedCreateWithoutPurchasesInput>
  }

  export type SupplierUpsertWithoutPurchasesInput = {
    update: XOR<SupplierUpdateWithoutPurchasesInput, SupplierUncheckedUpdateWithoutPurchasesInput>
    create: XOR<SupplierCreateWithoutPurchasesInput, SupplierUncheckedCreateWithoutPurchasesInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutPurchasesInput, SupplierUncheckedUpdateWithoutPurchasesInput>
  }

  export type SupplierUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    openingBalance?: FloatFieldUpdateOperationsInput | number
    currentBalance?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: SupplierPaymentUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    openingBalance?: FloatFieldUpdateOperationsInput | number
    currentBalance?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: SupplierPaymentUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateWithoutPaymentsInput = {
    id?: string
    name: string
    contactPerson?: string | null
    phone: string
    address?: string | null
    category?: string | null
    openingBalance?: number
    currentBalance?: number
    isActive?: boolean
    notes?: string | null
    createdAt?: Date | string
    purchases?: PurchaseCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateWithoutPaymentsInput = {
    id?: string
    name: string
    contactPerson?: string | null
    phone: string
    address?: string | null
    category?: string | null
    openingBalance?: number
    currentBalance?: number
    isActive?: boolean
    notes?: string | null
    createdAt?: Date | string
    purchases?: PurchaseUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierCreateOrConnectWithoutPaymentsInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutPaymentsInput, SupplierUncheckedCreateWithoutPaymentsInput>
  }

  export type SupplierUpsertWithoutPaymentsInput = {
    update: XOR<SupplierUpdateWithoutPaymentsInput, SupplierUncheckedUpdateWithoutPaymentsInput>
    create: XOR<SupplierCreateWithoutPaymentsInput, SupplierUncheckedCreateWithoutPaymentsInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutPaymentsInput, SupplierUncheckedUpdateWithoutPaymentsInput>
  }

  export type SupplierUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    openingBalance?: FloatFieldUpdateOperationsInput | number
    currentBalance?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    openingBalance?: FloatFieldUpdateOperationsInput | number
    currentBalance?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type PurchaseCreateManySupplierInput = {
    id?: string
    invoiceNumber: string
    supplierName: string
    invoiceDate: string
    items: string
    totalAmount: number
    paidAmount?: number
    remainingAmount?: number
    paymentType?: string
    status?: string
    notes?: string | null
    receivedBy?: string | null
    createdAt?: Date | string
  }

  export type SupplierPaymentCreateManySupplierInput = {
    id?: string
    paymentNumber: string
    supplierName: string
    amount: number
    paymentDate: string
    paymentMethod?: string
    treasury?: string
    notes?: string | null
    recordedBy?: string | null
    createdAt?: Date | string
  }

  export type PurchaseUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    invoiceDate?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    remainingAmount?: FloatFieldUpdateOperationsInput | number
    paymentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receivedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    invoiceDate?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    remainingAmount?: FloatFieldUpdateOperationsInput | number
    paymentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receivedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    invoiceDate?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    remainingAmount?: FloatFieldUpdateOperationsInput | number
    paymentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receivedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierPaymentUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentNumber?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    treasury?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierPaymentUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentNumber?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    treasury?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierPaymentUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentNumber?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    treasury?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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