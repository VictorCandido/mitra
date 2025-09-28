import * as z from "zod";

export const formSchema = z.object({
    name: z.string().min(2, { message: 'O nome é obrigatório.' }),
    company: z.string().optional(),
    email: z.string().email({ message: 'E-mail inválido.' }),
    phone: z.string().min(10, { message: 'Telefone inválido.' }),
    message: z.string().min(10, { message: 'A mensagem é obrigatória.' }),
});

export type FormData = z.infer<typeof formSchema>;