import { loadStripe, Stripe } from "@stripe/stripe-js";


let striepPromise: Promise<Stripe | null>;

export const getStripe = () => {
    if (!striepPromise) {
        striepPromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY ?? ''
        );
    }

    return striepPromise;
};

