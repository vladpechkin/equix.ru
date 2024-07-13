const config = {
  routes: [
    { name: "dashboard", url: "/" },
    { name: "map", url: "/map" },
    { entityName: "client" },
    { entityName: "driver" },
    { name: "New Drivers", url: "/newDrivers" },
    { name: "Drivers on moderation", url: "/moderationDrivers" },
    { entityName: "order" },
    { name: "New Orders", url: "/newOrders" },
    { entityName: "fleet" },
    { name: "Driver Transactions", url: "/driverTransactions" },
    { name: "Client Transactions", url: "/clientTransactions" },
    { name: "Withdrawal Requests", url: "/withdrawalRequests" },
  ],
  collapsed_fields: {
    ALL: [],
    Clients: ["avatar", "orders", "emailConfirmed"],
    Drivers: [
      "type",
      "car",
      "documents",
      "fee",
      "balance",
      "orders",
      "transactions",
      "avatar",
      "emailConfirmed",
      "status",
      "state",
      "frozenFee",
      "cashLimit",
    ],
    Orders: [
      "cancellationReason",
      "comment",
      "cancellationComment",
      "cancelledBy",
    ],
  },
  hidden_fields: {
    ALL: ["updatedAt", "deleted"],
    Fleets: ["createdAt"],
  },
  uneditable_fields: {
    ALL: ["createdAt"],
  },
  additional_entity_endpoints: {
    Clients: ["ordersInfo"],
    Drivers: ["ordersInfo", "balance"],
  },
  additional_entities_endpoints: {
    Clients: ["orders?clientId", "clientTransactions?clientId"],
    Drivers: [
      "orders?driverId",
      "driverTransactions?driverId",
      "fleets?driverId",
    ],
    Orders: ["stops?orderId"],
  },
  renamed_fields: {
    lastDate: "Last Order Date",
    count: "Total Orders",
  },
  enums: {
    DriverState: {
      NEW: "NEW",
      MODERATION: "MODERATION",
      APPROVED: "APPROVED",
      DECLINED: "DECLINED",
    },
    DriverStatus: {
      ONLINE: "ONLINE",
      OFFLINE: "OFFLINE",
      BUSY: "BUSY",
    },
    OrderCancelledBy: {
      CLIENT: "CLIENT",
      DRIVER: "DRIVER",
      ALLOCATOR: "ALLOCATOR",
      ADMIN: "ADMIN",
    },
    DriverType: { EMPLOYEE: "EMPLOYEE", SUBCONTRACTOR: "SUBCONTRACTOR" },
    OrderCancellationReason: {
      PLANS_CHANGED: "PLANS_CHANGED",
      TOO_LONG_WAITING: "TOO_LONG_WAITING",
      CAR_DIDNT_MOVE: "CAR_DIDNT_MOVE",
      DRIVERS_RATING: "DRIVERS_RATING",
      DRIVER_NOT_FOUND: "DRIVER_NOT_FOUND",
      UNEXPECTED_CIRCUMSTANCES: "UNEXPECTED_CIRCUMSTANCES",
      HEALTH_ISSUE: "HEALTH_ISSUE",
      CAR_ISSUE: "CAR_ISSUE",
      CLIENT_ISSUE: "CLIENT_ISSUE",
      ROUTE_OR_DESTINATION_CHANGED: "ROUTE_OR_DESTINATION_CHANGED",
      LONG_WAIT_CLIENT: "LONG_WAIT_CLIENT",
      INCORRECT_TRIP_INFORMATION: "INCORRECT_TRIP_INFORMATION",
      OTHER: "OTHER",
    },
    OrderState: {
      NEW: "NEW",
      SCHEDULED: "SCHEDULED",
      SEARCHING_FOR_DRIVER: "SEARCHING_FOR_DRIVER",
      DRIVER_ASSIGNED: "DRIVER_ASSIGNED",
      DRIVER_ON_THE_WAY: "DRIVER_ON_THE_WAY",
      DRIVER_WAITING: "DRIVER_WAITING",
      IN_PROGRESS: "IN_PROGRESS",
      COMPLETED: "COMPLETED",
      CANCELED: "CANCELED",
    },
    OrderType: { ASAP: "ASAP", SCHEDULED: "SCHEDULED" },
    PaymentMethod: {
      CASH: "CASH",
      CARD: "CARD",
    },
    DriverTransactionType: {
      DEBIT: "DEBIT",
      CREDIT: "CREDIT",
      FEE: "FEE",
      WRITE_OFF: "WRITE_OFF",
    },
    DriverTransactionDestination: {
      BALANCE: "BALANCE",
      FROZEN: "FROZEN",
    },
    WithdrawalRequestState: {
      NEW: "NEW",
      FULLFILLED: "FULLFILLED",
    },
  },
  entities: {
    Car: {
      id: "number",
      createdAt: "Date",
      updatedAt: "Date",
      brand: "string",
      model: "string",
      color: "string",
    },
    Client: {
      id: "number",
      createdAt: "Date",
      updatedAt: "Date",
      phone: "string",
      email: "string",
      preferredPaymentMethod: "PaymentMethod",
      emailConfirmed: "boolean",
      name: "string",
      avatar: "string",
      count: "number",
      lastDate: "Date",
    },
    Document: {
      id: "number",
      createdAt: "Date",
      updatedAt: "Date",
      passport: "string",
      driverLicense: "string",
      paymentAccount: "string",
      seDocument: "string",
    },
    Driver: {
      state: "DriverState",
      status: "DriverStatus",
      type: "DriverType",
      id: "number",
      createdAt: "Date",
      updatedAt: "Date",
      phone: "string",
      email: "string",
      emailConfirmed: "boolean",
      deleted: "boolean",
      firstName: "string",
      lastName: "string",
      avatar: "string",
      rating: "number",
      carId: "number",
      documentsId: "number",
      fee: "number",
      frozenFee: "number",
      cashLimit: "number",
      count: "number",
      lastDate: "Date",
    },
    Fleet: {
      id: "number",
      createdAt: "Date",
      updatedAt: "Date",
      name: "string",
      carModels: "string[]",
      fleetInfoId: "number",
      cover: "string",
    },
    FleetInfo: {
      id: "number",
      createdAt: "Date",
      updatedAt: "Date",
      minPrice: "number",
      pickupPrice: "number",
      durationPrice: "number",
      distancePrice: "number",
      waitingFreeTime: "number",
      waitingPrice: "number",
      cancellationFreeTime: "number",
      cancellationBasePrice: "number",
      cancellationDistancePrice: "number",
    },
    Location: {
      id: "number",
      createdAt: "Date",
      updatedAt: "Date",
      title: "string",
      address: "string",
      longitude: "string",
      latitude: "string",
    },
    Order: {
      id: "number",
      createdAt: "Date",
      updatedAt: "Date",
      price: "number",
      type: "OrderType",
      state: "OrderState",
      scheduledAt: "Date",
      comment: "string",
      cancellationReason: "OrderCancellationReason",
      cancellationComment: "string",
      cancelledBy: "OrderCancelledBy",
      paymentMethod: "PaymentMethod",
      driverRating: "number",
      clientId: "number",
      fleetId: "number",
      driverId: "number",
      routeId: "number",
      tips: "number",
      number: "number",
    },
    Stop: {
      id: "number",
      createdAt: "Date",
      updatedAt: "Date",
      index: "number",
      location: "Location",
      orderId: "number",
    },
    BankCard: {
      id: "number",
      createdAt: "Date",
      updatedAt: "Date",
      cardId: "string",
      transactionId: "string",
      mask: "string",
      expirationDate: "string",
      cardBrand: "string",
      cardholder: "string",
      default: "boolean",
      ready: "boolean",
    },
    ClientTransaction: {
      id: "number",
      createdAt: "Date",
      updatedAt: "Date",
      amount: "number",
      info: "any",
      clientId: "number",
      orderId: "number",
    },
    DriverTransaction: {
      id: "number",
      createdAt: "Date",
      updatedAt: "Date",
      amount: "number",
      paymentMethod: "PaymentMethod",
      type: "DriverTransactionType",
      destination: "DriverTransactionDestination",
      driverId: "number",
      orderId: "number",
    },
    OrderStatusChange: {
      id: "number",
      createdAt: "Date",
      state: "OrderState",
      orderId: "number",
    },
    Route: {
      id: "number",
      createdAt: "Date",
      updatedAt: "Date",
      locations: "Location[]",
    },
    WithdrawalRequest: {
      id: "number",
      createdAt: "Date",
      updatedAt: "Date",
      amount: "number",
      state: "WithdrawalRequestState",
      driverId: "number",
    },
  },
};

export default config;
