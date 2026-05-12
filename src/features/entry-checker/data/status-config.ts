import type { StatusConfig, VisaStatus } from '../types'

export const STATUS_CONFIG: Record<VisaStatus, StatusConfig> = {
  no_visa_required:    { label: 'Sin visa requerida',         color: 'green'  },
  esta_required:       { label: 'ESTA requerida',             color: 'blue'   },
  eta_required:        { label: 'eTA requerida',              color: 'blue'   },
  preregistro_required:{ label: 'Prerregistro electrónico',   color: 'yellow' },
  visa_or_us_visa:     { label: 'Visa o Visa USA vigente',    color: 'yellow' },
  visa_or_eta:         { label: 'Visa o eTA (si aplica)',     color: 'yellow' },
  required:            { label: 'Visa requerida',             color: 'red'    },
  citizen:             { label: 'Ciudadano',                  color: 'green'  },
}
