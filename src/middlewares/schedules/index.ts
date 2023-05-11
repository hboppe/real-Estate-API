import ensureRealEstateIsNotBooked from './ensureRealEstateIsNotBooked.middleware';
import ensureUserDoesntHaveASchedule from './ensureUserDoesntHaveASchedule.middleware';
import ensureScheduleisDuringBusinessDaysAndHours from './ensureScheduleIsDuringBusinessDaysAndHours.middleware';

export const schedulesMiddlewares = {
  ensureRealEstateIsNotBooked,
  ensureUserDoesntHaveASchedule,
  ensureScheduleisDuringBusinessDaysAndHours
}