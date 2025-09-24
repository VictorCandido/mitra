"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contato() {
  const [status, setStatus] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("Enviando...")

    const formData = new FormData(e.currentTarget)
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
    })

    if (res.ok) setStatus("Mensagem enviada com sucesso!")
    else setStatus("Erro ao enviar. Tente novamente.")
  }

  return (
    <section className="container mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">Fale Conosco</h1>
      <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
        <Input name="nome" placeholder="Seu nome" required />
        <Input name="email" type="email" placeholder="Seu e-mail" required />
        <Input name="telefone" placeholder="Telefone/WhatsApp" required />
        <Textarea name="mensagem" placeholder="Sua mensagem" required />
        <Button type="submit">Enviar</Button>
      </form>
      {status && <p className="mt-4">{status}</p>}
      <div className="mt-8">
        <a
          href="https://wa.me/5519999999999?text=Olá,%20gostaria%20de%20um%20orçamento."
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 font-semibold"
        >
          👉 Falar direto no WhatsApp
        </a>
      </div>
    </section>
  )
}