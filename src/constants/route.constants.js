export const routeConstants = {
  LOGIN: "/login",
  LOGOUT: "/logout",
  REGISTER: "/register",
  STEP1:"step1",
  STEP2:"step2",
  LANDINGPAGE: "/welcome",
  INVITATIONREQUEST:"/invitationrequest",
  REGISTER_SHAREABLE_LINK: "/registerUnverified",
  REGISTER_PHONE_INVITATION: "/registerByPhone",
  VERIFICATION: "/verifyEmail",
  APPLE_APP_SITE: "/apple-app-site-association",
  WELL_KNOWN: "/.well-known/apple-app-site-association",

  HOME: "/",
  PROFILE: "/profile",
  USERSETTING: "/usersetting",
  BUYING: "/buying",
  SELLING: "/selling",
  INQUIRIES: "/inquiries",
  TRANSACTION: "/transaction",
  INVITEFRIENDS: "/inviteFriends",
  USER_PROFILE: "/user/:id",
  SEARCH: "/search/:keyword",
  SHOPPING_CART: "/shoppingcart",
  CHECK_OUT: "/checkout",
  ORDER_HISTORY: "/orders",
  RETURN_ORDER: "/order/return/:orderid",
  ORDER_DETAILS: "/order/:id",
  SUBMIT_BUYER_PICKUP_INFO: "/orders/SubmitPickupInfo/:id",
  BUYER_EDIT_ORDER_ITEMS: "/orders/EditOrderItems/:id",
  ARRIVED_SP: "/arrivedsp/:orderid",

  MONEY_WITHDRAWAL: "/withdrawal",
  CREATE_MONEY_WITHDRAWAL: "/withdrawal/create",
  EDIT_MONEY_WITHDRAWAL: "/withdrawal/edit/:id",
  POST_NEW: "/post/new",
  POST_EDIT_ANYTHING: "/post/editPost/:postId",
  POST_EDIT: "/post/edit/:id",
  POST_VIEW: "/post/:id",
  POST_VIEW_All: "/myposts",
  WATCH_LIST_VIEW: "/watchlist",
  BIDDING_HISTORY_VIEW: "/bid/history/:id",
  FORGET_PASSWORD: "/password/forget",
  RESET_PASSWORD: "/password/reset/:token",
  //Add for backdoor functionality only
  USERS_ADMINISTRATION: "/administration/users",
  POSTS_ADMINISTRATION: "/administration/posts",
  // USER GENERATED REVIEWS
  VIEW_REVIEW: "/review/details/",
  POST_REVIEW: "/review/:orderId",
  REVIEW: "/review",
  //Return Requests
  VIEW_MY_RETURN_REQUESTS: "/myReturnRequests/view",

  //Favorite Category
  FAVORITE_CATEGORY: "/favoriteCategory",

  //FAQs
  VIEW_FAQS: "/viewFAQs",

  //Contact Us Form
  VIEW_CONTACT_US: "/contactUs",

  //User feedback
  FEEDBACK: "/feedback",
  //Report A Problem
  VIEW_TICKETS: "/tickets",
  VIEW_TICKET: "/ticket/:id",
  REPORT_PROBLEM: "/reportProblem",

  //Returned Item Link
  CHOOSE_RETURNED_ITEM_DROP_OFF: "/returnedItemDropOffInfo/:id",
  CHOOSE_RETURNED_ITEM_PICK_UP: "/returnedItemPickUpInfo/:id",

  //Seller Decisions if buyer did not show
  CHOOSE_BUY_NOW: "/items/chooseBuyNow/:id",
  CHOOSE_AUCTION_WITH_MIN_PRICE: "/items/chooseAuctionWithMinPrice/:id",
  CHOOSE_AUCTION_WITHOUT_MIN_PRICE: "/items/chooseAuctionWithoutMinPrice/:id",
  CHOOSE_PICKUP_ITEM: "/items/choosePickUp/:id",

  // Terms and conditions and Privacy Policy

  TERMS_AND_CONDITIONS_PAGE: "/legal/terms",
  PRIVACY_POLICY_PAGE: "/legal/policy",
  PRODUCTS_POLICY: "/legal/terms/productPolicy",
  FEES_POLICY: "/legal/terms/FeesPolicy",
  TERMS_AND_CONDITIONS: "/legal/terms/TermsAndConditions",
};
