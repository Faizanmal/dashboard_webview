// src/context/export-context.ts

import { createContext, useContext } from 'react';

type ExportableRow = {
  [key: string]: string | number | boolean | null | undefined;
};


interface ExportContextType {
  exportToPdf: () => void;
  exportToCsv: (data: ExportableRow[], filename: string) => void;
}

export const ExportContext = createContext<ExportContextType>({
  exportToPdf: () => {},
  exportToCsv: () => {},
});

export const useExport = () => useContext(ExportContext);
