---
layout: post
title: "Pooling To Parking"
start: "jan-2017"
end: "may-2017"
type: "minor"
permalink: "/ptp.html"
---
With families getting smaller and mushrooming total number of vehicles per
head, India is now facing a new problem of – lack of sufficient parking space.
Nowadays, even people having low incomes are able to own cars due to
which on any given working days nearly 40% of roads in India are just used
for parking purpose, exacerbating the situation even more woefully as cities in
India are already highly congested. The main aim of this project is to curb with
this growing menace.
On unfolding the situation more lucidly we saw that pooling of vehicles as well
as centralizing the parking system of the country could serve as a very easy-
to-use aid. To frame the entire system of pooling and parking we hereby
provide the whole database structure.
The entire category of clients consisting of parkers, poolers and pooling
service providers have been kept in one single entity called USERS. All
required information of clients such as user_id, name, contact_no, adhar_id,
gender, email_id, dl_no, vehicle_avail and share_allowed. Residential
address of the user has been recorded in an entity (which is dependent on
user’s entity) called R_ADDRESS containing street_no, landmark, city, state
and house_no. The VEHICLES owned by users have been represented as an
entity containing attributes – vehicle_id, vehicle_type, vehicle_no and
vehicle_model. Each vehicle must be owned by a user and there is a
possibility that a user can own multiple vehicles. To invoke the pooling system
more precisely no restriction has been imposed on the relationships among
users, there is just a ternary relationship called pool where user itself is
playing two roles as a REQUESTER and PROVIDER and third connected

entity is RIDE_INFO giving information such as ride_id, reqstr_id, providr_id
start_point, destination_point, req_time and current_status. Multiple
requesters can request a single provider and each combination must have
only one ride information. Since it’s very important to take care of the
preferences of users in order to find the required match entity called
PREFERECNCES containing gender, smoke, loud_music, open_shield and
pref_vehicle as an attributes has been included. The person who owns vehicle
parks in an area contained in an entity called SPACE having attributes
space_id, parkspace_id, 4wheel_occupancy, 2wheel-occupancy, plot_size,
and spot_avail. A space can be accommodated by multiple users but a user
can park in only one space. The space required here is owned by an entity
called PARKING_SPACE_PROVIDER giving all his personal information
such as parkspace_id, name, address, contact_no, email_id, aadhar_card
and a proof of holding the property say registration_id. Every space must be
owned by a space provider whereas a space provider can own multiple
spaces. The same space is operated by an OPERATOR whose attributes
would be his name, contact_no, aadhar_card and address. Every space need
not to have an operator. To provide a descriptive address of space an entity
called PLOT_DETAILS has been introduced whose attributes are plot_reg_id,
city, state, plot_no, street and zipcode. There would always be an area where
the given space would exist. Whenever the user seeks a request for parking
from then till actually using the provided space the entire information is being
stored in the entity PARKING_DETAILS where we store req_id, in_time,
out_time, and spot_no.
With this proposed model we have tried to invoke all kinds of cases from
which a user has to go through keeping the prime objective of reducing the
number of vehicles on the road.
