
export const enum INJECTION_KEYS {
    DbContext = 'DB_CONTEXT',
    CategoryService = 'CategoryService',
    UserAccountService = 'UserAccountService',
    UserCrudService = 'UserCrudService',
    VerificationManager = 'VerificationManager',
    PaymentService = 'PaymentService',

    PaymentsRepository = 'PaymentsRepository',
    CategoryRepository = 'CategoryRepository',
    ReportsRepository = 'ReportsRepository',
    UsersRepository = 'UserRepository'
}

export const enum ConfigurationParameters {
    DATABASE_TYPE = 'DATABASE_TYPE',
    DATABASE_HOST = 'DATABASE_HOST',
    DATABASE_PORT = 'DATABASE_PORT',
    DATABASE_USER = 'DATABASE_USER',
    DATABASE_PASSWORD = 'DATABASE_PASSWORD',
    DATABASE_NAME = 'DATABASE_NAME',
    DATABASE_SYNCHRONIZE = 'DATABASE_SYNCHRONIZE',
    DATABASE_LOGGING = 'DATABASE_LOGGING',
    LOG_DESTINATION_FILES = 'LOG_DESTINATION_FILES',
    JWT_SECRET = 'JWT_SECRET',
    JWT_EXPIRES = 'JWT_EXPIRES',
    REDIS_HOST = 'REDIS_HOST',
    REDIS_PORT = 'REDIS_PORT'
}

export const enum CacheDataKeys {
    verificationCode = 'api:verificationCode:',
}

export const enum ControllersRoutes {
    authorization = 'auth',
    category = 'category',
    payment = 'payment',
    report = 'report'
}

export const enum EndpointsParameters {
    id = 'id'
}

export const enum EndpointsRoutes {
    getById = 'getById',
    create = 'create',
    remove = 'remove',

    getAllPayments = 'getAllPayments',
    getAllCategories = 'getAllCategories',
    getAllReports = 'getAllReports',

    verify = 'verify',
    sendCode = 'sendCode',
    setAccountInfo = 'setAccountInfo'
}

//TODO: write routes and controllers