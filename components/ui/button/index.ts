import { type VariantProps, cva } from 'class-variance-authority';

export { default as Button } from './Button.vue';

export const buttonVariants = cva(
   'inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-[8px] text-sm font-medium transition-300 active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
   {
      variants: {
         variant: {
            default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
            destructive: 'bg-destructive text-destructive-foreground  hover:bg-destructive/90',
            outline: 'border border-input bg-transparent text-primary  hover:bg-accent ',
            secondary: 'bg-secondary text-secondary-foreground  hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground',
            link: 'text-primary underline-offset-4 hover:underline'
         },
         size: {
            default: 'px-6  py-4',
            xs: 'h-7 rounded px-2',
            sm: 'h-8 rounded-md px-3 text-xs',
            lg: 'h-10 rounded-md px-8',
            icon: 'h-9 w-9'
         }
      },
      defaultVariants: {
         variant: 'default',
         size: 'default'
      }
   }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
