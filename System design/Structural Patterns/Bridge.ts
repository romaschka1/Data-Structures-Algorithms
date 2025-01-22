// Decouples an abstraction from its implementation so the two can vary independently.

// Abstraction
class RemoteControl {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  togglePower(): void {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }
}

// Refined Abstraction
class AdvancedRemoteControl extends RemoteControl {
  mute(): void {
    this.device.setVolume(0);
    console.log("Device is muted.");
  }
}

// Implementation Interface
interface Device {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
  setVolume(level: number): void;
}

// Concrete Implementation
class Television implements Device {
  private enabled: boolean = false;
  private volume: number = 50;

  isEnabled(): boolean {
    return this.enabled;
  }
  enable(): void {
    this.enabled = true;
    console.log("Television is now ON.");
  }
  disable(): void {
    this.enabled = false;
    console.log("Television is now OFF.");
  }
  setVolume(level: number): void {
    this.volume = level;
    console.log(`Television volume set to ${this.volume}.`);
  }
}

// Usage
const tv = new Television();
const remote = new AdvancedRemoteControl(tv);

remote.togglePower(); // Output: Television is now ON.
remote.mute();        // Output: Device is muted.
