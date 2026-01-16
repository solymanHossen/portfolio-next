"use client";

import { useEffect, useState } from "react";
import { projects } from "@/data/portfolio";

// Keep this file to export the full interface if we need to share it between Client and Admin
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  featured?: boolean;
}

export const useProjects = () => {
  // In a real app, this would fetch from an API
  return projects;
}
