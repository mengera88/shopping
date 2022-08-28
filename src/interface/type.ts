export interface AlternatePrices {
}

export interface Dimensions {
    width?: any;
    height?: any;
    length?: any;
    weight?: any;
}

export interface Stock {
    isInStock: boolean;
}

export interface GoodItemType {
    uniqueId: string;
    token: string;
    id: string;
    name: string;
    price: number;
    description: string;
    hasTaxesIncluded: boolean;
    categories: any[];
    url: string;
    fileGuid?: any;
    image: string;
    quantity: number;
    quantityStep: number;
    minQuantity?: any;
    maxQuantity?: any;
    stackable: boolean;
    shippable: boolean;
    taxable: boolean;
    taxes: any[];
    customFields: any[];
    duplicatable: boolean;
    downloadLink: string;
    metadata?: any;
    alternatePrices: AlternatePrices;
    dimensions: Dimensions;
    stock: Stock;
    unitPrice: number;
    totalPrice: number;
    totalPriceWithoutTaxes: number;
    totalPriceWithoutDiscountsAndTaxes: number;
    totalPriceWithoutDiscountsAndTaxesLegacy: number;
    addedOn: number;
    initialData: string;
    modificationDate: number;
    pausingAction: string;
    cancellationAction: string;
    isRecurring: boolean;
    isRecurringV2: boolean;
    isRecurringV3: boolean;
    availablePlans: any[];
    selectedPlanId: string;
    paymentGatewayId: string;
}
