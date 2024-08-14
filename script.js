const data = {
  nodes: [
    // Authentication Fields
    { id: "auth_user_id", group: "Authentication", label: "user_id: UUID" },
    { id: "auth_username", group: "Authentication", label: "username: String" },
    { id: "auth_email", group: "Authentication", label: "email: String" },
    {
      id: "auth_phone_number",
      group: "Authentication",
      label: "phone_number: String",
    },
    {
      id: "auth_password_hash",
      group: "Authentication",
      label: "password_hash: String",
    },
    { id: "auth_status", group: "Authentication", label: "status: String" },
    {
      id: "auth_created_at",
      group: "Authentication",
      label: "created_at: DateTime",
    },
    {
      id: "auth_jalali_created_at",
      group: "Authentication",
      label: "jalali_created_at: DateTime",
    },
    {
      id: "auth_updated_at",
      group: "Authentication",
      label: "updated_at: DateTime",
    },
    {
      id: "auth_jalali_updated_at",
      group: "Authentication",
      label: "jalali_updated_at: DateTime",
    },

    // User Profile Fields
    { id: "user_profile_id", group: "User", label: "profile_id: UUID" },
    { id: "user_auth_user_id", group: "User", label: "user_id: UUID" },
    { id: "user_first_name", group: "User", label: "first_name: String" },
    { id: "user_last_name", group: "User", label: "last_name: String" },
    { id: "user_phone_number", group: "User", label: "phone: String" },
    { id: "user_birthdate", group: "User", label: "birthdate: DateTime" },
    {
      id: "user_jalali_birthdate",
      group: "User",
      label: "jalali_birthdate: DateTime",
    },
    { id: "user_address", group: "User", label: "address: String" },
    { id: "user_preferences", group: "User", label: "preferences: JSON" },
    { id: "user_subscription", group: "User", label: "subscription: JSON" },
    {
      id: "user_profile_picture_url",
      group: "User",
      label: "profile_picture_url: String",
    },
    {
      id: "user_profile_created_at",
      group: "User",
      label: "created_at: DateTime",
    },
    {
      id: "user_profile_jalali_created_at",
      group: "User",
      label: "jalali_created_at: DateTime",
    },
    {
      id: "user_profile_updated_at",
      group: "User",
      label: "updated_at: DateTime",
    },
    {
      id: "user_profile_jalali_updated_at",
      group: "User",
      label: "jalali_updated_at: DateTime",
    },

    // Service Fields
    { id: "service_id", group: "Service", label: "service_id: UUID" }, // KEY
    { id: "service_provider_id", group: "Service", label: "provider_id: UUID" },
    { id: "service_name", group: "Service", label: "service_name: String" },
    { id: "service_type", group: "Service", label: "service_type: String" },
    {
      id: "service_description",
      group: "Service",
      label: "description: String",
    },
    { id: "service_duration", group: "Service", label: "duration: Integer" },
    { id: "service_price", group: "Service", label: "price: Decimal" },
    { id: "service_currency", group: "Service", label: "currency: String" },
    { id: "service_location", group: "Service", label: "location: String" },
    {
      id: "service_image_url",
      group: "Service",
      label: "service_image_url: String",
    },
    {
      id: "service_created_at",
      group: "Service",
      label: "created_at: DateTime",
    },
    {
      id: "service_jalali_created_at",
      group: "Service",
      label: "jalali_created_at: DateTime",
    },
    {
      id: "service_updated_at",
      group: "Service",
      label: "updated_at: DateTime",
    },
    {
      id: "service_jalali_updated_at",
      group: "Service",
      label: "jalali_updated_at: DateTime",
    },
    {
      id: "service_available_slots",
      group: "Service",
      label: "available_slots: DateTime[]",
    },
    {
      id: "service_jalali_available_slots",
      group: "Service",
      label: "jalali_available_slots: DateTime[]",
    },

    // Provider Fields
    { id: "provider_id", group: "Provider", label: "provider_id: UUID" }, // KEY
    { id: "provider_name", group: "Provider", label: "provider_name: String" },
    {
      id: "provider_contact_info",
      group: "Provider",
      label: "contact_info: JSON",
    },
    { id: "provider_rating", group: "Provider", label: "rating: Decimal" },
    { id: "provider_reviews", group: "Provider", label: "reviews: JSON" },
    {
      id: "provider_created_at",
      group: "Provider",
      label: "created_at: DateTime",
    },
    {
      id: "provider_jalali_created_at",
      group: "Provider",
      label: "jalali_created_at: DateTime",
    },
    {
      id: "provider_updated_at",
      group: "Provider",
      label: "updated_at: DateTime",
    },
    {
      id: "provider_jalali_updated_at",
      group: "Provider",
      label: "jalali_updated_at: DateTime",
    },

    // Booking Fields
    { id: "booking_id", group: "Booking", label: "booking_id: UUID" },
    { id: "booking_user_id", group: "Booking", label: "user_id: UUID" },
    { id: "booking_service_id", group: "Booking", label: "service_id: UUID" },
    { id: "booking_provider_id", group: "Booking", label: "provider_id: UUID" },
    {
      id: "booking_start_time",
      group: "Booking",
      label: "start_time: DateTime",
    },
    {
      id: "booking_jalali_start_time",
      group: "Booking",
      label: "jalali_start_time: DateTime",
    },
    { id: "booking_end_time", group: "Booking", label: "end_time: DateTime" },
    {
      id: "booking_jalali_end_time",
      group: "Booking",
      label: "jalali_end_time: DateTime",
    },
    {
      id: "booking_price_final",
      group: "Booking",
      label: "price_final: Decimal",
    },
    { id: "booking_currency", group: "Booking", label: "currency: String" },
    { id: "booking_status", group: "Booking", label: "booking_status: String" },
    {
      id: "booking_cancellation_reason",
      group: "Booking",
      label: "cancellation_reason: String",
    },
    { id: "booking_notes", group: "Booking", label: "notes: String" },
    { id: "booking_payment_id", group: "Booking", label: "payment_id: UUID" },
    {
      id: "booking_created_at",
      group: "Booking",
      label: "created_at: DateTime",
    },
    {
      id: "booking_jalali_created_at",
      group: "Booking",
      label: "jalali_created_at: DateTime",
    },
    {
      id: "booking_updated_at",
      group: "Booking",
      label: "updated_at: DateTime",
    },
    {
      id: "booking_jalali_updated_at",
      group: "Booking",
      label: "jalali_updated_at: DateTime",
    },

    // Payment Fields
    { id: "payment_id", group: "Payment", label: "payment_id: UUID" }, // KEY
    { id: "payment_booking_id", group: "Payment", label: "booking_id: UUID" },
    { id: "payment_user_id", group: "Payment", label: "user_id: UUID" },
    { id: "payment_amount", group: "Payment", label: "amount: Decimal" },
    { id: "payment_currency", group: "Payment", label: "currency: String" },
    { id: "payment_method", group: "Payment", label: "payment_method: String" },
    {
      id: "payment_transaction_id",
      group: "Payment",
      label: "transaction_id: String",
    },
    { id: "payment_status", group: "Payment", label: "payment_status: String" },
    { id: "payment_timestamp", group: "Payment", label: "timestamp: DateTime" },
    {
      id: "payment_jalali_timestamp",
      group: "Payment",
      label: "jalali_timestamp: DateTime",
    },
    {
      id: "payment_receipt_url",
      group: "Payment",
      label: "receipt_url: String",
    },
    {
      id: "payment_created_at",
      group: "Payment",
      label: "created_at: DateTime",
    },
    {
      id: "payment_jalali_created_at",
      group: "Payment",
      label: "jalali_created_at: DateTime",
    },
    {
      id: "payment_updated_at",
      group: "Payment",
      label: "updated_at: DateTime",
    },
    {
      id: "payment_jalali_updated_at",
      group: "Payment",
      label: "jalali_updated_at: DateTime",
    },

    // Notification Fields
    {
      id: "notification_id",
      group: "Notification",
      label: "notification_id: UUID",
    },
    {
      id: "notification_user_id",
      group: "Notification",
      label: "user_id: UUID",
    },
    { id: "notification_type", group: "Notification", label: "type: String" },
    {
      id: "notification_message",
      group: "Notification",
      label: "message: String",
    },
    { id: "notification_read", group: "Notification", label: "read: Boolean" },
    {
      id: "notification_timestamp",
      group: "Notification",
      label: "timestamp: DateTime",
    },
    {
      id: "notification_jalali_timestamp",
      group: "Notification",
      label: "jalali_timestamp: DateTime",
    },

    // Feedback Fields
    { id: "feedback_id", group: "Feedback", label: "feedback_id: UUID" }, // KEY
    { id: "feedback_user_id", group: "Feedback", label: "user_id: UUID" },
    { id: "feedback_service_id", group: "Feedback", label: "service_id: UUID" },
    {
      id: "feedback_provider_id",
      group: "Feedback",
      label: "provider_id: UUID",
    },
    { id: "feedback_rating", group: "Feedback", label: "rating: Integer" },
    { id: "feedback_comment", group: "Feedback", label: "comment: String" },
    {
      id: "feedback_created_at",
      group: "Feedback",
      label: "created_at: DateTime",
    },
    {
      id: "feedback_jalali_created_at",
      group: "Feedback",
      label: "jalali_created_at: DateTime",
    },
    {
      id: "feedback_updated_at",
      group: "Feedback",
      label: "updated_at: DateTime",
    },
    {
      id: "feedback_jalali_updated_at",
      group: "Feedback",
      label: "jalali_updated_at: DateTime",
    },
  ],
  links: [
    // Relationships for Authentication Fields
    { source: "auth_user_id", target: "auth_username", value: 1 },
    { source: "auth_user_id", target: "auth_email", value: 1 },
    { source: "auth_user_id", target: "auth_phone_number", value: 1 },
    { source: "auth_user_id", target: "auth_password_hash", value: 1 },
    { source: "auth_user_id", target: "auth_status", value: 1 },
    { source: "auth_user_id", target: "auth_created_at", value: 1 },
    { source: "auth_user_id", target: "auth_jalali_created_at", value: 1 },
    { source: "auth_user_id", target: "auth_updated_at", value: 1 },
    { source: "auth_user_id", target: "auth_jalali_updated_at", value: 1 },

    // Relationship between Authentication and User Profile
    { source: "auth_user_id", target: "user_auth_user_id", value: 1 }, // Authentication isolated to profile only

    // Relationships for User Profile Fields
    { source: "user_profile_id", target: "user_auth_user_id", value: 1 },
    { source: "user_profile_id", target: "user_first_name", value: 1 },
    { source: "user_profile_id", target: "user_last_name", value: 1 },
    { source: "user_profile_id", target: "user_birthdate", value: 1 },
    { source: "user_profile_id", target: "user_phone_number", value: 1 },
    { source: "user_profile_id", target: "user_jalali_birthdate", value: 1 },
    { source: "user_profile_id", target: "user_address", value: 1 },
    { source: "user_profile_id", target: "user_preferences", value: 1 },
    { source: "user_profile_id", target: "user_subscription", value: 1 },
    { source: "user_profile_id", target: "user_profile_picture_url", value: 1 },
    { source: "user_profile_id", target: "user_profile_created_at", value: 1 },
    {
      source: "user_profile_id",
      target: "user_profile_jalali_created_at",
      value: 1,
    },
    { source: "user_profile_id", target: "user_profile_updated_at", value: 1 },
    {
      source: "user_profile_id",
      target: "user_profile_jalali_updated_at",
      value: 1,
    },

    // Relationships for User Profile with other services
    { source: "user_profile_id", target: "notification_user_id", value: 1 },
    { source: "user_profile_id", target: "feedback_user_id", value: 1 },
    { source: "user_profile_id", target: "booking_user_id", value: 1 },
    { source: "user_profile_id", target: "payment_user_id", value: 1 },

    // Relationships for Service
    { source: "service_id", target: "service_provider_id", value: 1 },
    { source: "service_id", target: "service_name", value: 1 },
    { source: "service_id", target: "service_type", value: 1 },
    { source: "service_id", target: "service_description", value: 1 },
    { source: "service_id", target: "service_duration", value: 1 },
    { source: "service_id", target: "service_price", value: 1 },
    { source: "service_id", target: "service_currency", value: 1 },
    { source: "service_id", target: "service_location", value: 1 },
    { source: "service_id", target: "service_image_url", value: 1 },
    { source: "service_id", target: "service_created_at", value: 1 },
    { source: "service_id", target: "service_jalali_created_at", value: 1 },
    { source: "service_id", target: "service_updated_at", value: 1 },
    { source: "service_id", target: "service_jalali_updated_at", value: 1 },
    { source: "service_id", target: "service_available_slots", value: 1 },
    {
      source: "service_id",
      target: "service_jalali_available_slots",
      value: 1,
    },

    // Relationships for Provider
    { source: "provider_id", target: "provider_name", value: 1 },
    { source: "provider_id", target: "provider_contact_info", value: 1 },
    { source: "provider_id", target: "provider_rating", value: 1 },
    { source: "provider_id", target: "provider_reviews", value: 1 },
    { source: "provider_id", target: "provider_created_at", value: 1 },
    { source: "provider_id", target: "provider_jalali_created_at", value: 1 },
    { source: "provider_id", target: "provider_updated_at", value: 1 },
    { source: "provider_id", target: "provider_jalali_updated_at", value: 1 },

    // Cross relationships for Service
    { source: "service_provider_id", target: "provider_id", value: 1 },

    // Relationships for Booking
    { source: "booking_id", target: "booking_user_id", value: 1 },
    { source: "booking_id", target: "booking_service_id", value: 1 },
    { source: "booking_id", target: "booking_provider_id", value: 1 },
    { source: "booking_id", target: "booking_start_time", value: 1 },
    { source: "booking_id", target: "booking_jalali_start_time", value: 1 },
    { source: "booking_id", target: "booking_end_time", value: 1 },
    { source: "booking_id", target: "booking_jalali_end_time", value: 1 },
    { source: "booking_id", target: "booking_price_final", value: 1 },
    { source: "booking_id", target: "booking_currency", value: 1 },
    { source: "booking_id", target: "booking_status", value: 1 },
    { source: "booking_id", target: "booking_cancellation_reason", value: 1 },
    { source: "booking_id", target: "booking_notes", value: 1 },
    { source: "booking_id", target: "booking_payment_id", value: 1 },
    { source: "booking_id", target: "booking_created_at", value: 1 },
    { source: "booking_id", target: "booking_jalali_created_at", value: 1 },
    { source: "booking_id", target: "booking_updated_at", value: 1 },
    { source: "booking_id", target: "booking_jalali_updated_at", value: 1 },

    // Cross relationships for booking
    { source: "booking_provider_id", target: "provider_id", value: 1 },
    { source: "booking_service_id", target: "service_id", value: 1 },

    // Relationships for Payment
    { source: "payment_id", target: "payment_booking_id", value: 1 },
    { source: "payment_id", target: "payment_user_id", value: 1 },
    { source: "payment_id", target: "payment_amount", value: 1 },
    { source: "payment_id", target: "payment_currency", value: 1 },
    { source: "payment_id", target: "payment_method", value: 1 },
    { source: "payment_id", target: "payment_transaction_id", value: 1 },
    { source: "payment_id", target: "payment_status", value: 1 },
    { source: "payment_id", target: "payment_timestamp", value: 1 },
    { source: "payment_id", target: "payment_jalali_timestamp", value: 1 },
    { source: "payment_id", target: "payment_receipt_url", value: 1 },
    { source: "payment_id", target: "payment_created_at", value: 1 },
    { source: "payment_id", target: "payment_jalali_created_at", value: 1 },
    { source: "payment_id", target: "payment_updated_at", value: 1 },
    { source: "payment_id", target: "payment_jalali_updated_at", value: 1 },

    // Relationships for Notification
    { source: "notification_id", target: "notification_user_id", value: 1 },
    { source: "notification_id", target: "notification_type", value: 1 },
    { source: "notification_id", target: "notification_message", value: 1 },
    { source: "notification_id", target: "notification_read", value: 1 },
    { source: "notification_id", target: "notification_timestamp", value: 1 },
    {
      source: "notification_id",
      target: "notification_jalali_timestamp",
      value: 1,
    },

    // Relationships for Feedback
    { source: "feedback_id", target: "feedback_user_id", value: 1 },
    { source: "feedback_id", target: "feedback_service_id", value: 1 },
    { source: "feedback_id", target: "feedback_provider_id", value: 1 },
    { source: "feedback_id", target: "feedback_rating", value: 1 },
    { source: "feedback_id", target: "feedback_comment", value: 1 },
    { source: "feedback_id", target: "feedback_created_at", value: 1 },
    { source: "feedback_id", target: "feedback_jalali_created_at", value: 1 },
    { source: "feedback_id", target: "feedback_updated_at", value: 1 },
    { source: "feedback_id", target: "feedback_jalali_updated_at", value: 1 },
  ],
};
const container = document.getElementById("chart");

// Set dynamic width and height
const width = container.clientWidth;
const height = container.clientHeight;

const translationMapping = {
  Authentication: "احراز هویت",
  User: "کاربر",
  Service: "خدمت",
  Provider: "ارائه‌دهنده",
  Booking: "رزرو",
  Payment: "پرداخت",
  Notification: "اعلان",
  Feedback: "بازخورد",
};

const svg = d3
  .select("#chart")
  .append("svg")
  .attr("width", "100%")
  .attr("height", "100%")
  .attr("viewBox", `0 0 ${width} ${height}`)
  .attr("preserveAspectRatio", "xMidYMid meet")
  .call(
    d3.zoom().on("zoom", function (event) {
      svg.attr("transform", event.transform);
    })
  )
  .append("g"); // Add a group element to apply zoom transformations

// Adjust force layout to fit within the viewBox
const simulation = d3
  .forceSimulation(data.nodes)
  .force(
    "link",
    d3
      .forceLink(data.links)
      .id((d) => d.id)
      .distance(150)
  )
  .force("charge", d3.forceManyBody().strength(-200))
  .force("center", d3.forceCenter(width / 2, height / 2))
  .force("x", d3.forceX(width / 2))
  .force("y", d3.forceY(height / 2));

const link = svg
  .append("g")
  .attr("class", "links")
  .selectAll("line")
  .data(data.links)
  .enter()
  .append("line")
  .attr("stroke-width", (d) => Math.sqrt(d.value))
  .style("stroke", "#999")
  .style("stroke-opacity", "0.6");

const node = svg
  .append("g")
  .attr("class", "nodes")
  .selectAll("circle")
  .data(data.nodes)
  .enter()
  .append("circle")
  .attr("r", 8)
  .attr("fill", (d) => color(d.group))
  .call(
    d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended)
  )
  .on("mouseover", function (event, d) {
    d3.select(this).attr("r", 12); // Increase node size on hover
    labels
      .filter((label) => label.id === d.id)
      .attr("font-size", "14px") // Increase label size on hover
      .attr("font-weight", "bold") // Make the font bold
      .text((label) => `${translationMapping[d.group]}: ${label.label}`); // Translate to Farsi
  })
  .on("mouseout", function (event, d) {
    d3.select(this).attr("r", 8); // Reset node size
    labels
      .filter((label) => label.id === d.id)
      .attr("font-size", "10px") // Reset label size
      .attr("font-weight", "normal") // Reset font weight
      .text((label) => `${d.group}: ${label.label}`); // Reset to original text
  });

const labels = svg
  .append("g")
  .attr("class", "labels")
  .selectAll("text")
  .data(data.nodes)
  .enter()
  .append("text")
  .attr("dy", -10) // position the label above the node
  .attr("text-anchor", "middle")
  .attr("font-size", "10px")
  .attr("fill", "#333")
  .text((d) => `${d.group}: ${d.label}`);

simulation.on("tick", () => {
  link
    .attr("x1", (d) => d.source.x)
    .attr("y1", (d) => d.source.y)
    .attr("x2", (d) => d.target.x)
    .attr("y2", (d) => d.target.y);

  node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

  labels.attr("x", (d) => d.x).attr("y", (d) => d.y);
});

function dragstarted(event, d) {
  if (!event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(event, d) {
  d.fx = event.x;
  d.fy = event.y;
}

function dragended(event, d) {
  if (!event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

function color(group) {
  switch (group) {
    case "Authentication":
      return "#1f77b4";
    case "User":
      return "#ff7f0e";
    case "Service":
      return "#2ca02c";
    case "Provider":
      return "#d62728";
    case "Booking":
      return "#9467bd";
    case "Payment":
      return "#8c564b";
    case "Notification":
      return "#e377c2";
    case "Feedback":
      return "#17becf";
    default:
      return "#7f7f7f";
  }
}
