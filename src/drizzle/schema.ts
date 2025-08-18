
import * as userSchema from "./schema/user";
import * as organizationSchema from "./schema/organization";
import * as jobListingSchema from "./schema/jobListing";
import * as userResumeSchema from "./schema/userResume";
import * as userNotificationSettingsSchema from "./schema/userNotificationSettings";
import * as jobListingApplicationSchema from "./schema/jobListingApplication";
import * as organizationUserSettingsSchema from "./schema/organizationUserSettings";

export const schema = {
  ...userSchema,
  ...organizationSchema,
  ...jobListingSchema,
  ...userResumeSchema,
  ...userNotificationSettingsSchema,
  ...jobListingApplicationSchema,
  ...organizationUserSettingsSchema,
};