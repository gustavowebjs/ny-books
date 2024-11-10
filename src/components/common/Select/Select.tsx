import { SelectHTMLAttributes, ReactNode, forwardRef } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { children, className = "", label, error, disabled, fullWidth, ...props },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={`rounded-md border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-10 px-3 py-2
            ${
              error
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600"
            }
            ${fullWidth ? "w-full" : ""}
            bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100
            ${className}`}
          disabled={disabled}
          {...props}
        >
          {children}
        </select>
        {error && (
          <span className="text-sm text-red-500 dark:text-red-400">
            {error}
          </span>
        )}
      </div>
    );
  }
);
