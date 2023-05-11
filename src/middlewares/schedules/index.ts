import ensureRealEstateIsNotBooked from './ensureRealEstateIsNotBooked.middleware';
import ensureUserDoesntHaveASchedule from './ensureUserDoesntHaveASchedule.middleware';
import ensureScheduleisDuringBusinessDaysAndHours from './ensureScheduleIsDuringBusinessDaysAndHours.middleware';
import ensureDateIsInTheFuture from './ensureDateIsInTheFuture.middleware';

export const schedulesMiddlewares = {
  ensureRealEstateIsNotBooked,
  ensureUserDoesntHaveASchedule,
  ensureScheduleisDuringBusinessDaysAndHours,
  ensureDateIsInTheFuture
}