import type { ReactNode } from 'react';

interface Props {
  label: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

export default function FormField({ label, required, children, className = '' }: Props) {
  return (
    <div className={className}>
      <label className="block text-sm font-semibold mb-2">
        {label} {required && <span className="text-brand-red">*</span>}
      </label>
      {children}
    </div>
  );
}