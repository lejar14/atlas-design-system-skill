# Atlas component usage (from the live site)
Public API as shown on each component page of https://atlas-design-system-theta.vercel.app/components (fetched 2026-11-12). Atlas publishes these usage examples but not the component source (except Button). Match these import paths, export names and props exactly when building a component.

## button

```tsx
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

export function Example() {
    return (
        <Button color="brand" variant="primary" size="md" leadingIcon={RefreshCw}>
            Save changes
        </Button>
    )
}
```

## input

```tsx
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Settings } from "lucide-react"

export function Example() {
    return (
        <>
            <Input
                label="Email address"
                placeholder="you@company.com"
                helperText="We'll never share your email."
                leadingIcon={Settings}
            />
            <Textarea
                label="Message"
                placeholder="Write something..."
                helperText="Max 500 characters."
            />
        </>
    )
}
```

## dropdown

```tsx
import { ChevronDown, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Example() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button color="neutral" variant="secondary" trailingIcon={ChevronDown}>
                    Options
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Header Text</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem leadingIcon={Settings}>Menu item</DropdownMenuItem>
                <DropdownMenuItem active leadingIcon={Settings}>Menu item</DropdownMenuItem>
                <DropdownMenuItem variant="danger" leadingIcon={Settings}>Menu item</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
```

## checkbox

```tsx
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"

export function Example() {
    const [checked, setChecked] = useState(false)

    return (
        <Checkbox
            label="Accept terms and services"
            helperText="You have to check this box to proceed"
            color="danger"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
        />
    )
}
```

## radio-button

```tsx
import { useState } from "react"
import { RadioButton } from "@/components/ui/radio-button"

const SIZES = ["sm", "md", "lg"]

export function Example() {
    const [size, setSize] = useState("md")

    return (
        <>
            {SIZES.map((value) => (
                <RadioButton
                    key={value}
                    name="size"
                    value={value}
                    label={value}
                    checked={size === value}
                    onChange={() => setSize(value)}
                />
            ))}
        </>
    )
}
```

## tooltip

```tsx
import { Info } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export function Example() {
    return (
        <TooltipProvider delayDuration={150}>
            <Tooltip>
                <TooltipTrigger aria-label="About this field">
                    <Info size={16} />
                </TooltipTrigger>
                <TooltipContent icon={Info} title="Sync complete">
                    All changes were saved 2 minutes ago.
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
```

## alert-toast

```tsx
import { useState } from "react"
import { Alert } from "@/components/ui/alert"

export function Example() {
    const [dismissed, setDismissed] = useState(false)
    if (dismissed) return null

    return (
        <Alert
            color="warning"
            title="SSL certificate nearing expiration"
            actionLabel="Renew SSL"
            onAction={() => renewCertificate()}
            onDismiss={() => setDismissed(true)}
        >
            Your primary subdomain certificate is scheduled to expire in 3 days.
        </Alert>
    )
}
```

```tsx
import { Toaster, useToast } from "@/components/ui/toast"

// Mount once, near the root of whatever needs to trigger toasts.
export function App({ children }: { children: React.ReactNode }) {
    return <Toaster>{children}</Toaster>
}

// Anywhere inside <Toaster>:
function RefreshButton() {
    const toast = useToast()

    return (
        <button
            onClick={() =>
                toast({
                    color: "info",
                    title: "New features available",
                    description: "A new version of the application is available.",
                    actionLabel: "Refresh",
                    onAction: () => location.reload(),
                })
            }
        >
            Check for updates
        </button>
    )
}
```

## chips

```tsx
import { useState } from "react"
import { Chip } from "@/components/ui/chip"

const CATEGORIES = ["Design", "Engineering", "Marketing", "Sales"]

export function CategoryFilter() {
    const [selected, setSelected] = useState<string[]>(["Engineering"])

    return CATEGORIES.map((label) => (
        <Chip
            key={label}
            color="primary"
            selected={selected.includes(label)}
            onSelectedChange={(isSelected) =>
                setSelected((prev) =>
                    isSelected ? [...prev, label] : prev.filter((v) => v !== label)
                )
            }
        >
            {label}
        </Chip>
    ))
}
```

```tsx
import { useState } from "react"
import { Chip } from "@/components/ui/chip"

export function TagList() {
    const [tags, setTags] = useState(["React", "TypeScript", "Tailwind"])

    return tags.map((tag) => (
        <Chip key={tag} color="neutral" onRemove={() => setTags((prev) => prev.filter((t) => t !== tag))}>
            {tag}
        </Chip>
    ))
}
```

## badge

```tsx
import { Badge } from "@/components/ui/badge"

export function CartIcon({ count }: { count: number }) {
    return (
        <div className="relative inline-flex">
            <ShoppingCart size={20} />
            {count > 0 && (
                <Badge color="danger" size="sm" className="absolute -top-2 -right-2">
                    {count}
                </Badge>
            )}
        </div>
    )
}

// A minimal presence indicator next to a label:
<Badge dot color="success">Online</Badge>
```

## switch

```tsx
import { useState } from "react"
import { Switch } from "@/components/ui/switch"

export function Example() {
    const [checked, setChecked] = useState(false)

    return (
        <Switch
            color="primary"
            label="Push notifications"
            helperText="Get notified about replies and mentions"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
        />
    )
}
```

## breadcrumbs

```tsx
import { Home } from "lucide-react"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"

export function Example() {
    return (
        <Breadcrumbs
            items={[
                { label: "Home", href: "/", icon: Home },
                { label: "Components", href: "/components" },
                { label: "Button" },
            ]}
        />
    )
}
```

## date-picker

```tsx
import { DatePicker } from "@/components/ui/date-picker"

export function Example() {
    return (
        <DatePicker
            defaultValue={new Date()}
            onChange={(date) => console.log(date)}
        />
    )
}
```

```tsx
import { DateRangePicker } from "@/components/ui/date-range-picker"

export function Example() {
    return (
        <DateRangePicker
            onChange={(range) => console.log(range.start, range.end)}
        />
    )
}
```

## progress

```tsx
import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"

export function Example() {
    const [value, setValue] = useState(0)

    useEffect(() => {
        const id = setInterval(() => setValue((v) => Math.min(100, v + 10)), 300)
        return () => clearInterval(id)
    }, [])

    return (
        <Progress
            value={value}
            label="Uploading photo.jpg"
            helperText={value < 100 ? "Uploading…" : "Done"}
        />
    )
}
```

## spinner

```tsx
import { Spinner } from "@/components/ui/spinner"

export function SaveButton() {
    const [loading, setLoading] = useState(false)

    return (
        <button disabled={loading} onClick={() => setLoading(true)}>
            {loading && <Spinner size="sm" className="text-white" label="" />}
            {loading ? "Saving…" : "Save changes"}
        </button>
    )
}
```

## uploader

```tsx
import { Uploader } from "@/components/ui/uploader"

export function Example() {
    return <Uploader maxSizeBytes={5 * 1024 * 1024} multiple />
}
```
