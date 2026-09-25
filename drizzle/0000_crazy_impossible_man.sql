CREATE TABLE `bookings` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`service` text NOT NULL,
	`stylist` text NOT NULL,
	`day` text NOT NULL,
	`time` text NOT NULL,
	`status` text DEFAULT 'confirmed' NOT NULL,
	`notes` text DEFAULT '' NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `idx_bookings_stylist_day_time` ON `bookings` (`stylist`,`day`,`time`);--> statement-breakpoint
CREATE TABLE `occupied_slots` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`booking_id` text NOT NULL,
	`stylist` text NOT NULL,
	`day` text NOT NULL,
	`time` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `idx_occupied_stylist_day_time` ON `occupied_slots` (`stylist`,`day`,`time`);