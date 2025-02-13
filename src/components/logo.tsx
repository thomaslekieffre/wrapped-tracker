import { Disc3 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'default' | 'lg';
}

export function Logo({ className, size = 'default' }: LogoProps) {
  const sizes = {
    sm: 'text-lg gap-2',
    default: 'text-xl gap-2',
    lg: 'text-2xl gap-3',
  };

  return (
    <div className={cn('flex items-center font-bold', sizes[size], className)}>
      <Disc3 className="h-5 w-5 animate-[spin_3s_linear_infinite] text-primary" />
      <span>Wrapped Tracker</span>
    </div>
  );
}
