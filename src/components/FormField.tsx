import React from 'react'
import { Control, Controller, FieldValues, Path } from "react-hook-form"
import {
    FormControl,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from './ui/input'


interface FormFiledTypes<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    description?: string
    type: "email" | "text" | "password"

}

function FormField<T extends FieldValues>(props: FormFiledTypes<T>) {
    return (

        <Controller

            control={props.control}
            name={props.name}
            render={({ field }) => (

                <FormItem>
                    <FormLabel>{props.label}</FormLabel>
                    <FormControl>
                        <Input
                            className='input'
                            placeholder={props.placeholder}
                            type={props.type}
                            {...field}
                        />
                    </FormControl>
                    <FormDescription>
                        {props.placeholder}
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}


        />
    )
}

export default FormField