import { sqliteTable, integer, text, uniqueIndex, index } from 'drizzle-orm/sqlite-core';
export const bookings = sqliteTable('bookings', {
 id: text('id').primaryKey(),
 name: text('name').notNull(), email: text('email').notNull(), phone: text('phone').notNull(),
 service: text('service').notNull(), stylist: text('stylist').notNull(),
 day: text('day').notNull(), time: text('time').notNull(), status: text('status').notNull().default('confirmed'),
 notes: text('notes').notNull().default(''), createdAt: text('created_at').notNull()
}, (t)=>[index('idx_bookings_stylist_day_time').on(t.stylist,t.day,t.time)]);

export const occupiedSlots = sqliteTable('occupied_slots', {id: integer('id').primaryKey({autoIncrement:true}),bookingId: text('booking_id').notNull(),stylist:text('stylist').notNull(),day:text('day').notNull(),time:text('time').notNull()}, t=>[uniqueIndex('idx_occupied_stylist_day_time').on(t.stylist,t.day,t.time)]);
