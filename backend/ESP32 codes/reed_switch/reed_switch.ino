#define REED_SWITCH_PIN 12 // Connect your reed switch to GPIO2
#define BUILTIN_LED_PIN 2 // Built-in LED is on GPIO2 for ESP32

void setup() {
  // Set up the reed switch pin as input
  pinMode(REED_SWITCH_PIN, INPUT_PULLUP);
  
  // Set up the built-in LED as output
  pinMode(BUILTIN_LED_PIN, OUTPUT);
  
  // Start the Serial Monitor
  Serial.begin(115200);
}

void loop() {
  // Read the reed switch state
  int reedSwitchState = digitalRead(REED_SWITCH_PIN);

  // If the reed switch is ON (magnet nearby)
  if (reedSwitchState == LOW) { // Assuming active LOW switch
    digitalWrite(BUILTIN_LED_PIN, HIGH); // Turn ON LED
    Serial.println("Reed switch ON, LED ON");
  } else {
    digitalWrite(BUILTIN_LED_PIN, LOW); // Turn OFF LED
    Serial.println("Reed switch OFF, LED OFF");
  }

  delay(100); // Small delay for stability
}
