"use client";

import { useSocket } from "@/components/providers/socket-provider";
import { Badge } from "@/components/ui/badge";

export const SocketIndicator = () => {
    const { isConnected } = useSocket();

    if (!isConnected) {
        return (
            <Badge 
                variant="outline" 
                className="bg-yellow-600 text-white border-none"
            >
                Solution de secours : interrogation toutes les 1 s
            </Badge>
        )
    }

    return (
        <Badge 
            variant="outline" 
            className="bg-emerald-600 text-white border-none"
        >
            En direct : mises à jour en temps réel
        </Badge>
    )
}