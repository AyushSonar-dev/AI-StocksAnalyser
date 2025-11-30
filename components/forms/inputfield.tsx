import { Link } from 'lucide-react'
import React from 'react'
import { Label } from '../ui/label'
import { cn } from '@/lib/utils'

const Inputfield = ({name,label,placeholder,type='text',register,error,validation,disabled,value}:FormInputProps) => {
  return (
    <div className='space-y-2 '>
        <Label htmlFor={name} className='form-label '>
            {label}
        </Label>
        <input 
            type={type}
            id={name}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            className={cn('form-input w-full',{'opacity-50 cursor-not-allowed':disabled})}
            {...register(name,validation)}
        />
        {error && <p className='form-error'>{error.message}</p>} 


    </div>
  )
}

export default Inputfield