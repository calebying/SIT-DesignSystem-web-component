# Login Page Template

Centered authentication card with email/password form, optional SSO button, and signup link. Adapted from shadcn's `login-01` block.

---

## When to use

- Sign-in and authentication pages
- Sign-up and account creation flows
- Forgot password and password reset pages
- OTP verification and multi-factor authentication
- Account recovery and identity verification

## Layout Structure

Full-height centered layout — card sits in the middle of the viewport on desktop, fills the screen on mobile.

```
┌───────────────────────────────────────┐
│                                       │
│          sit-masthead                │
│                                       │
│     ┌─────────────────────────┐       │
│     │  App name / logo        │       │
│     │  ─────────────────────  │       │
│     │  Welcome back           │       │
│     │  Sign in to continue    │       │
│     │                         │       │
│     │  [Email input         ] │       │
│     │  [Password input      ] │       │
│     │                         │       │
│     │  [     Sign in        ] │       │
│     │                         │       │
│     │  Don't have an account? │       │
│     └─────────────────────────┘       │
│                                       │
└───────────────────────────────────────┘
```

---

## Raw Content Link

To get the full HTML template, fetch and extract from the raw GitHub link below. See **[How to Extract HTML from Raw GitHub Links](../SKILL.md#how-to-extract-html-from-raw-github-links)** in SKILL.md for step-by-step instructions.


| File | GitHub Raw URL |
|------|---|

---

## Complete Template

The template follows this pattern:

```html
<sit-masthead></sit-masthead>

<sit-mainnav>
  <strong slot="brand">My Application</strong>
</sit-mainnav>

<!-- Centered layout with floating card -->
<div class="sit:flex sit:items-center sit:justify-center sit:bg-surface-default sit:min-h-screen sit:p-layout-md">
  <div class="sit:w-full sit:max-w-[420px]">

    <!-- Card container -->
    <div class="sit:bg-surface-raised sit:rounded-lg sit:border sit:border-muted sit:p-layout-md">

      <!-- Logo/Branding -->
      <div class="sit:text-center sit:mb-layout-lg">
        <h1 class="sit:text-display-sm sit:font-bold sit:text-default sit:mb-component-xs">Welcome back</h1>
        <p class="sit:text-sm sit:text-body-subtle">Sign in to your account to continue</p>
      </div>

      <!-- Form -->
      <form class="sit:space-y-component-md">

        <sit-input
          label="Email address"
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          hasFeedback
        ></sit-input>

        <sit-input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          required
          hasFeedback
        ></sit-input>

        <!-- Helper text -->
        <div class="sit:flex sit:justify-between sit:items-center sit:text-sm">
          <sit-checkbox label="Remember me" value="remember"></sit-checkbox>
          <sit-link><a href="#forgot" class="sit:text-primary-default">Forgot password?</a></sit-link>
        </div>

        <!-- Sign in button -->
        <sit-button variant="primary" type="submit" class="sit:w-full">
          Sign in
        </sit-button>

      </form>

      <!-- Divider -->
      <div class="sit:flex sit:items-center sit:gap-component-sm sit:my-layout-md">
        <div class="sit:flex-1 sit:h-px sit:bg-muted"></div>
        <span class="sit:text-xs sit:text-body-subtle">or</span>
        <div class="sit:flex-1 sit:h-px sit:bg-muted"></div>
      </div>

      <!-- Singpass button -->
      <sit-button variant="outline" class="sit:w-full sit:mb-layout-md">
        <sit-icon name="singpass" slot="leftIcon"></sit-icon>
        Sign in with Singpass
      </sit-button>

      <!-- Sign up link -->
      <p class="sit:text-center sit:text-sm sit:text-body-subtle">
        Don't have an account?
        <sit-link><a href="#signup" class="sit:text-primary-default sit:font-semibold">Sign up</a></sit-link>
      </p>

    </div>

  </div>
</div>

<sit-footer></sit-footer>
```

---

## Customisation notes

- **App branding**: Update logo path and application name at the top of the card
- **Card title & description**: Modify "Welcome back" and description text for your auth flow (sign up, forgot password, OTP verification, etc.)
- **Form fields**: Email and password are standard; adjust field types, labels, and add validation rules as needed
- **Submit button**: Change button text to match your action (Sign in, Register, Verify, etc.)
- **Helper links**: Update "Forgot password?" and "Sign up" links to your routes
- **SSO/Alternative auth**: Replace the Singpass button with your auth provider if different
- **Two-column variant**: For more visual impact, consider the two-column layout (left branded panel, right form); adapt colors using `sit:bg-primary-default` or other semantic colors
- **Validation feedback**: Use `hasFeedback` on inputs to show inline validation errors
