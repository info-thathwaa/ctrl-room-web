import { useState, ReactNode, useRef, forwardRef, useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import {
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Eye, EyeOff } from "lucide-react";

type TextInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "textarea"
    | "time"
    | "date";
  icon?: ReactNode;
  rows?: number;
  disabled?: boolean; // ← ADD THIS
  readOnly?: boolean; // ← ADD THIS
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      name,
      label,
      placeholder,
      type = "text",
      icon,
      className,
      rows = 3,
      disabled = false,
      readOnly = false,
    },
    ref,
  ) => {
    const { control } = useFormContext();
    const [showPassword, setShowPassword] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const isPassword = type === "password";
    const finalType = isPassword ? (showPassword ? "text" : "password") : type;

    const handleClick = () => {
      if ((type === "time" || type === "date") && inputRef.current) {
        inputRef.current.showPicker?.();
      }
    };

    return (
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => {
          // Auto-focus on validation error
          useEffect(() => {
            if (fieldState.error && inputRef.current) {
              inputRef.current.focus();
            }
          }, [fieldState.error]);

          return (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <div className="relative" onClick={handleClick}>
                  {type === "textarea" ? (
                    <Textarea
                      placeholder={placeholder}
                      rows={rows}
                      {...field}
                      disabled={disabled}
                      onWheel={(e) => e.currentTarget.blur()}
                      readOnly={readOnly}
                      className={`pl-${icon ? "10" : "3"} ${
                        disabled ? "bg-gray-100 cursor-not-allowed" : ""
                      } ${className}`}
                    />
                  ) : (
                    <Input
                      {...field}
                      ref={(el) => {
                        field.ref(el);
                        inputRef.current = el;
                        if (typeof ref === "function") ref(el);
                        else if (ref) ref.current = el;
                      }}
                      placeholder={placeholder}
                      type={finalType}
                      onWheel={(e) => e.currentTarget.blur()}
                      disabled={disabled} // ← FORWARD
                      readOnly={readOnly} // ← FORWARD
                      className={`h-12 pl-${icon ? "10" : "3"} ${
                        isPassword ? "pr-10" : ""
                      } ${
                        disabled ? "bg-gray-100 cursor-not-allowed" : ""
                      } ${className}`}
                      onChange={(e) =>
                        field.onChange(
                          type === "number"
                            ? e.target.valueAsNumber
                            : e.target.value,
                        )
                      }
                    />
                  )}

                  {/* Left icon */}
                  {icon && !disabled && (
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      {icon}
                    </span>
                  )}

                  {/* Password toggle */}
                  {isPassword && !disabled && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowPassword(!showPassword);
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  )}
                </div>
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          );
        }}
      />
    );
  },
);

TextInput.displayName = "TextInput";
