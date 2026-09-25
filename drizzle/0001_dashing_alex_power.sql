DROP INDEX `idx_bookings_stylist_day_time`;--> statement-breakpoint
CREATE INDEX `idx_bookings_stylist_day_time` ON `bookings` (`stylist`,`day`,`time`);