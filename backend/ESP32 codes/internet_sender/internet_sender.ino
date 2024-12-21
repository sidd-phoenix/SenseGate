#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "Phoenix Galaxy";
const char* password = "sidd@1234";
const char* serverUrl = "https://sensegate.onrender.com";

void setup() {
    Serial.begin(115200);
    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.println("Connecting to Wi-Fi...");
    }
    Serial.println("Connected to Wi-Fi");
}

void loop() {
    if (WiFi.status() == WL_CONNECTED) {
        HTTPClient http;
        http.begin(serverUrl);
        http.addHeader("Content-Type", "application/json");

        // JSON payload
        String jsonPayload = "{\"temperature\":25.3,\"humidity\":60.4}";
        int httpResponseCode = http.POST(jsonPayload);

        if (httpResponseCode > 0) {
            String response = http.getString();
            Serial.println(response);
        } else {
            Serial.println("Error in HTTP request");
        }

        http.end();
    }

    delay(5000);  // Send data every 5 seconds
}
