import portfolio from '@/config/portfolio.yaml'
import theme from '@/config/theme.yaml'
import seo from '@/config/seo.yaml'

export async function loadConfig() {
  // Simulate async load if needed, but imports are sync in bundle usually
  // Returning promise to match App.jsx expectation
  return {
    ...portfolio,
    theme,
    seo
  }
}