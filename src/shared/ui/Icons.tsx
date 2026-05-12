import {
  Route,
  BookOpen,
  Map,
  ClipboardList,
  Gauge,
  Signal,
  Bookmark,
  Globe,
  ArrowRight,
  FileCheck,
  Info,
  AlertTriangle,
} from 'lucide-react'

interface IconProps {
  size?: number
  stroke?: string
}

export function RouteIcon({ size = 18, stroke = 'currentColor' }: IconProps) {
  return <Route size={size} color={stroke} aria-hidden="true" />
}

export function PassportIcon({ size = 22, stroke = 'currentColor' }: IconProps) {
  return <BookOpen size={size} color={stroke} aria-hidden="true" />
}

export function MapIcon({ size = 22, stroke = 'currentColor' }: IconProps) {
  return <Map size={size} color={stroke} aria-hidden="true" />
}

export function ChecklistIcon({ size = 22, stroke = 'currentColor' }: IconProps) {
  return <ClipboardList size={size} color={stroke} aria-hidden="true" />
}

export function GaugeIcon({ size = 22, stroke = 'currentColor' }: IconProps) {
  return <Gauge size={size} color={stroke} aria-hidden="true" />
}

export function TrafficLightIcon({ size = 22, stroke = 'currentColor' }: IconProps) {
  return <Signal size={size} color={stroke} aria-hidden="true" />
}

export function BookmarkIcon({ size = 22, stroke = 'currentColor' }: IconProps) {
  return <Bookmark size={size} color={stroke} aria-hidden="true" />
}

export function GlobeIcon({ size = 22, stroke = 'currentColor' }: IconProps) {
  return <Globe size={size} color={stroke} aria-hidden="true" />
}

export function ArrowIcon({ size = 18, stroke = 'currentColor' }: IconProps) {
  return <ArrowRight size={size} color={stroke} aria-hidden="true" />
}

export function FileCheckIcon({ size = 18, stroke = 'currentColor' }: IconProps) {
  return <FileCheck size={size} color={stroke} aria-hidden="true" />
}

export function InfoIcon({ size = 16, stroke = 'currentColor' }: IconProps) {
  return <Info size={size} color={stroke} aria-hidden="true" />
}

export function AlertIcon({ size = 16, stroke = 'currentColor' }: IconProps) {
  return <AlertTriangle size={size} color={stroke} aria-hidden="true" />
}
