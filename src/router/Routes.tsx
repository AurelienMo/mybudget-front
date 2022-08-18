import React from "react";

interface RouteI {
    path: string;
    element: any;
    index: boolean;
    children?: RouteI[];
}

export const ROUTES: RouteI[] = []
