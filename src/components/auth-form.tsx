"use client"

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
} from "@/components/ui/form";
import Image from 'next/image';
import Link from 'next/link';
import FormField from './FormField'

type authformprops = {
    type: "sign-in" | "sign-up"
}


const authFormSchema = (type: string) => {

    if (type === "sign-up") return z.object({
        username: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
        name: z.string().min(2, {
            message: "Name must be at least 2 characters.",
        }),
        email: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
        password: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
    })


    return z.object({
        email: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
        password: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
    })
}

function AuthForm({ type }: authformprops) {

    const schema = authFormSchema(type)

    const defaultValues =
        type === 'sign-up'
            ? {
                username: "",
                name: "",
                email: "",
                password: "",
            }
            : {
                email: "",
                password: "",
            };

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues,
    })

// 2. Define a submit handler.
function onSubmit(values: z.infer<typeof schema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
}

const isSignUp = type === "sign-up";

return (
    <div className='lg:min-w-[566px] card-boder'>

        <div className='flex flex-col card gap-5 py-14 px-10'>
            <div className="flex flex-row gap-2 justify-center">
                <Image src="/vercel.svg" alt="logo" height={32} width={38} />
                <h2 className="text-primary-100">InterAI</h2>
            </div>
            <h3 className='text-center'> Become expert in interviews</h3>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 form mt-3 ">

                    {
                        isSignUp && <FormField
                            control={form.control}
                            name='name'
                            label='Name'
                            type='text'
                        />

                    }
                    {
                        isSignUp && <FormField
                            control={form.control}
                            name='username'
                            label='Username'
                            type='text'
                        />

                    }

                    <FormField

                        control={form.control}
                        name="email"
                        type='email'
                        label='Email'
                    />
                    <FormField

                        control={form.control}
                        name="password"
                        type='password'
                        label='Password'
                    />

                    <Button type="submit" className='btn'>
                        {
                            type === "sign-in" ? "Sign In" : "Create an Account"
                        }
                    </Button>
                </form>
            </Form>

            <p className='text-center'>
                {
                    type === "sign-in" ? "Don't Have an Account? " : "Already have an account? "
                }


                <Link href={type === "sign-in" ? "/sign-up" : "sign-in"}>
                    {
                        type === "sign-in" ? "Sign Up " : "Sign In"
                    }
                </Link>
            </p>


        </div>


    </div>
)
}

export default AuthForm