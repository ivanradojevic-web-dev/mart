import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';

// Define validation schema
export const schema = yup.object({
    title: yup.string().required(),
    price: yup.number().required().positive().integer(),
    rating: yup.string().required(),
    reviews: yup.number().required().positive().integer(),
    color: yup.string().required(),
    size: yup.string().required(),
    description: yup.string().required(),
});

// Setup form
export const storeProductRequest = () => {
    const { handleSubmit, errors } = useForm({
        validationSchema: schema,
    });

    const { value: title } = useField('title');
    const { value: price } = useField('price');
    const { value: rating } = useField('rating');
    const { value: reviews } = useField('reviews');
    const { value: color } = useField('color');
    const { value: size } = useField('size');
    const { value: description } = useField('description');

    return { handleSubmit, errors, 
        title, 
        price, 
        rating, 
        reviews, 
        color, 
        size, 
        description 
    };
};
