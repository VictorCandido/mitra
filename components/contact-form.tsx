'use client'

import { sendContactEmail } from "@/app/actions";
import { FormData, formSchema } from "@/app/schemas";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { toast } from "sonner"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function ContactForm() {
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            company: '',
            email: '',
            phone: '',
            message: ''
        }
    });

    const isLoading = form.formState.isSubmitting;

    async function onSubmit(data: FormData, event?: React.BaseSyntheticEvent) {
        try {
            event?.preventDefault();
            await sendContactEmail(data);
            toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            form.reset();
        } catch (error) {
            toast.error('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
            console.error('Erro ao enviar o e-mail:', error);
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">Solicite seu Orçamento</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField 
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel
                                                className=""
                                            >
                                                Nome
                                            </FormLabel>
                                            <FormControl>
                                                <Input 
                                                    placeholder="Seu nome completo"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField 
                                    control={form.control}
                                    name="company"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel
                                                className=""
                                            >
                                                Empresa
                                            </FormLabel>
                                            <FormControl>
                                                <Input 
                                                    placeholder="Sua empresa"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField 
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel
                                                className=""
                                            >
                                                E-mail
                                            </FormLabel>
                                            <FormControl>
                                                <Input 
                                                    placeholder="Seu e-mail"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField 
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel
                                                className=""
                                            >
                                                Telefone
                                            </FormLabel>
                                            <FormControl>
                                                <Input 
                                                    placeholder="Seu telefone"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                                <FormField 
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel
                                                className=""
                                            >
                                                Mensagem
                                            </FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Descreva seu projeto: tipo de obra, área aproximada, prazo desejado..."
                                                    className="min-h-[120px]"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button className="w-full" size="lg" disabled={isLoading} type="submit">
                                    { isLoading ? 'Enviando...' : 'Enviar Solicitação' }
                                </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}