module.exports = {
  AUTH_TYPE: 'Oauth2',
  USER: 'Mohammed',
  HASH_BYTES: 20,
  JWT_SECRET: '34@#icnhdsnhrnxmk',
  JWT_EXPIRATION_TIME: 36000,
  MAIL_USERNAME: 'mohamdabd858@gmail.com',
  MAIL_PASSWORD: 'kijaexiztywnsrse',
  OAUTH_CLIENTID: '248720386690-v3vnarjsac0jjmdekrascr77i828f53r.apps.googleusercontent.com',
  OAUTH_CLIENT_SECRET: 'v2q84Ce9KXCEHHj7veLf8XE7',
  OAUTH_REFRESH_TOKEN: '1//04MICJd2uz2EYCgYIARAAGAQSNgF-L9IrD8ImY1sCiduC4HgSNI5Cwvv8mg8GhTtj1RX-3J7vPYpzo4ZE7FJ6SsfX7W-JWqCW_g',
  OAUTH_ACCSESS_TOKEN: 'ya29.a0ARrdaM81jl2ynppSrfRjbs-7hp3LYr5eU1GmmOXceQBXtpcXdvhxTVlawrh7yxp1UmMI4NNVfjuqkdPXgbt6nIglqlxWQWwAoQ-eyqbGJ32krkvIRub4fS6fe_eSQby0rw15Xz65H5DOacFG793eVUa-vlg5',
  MOD_ENV : {
    ID: 'id',
    USER_ID: 'user_id',
    USER: 'user',
    ADD_ID: 'address_id',
    ADD: 'address',
    CUR: 'currancy',
    CUR_ID: 'currancy_id',
    ST: 'status',
    ST_ID: 'status_id',
    COMP_TYPE: 'company_type',
    COMP_TYPE_ID: 'company_type_id',
    ROLL: 'roll',
    ROLL_ID: 'user_roll_id',
    SUBS: 'subscription',
    SUBS_ID: 'subscription_type_id',
    COMP: 'company',
    ADMIN: 'admin',
    PASS: 'password',
    EMAIL: 'email',
    COMP_ID: 'company_id',
    COMP_PHONE: 'company_phone',
    US_PHONE: 'user_phone',
    PHONE_ID: 'phone_id',
    V_CODE: 'verification_code',
    V_LINK: 'http://localhost:5000/verify/',
    CATIG: 'catigory_name',
    CATIG_ID: 'product_catigory_id', 
    PROD_TYPE: 'type_name',
    PROD_TYPE_ID: 'product_type_id',
    ORD_TYPE: 'type_name',
    ORD_TYPE_ID: 'order_type_id',
    ORD_ID: 'order_id',
    PROD_PATCH: 'product_patch',
    PATCH_ID: 'patch_id',
    PROD: 'product',
    ORD_PROD_PATCH_ID: 'product_patch_id',
    DELIV_ID: 'delivery_id',
    DELIV_TYPE: 'delivery_type',
    DELIV_DATE: 'delivery_date',
    DOC_ID: 'document_id',
    DOC: 'document',
    FILE_PATH: 'file_path',
    ORD_DATE: 'order_date',
    OPT: 'option',
    DATA_V: 'dataValues',
    EMPT_STRING: ''
  },
  EMAIL_ENV: {
    EMAIL_SUBJ:{
      SEND_VCODE: 'Welcome to ERP-Finance/verify your account',
    },
    FROM_EMAIL: 'mohamdabd858@gmail.com',
  },
  ERR_MSG: {
    INVALID_COD_MSG: 'Invalid varification code',
    INVALID_LOGIN_DATA: 'Invalid user or password, please enter valid data',
    ACC_NOT_ACT: 'Account is not active',
    SOM_W_WRNG: 'Somthing went wrong',
  },
  SUCC_MSG: {
    V_CODE_SENT: 'verification code sent to your email',
  },
  HTTP_OBJ: {
    REQ: 'request',
    RES: 'response'
  },
  COMP_STATUS: {
    ACT: 'active',
    NACT: 'not active',
    SUSP: 'suspended'
  },
  INIT_OBJ: {
    ORD_OBJ: {
      status: 'init order'
    }
  },
  STATUSES:{
    ACT: 'active',
    NOT_ACT: 'not active',
    SUSB: 'suspended',
    INIT_ORD: 'init order',
    ACT_ORD: 'active order',
    DEL_ORD: 'delivered order',
    CNL_ORD: 'canceld order',
    OUT_STOCK: 'out of stock',
    DELIVERED: 'delivered',
    UPLOAD: 'upolded',
    PAYED: 'payed'
  },
  NUMS:{
    ZERO: '0'
  },
  SAMPLS:{
    SCOR: '-'
  },
  TYPES:{
    PURCH: 'purchase',
    SALE: 'sale',
    PURCHSAMPL: 'P',
    SALESAMPLE: 'S',
    PATCH: 'PATCH'
  },
  PAYMENT:{
    METH_CREATE: 'create',
    METH_CHECK: 'check',
    STOR_NUM: '26321',
    AUTH_KEY: 'mSbkd@c7C3n#64px',
    CURR: 'SAR',
    TEST: 1,
    LIVE: 0,
    ORD_PAY_DESC: 'Payment for order',
    AUTH_TRANC: 'https://mohammadiaprint.com/orderAccepted.html',
    DEC_TRANC: 'https://mohammadiaprint.com/orderDeclined.html',
    CANC_TRANC: 'https://mohammadiaprint.com/orderCanceled.html	'
  },
  SERVER_URL: 'server_url',
  UPL_DIR_TEST: '/public/uploads/',
  UPL_DIR_LIVE: 'https://mohammadiaprint.com/uploads/',
  DOCS_REMOVE_ATTR: ['statusId', 'status_id' , 'orderId'],
  USER_REMOVE_ATTR: ['password', 'verification_code'],
  FILE_PATH_TEST: './public/uploads',
  FILE_PATH_LIVE: '/var/www/html/uploads/',
  CA_PRAIVATE_KEY: '/etc/letsencrypt/live/mohammadiaprint.com/privkey.pem',
  CA_FULL_CHAIN: '/etc/letsencrypt/live/mohammadiaprint.com/fullchain.pem'
};