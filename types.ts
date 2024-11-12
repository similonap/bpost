interface Delivery {
    afgehaald: boolean;
    ontvanger: string;
    id: string;
    adres: string;
    datum?: string;
    tijd?: string;
}

interface DeliveryData {
    actief: Delivery[];
    geschiedenis: Delivery[];
}