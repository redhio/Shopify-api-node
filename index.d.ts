// Type definitions for redhio-api-node 2.10.0
// Project: redhio-api-node
// Definitions by: Rich Buggy <rich@buggy.id.au>
// updated by: redhIO <info@redh.io>

/*~ This is the module template file for class modules.
 *~ You should rename it to index.d.ts and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for "super-greeter", this
 *~ file should be 'super-greeter/index.d.ts'
 */

/*~ Note that ES6 modules cannot directly export class objects.
 *~ This file should be imported using the CommonJS-style:
 *~   import x = require('someLibrary');
 *~
 *~ Refer to the documentation to understand common
 *~ workarounds for this limitation of ES6 modules.
 */

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */
export = Redhio;

/*~ Write your module's methods and properties in this class */
type onCallLimitsFn = (limits: Redhio.ICallLimits) => void;

declare class Redhio {
    constructor(config: Redhio.IPublicRedhioConfig | Redhio.IPrivateRedhioConfig);
    callLimits: Redhio.ICallLimits;
    accessScope: {
        list: () => Promise<Redhio.IAccessScope[]>;
    };
    apiPermission: {
        delete: () => Promise<void>;
    };
    // abandonedCheckouts
    applicationCharge: {
        activate: (id: number, params?: any) => Promise<Redhio.IApplicationCharge>;
        create: (params: Redhio.ICreateApplicationCharge) => Promise<Redhio.IApplicationCharge>;
        get: (id: number, params?: any) => Promise<Redhio.IApplicationCharge>;
        list: (params?: any) => Promise<Redhio.IApplicationCharge[]>;
    };
    applicationCredit: {
        create: (params: Redhio.ICreateApplicationCredit) => Promise<Redhio.IApplicationCredit>;
        get: (id: number, params?: any) => Promise<Redhio.IApplicationCredit>;
        list: (params?: any) => Promise<Redhio.IApplicationCredit[]>;
    };
    article: {
        authors: () => Promise<string[]>;
        count: (blogId: number, params?: any) => Promise<number>;
        create: (blogId: number, params: Redhio.ICreateArticle) => Promise<Redhio.IArticle>;
        delete: (blogId: number, id: number) => Promise<void>;
        get: (blogId: number, id: number, params?: any) => Promise<Redhio.IArticle>;
        list: (blogId: number, params?: any) => Promise<Redhio.IArticle[]>;
        tags: (blogId?: number, params?: any) => Promise<string[]>;
        update: (blogId: number, id: number, params: Redhio.IUpdateArticle) => Promise<Redhio.IArticle>;
    };
    asset: {
        create: (themeId: number, params: any) => Promise<Redhio.IAsset>;
        delete: (themeId: number, params: any) => Promise<void>;
        get: (themeId: number, params?: any) => Promise<Redhio.IAsset>;
        list: (themeId: number, params?: any) => Promise<Redhio.IAsset[]>;
        update: (themeId: number, params: Redhio.IUpdateArticle) => Promise<Redhio.IAsset>;
    };
    blog: {
        count: () => Promise<number>;
        create: (params: Redhio.ICreateBlog) => Promise<Redhio.IBlog>;
        delete: (id: number) => Promise<void>;
        get: (id: number, params?: any) => Promise<Redhio.IBlog>;
        list: (params?: any) => Promise<Redhio.IBlog[]>;
        update: (id: number, params: any) => Promise<Redhio.IBlog>;
    };
    carrierService: {
        create: (params: Redhio.ICreateCarrierService) => Promise<Redhio.ICarrierService>;
        delete: (id: number) => Promise<void>;
        get: (id: number) => Promise<Redhio.ICarrierService>;
        list: () => Promise<Redhio.ICarrierService[]>;
        update: (id: number, params: Redhio.IUpdateCarrierService) => Promise<Redhio.ICarrierService>;
    };
    checkout: {
        complete: (token: string) => Promise<any>;
        count: (params?: any) => Promise<number>;
        create: (params?: any) => Promise<Redhio.ICheckout>;
        get: (token: string) => Promise<Redhio.ICheckout>;
        list: (params?: any) => Promise<Redhio.ICheckout[]>;
        shippingRates: (token: string) => Promise<any>;
        update: (token: any, params: any) => Promise<Redhio.ICheckout>;
    };
    collect: {
        count: (params?: any) => Promise<number>;
        create: (params: Redhio.ICreateCollect) => Promise<Redhio.ICollect>;
        delete: (id: number) => Promise<void>;
        get: (id: number, params?: any) => Promise<Redhio.ICollect>;
        list: (params?: any) => Promise<Redhio.ICollect[]>;
    };
    collectionListing: {
        get: (id: number, params?: any) => Promise<Redhio.ICollectionListing>;
        list: (params?: any) => Promise<Redhio.ICollectionListing[]>;
        productIds: (id: number) => Promise<any>;
    };
    comment: {
        approve: (id: number) => Promise<Redhio.IComment>;
        count: (params?: any) => Promise<number>;
        create: (params: Redhio.ICreateComment) => Promise<Redhio.IComment>;
        get: (id: number, params?: any) => Promise<Redhio.IComment>;
        list: (params?: any) => Promise<Redhio.IComment[]>;
        notSpam: (id: number) => Promise<Redhio.IComment>;
        remove: (id: number) => Promise<Redhio.IComment>;
        restore: (id: number) => Promise<Redhio.IComment>;
        spam: (id: number) => Promise<Redhio.IComment>;
        update: (id: number, params: Redhio.IUpdateComment) => Promise<Redhio.IComment>;
    };
    country: {
        count: () => Promise<number>;
        create: (params: Redhio.ICreateCountry) => Promise<Redhio.ICountry>;
        delete: (id: number) => Promise<void>;
        get: (id: number, params?: any) => Promise<Redhio.ICountry>;
        list: (params?: any) => Promise<Redhio.ICountry[]>;
        update: (id: number, params: Redhio.IUpdateCountry) => Promise<Redhio.ICountry>;
    };
    customCollection: {
        count: (params?: any) => Promise<number>;
        create: (params: any) => Promise<Redhio.ICustomCollection>;
        delete: (id: number) => Promise<void>;
        get: (id: number, params?: any) => Promise<Redhio.ICustomCollection>;
        list: (params?: any) => Promise<Redhio.ICustomCollection[]>;
        update: (id: number, params: any) => Promise<Redhio.ICustomCollection>;
    };
    customer: {
        accountActivationUrl: (id: number) => Promise<any>;
        count: () => Promise<number>;
        create: (params: any) => Promise<Redhio.ICustomer>;
        delete: (id: number) => Promise<void>;
        get: (id: number, params?: any) => Promise<Redhio.ICustomer>;
        list: (params: any) => Promise<Redhio.ICustomer[]>;
        search: (params: any) => Promise<any>;
        update: (id: number, params: any) => Promise<Redhio.ICustomer>;
    };
    customerAddress: {
        create: (customerId: number, params: any) => Promise<Redhio.ICustomerAddress>;
        default: (customerId: number, id: number) => Promise<Redhio.ICustomerAddress>;
        delete: (customerId: number, id: number) => Promise<void>;
        get: (customerId: number, id: number) => Promise<Redhio.ICustomerAddress>;
        list: (customerId: number, params?: any) => Promise<Redhio.ICustomerAddress[]>;
        set: (customerId: number, params: any) => Promise<any>;
        update: (customerId: number, id: number, params: any) => Promise<Redhio.ICustomerAddress>;
    };
    customerSavedSearch: {
        count: (params?: any) => Promise<number>;
        create: (params: any) => Promise<Redhio.ICustomerSavedSearch>;
        customers: (id: number, params?: any) => Promise<any>;
        delete: (id: number) => Promise<void>;
        get: (id: number, params?: any) => Promise<Redhio.ICustomerSavedSearch>;
        list: (params?: any) => Promise<Redhio.ICustomerSavedSearch[]>;
        update: (id: number, params: any) => Promise<Redhio.ICustomerSavedSearch>;
    };
    discountCode: {
        create: (params: any) => Promise<Redhio.IDiscountCode>;
        delete: (id: number) => Promise<void>;
        disable: (id: number) => Promise<Redhio.IDiscountCode>;
        enable: (id: number) => Promise<Redhio.IDiscountCode>;
        get: (id: number) => Promise<Redhio.IDiscountCode>;
        list: (params?: any) => Promise<Redhio.IDiscountCode[]>;
    };
    draftOrder: {
        complete: (id: number, params?: any) => Promise<Redhio.IDraftOrder>;
        count: () => Promise<number>;
        create: (params: any) => Promise<Redhio.IDraftOrder>;
        delete: (id: number) => Promise<void>;
        get: (id: number) => Promise<Redhio.IDraftOrder>;
        list: (params?: any) => Promise<Redhio.IDraftOrder[]>;
        sendInvoice: (id: number, params?: any) => Promise<any>;
        update: (id: number, params?: any) => Promise<Redhio.IDraftOrder>;
    };
    event: {
        count: (params?: any) => Promise<number>;
        get: (id: number, params?: any) => Promise<Redhio.IEvent>;
        list: (params?: any) => Promise<Redhio.IEvent[]>;
    };
    fulfillment: {
        cancel: (orderId: number, id: number) => Promise<Redhio.IFulfillment>;
        complete: (orderId: number, id: number) => Promise<Redhio.IFulfillment>;
        count: (orderId: number, params?: any) => Promise<number>;
        create: (orderId: number, params: any) => Promise<Redhio.IFulfillment>;
        get: (orderId: number, id: number, params?: any) => Promise<Redhio.IFulfillment>;
        list: (orderId: number, params?: any) => Promise<Redhio.IFulfillment[]>;
        open: (orderId: number, id: number) => Promise<Redhio.IFulfillment>;
        update: (orderId: number, id: number, params: any) => Promise<Redhio.IFulfillment>;
    };
    fulfillmentEvent: {
        create: (orderId: number, fulfillmentId: number, params: any) => Promise<Redhio.IFulfillmentEvent>;
        delete: (orderId: number, fulfillmentId: number, id: number) => Promise<void>;
        get: (orderId: number, fulfillmentId: number, id: number) => Promise<Redhio.IFulfillmentEvent>;
        list: (orderId: number, fulfillmentId: number, params?: any) => Promise<Redhio.IFulfillmentEvent[]>;
        update: (orderId: number, fulfillmentId: number, id: number, params: any) => Promise<Redhio.IFulfillmentEvent>;
    };
    fulfillmentService: {
        create: (params: any) => Promise<Redhio.IFulfillmentService>;
        delete: (id: number) => Promise<void>;
        get: (id: number) => Promise<Redhio.IFulfillmentService>;
        list: (params?: any) => Promise<Redhio.IFulfillmentService[]>;
        update: (id: number, params: any) => Promise<Redhio.IFulfillmentService>;
    };
    giftCard: {
        count: (params?: any) => Promise<number>;
        create: (params: any) => Promise<Redhio.IGiftCard>;
        disable: (id: number) => Promise<any>;
        get: (id: number) => Promise<Redhio.IGiftCard>;
        list: (params?: any) => Promise<Redhio.IGiftCard[]>;
        search: (params: any) => Promise<any>;
        update: (id: number, params: any) => Promise<Redhio.IGiftCard>;
    };
    location: {
        get: (id: number) => Promise<Redhio.ILocation>;
        list: () => Promise<Redhio.ILocation[]>;
    };
    marketingEvent: {
        count: (params?: any) => Promise<number>;
        create: (params: any) => Promise<Redhio.IMarketingEvent>;
        delete: (id: number) => Promise<void>;
        get: (id: number, params?: any) => Promise<Redhio.IMarketingEvent>;
        list: (params?: any) => Promise<Redhio.IMarketingEvent[]>;
        update: (id: number, params: any) => Promise<Redhio.IMarketingEvent>;
        engagements: (id: number, params: any) => Promise<any>;
    };
    metafield: {
        count: (params?: any) => Promise<number>;
        create: (params: any) => Promise<Redhio.IMetafield>;
        delete: (id: number) => Promise<void>;
        get: (id: number, params?: any) => Promise<Redhio.IMetafield>;
        list: (params?: any) => Promise<Redhio.IMetafield[]>;
        update: (id: number, params: any) => Promise<Redhio.IMetafield>;
    };
    on: (event: "callLimits", callback: onCallLimitsFn) => Redhio;
    order: {
        cancel: (id: number, params?: any) => Promise<Redhio.IOrder>;
        close: (id: number) => Promise<Redhio.IOrder>;
        count: (params?: any) => Promise<number>;
        create: (params: any) => Promise<Redhio.IOrder>;
        delete: (id: number) => Promise<any>;
        get: (id: number, params?: any) => Promise<Redhio.IOrder>;
        list: (params?: any) => Promise<Redhio.IOrder[]>;
        open: (id: number) => Promise<Redhio.IOrder>;
        update: (id: number, params: any) => Promise<Redhio.IOrder>;
    };
    orderRisk: {
        create: (orderId: number, params: any) => Promise<Redhio.IOrderRisk>;
        delete: (orderId: number, id: number) => Promise<void>;
        get: (orderId: number, id: number) => Promise<Redhio.IOrderRisk>;
        list: (orderId: number) => Promise<Redhio.IOrderRisk[]>;
        update: (orderId: number, id: number, params: any) => Promise<Redhio.IOrderRisk>;
    };
    page: {
        count: (params?: any) => Promise<number>;
        create: (params: any) => Promise<Redhio.IPage>;
        delete: (id: number) => Promise<void>;
        get: (id: number, params?: any) => Promise<Redhio.IPage>;
        list: (params?: any) => Promise<Redhio.IPage[]>;
        update: (id: number, params: any) => Promise<Redhio.IPage>;
    };
    payment: {
        count: (checkoutToken: any) => Promise<number>;
        create: (checkoutToken: any, params: any) => Promise<any>;
        get: (checkoutToken: any, id: number) => Promise<any>;
        list: (checkoutToken?: any) => Promise<any>;
    };
    policy: {
        list: (params?: any) => Promise<Redhio.IPolicy[]>;
    };
    priceRule: {
        create: (params: any) => Promise<Redhio.IPriceRule>;
        delete: (id: number) => Promise<void>;
        get: (id: number, params?: any) => Promise<Redhio.IPriceRule>;
        list: (params?: any) => Promise<Redhio.IPriceRule[]>;
        update: (id: number, params: any) => Promise<Redhio.IPriceRule>;
    };
    product: {
        count: (params?: any) => Promise<number>;
        create: (params: any) => Promise<Redhio.IProduct>;
        delete: (id: number) => Promise<void>;
        get: (id: number, params?: any) => Promise<Redhio.IProduct>;
        list: (params?: any) => Promise<Redhio.IProduct[]>;
        update: (id: number, params: any) => Promise<Redhio.IProduct>;
    };
    productImage: {
        count: (productId: number, params?: any) => Promise<number>;
        create: (productId: number, params: any) => Promise<Redhio.IProductImage>;
        delete: (productId: number, id: number) => Promise<void>;
        get: (productId: number, id: number, params?: any) => Promise<Redhio.IProductImage>;
        list: (productId: number, params?: any) => Promise<Redhio.IProductImage[]>;
        update: (productId: number, id: number, params: any) => Promise<Redhio.IProductImage>;
    };
    productListing: {
        count: () => Promise<number>;
        create: (productId: number, params: any) => Promise<Redhio.IProductListing>;
        delete: (productId: number) => Promise<void>;
        get: (productId: number) => Promise<Redhio.IProductListing>;
        list: (params?: any) => Promise<Redhio.IProductListing[]>;
        productIds: (params?: any) => Promise<any>;
    };
    productVariant: {
        count: (productId: number) => Promise<number>;
        create: (productId: number, params: any) => Promise<Redhio.IProductVariant>;
        delete: (productId: number, id: number) => Promise<void>;
        get: (id: number, params?: any) => Promise<Redhio.IProductVariant>;
        list: (productId: number, params?: any) => Promise<Redhio.IProductVariant[]>;
        update: (id: number, params: any) => Promise<Redhio.IProductVariant>;
    };
    province: {
        count: (countryId: number, params?: any) => Promise<number>;
        get: (countryId: number, id: number, params?: any) => Promise<Redhio.IProvince>;
        list: (countryId: number, params?: any) => Promise<Redhio.IProvince[]>;
        update: (countryId: number, id: number, params: any) => Promise<Redhio.IProvince>;
    };
    recurringApplicationCharge: {
        activate: (id: number, params: any) => Promise<Redhio.IRecurringApplicationCharge>;
        create: (params: Redhio.ICreateRecurringApplicationCharge) => Promise<Redhio.IRecurringApplicationCharge>;
        delete: (id: number) => Promise<void>;
        get: (id: number, params?: any) => Promise<Redhio.IRecurringApplicationCharge>;
        list: (params?: any) => Promise<Redhio.IRecurringApplicationCharge[]>;
    };
    redirect: {
        count: (params?: any) => Promise<number>;
        create: (params: Redhio.ICreateRedirect) => Promise<Redhio.IRedirect>;
        delete: (id: number) => Promise<void>;
        get: (id: number, params?: any) => Promise<Redhio.IRedirect>;
        list: (params?: any) => Promise<Redhio.IRedirect[]>;
        update: (id: number, params: Redhio.IUpdateRedirect) => Promise<Redhio.IRedirect>;
    };
    refund: {
        calculate: (orderId: number, params: any) => Promise<any>;
        create: (orderId: number, params: any) => Promise<Redhio.IRefund>;
        get: (orderId: number, id: number, params?: any) => Promise<Redhio.IRefund>;
        list: (orderId: number, params?: any) => Promise<Redhio.IRefund[]>;
    };
    report: {
        create: (params: any) => Promise<Redhio.IReport>;
        delete: (id: number) => Promise<void>;
        get: (id: number, params?: any) => Promise<Redhio.IReport>;
        list: (params?: any) => Promise<Redhio.IReport[]>;
        update: (id: number, params: any) => Promise<Redhio.IReport>;
    };
    resourceFeedback: {
        create: (params: any) => Promise<Redhio.IResourceFeedback>;
        list: () => Promise<Redhio.IResourceFeedback[]>;
    }
    scriptTag: {
        count: (params?: any) => Promise<number>;
        create: (params: Redhio.ICreateScriptTag) => Promise<Redhio.IScriptTag>;
        delete: (id: number) => Promise<void>;
        get: (id: number, params?: any) => Promise<Redhio.IScriptTag>;
        list: (params?: any) => Promise<Redhio.IScriptTag[]>;
        update: (id: number, params: Redhio.IUpdateScriptTag) => Promise<Redhio.IScriptTag>;
    };
    shippingZone: {
        list: (params?: any) => Promise<Redhio.IShippingZone[]>;
    };
    shop: {
        get: (params?: any) => Promise<Redhio.IShop>;
    };
    smartCollection: {
        count: (params?: any) => Promise<number>;
        create: (params: any) => Promise<Redhio.ISmartCollection>;
        delete: (id: number) => Promise<void>;
        get: (id: number, params?: any) => Promise<Redhio.ISmartCollection>;
        list: (params?: any) => Promise<Redhio.ISmartCollection[]>;
        order: (id: number, params: any) => Promise<void>;
        update: (id: number, params: any) => Promise<Redhio.ISmartCollection>;
    };
    theme: {
        create: (params: any) => Promise<Redhio.ITheme>;
        delete: (id: number) => Promise<void>;
        get: (id: number, params: any) => Promise<Redhio.ITheme>;
        list: (params?: any) => Promise<Redhio.ITheme[]>;
        update: (id: number, params: any) => Promise<Redhio.ITheme>;
    };
    transaction: {
        count: (orderId: number) => Promise<number>;
        create: (orderId: number, params: any) => Promise<Redhio.ITransaction>;
        get: (orderId: number, id: number, params?: any) => Promise<Redhio.ITransaction>;
        list: (orderId: number, params?: any) => Promise<Redhio.ITransaction[]>;
    };
    usageCharge: {
        create: (recurringApplicationChargeId: number, params: Redhio.ICreateUsageCharge) => Promise<Redhio.IUsageCharge>;
        get: (recurringApplicationChargeId: number, id: number, params?: any) => Promise<Redhio.IUsageCharge>;
        list: (recurringApplicationChargeId: number, params?: any) => Promise<Redhio.IUsageCharge[]>;
    };
    user: {
        current: () => Promise<Redhio.IUser>;
        get: (id: number) => Promise<Redhio.IUser>;
        list: () => Promise<Redhio.IUser[]>;
    };
    webhook: {
        count: (params?: any) => Promise<number>;
        create: (params: Redhio.ICreateWebhook) => Promise<Redhio.IWebhook>;
        delete: (id: number) => Promise<void>;
        get: (id: number, params?: any) => Promise<Redhio.IWebhook>;
        list: (params?: any) => Promise<Redhio.IWebhook[]>;
        update: (id: number, params: Redhio.IUpdateWebhook) => Promise<Redhio.IWebhook>;
    };
}

/*~ If you want to expose types from your module as well, you can
 *~ place them in this block.
 */
declare namespace Redhio {
    export interface IAutoLimit {
        bucketSize: number;
        calls: number;
        interval: number;
    }

    export interface IPublicRedhioConfig {
        accessToken: string;
        autoLimit?: boolean | IAutoLimit;
        shopName: string;
        timeout?: number;
    }

    export interface IPrivateRedhioConfig {
        apiKey: string;
        autoLimit?: boolean | IAutoLimit;
        password: string;
        shopName: string;
        timeout?: number;
    }

    export interface ICallLimits {
        remaining: number;
        current: number;
        max: number;
    }

    interface IAccessScope {
        handle: string
    }

    interface ICheckout {
        abandoned_checkout_url: string;
        applied_discount?: ICheckoutDiscount[];
        billing_address?: ICustomerAddress;
        buyer_accepts_marketing: boolean;
        cancel_reason?: "customer" | "fraud" | "inventory" | "other" | null;
        cart_token: string;
        closed_at: string | null;
        completed_at: string | null;
        created_at: string;
        currency: string;
        customer: ICustomer;
        customer_locale: string;
        discount_code?: string;
        discount_codes?: ICheckoutDiscount[];
        device_id: number | null;
        email: string;
        gateway: string | null;
        gift_cards?: ICheckoutGiftCard;
        id: number;
        landing_site: string;
        line_items: ICheckoutLineItem[];
        location_id: number | null; // In API response but not documented
        note: string | null;
        note_attributes: any[];
        order?: ICheckoutOrder;
        payment_url?: string;
        phone: string | null;
        referring_site: string;
        request_details?: ICheckoutRequestDetails;
        requires_shipping?: boolean;
        reservation_time?: number;
        reservation_time_left?: number;
        shipping_address: ICustomerAddress;
        shipping_lines: ICheckoutShippingLine[];
        shipping_rates?: ICheckoutShippingRate[];
        shipping_rate?: ICheckoutShippingRate[];
        source_indentifier: string | null;
        source_name: string | null;
        source_url: string | null;
        subtotal_price: string;
        tax_lines: ICheckoutTaxLine[];
        taxes_included: boolean;
        token: string;
        total_discounts: string;
        total_line_items_price: string;
        total_price: string;
        total_tax: string;
        total_weight: number;
        updated_at: string;
        user_id: number | null; // In API response but not documented
        web_url?: string;
    }

    interface ICheckoutLineItem {
        applied_discounts: any[];
        compare_at_price: string;
        destination_location_id: number;
        discount_codes: any[];
        fulfillment_service: "api" | "custom" | "legacy" | "manual";
        fulfillment_status?: "fulfilled" | "partial" | null;
        gift_card: boolean;
        grams: number;
        key: string;
        line_price: string;
        name: string;
        origin_location_id: number;
        price: string;
        product_id: number;
        properties: any | null;
        quantity: number;
        requires_shipping: boolean;
        sku: string;
        taxable: boolean;
        tax_lines: ICheckoutTaxLine[];
        title: string;
        variant_id: number;
        variant_title: string;
        vendor: string;
    }

    interface ICheckoutShippingLine {
        api_client_id: number | null;
        applied_discounts: any[];
        carrier_identifier: any | null;
        carrier_service_id: number | null;
        code: string;
        delivery_category: any | null;
        id: string;
        markup: string;
        phone: string | null;
        price: string;
        requested_fulfillment_service_id: number | null;
        source: string;
        tax_lines: any[];
        title: string;
        validation_context: any | null;
    }

    interface ICheckoutTaxLine {
        compare_at: number;
        position: number;
        price: string;
        rate: number;
        source: string;
        title: string;
        zone: string;
    }

    interface IApplicationCharge {
        confirmation_url: string;
        created_at: string;
        id: number;
        name: string;
        price: string;
        return_url: string;
        status: "accepted" | "declined" | "expired" | "pending";
        test: true | null;
        updated_at: string;
    }

    interface ICreateApplicationCharge {
        name: string;
        price: string;
        return_url: string;
        status: "accepted" | "declined" | "expired" | "pending";
        test?: true;
    }

    interface IApplicationCredit {
        description: string;
        id: number;
        amount: string;
        test: true | null;
    }

    interface ICreateApplicationCredit {
        description: string;
        amount: string;
        test?: true;
    }

    interface IArticle {
        author: string;
        blog_id: number;
        body_html: string;
        created_at: string;
        id: number;
        handle: string;
        image: IImage;
        metafields: IObjectMetafield[];
        published: boolean;
        published_at: string;
        summary_html: string | null;
        tags: string;
        template_suffix: string | null;
        title: string;
        updated_at: string;
        user_id: number;
    }

    interface ICreateArticle {
        author: string;
        body_html: string;
        handle?: string;
        image?: IBase64Image;
        metafields?: ICreateObjectMetafield[];
        published?: boolean;
        published_at?: string;
        summary_html?: string | null;
        tags?: string;
        template_suffix?: string | null;
        title: string;
        user_id?: number;
    }

    interface IUpdateArticle {
        author: string;
        body_html: string;
        handle?: string;
        image?: IBase64Image;
        metafields?: ICreateObjectMetafield[];
        published?: boolean;
        published_at?: string;
        summary_html?: string | null;
        tags?: string;
        template_suffix?: string | null;
        title: string;
        user_id?: number;
    }

    interface IImage {
        created_at: string;
        height: number;
        src: string;
        updated_at?: string;
        width: number;
    }

    interface IBase64Image {
        attachment: string;
    }

    interface IObjectMetafield {
        key: string;
        namespace: string;
        value: string | number;
        value_type: "string" | "integer";
        description: string | null;
    }

    interface ICreateObjectMetafield {
        key: string;
        namespace: string;
        value: string | number;
        value_type: "string" | "integer";
        description?: string | null;
    }

    interface IAsset {
        attachment?: string;
        content_type: string;
        created_at: string;
        key: string;
        public_url: string;
        size: number;
        source_key: string;
        src: string;
        theme_id: number;
        updated_at: string;
        value?: string;
    }

    interface IUpdateAsset {
        attachment?: string;
        key: string;
        source_key?: string;
        src?: string;
        value?: string;
    }

    interface IBlog {
        commentable: "moderate" | "no" | "yes";
        created_at: string;
        feedburner: string | null;
        feedburner_location: string | null;
        handle: string;
        id: number;
        metafield: IObjectMetafield[];
        tags: string;
        template_suffix: string | null;
        title: string;
        updated_at: string;
    }

    interface ICreateBlog {
        commentable?: "moderate" | "no" | "yes";
        feedburner?: string | null;
        feedburner_location?: string | null;
        handle?: string;
        metafield?: ICreateObjectMetafield[];
        tags?: string;
        template_suffix?: string | null;
        title: string;
    }

    interface ICarrierService {
        active: boolean;
        callback_url: string;
        carrier_service_type: string; // I think this could be restricted to "api" or "legacy"
        name: string;
        service_discovery: boolean;
        format: "json" | "xml";
    }

    interface ICreateCarrierService {
        active?: boolean;
        callback_url: string;
        carrier_service_type?: string;
        name: string;
        service_discovery: boolean;
        format?: "json" | "xml";
    }

    interface IUpdateCarrierService {
        active?: boolean;
        callback_url?: string;
        carrier_service_type?: string;
        name?: string;
        service_discovery?: boolean;
        format?: "json" | "xml";
    }

    interface ICheckoutDiscount {
        amount: string;
        applicable: boolean;
        description: string;
        non_applicable_reason: string;
        title: string;
        value: string;
        value_type: "fixed_amount" | "percentage";
    }

    interface ICheckoutGiftCard {
        amount_used: string;
        balance: string;
        id: string;
        last_characters: string;
    }


    interface ICheckoutShippingRateCheckout {
        subtotal_price: string;
        total_price: string;
        total_tax: string;
    }

    interface ICheckoutShippingRate {
        checkout: ICheckoutShippingRateCheckout;
        delivery_range: string[];
        handle: string;
        price: string;
        requires_phone: boolean;
        title: string;
    }

    interface ICheckoutOrder {
        id: number;
        name: string;
        status_url: string;
    }

    interface ICheckoutRequestDetails {
        accept_language: string;
        ip_address: string;
        user_agent: string;
    }

    interface ICollect {
        collection_id: number;
        created_at: string;
        featured: boolean;
        id: number;
        position: number;
        product_id: number;
        sort_value: string;
        updated_at: string;
    }

    interface ICreateCollect {
        collection_id: number;
        featured?: boolean;
        position?: number;
        product_id: number;
        sort_value?: string;
    }

    type CollectionListingSortOrder = "alpha-asc" | "alpha-desc" | "best-selling" | "created" | "created-desc" | "manual" | "price-asc" | "price-desc";

    interface ICollectionListingImage extends IImage {
        position: number;
        product_it: number;
        variant_ids: number[];
    }

    interface ICollectionListing {
        collection_id: string;
        body_html: string;
        default_product_image: ICollectionListingImage;
        image: IImage;
        handle: string;
        published_at: string;
        title: string;
        sort_order: CollectionListingSortOrder;
        updated_at: string;
    }

    type CommentStatus = "published" | "removed" | "spam" | "unapproved";

    interface IComment {
        article_id: number;
        author: string;
        blog_id: number;
        body: string;
        body_html: string;
        created_at: string;
        email: string;
        id: number;
        ip: string;
        published_at: string;
        status: CommentStatus;
        updated_at: string;
        user_agent: string;
    }

    interface ICreateComment {
        article_id?: number;
        author: string;
        blog_id?: number;
        body?: string;
        body_html?: string;
        email: string;
        ip?: string;
        published_at?: string;
        status?: CommentStatus;
        user_agent?: string;
    }

    interface IUpdateComment {
        article_id?: number;
        author?: string;
        blog_id?: number;
        body?: string;
        body_html?: string;
        email?: string;
        ip?: string;
        published_at?: string;
        status?: CommentStatus;
        user_agent?: string;
    }

    interface ICountry {
        code: string;
        id: number;
        name: string;
        provinces: IProvince[];
        tax: number;
        tax_name: string
    }

    interface ICreateCountry {
        code: string;
        name?: string;
        tax?: number;
        tax_name?: string
    }

    interface IUpdateCountry {
        code?: string;
        name?: string;
        tax?: number;
        tax_name?: string
    }

    type CustomerCollectionSortOrder = "alpha-asc" | "alpha-desc" | "best-selling" | "created" | "created-desc" | "manual" | "price-asc" | "price-desc";

    interface ICustomCollection {
        body_html: string | null;
        handle: string;
        image: IImage;
        id: number;
        metafield?: IObjectMetafield; // From https://help.redhio.com/api/reference/customcollection but not visible in test API call
        published?: string; // From https://help.redhio.com/api/reference/customcollection but not visible in test API call
        published_at: string;
        published_scope: string;
        sort_order: CustomerCollectionSortOrder;
        template_suffix: string | null;
        title: string;
        updated_at: string;
    }

    type CustomerState = "declined" | "disabled" | "enabled" | "invited";

    interface ICustomer {
        accepts_marketing: boolean;
        addresses?: ICustomerAddress[];
        created_at: string;
        default_address: string;
        email: string;
        first_name: string;
        id: number;
        last_name: string;
        metafield?: IObjectMetafield; // From https://help.redhio.com/api/reference/customer but not visible in test API call
        phone: string;
        multipass_identifier: null;
        last_order_id: number | null;
        last_order_name: string | null;
        note: string | null;
        orders_count: number;
        state: CustomerState;
        tags: string;
        tax_exempt: boolean;
        total_spent: string;
        updated_at: string;
        verified_email: boolean;
    }

    interface ICustomerAddress {
        address1: string;
        address2?: string;
        city: string;
        company: string | null;
        country: string;
        country_code: string;
        customer_id: number;
        first_name: string;
        id: number
        last_name: string;
        latitude: string;
        longitude: string;
        name: string;
        phone: string | null;
        province: string;
        province_code: string;
        zip: string;
    }

    interface ICustomerSavedSearch {
        created_at: string;
        id: number;
        name: string;
        query: string;
        updated_at: string;
    }

    interface IDiscountCode {
        created_at: string;
        id: number;
        code: string;
        price_rule_id: number;
        updated_at: string;
        usage_count: number;
    }

    interface IDraftOrderNoteAttribute {
        name: string;
        value: string;
    }

    type DraftOrderDiscountValueType = "fixed_amount" | "percentage";

    interface IDraftOrderDiscount {
        amount: string;
        description: string;
        non_applicable_reason: string;
        title: string;
        value: string;
        value_type: DraftOrderDiscountValueType;
    }

    type DraftOrderLineItemFulfullmentService = "api" | "custom" | "legacy" | "manual";
    type DraftOrderLineItemFulfullmentStatus = "fulfilled" | "partial";

    interface IDraftOrderLineItem {
        applied_discounts: any[] | null;
        discount_codes: any[];
        fulfillment_service: DraftOrderLineItemFulfullmentService;
        fulfillment_status?: DraftOrderLineItemFulfullmentStatus | null;
        gift_card: boolean;
        grams: number;
        key: string;
        line_price: string;
        name: string;
        origin_location_id: number;
        price: string;
        product_id: number;
        properties: any | null;
        quantity: number;
        requires_shipping: boolean;
        sku: string;
        taxable: boolean;
        tax_lines: ICheckoutTaxLine[];
        title: string;
        variant_id: number;
        variant_title: string;
        vendor: string;
    }

    interface IDraftOrder {
        applied_discount: IDraftOrderDiscount[];
        billing_address: ICustomerAddress;
        completed_at: string | null;
        created_at: string;
        currency: string;
        customer: string;
        email: string;
        id: number;
        invoice_sent_at: string | null;
        invoice_url: string;
        line_items: IDraftOrderLineItem[];
        name: string;
        note: string;
        note_attributes: IDraftOrderNoteAttribute[];
        order_id: number | null;
        shipping_address: ICustomerAddress;
        shipping_line: string;
        subtotal_price: string;
        tags: string;
        tax_exempt: boolean;
        tax_lines: string;
        taxes_included: boolean;
        total_tax: string;
        total_price: string;
        updated_at: string;
    }

    interface IEvent {
        arguments: any[];
        author: string;
        body: string | null;
        created_at: string;
        id: number;
        description: string;
        path: string;
        message: string;
        subject_id: number;
        subject_type: "Article" | "Blog" | "Collection" | "Comment" | "Order" | "Page" | "Product" | "ApiPermission";
        verb: string;
    }

    type IFulfillmentStatus = "cancelled" | "error" | "failure" | "open" | "pending" | "success";

    interface IFulfillmentReceipt {
        textcase: boolean;
        authorization: string;
    }

    interface IFulfilmentLineItemProperty {
        name: string;
        value: string;
    }

    interface IFulfillmentLineItemTaxLine {
        title: string;
        price: string;
        rate: number;
    }

    interface IFulfilmentLineItem {
        id: number;
        variant_id: number;
        title: string;
        quantity: number;
        price: string;
        grams: number;
        sku: string;
        variant_title: string;
        vendor: any | null;
        fulfillment_service: string;
        product_id: number;
        requires_shipping: boolean;
        taxable: boolean;
        gift_card: boolean;
        name: string;
        variant_inventory_management: string;
        properties: IFulfilmentLineItemProperty[];
        product_exists: boolean;
        fulfillable_quantity: number;
        total_discount: string;
        fulfillment_status: IFulfillmentStatus;
        tax_lines: IFulfillmentLineItemTaxLine[];
    }

    interface IFulfillment {
        created_at: string;
        id: number;
        line_items: IFulfilmentLineItem[];
        notify_customer: string;
        order_id: number;
        receipt: IFulfillmentReceipt;
        service: string;
        shipment_status: string | null;
        status: IFulfillmentStatus;
        tracking_company: string;
        tracking_numbers: string[];
        tracking_url: string;
        tracking_urls: string[];
        updated_at: string;
        variant_inventory_management: string;
    }

    type FulfillmentEventStatus = "confirmed" | "delivered" | "failure" | "in_transit" | "out_for_delivery";

    interface IFulfillmentEvent {
        address1: string | null;
        city: string | null;
        country: string | null;
        created_at: string;
        estimated_delivery_at: string | null;
        fulfillment_id: number;
        id: number;
        happened_at: string;
        latitude: string | null;
        longitude: string;
        message: string | null;
        order_id: string;
        province: string | null;
        shop_id: number;
        status: FulfillmentEventStatus;
        updated_at: string;
        zip: string | null;
    }

    interface IFulfillmentService {
        callback_url: string;
        format: "json";
        handle: string;
        inventory_management: boolean;
        name: string;
        provider_id: number | null;
        requires_shipping_method: boolean;
        tracking_support: boolean;
    }

    interface IGiftCard {
        id: number;
        api_client_id: number;
        user_id: number;
        order_id: number;
        customer_id: number;
        line_item_id: number;
        balance: string;
        currency: string;
        code: string;
        last_characters: string;
        note: string;
        template_suffix: string;
        created_at: string;
        updated_at: string;
        disabled_at: string;
        expires_on: string;
    }

    interface ILocation {
        id: number;
        address1: string;
        address2: string | null;
        city: string;
        country: string;
        country_code: string;
        country_name: string;
        created_at: string;
        deleted_at: string;
        name: string;
        phone: string;
        province: string;
        province_code: string;
        updated_at: string;
        zip: string;
    }

    interface IMarketingEventMarketedResources {
        id: number;
        type: "product" | "collection" | "price_rule" | "discount" | "page" | "article" | "shop";
    }

    type MarketingEventEventType = "ad" | "post" | "message" | "retargeting" | "sem" | "transactional" | "affiliate" | "loyalty" | "newsletter" | "abandoned_cart" | "receipt";
    type MarketingEventMarketingChannel = "search" | "display" | "social" | "email" | "referral";
    type MarketingEventBudgetType = "daily" | "lifetime";

    interface IMarketingEvent {
        breadcrumb_id: any | null;
        budget: string;
        budget_type: MarketingEventBudgetType;
        currency: string;
        description: string | null;
        ended_at: string | null;
        event_target: string;
        event_type: MarketingEventEventType;
        id: number;
        manage_url: string;
        marketed_resources: IMarketingEventMarketedResources[];
        marketing_channel: MarketingEventMarketingChannel;
        paid: boolean;
        preview_url: string;
        referring_domain: string;
        remote_id: string;
        scheduled_to_end_at: string | null;
        started_at: string;
        utm_campaign: string;
        utm_medium: string;
        utm_source: string;
    }

    type MetaFieldValueType = "string" | "integer";

    interface IMetafield {
        created_at: string;
        description: string | null;
        id: number;
        key: string;
        namespace: string;
        owner_id: number;
        owner_resource: string;
        value: string | number;
        value_type: MetaFieldValueType;
        updated_at: string;
    }

    type OrderCancelReason = "customer" | "declined" | "fraud" | "inventory" | "other";

    interface IOrderClientDetails {
        accept_language: string | null;
        browser_height: number | null;
        browser_ip: string | null;
        browser_width: number | null;
        session_has: string | null;
        user_agent: string | null;
    }

    interface IOrderCustomer {
        accepts_marketing: boolean;
        created_at: string;
        email: string;
        first_name: string;
        id: number;
        last_name: string;
        phone: string;
        multipass_identifier: null;
        last_order_id: number | null;
        last_order_name: string | null;
        note: string | null;
        orders_count: number;
        state: CustomerState;
        tags: string;
        total_spent: string;
        updated_at: string;
    }

    type OrderDiscountCodeType = "fixed_amount" | "percentage" | "shipping";
    type OrderFinancialStatus = "authorized" | "paid" | "partially_paid" | "partially_refunded" | "pending" | "voided";
    type OrderFulfillmentStatus = "fulfilled" | "partial" | null;
    type OrderProcessingMethod = "checkout" | "direct" | "express" | "manual" | "offsite";

    interface IOrderDiscountCode {
        amount: number;
        code: string;
        tyoe: OrderDiscountCodeType
    }

    interface IOrderFulfillment {
        created_at: string;
        id: number;
        line_items: any;
        order_id: number;
        receipt: string;
        order_status: any;
        tracking_company: string;
        tracking_number: string;
        updated_at: string;
    }

    interface IOrderLineItemProperty {
        name: string;
        value: string;
    }

    interface IOrderTaxLine {
        title: string;
        price: string;
        rate: number;
    }

    interface IOrderLineItemNote {
        name: string;
        value: string;
    }

    interface IOrderLineItem {
        fulfillable_quantity: number;
        fulfillment_service: string;
        fulfillment_status: OrderFulfillmentStatus;
        grams: number;
        id: number;
        price: string;
        product_id: number;
        quantity: number;
        requires_shipping: boolean;
        sku: string;
        title: string;
        variant_id: number;
        variant_title: string;
        vendor: string;
        name: string;
        gift_card: boolean;
        properties: IOrderLineItemProperty[];
        taxable: boolean;
        tax_lines: IOrderTaxLine;
        total_discount: string;
    }

    interface IOrderShippingLineTaxLine {
        title: string;
        price: string;
        rate: number;
    }

    interface IOrderShippingLine {
        code: string;
        price: number;
        source: string;
        title: string;
        tax_lines: IOrderShippingLineTaxLine[];
        carrier_identifier: string | null;
        requested_fulfillment_service_id: string | null;
    }

    interface IOrder {
        app_id: number;
        billing_address: ICustomerAddress;
        browser_ip: string | null;
        buyer_accepts_marketing: boolean;
        cancel_reason: OrderCancelReason;
        cancelled_at: string | null;
        cart_token: string;
        client_details: IOrderClientDetails;
        closed_at: string | null;
        created_at: string;
        currency: string;
        customer: IOrderCustomer;
        customer_locale: string;
        discount_codes: IOrderDiscountCode[];
        email: string;
        financial_status: OrderFinancialStatus;
        fulfillments: IOrderFulfillment[];
        fulfillment_status: OrderFulfillmentStatus;
        tags: string;
        gateway: string;
        id: number;
        landing_site: string;
        line_items: IOrderLineItem[];
        location_id: number;
        name: string;
        note: string | null;
        note_attributes: IOrderLineItemNote[];
        number: number;
        order_number: number;
        payment_details: any;
        payment_gateway_names: string[];
        phone: string;
        processed_at: string;
        processing_method: OrderProcessingMethod;
        referring_site: string;
        refunds: string;
        shipping_address: ICustomerAddress;
        shipping_lines: IOrderShippingLine[];
    }

    type OrderRisksRecommendation = "accept" | "cancel" | "cancel";

    interface IOrderRisk {
        cause_cancel: boolean;
        checkout_id: number | null;
        display: boolean;
        id: number;
        order_id: number;
        message: string;
        recommendation: OrderRisksRecommendation;
        score: number;
        source: string;
    }

    interface IPage {
        author: string;
        body_html: string;
        created_at: string;
        handle: string;
        id: number;
        metafield: string;
        published_at: string;
        shop_id: number;
        template_suffic: string | null;
        title: string;
        updated_at: string;
    }

    interface IPolicy {
        title: string;
        body: string;
        url: string;
        created_at: string;
        updated_at: string;
    }

    interface IPriceRulePrerequisiteSubtotalRange {
        prerequisite_subtotal_range: string;
    }

    type PriceRuleTargetType = "line_item" | "shipping_line";
    type PriceRuleTargetSelection = "all" | "entitled";
    type PriceRuleAllocationMethod = "each" | "across";
    type PriceRuleValueType = "fixed_amount" | "percentage";
    type PriceRuleCustomerSelection = "all" | "prerequisite";

    interface IPriceRule {
        created_at: string;
        id: number;
        title: string;
        target_type: PriceRuleTargetType;
        target_selection: PriceRuleTargetSelection;
        allocation_method: PriceRuleAllocationMethod;
        value_type: PriceRuleValueType;
        value: string;
        once_per_customer: boolean;
        usage_limit: number | null;
        customer_selection: PriceRuleCustomerSelection;
        prerequisite_saved_search_ids: number[];
        prerequisite_subtotal_range: IPriceRulePrerequisiteSubtotalRange | null;
        prerequisite_shipping_price_range: string;
        entitled_product_ids: number[];
        entitled_variant_ids: number[];
        entitled_collection_ids: number[];
        entitled_country_ids: number[];
        starts_at: string;
        ends_at: string;
    }

    interface IProductOptions {
        id: number;
        name: string;
        position: number;
        product_id: number;
        values: string[];
    }

    interface IProduct {
        body_html: string;
        created_at: string;
        handle: string;
        id: number;
        image: any | null;
        images: IProductImage[];
        options: IProductOptions[];
        product_type: string;
        published_at: string;
        published_scope: string;
        tags: string;
        template_suffix: string | null;
        title: string;
        metafields_global_title_tag?: string;
        metafields_global_description_tag?: string;
        updated_at: string;
        variants: IProductVariant[];
    }

    interface IProductImage {
        created_at: string;
        id: number;
        position: number;
        product_id: number;
        variant_ids: number[];
        src: string;
        width: number;
        height: number;
        updated_at: string;
    }

    type ProductVariantInventoryPolicy = "deny" | "continue";
    type ProductVariantWeightUnit = "g" | "kg" | "oz" | "lb";

    interface IProductVariant {
        barcode: string;
        compare_at_price: string;
        created_at: string;
        fulfillment_service: string;
        grams: number;
        id: number;
        image_id: number | null;
        inventory_item_id: number;
        inventory_management: string;
        inventory_policy: ProductVariantInventoryPolicy;
        inventory_quantity: number;
        old_inventory_quantity: number;
        option1: string | null;
        option2: string | null;
        option3: string | null;
        position: number;
        price: string;
        product_id: number;
        requires_shipping: boolean;
        sku: string;
        taxable: boolean;
        title: string;
        updated_at: string;
        weight: number;
        weight_unit: ProductVariantWeightUnit;
    }

    interface IProductListing {
        product_id: number;
        body_html: string;
        created_at: string;
        handle: string;
        images: IProductImage[];
        options: string[];
        product_type: string;
        published_at: string;
        tags: string;
        title: string;
        updated_at: string;
        variants: IProductVariant[];
    }

    interface IProvince {
        code: string;
        country_id: number;
        id: number;
        name: string;
        shipping_zone_id: NumberConstructor;
        tax: number;
        tax_name: string;
        tax_type: string | null;
        tax_percentage: number;
    }

    type RecurringApplicationChargeStatus =
        "accepted" |
        "active" |
        "cancelled" |
        "declined" |
        "expired" |
        "frozen" |
        "pending";

    interface IRecurringApplicationCharge {
        activated_on: string | null;
        billing_on: string | null;
        cancelled_on: string | null;
        capped_amount: number;
        confirmation_url: string;
        created_at: string;
        id: number;
        name: string;
        price: string;
        return_url: string;
        status: RecurringApplicationChargeStatus;
        terms: string;
        test: true | null;
        trial_days: number;
        trial_ends_on: string;
        updated_at: string;
    }

    interface ICreateRecurringApplicationCharge {
        capped_amount?: number;
        name: string;
        price: number;
        return_url: string;
        terms?: string;
        test?: true;
        trial_days?: number;
        trial_ends_on?: string;
    }

    interface IRedirect {
        id: string;
        path: string;
        target: string;
    }

    interface ICreateRedirect {
        path: string;
        target: string;
    }

    interface IUpdateRedirect {
        path?: string;
        target?: string;
    }

    interface IRefundLineItem {
        id: number;
        line_item: any;
        lint_item_id: number;
        quantity: 2;
    }

    interface IRefund {
        created_at: string;
        processed_at: string;
        id: number;
        note: string;
        refund_line_items: IRefundLineItem[];
        restock: string;
        transactions: string;
        user_id: string;
    }

    interface IReport {
        category: string;
        id: number;
        name: string;
        redhio_ql: string;
        updated_at: string;
    }

    type ResourceFeedbackState = "requires_action" | "success";

    interface IResourceFeedback {
        shop_id: number;
        created_at: string;
        updated_at: string;
        resource_id: number;
        resource_type: string;
        state: ResourceFeedbackState;
        messages: string[];
        feedback_generated_at: string;
    }

    type ScriptTagDisplayScope = "online_store" | "order_status" | "all";
    type ScriptTagEvent = "onload";

    interface IScriptTag {
        created_at: string;
        event: ScriptTagEvent;
        id: number;
        src: string;
        display_scope: ScriptTagDisplayScope;
        updated_at: string;
    }

    interface ICreateScriptTag {
        event: ScriptTagEvent;
        src: string;
        display_scope?: ScriptTagDisplayScope;
    }

    interface IUpdateScriptTag {
        event: ScriptTagEvent;
        src: string;
        display_scope?: ScriptTagDisplayScope;
    }

    interface ICarrierShippingRateProvider {
        carrier_service_id: number;
        flat_rate_modified: string;
        id: number;
        percentage_modified: number;
        service_filter: any;
        shipping_zone_id: number;
    }

    interface IPriceBasedShippingRate {
        id: number;
        max_order_subtotal: string | null;
        min_order_subtotal: string | null;
        name: string;
        price: string;
        shipping_zone_id: number;
    }

    interface IWeightBasedShippingRate {
        id: number;
        name: string;
        price: string;
        shipping_zone_id: number
        weight_height: number;
        weight_low: number;
    }

    interface IShippingZoneCountry {
        code: string;
        country_id: number;
        id: number;
        name: string;
        tax: number;
        tax_name: string;
        tax_percentage: number;
        tax_type: any | null;
        shipping_zone_id: number;
    }

    interface IShippingZone {
        id: number;
        name: string;
        countries: IShippingZoneCountry[];
        carrier_shipping_rate_providers: ICarrierShippingRateProvider[];
        price_based_shipping_rates: IPriceBasedShippingRate[];
        weight_based_shipping_rates: IWeightBasedShippingRate[];
    }

    interface IShop {
        address1: string;
        address2: string;
        city: string;
        country: string;
        country_code: string;
        country_name: string;
        created_at: string;
        county_taxes: string;
        customer_email: string | null;
        currency: string;
        domain: string;
        eligible_for_card_reader_giveaway: boolean;
        eligible_for_payments: boolean;
        email: string;
        finances: boolean;
        force_ssl: boolean;
        google_apps_domain: string | null;
        google_apps_login_enabled: any | null;
        has_discounts: boolean;
        has_gift_cards: boolean;
        has_storefront: boolean;
        iana_timezone: string;
        id: number;
        latitude: number;
        longitude: number;
        money_format: string;
        money_in_emails_format: string;
        money_with_currency_format: string;
        money_with_currency_in_emails_format: string;
        myredhio_domain: string;
        name: string;
        password_enabled: boolean;
        phone: string | null;
        plan_display_name: string;
        plan_name: string;
        primary_locale: string;
        primary_location_id: number;
        province: string;
        province_code: string;
        requires_extra_payments_agreement: boolean;
        setup_required: boolean;
        shop_owner: string;
        source: string | null;
        tax_shipping: boolean | null;
        taxes_included: true | null;
        timezone: string;
        updated_at: string;
        weight_unit: string;
        zip: string;
    }

    export type SmartCollectionRuleTextColumn = "title" | "tag" | "type" | "variant_title" | "vendor";
    export type SmartCollectionRuleTextRelation = "contains" | "equals" | "ends_with" | "not_contains" | "not_equals" | "starts_with";
    export type SmartCollectionRuleNumberColumn = "variant_compare_at_price" | "variant_inventory" | "variant_price" | "variant_weight";
    export type TSmartCollectionRuleNumberRelation = "equals" | "greater_than" | "less_than" | "not_equals";

    interface ISmartCollectionRule {
        column: SmartCollectionRuleTextColumn | SmartCollectionRuleNumberColumn;
        relation: SmartCollectionRuleTextRelation | TSmartCollectionRuleNumberRelation;
        condition: string;
    }

    type SmartCollectionSortOrder =
        "alpha-asc" |
        "alpha-desc" |
        "best-selling" |
        "created" |
        "created-desc" |
        "manual" |
        "price-asc" |
        "price-desc";

    interface ISmartCollection {
        body_html: string;
        disjunctive: boolean;
        handle: string;
        id: number;
        image?: IImage;
        published_at: string;
        published_scope: string;
        rules: ISmartCollectionRule[];
        sort_order: SmartCollectionSortOrder;
        template_suffix: string | null;
        title: string;
        updated_at: string;
    }

    interface IStorefrontAccessToken {
        id: string;
        access_token: string;
        access_scope: string;
        created_at: string;
        title: string;
    }

    type ThemeRole = "main" | "unpublished";

    interface ITheme {
        created_at: string;
        id: number;
        name: string;
        previewable: boolean;
        processing: boolean;
        role: ThemeRole;
        theme_store_id: number;
        updated_at: string;
    }

    type TransactionErrorCode =
        "call_issuer" |
        "card_declined" |
        "expired_card" |
        "incorrect_address" |
        "incorrect_cvc" |
        "incorrect_number" |
        "incorrect_zip" |
        "invalid_cvc" |
        "invalid_expiry_date" |
        "invalid_number" |
        "pick_up_card" |
        "processing_error";
    type TransactionKind = "authorization" | "capture" | "refund" | "sale" | "void";
    type TransactionSourceName = "android" | "iphone" | "pos" | "web";
    type TransactionStatus = "error" | "failure" | "pending" | "success";

    interface ITransactionPaymentDetails {
        avs_result_code: string | null;
        credit_card_bin: string | null;
        credit_card_company: string;
        create_card_number: string;
        cvv_result_code: string | null;
    }

    interface ITRansactionReceipt {
        testcase: boolean;
        authorization: string;
    }

    interface ITransaction {
        amount: string;
        authorization: string;
        created_at: string;
        device_id: string;
        gateway: string;
        source_name: TransactionSourceName;
        payment_details: ITransactionPaymentDetails;
        id: number;
        kind: TransactionKind;
        order_id: number;
        receipt: ITRansactionReceipt;
        error_code: TransactionErrorCode;
        status: TransactionStatus;
        test: boolean;
        user_id: number;
        currency: string;
    }

    interface IUsageCharge {
        balance_remaining: number;
        balance_used: number;
        billing_on: string;
        created_at: string;
        description: string;
        id: number;
        price: string;
        risk_level: number
        recurring_application_charge_id: number;
        updated_at: string;
    }

    interface ICreateUsageCharge {
        description: string;
        price: number;
    }

    type UserPermissions =
        "applications" |
        "customers" |
        "dashboard" |
        "full" |
        "gift_cards" |
        "links" |
        "marketing" |
        "order" |
        "pages" |
        "preferences" |
        "products" |
        "reports" |
        "themes";

    type UserType = "regular" | "restricted";

    interface IUser {
        account_owner: boolean;
        bio: string;
        email: string;
        first_name: string;
        id: number;
        im: string;
        last_name: string;
        permissions: UserPermissions[];
        phone: string;
        pin: string;
        receive_announcements: number;
        screen_name: string;
        url: string;
        user_type: UserType;
    }

    export type WebhookTopic =
        "app/uninstalled" |
        "carts/create" |
        "carts/update" |
        "checkouts/create" |
        "checkouts/delete" |
        "checkouts/update" |
        "collection_listings/add" |
        "collection_listings/remove" |
        "collection_listings/update" |
        "collections/create" |
        "collections/delete" |
        "collections/update" |
        "customer_groups/create" |
        "customer_groups/delete" |
        "customer_groups/update" |
        "customers/create" |
        "customers/delete" |
        "customers/disable" |
        "customers/enable" |
        "customers/update" |
        "draft_orders/create" |
        "draft_orders/delete" |
        "draft_orders/update" |
        "fulfillment_events/create" |
        "fulfillment_events/delete" |
        "fulfillments/create" |
        "fulfillments/update" |
        "order_transactions/create" |
        "orders/cancelled" |
        "orders/create" |
        "orders/delete" |
        "orders/fulfilled" |
        "orders/paid" |
        "orders/partially_fulfilled" |
        "orders/updated" |
        "product_listings/add" |
        "product_listings/remove" |
        "product_listings/update" |
        "products/create" |
        "products/delete" |
        "products/update" |
        "refunds/create" |
        "shop/update" |
        "themes/create" |
        "themes/delete" |
        "themes/publish" |
        "themes/update";

    type WebhookFormat = "json" | "xml";

    export interface IWebhook {
        address: string;
        created_at: string;
        fields: string[];
        format: WebhookFormat;
        id: number;
        metafield_namespaces: string[];
        topic: WebhookTopic;
        updated_at: string;
    }

    export interface ICreateWebhook {
        address: string;
        fields?: string[];
        format?: WebhookFormat;
        metafield_namespaces?: string[];
        topic: WebhookTopic;
    }

    export interface IUpdateWebhook {
        address: string;
        fields?: string[];
        format?: WebhookFormat;
        metafield_namespaces?: string[];
        topic: WebhookTopic;
    }
}
