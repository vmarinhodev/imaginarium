import { z } from 'zod';

export const schemaLogin = z.object({
    email: z.string().email(),
    password: z
        .string()
        .min(6, { message: 'Password must be at least 6 characters' })
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])/,
            {
                message:
                    'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
            }
        ),
    username: z.string().min(3, { message: 'Name must be at least 3 characters' }),
});