// @flow
import type {FeatureFlags} from './feature-flags'
import {featureFlagsOverride} from '../local-debug.native'

let features = featureFlagsOverride && featureFlagsOverride.split(',')

const featureOn = (key: $Keys<FeatureFlags>) => features.includes(key)

const ff: FeatureFlags = {
  admin: __DEV__,
  avatarUploadsEnabled: true,
  chatIndexProfilingEnabled: false,
  explodingMessagesEnabled: true,
  foldersInProfileTab: false,
  moveOrCopy: false,
  newTeamBuildingForChat: false,
  newTeamBuildingForChatAllowMakeTeam: false,
  outOfDateBanner: false,
  plansEnabled: false,
  useSimpleMarkdown: false,
  walletsEnabled: false,
}

// load overrides
Object.keys(ff).forEach(k => {
  ff[k] = featureOn(k) || ff[k] || false
})

if (__DEV__) {
  console.log('Features', ff)
}

export default ff
