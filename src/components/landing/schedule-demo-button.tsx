"use client";

import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CAL_NAMESPACE = "roomer-discovery-call";
const CAL_LINK = "sai-samarth-patipati/roomer-discovery-call";
const CAL_CONFIG = JSON.stringify({
  layout: "month_view",
  useSlotsViewOnSmallScreen: "true",
});

interface ScheduleDemoButtonProps {
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  onClick?: () => void;
  iconClassName?: string;
}

export function ScheduleDemoButton({
  size = "lg",
  className,
  onClick,
  iconClassName = "h-4 w-4",
}: ScheduleDemoButtonProps) {
  return (
    <Button
      size={size}
      className={cn(
        "bg-[#ff4f00] font-semibold text-white shadow-[0_0_20px_rgba(255,79,0,0.3)] transition-all hover:bg-[#ff6b2a] hover:shadow-[0_0_30px_rgba(255,79,0,0.4)]",
        className
      )}
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-link={CAL_LINK}
      data-cal-config={CAL_CONFIG}
      onClick={onClick}
    >
      <Calendar className={cn("mr-2 shrink-0", iconClassName)} aria-hidden />
      Schedule Demo
    </Button>
  );
}
