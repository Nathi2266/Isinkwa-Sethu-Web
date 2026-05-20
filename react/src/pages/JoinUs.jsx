import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import PageHero from '@/components/PageHero'
import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'
import {
  GENDER_OPTIONS,
  HOW_HEARD_OPTIONS,
  OCCUPATION_OPTIONS,
  OCCUPATION_OTHER_VALUE,
  SA_PROVINCES,
} from '@/config/join'
import { submitJoinRequest } from '@/lib/api'

const selectClassName =
  'flex h-11 w-full rounded-lg border border-gold/20 bg-input px-3 text-sm text-foreground transition-colors focus-visible:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/30'

const initialForm = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  gender: '',
  location: '',
  province: '',
  date_of_birth: '',
  occupation_choice: '',
  occupation_other: '',
  why_join: '',
  how_heard: '',
  accepted_terms: false,
}

function validateForm(form) {
  if (!form.first_name.trim()) return 'First name is required.'
  if (!form.last_name.trim()) return 'Last name is required.'
  if (!form.email.trim()) return 'Email is required.'
  if (!form.phone.trim()) return 'Phone number is required.'
  if (!form.gender) return 'Please select your gender.'
  if (!form.date_of_birth) return 'Date of birth is required.'
  if (!form.location.trim()) return 'Township / city is required.'
  if (!form.province) return 'Please select your province.'
  if (!form.occupation_choice) return 'Please select your occupation.'
  if (form.occupation_choice === OCCUPATION_OTHER_VALUE && !form.occupation_other.trim()) {
    return 'Please describe your occupation.'
  }
  if (form.why_join.trim().length < 10) {
    return 'Please tell us why you want to join (at least 10 characters).'
  }
  if (!form.how_heard) return 'Please tell us how you heard about us.'
  if (!form.accepted_terms) return 'You must accept the terms to submit your application.'
  return null
}

export default function JoinUs() {
  const [form, setForm] = useState(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function resolveOccupation() {
    if (form.occupation_choice === OCCUPATION_OTHER_VALUE) {
      return form.occupation_other.trim()
    }
    const match = OCCUPATION_OPTIONS.find((opt) => opt.value === form.occupation_choice)
    return match?.label ?? form.occupation_choice
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')

    const validationError = validateForm(form)
    if (validationError) {
      setError(validationError)
      return
    }

    setSubmitting(true)

    try {
      await submitJoinRequest({
        first_name: form.first_name.trim(),
        last_name: form.last_name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        gender: form.gender,
        location: form.location.trim(),
        province: form.province,
        date_of_birth: form.date_of_birth,
        occupation: resolveOccupation(),
        why_join: form.why_join.trim(),
        how_heard: form.how_heard,
        accepted_terms: true,
      })
      setSubmitted(true)
    } catch (err) {
      setError(err.message || 'Could not submit your application. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <>
        <PageHero title="Thank You" description="Your application has been received." />
        <SectionReveal className="section-padding">
          <div className="container-narrow max-w-xl">
            <FadeItem>
              <div className="glass rounded-2xl border border-gold/20 p-10 text-center">
                <CheckCircle2 className="mx-auto size-14 text-icon-accent" aria-hidden />
                <h2 className="mt-6 font-display text-2xl font-bold text-foreground">
                  We will get back to you as soon as possible
                </h2>
                <p className="mt-4 text-theme-muted">
                  Thank you for stepping forward to join the Isinkwa Sethu movement. Our team will
                  review your details and contact you with next steps.
                </p>
                <Button variant="gold" className="mt-8" asChild>
                  <Link to="/">Return home</Link>
                </Button>
              </div>
            </FadeItem>
          </div>
        </SectionReveal>
      </>
    )
  }

  return (
    <>
      <PageHero
        title="Join The Movement"
        description="Create your profile and take the first step toward community ownership."
      />
      <SectionReveal className="section-padding">
        <div className="container-narrow max-w-3xl">
          <FadeItem>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass space-y-8 rounded-2xl border border-gold/15 p-8 sm:p-10"
            >
              <div>
                <h2 className="font-display text-xl font-bold text-foreground">Personal details</h2>
                <p className="mt-2 text-sm text-theme-muted">
                  All fields are required. Tell us who you are so we can welcome you into the movement.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first_name">First name *</Label>
                  <Input
                    id="first_name"
                    required
                    autoComplete="given-name"
                    value={form.first_name}
                    onChange={(e) => updateField('first_name', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last_name">Last name *</Label>
                  <Input
                    id="last_name"
                    required
                    autoComplete="family-name"
                    value={form.last_name}
                    onChange={(e) => updateField('last_name', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+27 …"
                    value={form.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender *</Label>
                  <select
                    id="gender"
                    required
                    className={selectClassName}
                    value={form.gender}
                    onChange={(e) => updateField('gender', e.target.value)}
                  >
                    <option value="">Select gender</option>
                    {GENDER_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date_of_birth">Date of birth *</Label>
                  <Input
                    id="date_of_birth"
                    type="date"
                    required
                    value={form.date_of_birth}
                    onChange={(e) => updateField('date_of_birth', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="location">Township / City *</Label>
                  <Input
                    id="location"
                    required
                    placeholder="e.g. Soweto"
                    value={form.location}
                    onChange={(e) => updateField('location', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="province">Province *</Label>
                  <select
                    id="province"
                    required
                    className={selectClassName}
                    value={form.province}
                    onChange={(e) => updateField('province', e.target.value)}
                  >
                    <option value="">Select province</option>
                    {SA_PROVINCES.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="occupation_choice">Occupation *</Label>
                <select
                  id="occupation_choice"
                  required
                  className={selectClassName}
                  value={form.occupation_choice}
                  onChange={(e) => updateField('occupation_choice', e.target.value)}
                >
                  <option value="">Select occupation</option>
                  {OCCUPATION_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {form.occupation_choice === OCCUPATION_OTHER_VALUE ? (
                <div className="space-y-2">
                  <Label htmlFor="occupation_other">Your occupation *</Label>
                  <Input
                    id="occupation_other"
                    required
                    placeholder="Describe what you do"
                    value={form.occupation_other}
                    onChange={(e) => updateField('occupation_other', e.target.value)}
                  />
                </div>
              ) : null}

              <div className="border-t border-gold/10 pt-8">
                <h2 className="font-display text-xl font-bold text-foreground">Your story</h2>
                <p className="mt-2 text-sm text-theme-muted">
                  Help us understand why you want to be part of Isinkwa Sethu.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="why_join">Why do you want to join? *</Label>
                <Textarea
                  id="why_join"
                  required
                  minLength={10}
                  rows={5}
                  placeholder="Share your motivation for joining the movement…"
                  value={form.why_join}
                  onChange={(e) => updateField('why_join', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="how_heard">How did you hear about us? *</Label>
                <select
                  id="how_heard"
                  required
                  className={selectClassName}
                  value={form.how_heard}
                  onChange={(e) => updateField('how_heard', e.target.value)}
                >
                  <option value="">Select an option</option>
                  {HOW_HEARD_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <label className="flex items-start gap-3 text-sm text-theme-muted">
                <input
                  type="checkbox"
                  required
                  className="mt-1 size-4 rounded border-gold/30 accent-[var(--gold)]"
                  checked={form.accepted_terms}
                  onChange={(e) => updateField('accepted_terms', e.target.checked)}
                />
                <span>
                  I agree that my information may be used to contact me about joining the Isinkwa
                  Sethu movement and related community ownership programmes. *
                </span>
              </label>

              {error ? (
                <p
                  className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                  role="alert"
                >
                  {error}
                </p>
              ) : null}

              <Button type="submit" variant="gold" className="w-full sm:w-auto" disabled={submitting}>
                {submitting ? 'Submitting…' : 'Submit application'}
              </Button>
            </form>
          </FadeItem>
        </div>
      </SectionReveal>
    </>
  )
}
