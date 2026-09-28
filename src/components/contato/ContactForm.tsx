type ContactFormProps = {
  email: string;
};

/**
 * Formulário sem backend: usa mailto + enctype=text/plain, então o próprio
 * navegador monta o e-mail com os campos preenchidos. Funciona sem JavaScript.
 */
export function ContactForm({ email }: ContactFormProps) {
  const mailtoAction = `mailto:${email}?subject=${encodeURIComponent("Contato via site — Monte")}`;

  return (
    <form action={mailtoAction} method="post" encType="text/plain" className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
          Nome
        </label>
        <input
          id="name"
          name="Nome"
          type="text"
          required
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>

      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium">
          Empresa (opcional)
        </label>
        <input
          id="company"
          name="Empresa"
          type="text"
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Mensagem
        </label>
        <textarea
          id="message"
          name="Mensagem"
          rows={5}
          required
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
      >
        Abrir no meu e-mail
      </button>

      <p className="text-xs text-muted-foreground">
        Ao enviar, seu cliente de e-mail padrão abre com a mensagem pronta para {email}.
      </p>
    </form>
  );
}
