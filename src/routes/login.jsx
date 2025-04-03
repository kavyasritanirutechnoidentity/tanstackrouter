import { createFileRoute } from '@tanstack/react-router'
import LoginPage from '../pages/Loginpage'

export const Route = createFileRoute('/login')({
  component: LoginPage,
})


