import { CSSProperties, ComponentProps } from 'react'

interface DateInputProps extends ComponentProps<'input'> {
  label: string
}

const generalStyle: CSSProperties = {
  padding: 'var(--gap-s) .75rem',
  fontSize: '1rem',
  color: 'var(--color-2)',
  backgroundColor: 'var(--color-4)',
  borderRadius: 'var(--gap)',
}

const labelStyle: CSSProperties = {
  display: 'block',
  marginBottom: 'var(--gap-s)',
  fontWeight: '600',
  ...generalStyle,
}

const inputStyle: CSSProperties = {
  border: 'none',
  fontFamily: 'monospace',
  ...generalStyle,
}

export function DateInput({ label, ...props }: DateInputProps) {
  return (
    <div>
      <label htmlFor="" style={labelStyle}>
        {label}
      </label>
      <input type="date" name={label} id="" {...props} style={inputStyle} />
    </div>
  )
}
